import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Operations Manager",
    position: "Mid-Size IT Company (India)",
    content:
      "Working with Ascent IQ has been a really positive experience for us. We partnered with them during a busy project cycle, and they genuinely made the hiring process smoother. Their team took the time to understand what we were looking for and shared candidates who actually fit — not just on skills but also on how they'd work with our team. They were quick to respond, flexible with last-minute changes, and helped us close several IT and non-IT roles on time. Overall, a dependable and easy-to-work-with recruitment partner.",
    rating: 5,
  },
  {
    id: 2,
    name: "HR Manager",
    position: "Growing Tech Firm (India)",
    content:
      "Ascent IQ has consistently supported our hiring needs with professionalism and clarity. We were struggling to find the right talent for a few niche roles, and their team stepped in with a solid understanding of the market. The candidates they shared were relevant, well-screened, and aligned with what we needed. Communication was smooth throughout, and they kept us updated at every stage. It's been a dependable partnership, and we look forward to working with them again.",
    rating: 5,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const TRUNCATE_LENGTH = 150;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const toggleExpand = (testimonialId) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [testimonialId]: !prev[testimonialId],
    }));
  };

  const getTruncatedContent = (content, testimonialId) => {
    const isExpanded = expandedTestimonials[testimonialId];
    if (isExpanded || content.length <= TRUNCATE_LENGTH) {
      return content;
    }
    return content.substring(0, TRUNCATE_LENGTH) + "...";
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-carousel">
          <button
            className="testimonials-nav-btn testimonials-prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="testimonials-slide-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <div className="testimonial-content-wrapper">
                  <p className="testimonial-content">
                    "{getTruncatedContent(testimonial.content, testimonial.id)}"
                  </p>
                  {testimonial.content.length > TRUNCATE_LENGTH && (
                    <button
                      className="testimonial-read-more"
                      onClick={() => toggleExpand(testimonial.id)}
                    >
                      {expandedTestimonials[testimonial.id] ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="testimonials-nav-btn testimonials-next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

