import React from "react";
import "../styles/index.css";
import Tilt from "react-tilt";
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import swal from 'sweetalert';


export const ContactCard = () =>{

const form = useRef();
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_teuh7a5', 'template_efoh0zh', e.target, 'user_X5oJqaowexoYLwMZ6OO72')
		.then((result) => {
			console.log(result.text);
			swal("Message sent", "Please wait , I'll reply back to you shortly!", "success");
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset();
	};
    return <>
	<Tilt>
	<div ref={form} className="container2">
		<div className="contact-box">
			<div className="left"></div>
			<form   onSubmit={sendEmail} className="right">
				<h2 className="ContactUs">Contact Us</h2>
				<input type="text" className="field" name="fullname" placeholder="Your Name" />
				<input type="text" className="field" name="email" placeholder="Your Email" />
				<input type="text" className="field" name="phone" placeholder="Phone" />
				<textarea placeholder="Message" name="message" className="field"></textarea>
				<button type="submit" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send</button>
			</form>
		</div>
	</div>
	</Tilt>

	
    </>
}
export default ContactCard;