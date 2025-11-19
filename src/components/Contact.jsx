import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" id="name" name="name" required placeholder="Your Name"/>
        <input type="email" id="email" required placeholder="Email Address"/>
        <textarea id="message" name="message" required placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;