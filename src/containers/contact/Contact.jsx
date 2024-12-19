import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../../components/toast/Toast";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [toasts, setToasts] = useState([]); // State to manage toast notifications

  const addToast = (message, type) => {
    const id = Math.random().toString(36).substring(7); // Unique ID for each toast
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

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
    setError("");

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
        () => {
          setIsSubmitting(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          addToast("Message sent successfully!", "success");
        },
        () => {
          setIsSubmitting(false);
          setError("Failed to send the message. Please try again.");
          addToast("Failed to send the message. Please try again.", "error");
          console.log("Error: ", error);
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
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactForm;
