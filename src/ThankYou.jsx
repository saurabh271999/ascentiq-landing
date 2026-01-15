import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import logo from "/logo2.png";
import curve1 from "/bannercurves1.png";
import curve2 from "/bannercurves2.png";
import "./ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="thank-you-container">
      {/* Main Content */}
      <main className="thank-you-main">
        {/* Background Curves */}
        <div className="background-curves">
          <img src={curve1} alt="" className="curve-image curve-1" />
          <img src={curve2} alt="" className="curve-image curve-2" />
        </div>

        <div className="thank-you-content">
          <div className="status-icon-wrapper">
            <IoCheckmarkCircleOutline className="status-icon" />
          </div>

          <h1 className="thank-you-title">Thank You!</h1>
          <p className="thank-you-message">
            Your request for a demo has been successfully submitted.
            Our team will review your information and get back to you shortly.
          </p>

          <div className="next-steps">
            <h2 className="next-steps-title">What's Next?</h2>
            <ul className="next-steps-list">
              <li>
                <span className="step-number">1</span>
                <span className="step-text">Our representative will call or email you within 24 hours.</span>
              </li>
              <li>
                <span className="step-number">2</span>
                <span className="step-text">We'll discuss your specific requirements and goals.</span>
              </li>
              <li>
                <span className="step-number">3</span>
                <span className="step-text">You'll get a personalized walkthrough of our platform.</span>
              </li>
            </ul>
          </div>

          <Button
            variant="contained"
            onClick={() => navigate("/")}
            startIcon={<FaArrowLeft />}
            sx={{
              backgroundColor: "white",
              color: "#ff621a",
              "&:hover": {
                backgroundColor: "#f9fafb",
              },
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              mt: 4
            }}
          >
            Back to Home
          </Button>
        </div>
      </main>

      {/* Footer-like bottom area */}
      <footer className="thank-you-footer">
        <p>© {new Date().getFullYear()} AscentIQ Global. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ThankYou;
