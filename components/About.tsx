import React from 'react';
import SectionWrapper from './SectionWrapper';
import UniversityImage from '/images/University.jpg';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* Left: About Text */}
        <div
          className="lg:w-2/3 text-lg text-gray-300 leading-relaxed space-y-6"
        >
          <p>
            As a passionate Computer Science student, I thrive on unraveling complex problems and continuously expanding my technological horizons. My academic journey has equipped me with a strong foundation in core CS principles, including a deep understanding of{' '}
            <span className="text-green-400 font-semibold">Data Structures</span>,{' '}
            <span className="text-green-400 font-semibold">Operating Systems</span>,{' '}
            <span className="text-green-400 font-semibold">Data Science</span>{' '}and{' '}
            <span className="text-green-400 font-semibold">Machine Learning</span>.
          </p>
          <p>
            My fascination with algorithms and efficient solutions led me to the world of competitive programming, where I've honed my problem-solving skills and developed a resilient approach to challenges. Beyond theoretical knowledge, I'm dedicated to translating concepts into tangible results by building and deploying foundational development projects.
          </p>
          <p>
            Every line of code, every bug fixed, and every new technology explored fuels my enthusiasm for this dynamic field. I'm excited to continue my learning journey, contribute to innovative projects, and make a meaningful impact through technology.
          </p>
        </div>

        {/* Right: Education Card */}
        <div
          className="lg:w-1/3 w-full bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700 flex flex-col items-center text-center"
        >
          <h3 className="text-3xl font-bold text-green-400 mb-4">Education</h3>
          <div className="w-40 h-30 mb-4 rounded-lg bg-white flex items-center justify-center p-3 shadow-md">
            <img 
              src={UniversityImage} 
              alt="Shiv Nadar University Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-xl font-semibold text-gray-100 mb-2">Shiv Nadar University Chennai</p>
          <p className="text-lg text-gray-300">Bachelor of Technology in Artificial Intelligence & Data Science</p>
          <p className="text-md text-gray-400 mt-1">Expected Graduation: May 2028</p>
          <p className="text-md text-gray-400 mt-1">CGPA: 8.97/10.0 </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;