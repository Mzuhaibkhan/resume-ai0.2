import React, { useEffect, useRef } from "react";

interface GridCanvasProps {
  gridSize?: number;
  theme?: "light" | "dark";
  lineColorLight?: string;
  lineColorDark?: string;
}

const GridCanvas: React.FC<GridCanvasProps> = ({
  gridSize = 81,
  theme = "light",
  lineColorLight = "rgba(128, 128, 128, 0.3)",
  lineColorDark = "rgba(128, 128, 128, 0.3)",
}) => {
  const gridRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawGrid = () => {
      const canvas = gridRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = theme === "light" ? lineColorLight : lineColorDark;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    drawGrid();
    window.addEventListener("resize", drawGrid);
    return () => window.removeEventListener("resize", drawGrid);
  }, [theme, gridSize, lineColorLight, lineColorDark]);

  return (
    <canvas
      ref={gridRef}
      style={{
        position: "absolute",
        top:623,
        left:4,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default GridCanvas;
