import React from "react";

const Contact = () => {
  const contactStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  };

  const subheadingStyle = {
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px",
    textAlign: "left",
  };

  const infoStyle = {
    fontSize: "18px",
    color: "#555",
    textAlign: "left",
    marginBottom: "30px",
  };

  const contactFormStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyle = {
    width: "80%",
    padding: "10px",
    marginBottom: "15px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "80%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "18px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={contactStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      
      <p style={infoStyle}>
        If you have any questions or would like to book a room, feel free to reach out to us. Our team is here to assist you!
      </p>

      <h3 style={subheadingStyle}>Hotel Contact Details</h3>
      <div style={infoStyle}>
        <p><strong>Phone:</strong> +91 8767416470</p>
        <p><strong>Email:</strong> info@friendscorner.com</p>
        <p><strong>Address:</strong> Dehu Phata, Alandi, Pune</p>
      </div>

      <h3 style={subheadingStyle}>Send Us a Message</h3>
      <form style={contactFormStyle}>
        <input
          type="text"
          placeholder="Your Name"
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={inputStyle}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          style={{ ...inputStyle, resize: "none" }}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
