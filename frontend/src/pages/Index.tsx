
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Aurora from '@/components/ui/Aurora';
import ShinyText from "@/components/ui/ShinyText";
import GradientText from "@/components/ui/GradientText";
import { useEffect, useState } from "react";
import GridBackground from "@/components/ui/Gridbackground";
import Threads from "@/components/ui/threads";
import Particles from "@/components/ui/particles";



const Index = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pb-36 relative ">
        <GridBackground theme={theme} />
        {/*Sketch background*/}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-md z-1"/>
        <div className="container mx-auto px-4 py-20 ">
          <div className="max-w-3xl mx-auto text-center " style={{  letterSpacing: '0.3em' }}>

            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#3AEABF", "#88FDE9", "#22A6C1"]}
              animationSpeed={7}
              showBorder={false}
              className="text-4xl font-semibold pb-7"
              
            >
              Analyze Your <span style={{letterSpacing:'0.001em'}}>Resume</span> Using AI
            </GradientText>
            <div className="glass-container">
              <p className="text-x3 mb-8 " style={{fontFamily:'Poppins'  ,letterSpacing: '0.3em' }}>
                Get personalized feedback and recommendations to improve your resume
                and match your target job positions.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-900 px-8 py-6 text-lg backdrop-blur-sm"
              asChild
            >
              <Link to="/analyzer"><ShinyText text="Analyze Your Resume" disabled={false} speed={5} className='custom-class' /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 z-[-3]">
      
        <div className="container mx-auto px-4">
          <div style={{ width: '100%', position: 'relative' }}>
            <Threads />
          </div>
          <h2 className="text-3xl font-bold text-center mb-12 text-resume-primary dark:text-white">

            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-resume-primary dark:bg-gray-800 dark:border-t-resume-secondary">
              <CardContent className="pt-6 relative z-10">

                <div className="bg-resume-light dark:bg-gray-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-primary dark:text-white">1</span>
                </div>
                <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="z-0"
              />
                <h3 className="text-xl font-bold mb-2 dark:text-white backdrop-blur-sm">Upload Your Resume</h3>
                <p className="text-gray-600 dark:text-gray-300 backdrop-blur-sm ">
                  Upload your resume in PDF or DOCX format. Our AI will extract and process all the relevant information.
                </p>
              </CardContent>
              
            </Card>

            <Card className="border-t-4 border-t-resume-secondary dark:bg-gray-800 dark:border-t-resume-accent">
              <CardContent className="pt-6 relative z-10">
                <div className="bg-resume-light dark:bg-gray-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-secondary dark:text-white">2</span>
                </div>
                <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="z-0"
              />
                <h3 className="text-xl font-bold mb-2 dark:text-white backdrop-blur-sm">Select a Target Job</h3>
                
                <p className="text-gray-600 dark:text-gray-300 backdrop-blur-sm">
                  Choose from common job titles or get a general analysis. The AI will tailor its feedback to your career goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-resume-accent dark:bg-gray-800 dark:border-t-resume-primary">
              <CardContent className="pt-6 relative z-10">
                <div className="bg-resume-light dark:bg-gray-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-resume-accent dark:text-white">3</span>
                </div>
                <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="z-0"
              />
                <h3 className="text-xl font-bold mb-2 dark:text-white backdrop-blur-sm">Get Detailed Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300 backdrop-blur-sm">
                  Receive a comprehensive analysis with matched skills, missing skills, and personalized recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 z-[-2]">
        <div className="container mx-auto px-4 z-[-2]">
          <div className="max-w-3xl mx-auto text-center mb-12 z-[-2]">
            <h2 className="text-3xl font-bold mb-4 text-resume-primary dark:text-white">Stand Out From The Competition</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our AI-powered resume analyzer helps you optimize your resume for specific job positions
              and increase your chances of landing interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary">Match Job Requirements</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get feedback on how well your skills match specific job requirements and what you need to improve.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary">Highlight Key Skills</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Identify your strongest skills and learn how to emphasize them effectively on your resume.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary">Personalized Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get tailored advice on what skills to develop and how to improve your resume's effectiveness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-resume-primary rounded-full p-2 text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 dark:text-resume-secondary z-[-2]">Immediate Feedback</h3>
                <p className="text-gray-600 dark:text-gray-300 z-[-2]">
                  No more waiting for feedback. Get instant analysis powered by advanced AI technology.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 z-[-2]">
            <Button
              className="bg-resume-primary hover:bg-resume-primary/90 dark:bg-resume-secondary dark:hover:bg-resume-secondary/90 px-8 text-white"
              size="lg"
              asChild
            >
              <Link to="/analyzer">Try It Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
