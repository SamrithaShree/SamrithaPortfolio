import React, { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { Github, Code2, Trophy, Flame } from 'lucide-react';
import Button from './Button';

const CompetitiveProgramming: React.FC = () => {
  const leetcodeProfileUrl = 'https://leetcode.com/samrithashree/';
  const githubProfileUrl = 'https://github.com/SamrithaShree';

  const [stats, setStats] = useState({
    totalSolved: 284,
    easySolved: 173,
    mediumSolved: 92,
    hardSolved: 19,
    streak: 39, // Streak is harder to fetch reliably via public API, keeping as baseline
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

  return (
    <SectionWrapper id="competitive-programming" title="Algorithm Mastery">
      <div className="text-center space-y-12 py-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-card p-8 border-white/5 group hover:border-cyan-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Code2 size={24} />
            </div>
            <h4 className="text-xs font-space font-bold text-white/30 uppercase tracking-widest mb-2">Total Solved</h4>
            <p className="text-4xl font-space font-bold text-white">
              {stats.loading ? '...' : `${stats.totalSolved}+`}
            </p>
          </div>

          <div className="glass-card p-8 border-white/5 group hover:border-violet-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Trophy size={24} />
            </div>
            <h4 className="text-xs font-space font-bold text-white/30 uppercase tracking-widest mb-2">Proficiency</h4>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-white/60">Easy: <span className="text-cyan-400">{stats.loading ? '...' : stats.easySolved}</span></p>
              <p className="text-sm font-medium text-white/60">Medium: <span className="text-violet-400">{stats.loading ? '...' : stats.mediumSolved}</span></p>
              <p className="text-sm font-medium text-white/60">Hard: <span className="text-rose-400">{stats.loading ? '...' : stats.hardSolved}</span></p>
            </div>
          </div>

          <div className="glass-card p-8 border-white/5 group hover:border-orange-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Flame size={24} />
            </div>
            <h4 className="text-xs font-space font-bold text-white/30 uppercase tracking-widest mb-2">Best Streak</h4>
            <p className="text-4xl font-space font-bold text-white">
              {stats.streak} Days
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button href={leetcodeProfileUrl} target="_blank" rel="noopener noreferrer" variant="primary">
            LeetCode Profile
          </Button>
          <Button href={githubProfileUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            <Github size={20} className="mr-2" /> GitHub Profile
          </Button>
        </div>

        {/* Heatmap Section */}
        <div className="max-w-4xl mx-auto mt-16 glass-card p-2 border-white/5 overflow-hidden group">
          <div className="p-8 border-b border-white/5">
            <h4 className="text-xl font-space font-bold text-white">Consistency Map</h4>
          </div>
          <div className="p-4 md:p-8 flex justify-center bg-white/5">
            <img 
              src="https://leetcard.jacoblin.cool/samrithashree?theme=dark&font=Ubuntu&ext=heatmap"
              alt="LeetCode Stats"
              className="w-full max-w-3xl rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed italic">
          "Focusing on fundamental data structures and techniques like Arrays, Stacks, Queues, and Recursion to build an optimized problem-solving mindset."
        </p>
      </div>
    </SectionWrapper>
  );
};

export default CompetitiveProgramming;