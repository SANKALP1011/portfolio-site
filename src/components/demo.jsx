import React from "react";
import MainImage from "../components/assets/MainImage.svg";
import ProjectImage from "../components/assets/Project.svg";
import SocialICons from "../components/SocialIcons";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "../styles/index.css";
import aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Main = () => {
  const AnimatedTextOne = useRef();
  const MainText = useRef();
  const ProjectAnimation = useRef();

  useEffect(() => {
    init(AnimatedTextOne.current, {
      showCursor: false,
      strings: [
        "Student.",
        "Full Stack Developer.",
        "Database Designer.",
        "App Developer.",
      ],
    });
  }, []);
  useEffect(() => {
    init(MainText.current, {
      showCursor: false,
      strings: ["Computer Science."],
    });
  }, []);
  useEffect(() => {
    init(ProjectAnimation.current, {
      showCursor: false,
      strings: [
        "Full Stack Developer.",
        "App Developer.",
        "Database designer.",
      ],
    });
  }, []);

  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="custom-shape-divider-top-1642097561">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>

        <div className="grid lg:grid-cols-2  md:grid-cols-2 xs:grid-cols-1">
          <div
            className="MainHeading mt-6 text-4xl font-headline tracking-tight font-extrabold"
            data-aos="fade-right"
          >
            <h1 className="Hello">HELLO,</h1>
            <h1 className="Name">
              I am <span className="FirstText">S</span>
              <span className="SecondText">A</span>
              <span className="ThirdText">N</span>
              <span className="FourthText">K</span>
              <span className="FifthText">A</span>
              <span className="SixthText">L</span>
              <span className="SeventhText">P</span>
            </h1>
            <p>
              {" "}
              I am a{" "}
              <span className="AnimatedText" ref={AnimatedTextOne}></span>
            </p>
            <p className="AboutSubText">
              Third year student at Vellore Institute of Technology , Vellore
              purusing <span className="AnimatedText">Computer Science.</span>{" "}
            </p>
            <SocialICons />
          </div>
          <div className="MainImage" data-aos="fade-left">
            <img src={MainImage} alt="ME" className=""></img>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
          <div className="ProjectArea" data-aos="fade-up-left">
            <img
              src={ProjectImage}
              alt="ProjectIOmage"
              className="ProjectImage"
            ></img>
          </div>
          <div className="Project" data-aos="fade-up-right">
            <h1 className="ProjectsTitle">Projects</h1>
            <p className="SubProject">
              Check out my various projects and applications where I have worked
              as{" "}
              <span
                className="ProjectAnimatedText"
                ref={ProjectAnimation}
              ></span>
            </p>
            <NavLink exact to="/Project">
              <button
                type="button"
                className=" ProjectButton text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Projects
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1642097969">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default Main;
