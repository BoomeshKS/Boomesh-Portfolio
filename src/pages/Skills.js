import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="page skills">
      <h1>Skills <FaCode /></h1>
      <ul>
        <li><FaReact /> Full Stack Development: React.js, Node.js</li>
        <li><FaPython /> Programming Languages: Python, C, R</li>
      </ul>
    </div>
  );
};

export default Skills;
