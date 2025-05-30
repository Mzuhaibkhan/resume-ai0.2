'use client';

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

type GridBackgroundProps = {
  theme: "dark" | "light";  // Expect theme as prop
};

const GridBackground = ({ theme }: GridBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridRef = useRef<HTMLCanvasElement | null>(null);

  // Effect for physics engine & animation (run once)
  useEffect(() => {
    const { Engine, World, Bodies, Body, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const shapeColors = [
      "#49DD9C", "#058764", "#206D8A", "#DAD28B", "#2DE09A",
      "#FF9F1C", "#2EC4B6", "#E71D36", "#0B7A7C", "#8338EC",
      "#3E2738","#C5DDD3","#36D9D8","#09556E","#89BDCF","#68D680","#E7B20C",
      "#4493A1","#3AEABF"
    ];
    class Shape {
      body: Matter.Body;
      color: string;

      constructor(x: number, y: number, size: number, type: string) {
        this.color = shapeColors[Math.floor(Math.random() * shapeColors.length)];
        const options = { restitution: 0.9, frictionAir: 0.02 };
        if (type === 'circle') {
          this.body = Bodies.circle(x, y, size / 2, options);
        } else if (type === 'rectangle') {
          this.body = Bodies.rectangle(x, y, size * 1.5, size, options);
        } else if (type === 'triangle') {
          this.body = Bodies.polygon(x, y, 3, size, options);
        } else {
          this.body = Bodies.rectangle(x, y, size, size, options);
        }
        Body.setVelocity(this.body, {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        });
        World.add(world, this.body);
      }

      draw() {
        const vertices = this.body.vertices;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let i = 1; i < vertices.length; i++) {
          ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();
        ctx.fill();
      }
    }

    const shapes: Shape[] = [];
    const shapeTypes = ['square', 'circle', 'rectangle', 'triangle'];

    function addRandomShape() {
      const size = Math.random() * 60 + 40;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const shape = new Shape(x, y, size, type);
      shapes.push(shape);
    }
    addRandomShape();
    addRandomShape();
    addRandomShape();
    for (let i = 0; i < 6; i++) {
      addRandomShape();
    }

    let added = 0;
    const maxToAdd = 5;
    function scheduleShapeAddition() {
      if (added >= maxToAdd) return;
      const timeout = Math.random() * 2000 + 1000;
      setTimeout(() => {
        addRandomShape();
        added++;
        scheduleShapeAddition();
      }, timeout);
    }
    scheduleShapeAddition();

    function animate() {
      Matter.Engine.update(engine, 1000 / 60);/*very very important*/
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((shape) => {
        shape.draw();
        const { x, y } = shape.body.position;
        const buffer = 10;
        if (x < -buffer) Body.setPosition(shape.body, { x: canvas.width + buffer, y });
        if (x > canvas.width + buffer) Body.setPosition(shape.body, { x: -buffer, y });
        if (y < -buffer) Body.setPosition(shape.body, { x, y: canvas.height + buffer });
        if (y > canvas.height + buffer) Body.setPosition(shape.body, { x, y: -buffer });
        Body.applyForce(shape.body, shape.body.position, {
          x: (Math.random() - 0.5) * 0.002,
          y: (Math.random() - 0.5) * 0.002,
        });
      });
      requestAnimationFrame(animate);
    }

    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    Engine.run(engine);
    animate();

    return () => {
      World.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  // Effect to draw grid on theme change
  useEffect(() => {
    const gridCanvas = gridRef.current!;
    const gridCtx = gridCanvas.getContext('2d')!;

    gridCanvas.width = window.innerWidth;
    gridCanvas.height = window.innerHeight;

    const gridSize = 80;
    gridCtx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

    const strokeColor = theme === "light" ? "rgba(255, 6, 6, 0.9)" : "rgba(128, 128, 128, 0.3)";
    gridCtx.strokeStyle = strokeColor;
    gridCtx.lineWidth = 1;

    for (let x = 0; x < gridCanvas.width; x += gridSize) {
      gridCtx.beginPath();
      gridCtx.moveTo(x, 0);
      gridCtx.lineTo(x, gridCanvas.height);
      gridCtx.stroke();
    }

    for (let y = 0; y < gridCanvas.height; y += gridSize) {
      gridCtx.beginPath();
      gridCtx.moveTo(0, y);
      gridCtx.lineTo(gridCanvas.width, y);
      gridCtx.stroke();
    }
  }, [theme]);

  return (
    <>
      <canvas
        ref={gridRef}
        style={{ position: 'absolute', top: 65, left: 0, zIndex: -2 }}
      />
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
    </>
  );
};

export default GridBackground;
