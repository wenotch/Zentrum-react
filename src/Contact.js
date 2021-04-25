import React from "react";
import useStyles from "./Contact.css";
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <h1>Contact Us.</h1>
      <p>
        We would love to hear from you and respond instantly! Your privacy is
        our priority, we would never spam you.
      </p>

      <form action="/contact" method="POST" data-aos="fade-up">
        <div className={classes.label}>
          <label for="email">Your Email</label>
        </div>
        <input
          type="email"
          name="email"
          id=""
          placeholder="E.g. obigodwin247@gmail.com"
        />
        <div className={classes.label}>
          <label for="message">Tell us anything!</label>
        </div>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
