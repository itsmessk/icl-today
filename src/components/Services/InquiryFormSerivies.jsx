import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "../css/InquiryForm.css";

export default function InquiryFormSerivies({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [submitConfirmation, setSubmitConfirmation] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.services) formErrors.services = "Please select a service.";
    if (!formData.message) formErrors.message = "Message is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const emailPayload = {
        mailTo: "support@infoziant.com",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        services: formData.services,
        message: formData.message,
        time: new Date().toLocaleString()
      };

      try {
        const response = await fetch("https://mailer-api-production-76e4.up.railway.app/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(emailPayload)
        });

        if (response.ok) {
          setSuccessMessage("Your request has been submitted successfully!");

          setFormData({
            name: "",
            email: "",
            phone: "",
            services: "",
            message: ""
          });

          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          console.error("API response not OK:", await response.text());
          alert("An error occurred while submitting your request. Please try again.");
        }
      } catch (err) {
        console.error("Failed to send email. Error:", err);
        alert("An error occurred while submitting your request. Please try again.");
      }
    }
  };

  // Logic to close the form
  const closeForm = () => {
    setIsVisible(false);
    if (closeModal) {
      closeModal(); // Close from parent
    }
  };

  if (!isVisible) return null;

  return (
    <div className="consultation-section-i">
      <div className="consultation-container-i">
        <button className="close-button-i" onClick={closeForm}>
          <FaTimes />
        </button>
        <h1 className="form-title-i">Get in Touch</h1>
        <p className="form-desc-i">
          Have a question or need assistance? We're here to help — just drop us a message.
        </p>

        {/* Success message display */}
        <div className="center-container-i">
          {successMessage && <p className="success-message-i"><FaCircleCheck /> {successMessage}</p>}
        </div>

        <form onSubmit={handleSubmit} className="consultation-form-i">
          <div className="form-row-i text-gray-800">
            <div className="form-left-i">
              <div className="input-group-i">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field-i"
                />
                {errors.name && <p className="error-message-i">{errors.name}</p>}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field-i"
                />
              </div>
            </div>
            <div className="form-right-i">
              <div className="input-group-i">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field-i"
                />
                {errors.email && <p className="error-message-i">{errors.email}</p>}
                <input
                  type="text"

                  name="services"
                  value={formData.services}
                  placeholder="Services*"
                  onChange={handleChange}
                  required
                  className="input-field-i"
                />

                {errors.services && <p className="error-message-i">{errors.services}</p>}
              </div>
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Enter message*"
            required
            value={formData.message}
            onChange={handleChange}
            className="input-field-i"
          />
          {errors.message && <p className="error-message-i">{errors.message}</p>}
          <button type="submit" className="submit-button-i">{submitConfirmation ? "Submitting..." : "Submit"}</button>
        </form>


      </div>
    </div>
  );
}
