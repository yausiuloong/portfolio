import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_eoimrub",
      "template_eb87opr",
      form.current,
      "3OF-Cvfqf5SOPHTlt"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch with me</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>yausiuloong@gmail.com</h5>
            <a href="mailto:yausiuloong@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Alex Yau Siu Loong</h5>
            <a href="https://m.me/alex.yausiuloong" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6017-3661846</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+60173661846"
              target="_blank">
              Send a Text
            </a>
          </article>
        </div>
        {/* form to send an email to me */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
