import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container contact-page">
      <h2>Contact Us</h2>

      <p>
        Have questions or want to reach out? We’d love to hear from you!  
        You can contact us through any of the following methods or use the form below:
      </p>

      <div className="contact-details">
        <p><strong>Email:premasangati8@gmail.com</strong> support@foodapp.com</p>
        <p><strong>Phone:</strong> +91 8919917625</p>
        <p><strong>Address:</strong> 5-35 ,pspk street,Pitapuram, India</p>
      </div>

      <h3>Send us a message:</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p className="success-msg">Thank you! Your message has been submitted.</p>
      )}
    </div>
  );
};

export default Contact;
