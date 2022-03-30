import React from "react";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const Certificates = () => {
  useEffect(() =>{
    aos.init({duration:2000});
  },[]);
    return <>
<div className="timeline">
  <div className="TimeLinebox leftBox" data-aos="fade-down-right">
    <div className="date">July,2021</div>
    <i className="icon fab fa-css3"></i>
    <div className="content">
      <h2>Web Development</h2>
      <p>
Completed the course of full stack web Development froom udemy within 3 months.
      </p>
    </div>
  </div>
  <div className="TimeLinebox rightBox" data-aos="fade-down-left">
    <div className="date">Mar,2021</div>
    <i className="icon fas fa-file-code"></i>
    <div className="content">
      <h2>Ios App Development</h2>
      <p>
  Completed my Ios app Development course from udemy within 3.5 months.
      </p>
    </div>
  </div>
  <div className="TimeLinebox leftBox" data-aos="fade-down-right">
    <div className="date">Aug,2020</div>
    <i className="icon fas fa-code"></i>
    <div className="content">
      <h2>C++</h2>
      <p>
   Completed my c++ course from basic to advanced from udemy within 4 months.
      </p>
    </div>
  </div>
  <div className="TimeLinebox rightBox" data-aos="fade-down-left">
    <div className="date">Oct,2021</div>
    <i className="icon fas fa-laptop-code"></i>
    <div className="content">
      <h2>Shell/Bash</h2>
      <p>
  Completed the course of basic shell and basic scripting from udemy within 1 months.
      </p>
    </div>
  </div>
  <div className="TimeLinebox leftBox" data-aos="fade-down-right">
    <div className="date">Oct,2021</div>
    <i className="icon fas fa-file-code"></i>
    <div className="content">
      <h2>C++</h2>
      <p>
  Completed my c++ seconadary course from linkedin skills which was to be quite honest not good.
      </p>
    </div>
  </div>
</div>

</>
}
export default Certificates;