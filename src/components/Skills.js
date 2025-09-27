// Skills.js
import React, { useState, useEffect } from 'react';
import './Skills.css';

const skillCategories = [
  {
    name: "Frontend Development",
    icon: "fas fa-code",
    skills: [
      { name: "JavaScript", level: 95, icon: "fab fa-js-square" },
      { name: "React", level: 90, icon: "fab fa-react" },
      { name: "Angular", level: 85, icon: "fab fa-angular" },
      { name: "HTML5", level: 95, icon: "fab fa-html5" },
      { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
      { name: "TypeScript", level: 80, icon: "fas fa-code" }
    ]
  },
  {
    name: "Backend Development",
    icon: "fas fa-server",
    skills: [
      { name: "Node.js", level: 88, icon: "fab fa-node-js" },
      { name: "Express.js", level: 85, icon: "fas fa-code" },
      { name: "MongoDB", level: 82, icon: "fas fa-database" },
      { name: "REST APIs", level: 90, icon: "fas fa-plug" },
      { name: "PostgreSQL", level: 75, icon: "fas fa-database" }
    ]
  },
  {
    name: "Tools & Technologies",
    icon: "fas fa-tools",
    skills: [
      { name: "Git", level: 92, icon: "fab fa-git-alt" },
      { name: "Docker", level: 78, icon: "fab fa-docker" },
      { name: "AWS", level: 75, icon: "fab fa-aws" },
      { name: "VS Code", level: 95, icon: "fas fa-code" },
      { name: "Jasmine Testing", level: 85, icon: "fas fa-vial" }
    ]
  },
  {
    name: "Libraries & Frameworks",
    icon: "fas fa-layer-group",
    skills: [
      { name: "Bootstrap", level: 88, icon: "fab fa-bootstrap" },
      { name: "jQuery", level: 85, icon: "fas fa-code" },
      { name: "D3.js", level: 70, icon: "fas fa-chart-bar" },
      { name: "Redux", level: 80, icon: "fas fa-code" },
      { name: "Backbone.js", level: 75, icon: "fas fa-code" }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    // Animate skills when component mounts
    const timer = setTimeout(() => {
      setAnimatedSkills(skillCategories[activeCategory].skills.map((_, index) => index));
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setAnimatedSkills([]);
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My expertise spans across various technologies and frameworks. Here's a breakdown of my technical proficiency.
          </p>
        </div>

        <div className="skills-content">
          {/* Category Navigation */}
          <div className="category-nav">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${activeCategory === index ? 'active' : ''}`}
                onClick={() => handleCategoryChange(index)}
              >
                <i className={category.icon}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="skills-display">
            <div className="category-header">
              <h3>
                <i className={skillCategories[activeCategory].icon}></i>
                {skillCategories[activeCategory].name}
              </h3>
            </div>

            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className={`skill-card ${animatedSkills.includes(index) ? 'animate' : ''}`}>
                  <div className="skill-header">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="skill-description">
                    {getSkillDescription(skill.name, skill.level)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="additional-skills">
          <h3>Other Skills & Technologies</h3>
          <div className="skills-tags">
            <span className="skill-tag">SVN</span>
            <span className="skill-tag">Grunt</span>
            <span className="skill-tag">Underscore.js</span>
            <span className="skill-tag">Protractor</span>
            <span className="skill-tag">React Testing Library</span>
            <span className="skill-tag">Less</span>
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">MacOS</span>
            <span className="skill-tag">Eclipse</span>
            <span className="skill-tag">Sublime Text</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const getSkillDescription = (skillName, level) => {
  const descriptions = {
    "JavaScript": "Expert in modern JavaScript (ES6+) with deep understanding of asynchronous programming, closures, and functional programming concepts.",
    "React": "Proficient in building scalable React applications with hooks, context API, and modern state management patterns.",
    "Angular": "Experienced in Angular development with TypeScript, including component architecture and dependency injection.",
    "Node.js": "Skilled in server-side JavaScript development with Express.js and building RESTful APIs.",
    "MongoDB": "Experienced in NoSQL database design, aggregation pipelines, and data modeling.",
    "Git": "Expert in version control with Git, including branching strategies and collaborative development workflows.",
    "Docker": "Proficient in containerization and deployment strategies using Docker.",
    "AWS": "Experienced in cloud services and deployment on Amazon Web Services.",
    "Bootstrap": "Skilled in responsive design and UI framework implementation.",
    "TypeScript": "Proficient in TypeScript for type-safe JavaScript development."
  };

  return descriptions[skillName] || `Strong proficiency in ${skillName} with ${level}% expertise level.`;
};

export default Skills;
