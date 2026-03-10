import React from 'react';
import SectionWrapper from './SectionWrapper';
import UniversityImage from '/images/University.jpg';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start py-10">
        {/* Left: About Text */}
        <div className="lg:w-3/5 text-lg text-white/50 leading-relaxed space-y-8">
          <p>
            As a passionate Computer Science student, I thrive on unraveling complex problems and continuously expanding my technological horizons. My academic journey has equipped me with a strong foundation in core CS principles, including a deep understanding of{' '}
            <span className="text-cyan-400 font-medium">Data Structures</span>,{' '}
            <span className="text-cyan-400 font-medium">Operating Systems</span>,{' '}
            <span className="text-cyan-400 font-medium">Data Science</span> and{' '}
            <span className="text-cyan-400 font-medium">Machine Learning</span>.
          </p>
          <p>
            My fascination with algorithms and efficient solutions led me to the world of competitive programming, where I've honed my problem-solving skills and developed a resilient approach to challenges. Beyond theoretical knowledge, I'm dedicated to translating concepts into tangible results by building and deploying foundational development projects.
          </p>
          <div className="p-6 border-l-2 border-cyan-500/30 bg-white/5 rounded-r-2xl italic text-sm">
            "Every line of code, every bug fixed, and every new technology explored fuels my enthusiasm for this dynamic field. I'm excited to continue my learning journey and make a meaningful impact through technology."
          </div>
        </div>

        {/* Right: Education Card */}
        <div className="lg:w-2/5 w-full glass-card p-10 border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all duration-700" />
          
          <h3 className="text-2xl font-space font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            Education
          </h3>

          <div className="flex flex-col items-center text-center">
            <div className="w-full h-40 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-6 shadow-2xl relative group-hover:scale-105 transition-transform duration-500">
              <img 
                src={UniversityImage} 
                alt="Shiv Nadar University Logo" 
                className="w-full h-full object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-space font-bold text-white">Shiv Nadar University Chennai</h4>
              <p className="text-cyan-400/80 font-medium text-sm tracking-wide">B.Tech in AI & Data Science</p>
              
              <div className="pt-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-space uppercase tracking-widest text-white/30">
                  <span>Graduation</span>
                  <span className="text-white/60">May 2028</span>
                </div>
                <div className="flex justify-between items-center text-xs font-space uppercase tracking-widest text-white/30">
                  <span>Current CGPA</span>
                  <span className="text-cyan-400 font-bold">8.97 / 10.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;