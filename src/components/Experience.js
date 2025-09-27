// src/components/Experience.js
import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    title: "Technical Architect",
    company: "Payoda Technologies, Coimbatore",
    duration: "April 2024 - Present",
    details: "Leading the architecture of complex projects, mentoring junior developers, and ensuring the technical quality of all deliverables. Currently working with Localize as a client, continuing the relationship built over 5 years of direct employment. Spearheading digital transformation initiatives and implementing best practices across development teams.",
    achievements: [
      "Led architecture design for 5+ enterprise applications",
      "Mentored 15+ junior developers",
      "Improved development efficiency by 40%",
      "Continuing Localize partnership as client relationship"
    ]
  },
  {
    title: "Project Partner",
    company: "Payoda Technologies, Coimbatore",
    duration: "October 2022 - March 2024",
    details: "Managed project teams, coordinated with clients, and oversaw the successful delivery of numerous projects. Established strong client relationships and ensured project milestones were met on time and within budget.",
    achievements: [
      "Managed 8+ concurrent projects",
      "Achieved 95% client satisfaction rate",
      "Reduced project delivery time by 25%"
    ]
  },
  {
    title: "Associate Project Partner I",
    company: "Payoda Technologies, Coimbatore",
    duration: "September 2020 - October 2022",
    details: "Managed project teams, coordinated with clients, and oversaw the successful delivery of numerous projects. Focused on agile methodologies and continuous improvement processes.",
    achievements: [
      "Led 6 development teams",
      "Implemented CI/CD pipelines",
      "Improved code quality metrics by 30%"
    ]
  },
  {
    title: "Senior Project Specialist",
    company: "Payoda Technologies, Coimbatore",
    duration: "August 2014 - September 2020",
    details: "Developed high-quality software solutions, performed code reviews, and collaborated with cross-functional teams. Specialized in full-stack development and system architecture.",
    achievements: [
      "Developed 20+ web applications",
      "Reduced bug reports by 50%",
      "Optimized application performance by 60%"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Aspire Systems Pvt Ltd, Chennai",
    duration: "June 2011 – August 2014",
    details: "Built and maintained web applications, optimized performance, and contributed to the design of new features. Worked with various technologies and frameworks to deliver robust solutions.",
    achievements: [
      "Built 15+ client applications",
      "Improved page load times by 45%",
      "Implemented responsive design patterns"
    ]
  }
];

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 200);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section">
      <div className="container">
        <h1>Professional Experience</h1>
        <div className="timeline" ref={timelineRef}>
          <div className="climber">
            <i className="fa-solid fa-person-running"></i>
          </div>
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <span>{exp.duration}</span>
                <p>{exp.details}</p>
                {/* {exp.achievements && (
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
