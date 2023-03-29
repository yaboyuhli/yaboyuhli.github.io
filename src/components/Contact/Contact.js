import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact</h1>
      <p>
        If you would like to get in touch, please feel free to contact me
        through any of the methods below.
      </p>
      <ul>
        <li>
          <strong>Email:</strong> your-email@example.com
        </li>
        <li>
          <strong>Phone:</strong> (123) 456-7890
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/your-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/your-profile/
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/your-username
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
