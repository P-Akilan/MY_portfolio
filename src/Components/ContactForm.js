import React, { useState } from "react";

const ContactForm = () => {
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="form-topcontainer">
    <div className="form-container">
      <div className="form">
        <span className="heading">Get in touch</span>

        <input
          placeholder="Name"
          name="name"
          type="text"
          className="input"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <small className="error-text">{errors.name}</small>}

        <input
          placeholder="Email"
          id="mail"
          name="email"
          type="email"
          className="input"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="error-text">{errors.email}</small>}

        <textarea
          placeholder="Say Hello"
          rows="10"
          cols="30"
          id="message"
          name="message"
          className="textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <small className="error-text">{errors.message}</small>
        )}

        <div className="button-container">
          <div className="send-button" onClick={handleSubmit}>
            Send
          </div>
          <div className="reset-button-container">
            <div id="reset-btn" className="reset-button" onClick={handleReset}>
              Reset
            </div>
          </div>
        </div>

        {submitted && (
          <p className="success-text">Your message was sent successfully!</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
