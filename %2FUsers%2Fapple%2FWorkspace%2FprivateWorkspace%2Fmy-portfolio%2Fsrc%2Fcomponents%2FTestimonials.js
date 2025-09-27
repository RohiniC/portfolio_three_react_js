import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "Localize (Company Recognition)",
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
      id: 3,
      author: "Kirk Bobash",
      role: "Team Member at Localize",
      content: "Congrats on 5 years, Rohini! You are an indispensable part of our team.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7135279095621324803/",
      type: "colleague"
    },
    {
      id: 4,
      author: "Manager Recommendation",
      role: "LinkedIn Recommendation",
      content: "Rohini is an exceptional engineer who consistently delivers high-quality work. Her technical expertise and problem-solving skills make her a cornerstone of our development team. She has been instrumental in building and improving our core product over the past 5 years.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "manager"
    },
    {
      id: 5,
      author: "Colleague Recommendation",
      role: "LinkedIn Recommendation",
      content: "Working with Rohini has been a great experience. Her dedication to quality and attention to detail is outstanding. She's not only technically skilled but also a great team player who always goes above and beyond.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "colleague"
    },
    {
      id: 6,
      author: "Client Feedback",
      role: "LinkedIn Recommendation",
      content: "Rohini's expertise in both frontend and backend development has been invaluable to our project success. Her ability to understand complex requirements and deliver elegant solutions makes her an exceptional developer.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "client"
    },
    {
      id: 7,
      author: "James",
      role: "LinkedIn Recommendation",
      content: "View James's feedback on LinkedIn.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "colleague"
    },
    {
      id: 8,
      author: "Shiju",
      role: "LinkedIn Recommendation",
      content: "View Shiju's feedback on LinkedIn.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "colleague"
    },
    {
      id: 9,
      author: "Derek",
      role: "LinkedIn Recommendation",
      content: "View Derek's feedback on LinkedIn.",
      link: "https://www.linkedin.com/in/rohini-chellapandian/details/recommendations/?detailScreenTabIndex=0",
      type: "colleague"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Client & Colleague Testimonials</h2>
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



