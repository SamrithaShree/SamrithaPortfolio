import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Button from './Button';

const CompetitiveProgramming: React.FC = () => {
  // Customize your LeetCode profile URL and GitHub profile URL
  const leetcodeProfileUrl = 'https://leetcode.com/samrithashree/';
  const githubProfileUrl = 'https://github.com/SamrithaShree';

  return (
    <SectionWrapper id="competitive-programming" title="Competitive Programming">
      <div className="text-center space-y-8">

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 max-w-3xl mx-auto"
        >
          {/* Stats Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
            <h4 className="text-2xl font-semibold text-blue-400 mb-2">Total Problems</h4>
            <p className="text-4xl font-bold text-gray-100">219</p>
          </div>
          {/* Stats Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
            <h4 className="text-2xl font-semibold text-blue-400 mb-2">Difficulty Breakdown</h4>
            <p className="text-xl text-gray-100">Easy: 137</p>
            <p className="text-xl text-gray-100">Medium: 65</p>
            <p className="text-xl text-gray-100">Hard: 17</p>
          </div>
          {/* Stats Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
            <h4 className="text-2xl font-semibold text-blue-400 mb-2">Recent Streak</h4>
            <p className="text-4xl font-bold text-gray-100">39</p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <Button href={leetcodeProfileUrl} target="_blank" rel="noopener noreferrer" variant="primary">
            <SiLeetcode className="inline-block mr-2" /> View LeetCode Profile
          </Button>
          <Button href={githubProfileUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            <FaGithub className="inline-block mr-2" /> GitHub Profile
          </Button>
        </div>

        {/* Leetcode Heatmap-style Activity Chart Placeholder */}
        <div
          className="max-w-4xl mx-auto mt-16 p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700"
        >
          <h4 className="text-2xl font-semibold text-blue-400 mb-4">Leetcode Activity</h4>
          <div className="w-full flex justify-center mb-6">
            <img 
              src="https://leetcard.jacoblin.cool/samrithashree?theme=dark&font=Ubuntu&ext=heatmap"
              alt="LeetCode Stats"
              className="w-full max-w-3xl rounded-lg"
            />
          </div>
        </div>

        <p
          className="text-lg text-gray-400 mt-12"
        >
          My favorite problem types involve fundamental data structures and techniques like Arrays, Two Pointers, Stacks, Queues, Linked Lists, and Recursion. I enjoy the challenge of optimizing solutions through careful data structure selection and exploring both iterative and recursive implementations.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default CompetitiveProgramming;