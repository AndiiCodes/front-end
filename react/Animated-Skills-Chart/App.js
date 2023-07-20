import React from 'react';
import './index.css';

const skillsData = [
  {
    title: 'HTML / HTML5 & CSS',
    percentage: 90,
  },
  // rest of the skills.. 
];

const SkillBar = ({ title, percentage }) => {
  const innerBarStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className="skill">
      <h3 className="skill__type">{title}</h3>
      <div className="skill__outer-bar">
        <div className="skill__inner-bar" style={innerBarStyle}></div>
      </div>
      <div className="skill__tooltip">{percentage}%</div>
    </div>
  );
};

const SkillsChart = ({ skills }) => {
  return (
    <div className="center-skills">
      <section className="skills-chart">
        {skills.map((skill, index) => (
          <SkillBar key={index} title={skill.title} percentage={skill.percentage} />
        ))}
      </section>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Skills</h1>
      <SkillsChart skills={skillsData} />
    </div>
  );
};

export default App;
