import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const Timeline = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="timeline">
        <div className="TimeLinebox rightBox" data-aos="fade-down-right">
          <div className="date">Sept-Now</div>
          <i className="icon fas fa-code"></i>
          <div className="content">
            <h2>Applied Computing</h2>
            <p>
              Working as the frontend developer using React.js for a banglore
              based company which provides software solutions to it's clients. I
              completely designed the web page from the scratch by creating a
              wireframe then converting then wireframe into a figma mockup and
              finally coding that mockup using the react.js as framework. I
              completed all this task within a time span of three weeks.
            </p>
          </div>
        </div>
        <div className="TimeLinebox leftBox" data-aos="fade-down-left">
          <div className="date">June-August</div>
          <i className="icon fas fa-code"></i>
          <div className="content">
            <h2>Bxtended</h2>
            <p>
              Worked as backend intern for a australian user based company which
              provides project management technologies for the companies. I
              added two new api features to deal with push notifications in
              node.js and express.js for the user and created new features for
              the frontend using angular.js
            </p>
          </div>
        </div>
        <div className="TimeLinebox rightBox" data-aos="fade-down-right">
          <div className="date">2022-Now</div>
          <i className="icon fas fa-code"></i>
          <div className="content">
            <h2>Apple Developers Group</h2>
            <p>
              Working as a full stack web and ios developer in the Apple
              Developers Group.
            </p>
          </div>
        </div>
        <div className="TimeLinebox leftBox" data-aos="fade-down-left">
          <div className="date">2020-Now</div>
          <i className="icon fas fa-university"></i>
          <div className="content">
            <h2>Vellore Insititute of Technology</h2>
            <p>
              Started my college journey from Vellore Insititute of Technology ,
              Vellore pursuing integrated Btech and Mtech from Core Computer
              Science.
            </p>
          </div>
        </div>
        <div className="TimeLinebox rightBox" data-aos="fade-down-right">
          <div className="date">2014-2020</div>
          <i className="icon fas fa-graduation-cap"></i>
          <div className="content">
            <h2>Delhi Public School</h2>
            <p>
              Completed my schooling from Delhi Public School , Lucknow between
              the year's 2014-2020.
            </p>
          </div>
        </div>
        <div className="TimeLinebox leftBox" data-aos="fade-down-left">
          <div className="date">2008-2014</div>
          <i className="icon fas fa-school"></i>
          <div className="content">
            <h2>Little Flower School</h2>
            <p>
              Completed my schooling from Little Flower School , Gorakhpur
              between the year's 2008-2014.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;

//shxjkhjkhdkhkqjwhdkjqwhkjdhkjwhkhkwehfewhrkhkhwwefewjh
