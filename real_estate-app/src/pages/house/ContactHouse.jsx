import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";

import { Message } from "semantic-ui-react";
import "./contact-house.css"



// npm i @emailjs/browser


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3we7xng",
        "template_czopaxb",
        form.current,
        "BYgtviIbqtj-4da8E"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your email has been sent successfully");

        },
        (error) => {
          console.log(error.text);
        }
      );

  };




  return (
   <div>

     {/* <div className="title">
        <h1>Contact Us</h1>
      </div> */}


     {/* <StyledContactForm>  */}
     <div class="contact-section-c">

     <h3>More about this property:</h3>
     <div class="border"></div>
      <form class="contact-form-c" ref={form} onSubmit={sendEmail}>
        <div className="name-email" >

        <input type="text" name="user_name" placeholder="Name" class="contact-form-text-c"/>


        <input type="email" name="user_email" placeholder="Email" class="contact-form-text-c"/>  </div>

        <textarea name="message" placeholder="Message" class="contact-form-text-c"/>
        <input type="submit" value="Send" class="contact-form-btn"/> 

      </form>
      </div>
     {/* </StyledContactForm>  */}

    </div>
  );
};

export default Contact;