import React, { useState } from "react";

const FORM_ENDPOINT = ""; 
// TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <div>Thank you!</div>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="question-form">
      <h1>HAVE A QUESTION TO ASK US?</h1>
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
        <div className="name-field">
          <input type="text" placeholder="Your name" name="name" required/>
        </div>
        <div className="email-field">
          <input type="email" placeholder="Email" name="email" required/>
        </div>
        <div className="question-field">
          <textarea placeholder="Your message" name="message" required/>
        </div>
        <div className="send-question">
          <button type="submit"> Send a message </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;