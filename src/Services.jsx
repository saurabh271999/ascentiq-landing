import { useState } from "react";
import "./Services.css";
import itStaffingImage from "/itstaffing.png";
import recruitmentImage from "/requiremnt.png";
import permanentHiringImage from "/pemanenthiing.png";
import payrollComplianceImage from "/payrollcompli.png";
// import contractHiringImage from "/diversityhiring.png";
import diversityHiringImage from "/diversityhiring.png";
import contracthiring from "/contracthiring2.png";
import benchResources from "/benchresorces.png";

const services = [
  "Recruitment",
  "IT Staffing",
  "Permanent Hiring",
  "Contract Hiring",
  "Payroll And Compliance",
  //   "Hire Trained Deploy",
  "Diversity Hiring",
  "Bench Resources",
];

const serviceContent = {
  Recruitment: {
    title: "Recruitment",
    description:
      "Comprehensive recruitment solutions tailored to find the best talent for your organization. We leverage our extensive network and expertise to match candidates with your specific requirements.",
    image: recruitmentImage,
  },
  "IT Staffing": {
    title: "IT Staffing",
    description:
      "Specialized IT staffing services to help you build high-performing technology teams. From developers to system administrators, we provide skilled IT professionals across all domains.",
    image: itStaffingImage,
  },
  "Permanent Hiring": {
    title: "Permanent Hiring",
    description:
      "End-to-end permanent hiring solutions that ensure long-term success. We help you find candidates who align with your company culture and contribute to your growth.",
    image: permanentHiringImage,
  },
  "Contract Hiring": {
    title: "Contract Hiring",
    description:
      "Flexible contract hiring solutions for project-based needs. Access top talent on a temporary basis without the long-term commitment, perfect for short-term projects.",
    image: contracthiring,
  },
  "Payroll And Compliance": {
    title: "Payroll And Compliance",
    description:
      "Streamlined payroll management and compliance services. We handle all payroll complexities and ensure full compliance with labor laws and regulations.",
    image: payrollComplianceImage,
  },
  //   "Hire Trained Deploy": {
  //     title: "Hire Trained Deploy",
  //     description:
  //       "Our unique Hire-Train-Deploy model ensures you get candidates who are not just qualified but also trained specifically for your requirements and ready to contribute from day one.",
  //   },
  "Diversity Hiring": {
    title: "Diversity Hiring",
    description:
      "Promoting inclusive workplaces through strategic diversity hiring. We help you build diverse teams that bring varied perspectives and drive innovation.",
    image: diversityHiringImage,
  },
  "Bench Resources": {
    title: "Bench Resources",
    description:
      "Access to a pool of pre-screened, ready-to-deploy professionals. Our bench resources are available immediately, reducing your time-to-hire significantly.",
    image: benchResources,
  },
};

function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  const currentContent = serviceContent[activeService];

  return (
    <div className="services-wrapper">
      <div className="services-container">
        {/* Horizontal Tabs */}
        <div className="services-tabs-container">
          <div className="services-tabs-wrapper">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={`services-tab ${
                  activeService === service ? "active" : ""
                }`}
              >
                <span>{service}</span>
                {activeService === service && (
                  <div className="services-tab-indicator"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="services-content-wrapper">
          {currentContent.image ? (
            <div className="services-image-container">
              <img
                key={activeService}
                src={currentContent.image}
                alt={currentContent.title}
                className="services-image"
              />
            </div>
          ) : (
            <div className="services-content">
              <h3 className="services-title">{currentContent.title}</h3>
              <p className="services-description">
                {currentContent.description}
              </p>
            </div>
          )}
        </div>

        {/* Business Data Image */}
        <div className="services-business-data">
          <img
            src="/bussinessdata.png"
            alt="Business Data"
            className="services-business-data-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
