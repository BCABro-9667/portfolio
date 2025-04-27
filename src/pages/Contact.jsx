import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0oyi5r8", // 🔹 Replace with your EmailJS Service ID
        "template_jwzde0g", // 🔹 Replace with your EmailJS Template ID
        formData,
        "zPPFP74bsEruexByu" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 5000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-section">
      <div className="contact-top"></div>

      <div className="content1">
        <h4 className="ex">Get in touch</h4>
        <div className="content-h2">
          <h2>Any Questions? Feel Free to Contact</h2>
        </div>
      </div>

      <div className="contact-content" id="contact">
        {/* Left Side: Contact Details */}
        <div className="contact-details">
          <h2>Contact Me</h2>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> <strong>Email:</strong>
            <a href="mailto:avdeshrajput925064@gmail.com"> avdeshrajput925064@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> <strong>Phone:</strong>
            <a href="tel:+919667346203"> +91 96673 46203</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> <strong>Address:</strong>
            Sector-7, IMT Manesar, Gurgaon - 122 505
          </p>
          <p>
            <FontAwesomeIcon icon={faGlobe} className="icon" /> <strong>Website:</strong>
            <a href="https://avdheshh-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            https://avdheshh-portfolio.netlify.app/
            </a>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>

          {/* ✅ Bootstrap Alert */}
          {showAlert && (
            <div className="alert alert-success" role="alert">
              Thank you for getting in touch with us! I'll connect with you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone No" required value={formData.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
