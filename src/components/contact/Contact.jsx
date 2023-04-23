import { useState } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault();
        setMessage(true)
        emailjs.sendForm('service_miw5sol', 'template_cc4vurq', e.target, 'user_uhouzasBz0gcls4FRMhSk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
       
    }

    return (
        <div className="contact" id="contact">
            <h2> Contact Us.</h2>
            <h4>↓Fill out the form below↓</h4>
            <br></br>

            <form onSubmit={handleSubmit}>
                <div className="form-inner-wrapper">
                    <div className="input-wrapper">
                        <input required type="text" placeholder="Full Name (required)" name="name"/>
                        <input required type="tel" placeholder="Phone Number (required)" name="phone"/>
                        <input required type="text" placeholder="Email (required)" name="email"/>
                    </div>

                    <textarea placeholder="Your message (required)" name="message"></textarea>
                </div>

                <button required type="submit"> Contact Now!  </button>
            </form>
                {message && <span> Your message has been sent, we will contact you soon. </span> }
        </div>
    )
}
