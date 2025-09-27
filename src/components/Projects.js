// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Localize Platform",
    role: "Senior Engineer / Full-stack Developer",
    technologies: ["React", "Backbone", "Gatsby", "Bootstrap", "HTML5", "CSS3", "REST API", "Node.js", "MongoDB"],
    description: "Currently working with Localize as a client through Payoda Technologies. Previously led the development and improvement of Localize's core product for 5 years. Localize offers powerful solutions for automating the translation of web, backend, mobile, and file-based content, saving development time and money with tools and libraries.",
    features: [
      "Core product development and improvement",
      "Multi-language content management",
      "Automated translation workflows",
      "Developer-friendly SDKs & integrations",
      "Analytics for translation quality"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    status: "Current Client Project",
    recognition: "Recognized as 'exceptional engineer' and 'cornerstone of the team' for 5-year tenure"
  },
  {
    id: 2,
    title: "Network Management System",
    role: "Team Lead / Developer",
    technologies: ["Angular", "Underscore", "HTML5", "CSS3", "REST API", "jQuery"],
    description: "A web-based application to manage networking switches and WiFi, providing configuration management, monitoring, and troubleshooting.",
    features: [
      "Switch & WiFi management",
      "Real-time device monitoring",
      "Config backups & automation",
      "Performance dashboards"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    status: "In Production"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of work that reflects my original focus areas: localization platforms and network management tools.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-project-btn" onClick={() => openModal(project)}>
                    <i className="fas fa-eye"></i>
                    View Details
                  </button>
                </div>
                <div className="project-status">{project.status}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">+{project.technologies.length - 4} more</span>
                  )}
                </div>
                
                <div className="project-actions">
                  <button className="btn btn-outline" onClick={() => openModal(project)}>
                    <i className="fas fa-info-circle"></i>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                <p className="modal-role">{selectedProject.role}</p>
                <p className="modal-description">{selectedProject.description}</p>
                
                {selectedProject.recognition && (
                  <div className="modal-recognition">
                    <h3>Recognition</h3>
                    <p className="recognition-text">
                      <i className="fas fa-award"></i>
                      {selectedProject.recognition}
                    </p>
                  </div>
                )}
                
                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
