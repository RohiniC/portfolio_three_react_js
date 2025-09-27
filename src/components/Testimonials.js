import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "Localize (Client Company Recognition)",
      role: "5-Year Anniversary Celebration",
      content: "Rohini is an amazing part of the Localize engineering team. She is responsible for building and improving the core of Localize's product. Within her five years she has grown with the company to become a wonderful developer in all areas, both front end and back. Her contributions are vital to the success of the company and we are proud to have her on our team.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7135279095621324803/",
      type: "company"
    },
    {
      id: 2,
      author: "Brandon Paton",
      role: "CEO @ Localize",
      content: "Thank you Rohini, congratulations! You're the cornerstone of our team.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7135279095621324803/",
      type: "ceo"
    },
    {
      id: 4,
      author: "Derek Binkley",
      role: "Client Side Engineering Manager",
      content: "Rohini is an amazing software developer. Whenever a complex problem came up I felt confident in giving it to her. She would always come up with an excellent solution. I really enjoyed watching her skills develop. If there were parts of the technology stack that she didn't have experience with she would learn it easily. Rohini taught me about complex topics like browser DOM manipulation, mutation observers and more.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "manager"
    },
    {
      id: 5,
      author: "James Binns",
      role: "Client Side Engineering Manager",
      content: "I had the pleasure of working remotely with Rohini for over a year and half. I was consistently impressed with her ability to function both as a fullstack JavaScript developer and as a manager within a globally distributed development team. On a daily basis Rohini was extremely proficient in working on long-term development projects, handling emergency bugs, providing code reviews, working within an Agile/Scrum environment, and managing the work of several other developers.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "manager"
    },
    {
      id: 6,
      author: "Shiju U V",
      role: "Delivery Manager | PMP® Certified",
      content: "What Amazes me of Rohini is her thoroughness in technology -which brings much more value in customer services & a delightful customer experience as well. It's a fantastic working experience I had with Rohini. She exhibits her fullest potential in terms of understanding requirements no matter whether it's complex or simple- break it down to the granular level details -which in turn team finds a great value addition to their work packages allocated.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "manager"
    },
    {
      id: 7,
      author: "Velmurugan Seenipandian",
      role: "Technical Manager",
      content: "Rohini is one of the best among all people I have ever met and is a loyal colleague, understands complex matters. She is a strong and goal oriented team player; with every problem there was a solution. I highly recommend her!",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "manager"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Client & Manager Testimonials</h2>
          <p className="section-subtitle">
            Real feedback from LinkedIn - click to verify authenticity
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">{testimonial.content}</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
                <a 
                  href={testimonial.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-verify"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>Verify on LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-note">
          <p>
            <i className="fas fa-info-circle"></i>
            All testimonials are from verified LinkedIn posts and recommendations. Click the links above to view the original posts and verify authenticity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
