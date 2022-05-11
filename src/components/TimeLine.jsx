import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";



export const Timeline=() => {
   useEffect(() =>{
     aos.init({duration:2000});
   },[]);
    return <>
      <div className="timeline">
      <div className="TimeLinebox leftBox" data-aos="fade-down-left">
    <div className="date">2022-Now</div>
    <i className="icon fas fa-university"></i>
    <div className="content">
      <h2>Formi</h2>
      <p>
        Working as the full stack intern developer.
      </p>
    </div>
  </div>
      <div className="TimeLinebox rightBox" data-aos="fade-down-right">
    <div className="date">2022-Now</div>
    <i className="icon fas fa-code"></i>
    <div className="content">
      <h2>Apple Developers Group</h2>
      <p>
        Working as a full stack web and ios developer in the Apple Developers Group.
      </p>
    </div>
  </div>
  <div className="TimeLinebox leftBox" data-aos="fade-down-left">
    <div className="date">2020-Now</div>
    <i className="icon fas fa-university"></i>
    <div className="content">
      <h2>Vellore Insititute of Technology</h2>
      <p>
   Started my college journey from Vellore Insititute of Technology , Vellore pursuing integrated Btech and Mtech from Core Computer Science.
      </p>
    </div>
  </div>
  <div className="TimeLinebox rightBox" data-aos="fade-down-right">
    <div className="date">2014-2020</div>
    <i className="icon fas fa-graduation-cap"></i>
    <div className="content">
      <h2>Delhi Public School</h2>
      <p>
       Completed my schooling from Delhi Public School , Lucknow between the year's 2014-2020,
       Percentage of high school and secondary high school would be attcahed in resume.
      </p>
    </div>
  </div>
  <div className="TimeLinebox leftBox" data-aos="fade-down-left">
    <div className="date">2008-2014</div>
    <i className="icon fas fa-school"></i>
    <div className="content">
      <h2>Little Flower School</h2>
      <p>
     Since my father got transferred a lot so I completed my elementary classes from Little Flower School , Gorakhpur.
      </p>
    </div>
  </div>
</div>
    </>
}

export default Timeline;


//shxjkhjkhdkhkqjwhdkjqwhkjdhkjwhkhkwehfewhrkhkhwwefewjh