import { useState } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault();
        setMessage(true)
        emailjs.sendForm('service_shgpk42', 'template_cc4vurq', e.target, 'user_uhouzasBz0gcls4FRMhSk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
       
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="handshake icon"/>
            </div>
            <div className="right">
                <h2> Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email"/>
                    <textarea placeholder="Hello my name is .... message" name="message"></textarea>
                    <button type="submit"> Send </button>
                    {message && <span> `Thanks, I will contact you ASAP :)` </span> }
                </form>
            </div>
        </div>
    )
}
