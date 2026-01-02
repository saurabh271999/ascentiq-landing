import { Link } from "react-router-dom";
import logo from "/logo2.png";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <Link to="/" className="privacy-logo-link">
          <img src={logo} alt="AscentIQ Logo" className="privacy-logo" />
        </Link>
      </header>

      <div className="privacy-content">
        <div className="privacy-wrapper">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section className="privacy-section">
            <h2 className="privacy-section-title">1. Introduction</h2>
            <p className="privacy-text">
              Welcome to Ascent iQ Services ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">2. Information We Collect</h2>
            <p className="privacy-text">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="privacy-list">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Company information (company name, company size)</li>
              <li>Information you provide when contacting us or submitting forms</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p className="privacy-text">
              We may also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and usage patterns.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">3. How We Use Your Information</h2>
            <p className="privacy-text">We use the information we collect to:</p>
            <ul className="privacy-list">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications, promotional materials, and updates about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">4. Information Sharing and Disclosure</h2>
            <p className="privacy-text">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="privacy-list">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">5. Data Security</h2>
            <p className="privacy-text">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">6. Your Rights and Choices</h2>
            <p className="privacy-text">You have the right to:</p>
            <ul className="privacy-list">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of receiving marketing communications from us</li>
              <li>Request information about how we process your data</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="privacy-text">
              To exercise these rights, please contact us at help@ascentiqservices.com.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">7. Cookies and Tracking Technologies</h2>
            <p className="privacy-text">
              We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">8. Third-Party Links</h2>
            <p className="privacy-text">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">9. Children's Privacy</h2>
            <p className="privacy-text">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">10. Changes to This Privacy Policy</h2>
            <p className="privacy-text">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">11. Contact Us</h2>
            <p className="privacy-text">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="privacy-contact">
              <p><strong>Ascent iQ Services</strong></p>
              <p>📍 Knowledge Boulevard, 7th Floor, Block B, Sector 62, Noida, Uttar Pradesh: 201301</p>
              <p>📧 Email: help@ascentiqservices.com</p>
              <p>📞 Phone: 8595581268</p>
            </div>
          </section>

          <div className="privacy-back-link">
            <Link to="/" className="privacy-back-button">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

