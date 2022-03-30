import React from 'react';
import ReactDOM from 'react-dom';
import "../src/styles/tailwind.css";
import "../src/styles/index.css";
import App from '../src/components/App';
import "../src/components/styles.css";
import "../src/components/demo.css";
import "../src/components/About.css"
import "../src/components/Navbar.css";
import "../src/components/Timeline.css";
import "../src/components/Resume.css";
import "../src/components/Contact.css"
import "../src/components/ContactmeCard.css";
import "../src/styles/SocialIcons.css";
import "../src/styles/Projects.css";
import "../src/styles/Skills.css";
import "../src/styles/LandingPage.css";
import aos from "aos";
aos.init();



ReactDOM.render(

  <App />,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

