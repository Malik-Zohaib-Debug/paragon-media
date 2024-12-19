import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // To manage submission state
  const [isSuccess, setIsSuccess] = useState(false); // To show success message
  const [error, setError] = useState(""); // To handle error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(""); // Clear previous error
    setIsSuccess(false); // Reset success state

    const clientDetails = {
      message: `
      Client Email: ${formData.email} \n 
      Client Name: ${formData.name}  \n 
      Message: ${formData.message}`,
    };

    emailjs
      .send(
        "service_hvs9nup",
        "template_b3pj40k",
        clientDetails,
        "9Ggrqy69azipnHDmt",
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          console.log("result ", result);
        },
        (err) => {
          // Renamed error to err
          setIsSubmitting(false);
          setError("Failed to send the message. Please try again.");
          console.error("Error: ", err); // Log the error for debugging
        },
      );
  };

  return (
    <div className="gpt3__contact-form section__padding" id="contact">
      <div className="gpt3__contact-form-heading">
        <h1 className="gradient__text">Get in Touch With Us</h1>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="contact-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {isSuccess && (
        <p className="success-message">Message sent successfully!</p>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ContactForm;
