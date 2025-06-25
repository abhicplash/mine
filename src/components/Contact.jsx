import React, { useState } from "react";
import "../styles/Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919562465095";
    const { name, email, phone, message } = form;

    const text = `Hello Abhilash,%0A%0A📌 New Inquiry:%0A👤 Name: ${name}%0A📧 Email: ${email}%0A📱 Phone: ${phone}%0A📝 Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");

    setSuccess(true);
    setForm({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="contact-container">
      <h3>Get in Touch</h3>
      <p>
        Let’s collaborate to build something amazing. <br /> I'm always open to
        new ideas and challenges.
      </p>

      <h2>Let’s Talk.</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
        {success && <p className="success">✅ Message ready in WhatsApp!</p>}
      </form>
    </section>
  );
};

export default Contact;
