import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Mr. Jai",
    position: "Client",
    content:
      "Working with AscentIQ Global was a game-changer for our company! Their dedicated team took the time to understand our unique hiring needs and provided us with exceptional talent that perfectly matched our requirements.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ishaan",
    position: "Client",
    content:
      "I can't express how impressed I am with the exceptional service provided by AscentIQ Global team. They not only presented us with highly qualified candidates but also ensured a smooth and efficient recruitment process from start to finish.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali",
    position: "Client",
    content:
      "Kudos to the team at AscentIQ Global! Their personalized approach and dedication to understanding our company's values and goals made the recruitment process seamless. We found the perfect candidates who align with our culture.",
    rating: 5,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
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
                <p className="testimonial-content">"{testimonial.content}"</p>
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

