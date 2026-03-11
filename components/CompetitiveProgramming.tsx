import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Github, Code2, Trophy, Flame, Target, Zap, Activity, Info } from 'lucide-react';
import Button from './Button';

// --- Custom Heatmap Component ---
const LeetCodeCalendar: React.FC<{ username: string }> = ({ username }) => {
  const [calendarData, setCalendarData] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        // Using the most reliable endpoint for the alfa-leetcode-api
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
        const data = await response.json();
        
        if (data && data.submissionCalendar) {
          const rawCal = typeof data.submissionCalendar === 'string' 
            ? JSON.parse(data.submissionCalendar) 
            : data.submissionCalendar;
          setCalendarData(rawCal);
        }
      } catch (error) {
        console.error('Failed to fetch LeetCode calendar:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCalendar();
  }, [username]);

  // Generate grid data aligned to weeks (Sunday start)
  const { gridData, monthLabels, currentYear } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    
    // Start date: 364 days ago, adjusted to the previous Sunday
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);
    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() - 1);
    }

    const normalizedData: Record<string, number> = {};
    Object.entries(calendarData).forEach(([timestamp, count]) => {
      const date = new Date(parseInt(timestamp) * 1000);
      date.setHours(0, 0, 0, 0);
      normalizedData[date.getTime().toString()] = count;
    });

    const days = [];
    const monthLabels: { label: string; colIndex: number }[] = [];
    const curr = new Date(startDate);
    let colIndex = 0;

    while (curr <= today || days.length % 7 !== 0) {
      const date = new Date(curr);
      days.push({
        date,
        count: normalizedData[date.getTime().toString()] || 0,
      });

      if (days.length % 7 === 1) { // Start of a new column
        const month = date.toLocaleString('default', { month: 'short' });
        if (monthLabels.length === 0 || monthLabels[monthLabels.length - 1].label !== month) {
          monthLabels.push({ label: month, colIndex });
        }
        colIndex++;
      }
      curr.setDate(curr.getDate() + 1);
    }

    return { gridData: days, monthLabels, currentYear };
  }, [calendarData]);

  const getColor = (count: number) => {
    if (count === 0) return 'bg-white/5';
    if (count <= 2) return 'bg-cyan-900/40';
    if (count <= 5) return 'bg-cyan-700/60';
    if (count <= 10) return 'bg-cyan-500/80';
    return 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]';
  };

  if (loading) {
    return (
      <div className="w-full h-48 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-[10px] font-space font-bold text-cyan-400/50 uppercase tracking-widest">Initializing Data Sync...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Year & Header */}
      <div className="flex justify-between items-end px-2">
        <div className="flex flex-col">
          <span className="text-[10px] font-space font-bold text-cyan-400/40 uppercase tracking-widest">Current Cycle</span>
          <span className="text-2xl font-space font-bold text-white">{currentYear}</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[10px] font-space font-bold text-white/40 uppercase tracking-widest">Live Link Established</span>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[800px] flex flex-col gap-2 p-2">
          {/* Month Labels */}
          <div className="relative h-4 ml-10">
            {monthLabels.map((m, i) => (
              <div 
                key={i} 
                className="absolute text-[9px] font-space font-bold text-white/20 uppercase tracking-tighter"
                style={{ left: `${m.colIndex * 14.5}px` }}
              >
                {m.label}
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            {/* Day Labels */}
            <div className="flex flex-col justify-between text-[8px] font-space font-bold text-white/20 uppercase tracking-tighter h-[105px] py-1">
              <span>Sun</span>
              <span>Tue</span>
              <span>Thu</span>
              <span>Sat</span>
            </div>

            {/* Heatmap Grid */}
            <div className="grid grid-flow-col grid-rows-7 gap-1 h-[105px]">
              {gridData.map((day, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i % 7) * 0.05 + Math.floor(i / 7) * 0.005 }}
                  className={`w-[10px] h-[10px] md:w-3 md:h-3 rounded-[2px] ${getColor(day.count)} transition-all duration-300 hover:scale-150 hover:z-10 hover:border hover:border-white/30 cursor-pointer relative group/day`}
                >
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-midnight border border-white/10 rounded text-[9px] text-white whitespace-nowrap opacity-0 group-hover/day:opacity-100 pointer-events-none z-50 transition-opacity shadow-2xl">
                    {day.count} submissions • {day.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-[9px] font-space font-bold text-white/20 uppercase tracking-widest">
            <span>Less</span>
            {[0, 2, 5, 10, 15].map((val) => (
              <div key={val} className={`w-2.5 h-2.5 rounded-[1px] ${getColor(val)}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompetitiveProgramming: React.FC = () => {
  const leetcodeProfileUrl = 'https://leetcode.com/samrithashree/';
  const githubProfileUrl = 'https://github.com/SamrithaShree';

  const [stats, setStats] = useState({
    totalSolved: 284,
    easySolved: 173,
    mediumSolved: 92,
    hardSolved: 19,
    streak: 39,
    loading: true
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/samrithashree');
        const data = await response.json();
        
        if (data) {
          setStats(prev => ({
            ...prev,
            totalSolved: data.totalSolved || prev.totalSolved,
            easySolved: data.easySolved || prev.easySolved,
            mediumSolved: data.mediumSolved || prev.mediumSolved,
            hardSolved: data.hardSolved || prev.hardSolved,
            loading: false
          }));
        }
      } catch (error) {
        console.error('Failed to fetch LeetCode stats:', error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchStats();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <SectionWrapper id="competitive-programming" title="Algorithm Mastery">
      <div className="relative space-y-20 py-10">
        
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
        </div>

        {/* Stats Pulse Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Total Solved Card */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
            <div className="relative glass-card p-8 border-white/10 flex flex-col items-center text-center overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Code2 size={80} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Target size={28} />
              </div>
              <h4 className="text-[10px] font-space font-bold text-white/30 uppercase tracking-[0.3em] mb-2">Total Solved</h4>
              <div className="text-5xl font-space font-bold text-white mb-2">
                {stats.loading ? '...' : stats.totalSolved}
              </div>
              <div className="flex items-center gap-2 text-xs font-space font-bold text-cyan-400/60 uppercase tracking-widest">
                <Zap size={12} /> Global Rank Active
              </div>
            </div>
          </motion.div>

          {/* Proficiency Breakdown Card */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
            <div className="relative glass-card p-8 border-white/10 overflow-hidden">
              <h4 className="text-[10px] font-space font-bold text-white/30 uppercase tracking-[0.3em] mb-8 text-center">Proficiency Breakdown</h4>
              <div className="space-y-6">
                {[
                  { label: 'Easy', count: stats.easySolved, color: 'bg-cyan-400', total: 825 },
                  { label: 'Medium', count: stats.mediumSolved, color: 'bg-violet-500', total: 1715 },
                  { label: 'Hard', count: stats.hardSolved, color: 'bg-rose-500', total: 755 }
                ].map((level) => (
                  <div key={level.label} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-space font-bold text-white/60 uppercase tracking-widest">{level.label}</span>
                      <span className="text-sm font-space font-bold text-white">{stats.loading ? '...' : level.count}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(level.count / level.total) * 100}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full ${level.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Best Streak Card */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-rose-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
            <div className="relative glass-card p-8 border-white/10 flex flex-col items-center text-center overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Flame size={80} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-500 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                <Trophy size={28} />
              </div>
              <h4 className="text-[10px] font-space font-bold text-white/30 uppercase tracking-[0.3em] mb-2">Max Streak</h4>
              <div className="text-5xl font-space font-bold text-white mb-2">
                {stats.streak}
              </div>
              <div className="flex items-center gap-2 text-xs font-space font-bold text-orange-400/60 uppercase tracking-widest">
                <Activity size={12} /> Days Consecutive
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Custom Heatmap Terminal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-line z-20 pointer-events-none" />
          
          <div className="glass-card border-white/10 overflow-hidden shadow-2xl rounded-[2rem]">
            <div className="p-6 md:px-10 border-b border-white/5 bg-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h4 className="text-lg font-space font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  Consistency Map <Info size={14} className="text-white/20" />
                </h4>
              </div>
              <div className="flex gap-4">
                <Button href={leetcodeProfileUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-xs">
                  LeetCode Profile
                </Button>
                <Button href={githubProfileUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="px-5 py-2 text-xs">
                  <Github size={16} className="mr-2" /> GitHub
                </Button>
              </div>
            </div>
            
            <div className="p-6 md:p-12 bg-black/40 relative">
              {/* Rendering the Custom React Heatmap */}
              <LeetCodeCalendar username="samrithashree" />
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Insight Quote */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white/30 max-w-2xl mx-auto text-sm md:text-base text-center leading-relaxed italic font-space"
        >
          "Focusing on fundamental data structures and techniques like Arrays, Stacks, Queues, and Recursion to build an optimized problem-solving mindset."
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default CompetitiveProgramming;
