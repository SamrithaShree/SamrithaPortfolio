import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <SectionWrapper id="about" title="About Me">
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-stretch py-10">
        {/* Left: About Text */}
        <motion.div 
          className="lg:w-3/5 text-lg text-white/50 leading-relaxed space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants}>
            As a passionate Computer Science student, I thrive on unraveling complex problems and continuously expanding my technological horizons. My academic journey has equipped me with a strong foundation in core CS principles, including a deep understanding of{' '}
            <span className="text-cyan-400 font-medium">Data Structures</span>,{' '}
            <span className="text-cyan-400 font-medium">Operating Systems</span>,{' '}
            <span className="text-cyan-400 font-medium">Data Science</span> and{' '}
            <span className="text-cyan-400 font-medium">Machine Learning</span>.
          </motion.p>
          <motion.p variants={itemVariants}>
            My fascination with algorithms and efficient solutions led me to the world of competitive programming, where I've honed my problem-solving skills and developed a resilient approach to challenges. Beyond theoretical knowledge, I'm dedicated to translating concepts into tangible results by building and deploying foundational development projects.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="p-8 border-l-4 border-cyan-500/50 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-r-2xl italic text-sm md:text-base text-white/70 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            "Every line of code, every bug fixed, and every new technology explored fuels my enthusiasm for this dynamic field. I'm excited to continue my learning journey and make a meaningful impact through technology."
          </motion.div>
        </motion.div>

        {/* Right: Modern Education UI */}
        <div className="lg:w-2/5 w-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative perspective-1000 group"
          >
            {/* Background Glows */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative glass-card p-8 md:p-12 border-white/10 overflow-hidden shadow-2xl rounded-[2rem]">
              {/* Decorative Scan Line Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-line pointer-events-none" />
              
              <div className="flex items-start justify-between mb-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-space font-bold text-xs uppercase tracking-[0.3em]">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    ACADEMIC STATUS
                  </div>
                  <h3 className="text-3xl font-space font-bold text-white tracking-tight">Education</h3>
                </div>
                <GraduationCap className="text-cyan-500/30 w-12 h-12" strokeWidth={1} />
              </div>

              <div className="space-y-10 relative">
                {/* University Info */}
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-space font-bold text-white mb-2 leading-tight">
                    Shiv Nadar University Chennai
                  </h4>
                  <p className="text-cyan-400/80 font-medium text-sm md:text-base flex items-center gap-2">
                    <BookOpen size={16} />
                    B.Tech in AI & Data Science
                  </p>
                </div>

                {/* Modern Data Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 border-white/5 bg-white/5 space-y-1">
                    <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase font-space font-bold tracking-widest">
                      <Calendar size={12} />
                      Graduation
                    </div>
                    <p className="text-white font-space font-bold">May 2028</p>
                  </div>
                  <div className="glass-card p-4 border-white/5 bg-white/5 space-y-1">
                    <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase font-space font-bold tracking-widest">
                      <Award size={12} />
                      Performance
                    </div>
                    <p className="text-cyan-400 font-space font-bold">8.97 CGPA</p>
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-space font-bold uppercase tracking-widest text-white/30">
                    <span>Degree Progress</span>
                    <span className="text-cyan-400">Junior Year</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-600 to-violet-600 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating tech elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-600/5 rounded-full blur-3xl" />
            </div>

            {/* Floating Achievement Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 border-white/10 shadow-xl flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-space font-bold text-white/60 tracking-widest uppercase">Honors Track</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;