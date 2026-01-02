import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { MdEmail } from "react-icons/md";
import logo from "/logo2.png";
import curve1 from "/bannercurves1.png";
import curve2 from "/bannercurves2.png";
import Services from "./Services";
import Testimonials from "./Testimonials";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    "Full Name": "",
    workEmail: "",
    phone: "",
    companyName: "",
    companySize: "",
    helpText: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://saneindia-backend.onrender.com/api/v1/email/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData["Full Name"],
            email: formData.workEmail,
            phone: formData.phone,
            companyName: formData.companyName,
            companySize: formData.companySize,
            message: formData.helpText,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        // Reset form
        setFormData({
          "Full Name": "",
          workEmail: "",
          phone: "",
          companyName: "",
          companySize: "",
          helpText: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("An error occurred. Please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable input field styles - easily adjustable
  const inputFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ff621a",
      },
      height: "42px", // Reduced height
      display: "flex",
      alignItems: "center", // Center vertically
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px", // Reduced padding
      display: "flex",
      alignItems: "center", // Center placeholder vertically
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#ff621a",
      },
      "&.MuiInputLabel-shrink": {
        transform: "translate(14px, -9px) scale(0.75)",
      },
    },
  };

  // Select component styles
  const selectStyles = {
    "& .MuiOutlinedInput-root": {
      height: "42px", // Reduced height
    },
    "& .MuiSelect-select": {
      padding: "10px 14px", // Reduced padding
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ff621a",
    },
  };

  // Textarea (multiline) styles
  const textareaStyles = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ff621a",
      },
      alignItems: "flex-start", // Align to top for multiline
      padding: "0", // Remove default padding
    },
    "& .MuiOutlinedInput-input": {
      padding: "14px", // Proper padding for textarea
      textAlign: "left", // Left align text
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#ff621a",
      },
      "&.MuiInputLabel-shrink": {
        transform: "translate(14px, -9px) scale(0.75)",
      },
    },
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <img src={logo} alt="AscentIQ Logo" className="header-logo" />
          <div className="header-contact">
            <span className="header-address">
              📍 Knowledge Boulevard, 7th Floor, Block B, Sector 62, Noida,
              Uttar Pradesh: 201301
            </span>
            <span className="header-email">
              <MdEmail />
              help@ascentiqservices.com
            </span>
            <span className="header-phone">📞 Phone Number: 8595581268</span>
          </div>
        </div>
      </header>

      {/* Main Content - Single Gradient Background */}
      <div className="main-content">
        {/* Background Curve Images */}
        <div className="background-curves">
          <img src={curve1} alt="" className="curve-image curve-1" />
          <img src={curve2} alt="" className="curve-image curve-2" />
        </div>

        {/* Left Section */}
        <div className="left-section">
          {/* About Ascent iQ Services */}
          <div>
            <h1 className="about-heading">About Ascent iQ Services</h1>
          </div>

          {/* Body Text */}
          <div className="about-text-container">
            <p className="about-text">
              With a legacy spanning over a decade, Ascent iQ Staffing Solutions
              has emerged as a pivotal player in the recruitment landscape,
              showcasing a robust presence nationally and internationally.
            </p>
            <p className="about-text">
              Our enduring commitment revolves around offering comprehensive HR
              solutions, encompassing the entire spectrum from recruitment and
              turnkey staffing to HR services and executive search.
            </p>
            <p className="about-text" style={{ marginBottom: 0 }}>
              The backbone of our success lies in the collective expertise of
              seasoned professionals who not only facilitate job placements but
              also provide invaluable guidance in establishing effective HR
              units within organizations.
            </p>
          </div>

          {/* Industry Recognition */}
          <div>
            <p className="industry-recognition">INDUSTRY RECOGNITION</p>
            <div className="badges-container">
              {/* Badge 1 */}
              <div className="badge">
                <div className="badge-content">
                  <div className="badge-icon">10+</div>
                  <div className="badge-text">
                    Years of Excellence
                    <br />
                    in Recruitment
                  </div>
                  <div className="badge-description">Proven Track Record</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="badge">
                <div className="badge-content">
                  <div className="badge-icon badge-icon-large">100+</div>
                  <div className="badge-text">
                    Global Brands
                    <br />
                    Trusted Us
                  </div>
                  <div className="badge-description">Trusted Partner</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="badge">
                <div className="badge-content">
                  <div className="badge-icon">✓</div>
                  <div className="badge-text">
                    IT Consulting
                    <br />
                    Noida, India
                  </div>
                  <div className="badge-description">Expert IT Solutions</div>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="badge">
                <div className="badge-content">
                  <div className="badge-icon">🌟</div>
                  <div className="badge-text">
                    Comprehensive HR
                    <br />
                    Solutions
                  </div>
                  <div className="badge-description">End-to-End Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="right-section">
          <div className="form-wrapper" id="contact-form">
            <div className="form-container">
              <h3 className="form-title">SCHEDULE A DEMO</h3>

              <form onSubmit={handleSubmit} className="form">
                {/* First Row */}
                <div className="form-fields">
                  <TextField
                    required
                    fullWidth
                    id="Full Name"
                    name="Full Name"
                    label="Full Name"
                    value={formData["Full Name"]}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    label="Work Email"
                    value={formData.workEmail}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <TextField
                    required
                    fullWidth
                    type="tel"
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <TextField
                    required
                    fullWidth
                    id="companyName"
                    name="companyName"
                    label="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <FormControl fullWidth required>
                    <InputLabel
                      id="companySize-label"
                      sx={{
                        "&.Mui-focused": {
                          color: "#ff621a",
                        },
                      }}
                    >
                      Company Size
                    </InputLabel>
                    <Select
                      labelId="companySize-label"
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      label="Company Size"
                      onChange={handleChange}
                      sx={selectStyles}
                    >
                      <MenuItem value="">- Please Select -</MenuItem>
                      <MenuItem value="1-10">1-10</MenuItem>
                      <MenuItem value="11-50">11-50</MenuItem>
                      <MenuItem value="51-200">51-200</MenuItem>
                      <MenuItem value="201-500">201-500</MenuItem>
                      <MenuItem value="501-1000">501-1000</MenuItem>
                      <MenuItem value="1000+">1000+</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    fullWidth
                    id="helpText"
                    name="helpText"
                    label="How Can We Help You?"
                    multiline
                    rows={3}
                    value={formData.helpText}
                    onChange={handleChange}
                    sx={textareaStyles}
                  />
                </div>

                {/* Textarea */}

                {/* Privacy Policy */}
                <p className="privacy-text">
                  By submitting this form you agree to receive email, text and
                  promotional communications from AscentIQ related to products
                  and services in accordance with AscentIQ's{" "}
                  <Link to="/privacy" className="privacy-link">
                    privacy policy
                  </Link>
                  .
                </p>

                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`status-message ${
                      submitStatus === "success"
                        ? "status-success"
                        : "status-error"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: "#ff621a",
                    "&:hover": {
                      backgroundColor: "#e55517",
                    },
                    "&:disabled": {
                      backgroundColor: "#ff621a",
                      opacity: 0.6,
                    },
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Business Partners Section */}
      <div className="business-partners">
        <div className="partners-container">
          <h3 className="partners-heading">Trusted by 100 ++ Global Brands</h3>
          <div className="partners-grid">
            <div className="partner-logo">
              <img
                src="https://www.ascentiqservices.com/clients_logo/1707467051.jpg"
                alt="Business Partner"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://www.ascentiqservices.com/clients_logo/1707467075.jpg"
                alt="Business Partner"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://www.ascentiqservices.com/clients_logo/1707467101.jpg"
                alt="Business Partner"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://www.ascentiqservices.com/clients_logo/1707467125.jpg"
                alt="Business Partner"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://www.ascentiqservices.com/clients_logo/1707467151.jpg"
                alt="Business Partner"
              />
            </div>
            <div className="partner-logo">
              <img
                src="https://www.ascentiqservices.com/clients_logo/1707467195.jpg"
                alt="Business Partner"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="services-wrapper">
          <Services />
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-wrapper">
          {/* Mini Map with Address */}
          <div className="cta-map-container">
            <div className="cta-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0354096457307!2d77.36299731508272!3d28.627394182421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef9ed9b%3A0x61b03f0d6d5a4c01!2sKnowledge%20Boulevard%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ascent iQ Office Location"
              ></iframe>
            </div>
            <span className="cta-address">
              📍 Knowledge Boulevard, 7th Floor, Block B, Sector 62, Noida,
              Uttar Pradesh: 201301
            </span>
          </div>
          {/* CTA Content */}
          <div className="cta-container">
            <h2 className="cta-title">Find Your Perfect Job Match Today!</h2>
            <h3 className="cta-subtitle">
              Connecting Talent, Building Careers
            </h3>
            <p className="cta-description">
              Welcome to Ascent iQ Services, where talent meets opportunity.
            </p>
            <button className="cta-button" onClick={scrollToForm}>
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
