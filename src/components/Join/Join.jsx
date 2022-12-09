import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vy5zv69', 'template_ctvvhd8', form.current, 'o-tBsrhomfzykVwTa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }); 
      };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">PRONTO PARA</span>
                    <span>APERFEIÇOAR</span>
                </div>
                <div>
                    <span>SUA SAÚDE</span>
                    <span className="stroke-text">CONOSCO?</span>
                </div>
            </div>
            <div className="right-j">

            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder="Enter your email adress" />
                <button className="btn btn-j">Join now</button>
            </form>
            </div>
        </div>
    )
}

export default Join