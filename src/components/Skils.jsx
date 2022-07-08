import React from "react";
import SkillImage from "../components/assets/Skills.svg";
import { useRef , useEffect } from "react";
import {init} from "ityped";
import LnaguageImgae from "../components/assets/Languages.svg";
import ReactInmage from "../components/assets/React.svg";
import aos from "aos";
import "aos/dist/aos.css";
import Naviagtion from "../components/Navbar";

export const Skills = () =>{
  const Animatiion = useRef();
  useEffect(() => {
    init(Animatiion.current, { showCursor: false, strings: [ 'FRAMEWORKS','TOOLS'] })
    },[]);
    useEffect(() =>{
        aos.init({duration:2000});
      },[]);
    return <>
    <Naviagtion />
        <div class="custom-shape-divider-top-1643206829">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
        <div className="SkillSection" data-aos="fade-up-right">
            <h1 className="Heading"><span className="Cone">S</span>
            <span className="Ctwo">K</span>
            <span className="Cthree">I</span>
            <span className="Cfour">L</span>
            <span className="Cfive">L</span>
            <span className="Csix">S</span>
            
            </h1>
            <p className="SkillsSubPara">This is my skills sections where you could see how many languages and frameworks I learned and developed and deployed my projects on them,scroll below to check them out.</p>
        </div>
        <div className="SkilsImage max-w-screen-lg mx-auto pb-10" data-aos="fade-up-left" >
            <img src={SkillImage} alt="SkilssImage" className="Skill mx-auto"></img>
        </div>
    </div>

    
 <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
 <div className="Languages" data-aos="fade-up-left">
            <h1 className="Heading">
            <span className="Ctwo">L</span>
            <span className="Cone">A</span>
            <span className="Cfour">N</span>
            <span className="Cfive">G</span>
            <span className="Cthree">U</span>
            <span className="Csix">A</span>
            <span className="Cone">G</span>
            <span className="Cfive">E</span>
            <span className="Cthree">S</span>
            </h1>
            <p className="SkillsSubPara">As of now , I have learned and developed various applications on the latest programing languageas .</p>
        </div>
        <div className="LImage max-w-screen-lg mx-auto pb-10" data-aos="fade-up-right">
            <img src={LnaguageImgae} alt="Liamge" className="LangaugeUImage  mx-auto" />
        </div>
</div>
  <div className="Skillsbar">
  <p className="SkillText"  data-aos="fade-right">C++</p>
    <div className="bar advanced" data-skill="" data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">SWIFT</p>
    <div className="bar back advanced" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">JAVA</p>
    <div className="bar front intermediate" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left" >SHELL</p>
    <div className="bar colour2 intermediate" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">SQL</p>
    <div className="bar colour3 Best" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">HTML</p>
    <div className="bar colour4 advanced" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">CSS</p>
    <div className="bar colour5 advanced" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">JAVASCRIPT</p>
    <div className="bar colour6 intermediate" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">R</p>
    <div className="bar colour7 ametuer" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">PYTHON</p>
    <div className="bar colour6 intermediate" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">TYPESCRIPT</p>
    <div className="bar colour7 advanced" data-skill=""  data-aos="fade-right"></div>
 </div>

<div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
 <div className="Frameworks"  data-aos="fade-up-right">
            <h1 className="Heading">
            <span className="Cspace">F</span>
            <span className="Ctwo">R</span>
            <span className="Cone">A</span>
            <span className="Cfour">M</span>
            <span className="Cfive">E</span>
            <span className="Cthree">W</span>
            <span className="Csix">O</span>
            <span className="Cone">R</span>
            <span className="Cfive">K</span>
         </h1>
            <p className="SkillsSubPara">As of now , I have learned and developed various applications using following frontend and backend frameworks.</p>
        </div>
        <div className="max-w-screen-lg mx-auto pb-10"  data-aos="fade-up-left">
            <img src={ReactInmage} alt="R" className="FrameworkImage  mx-auto" />
        </div>
      
</div>
  <div className="Skillsbar">
  <p className="SkillText"  data-aos="fade-right">NODE</p>
    <div className="bar advanced" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">EXPRESS</p>
    <div className="bar back advanced" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">MONGO</p>
    <div className="bar front intermediate" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">REACT</p>
    <div className="bar colour2 advanced" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">NEXT</p>
    <div className="bar colour7 advanced" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">ANGULAR</p>
    <div className="bar colour2 intermediate" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">REALM</p>
    <div className="bar colour3 intermediate" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-right">TAILWIND</p>
    <div className="bar colour4 advanced" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">BOOTSTRAP</p>
    <div className="bar colour5 Best" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">MDN BOOTSTRAP</p>
    <div className="bar colour6 advanced" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">EJS</p>
    <div className="bar colour7 advanced" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">DOCKER</p>
    <div className="bar ametuer" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">HEROKU</p>
    <div className="bar back advanced" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">VERCEL</p>
    <div className="bar front Best" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">MONGO ATLAS</p>
    <div className="bar colour2 intermediate" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">COCOA PODS</p>
    <div className="bar colour3 intermediate" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">API</p>
    <div className="bar colour4 intermediate" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">POSTMAN</p>
    <div className="bar colour5 intermediate" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">JQUERY</p>
    <div className="bar colour6 ametuer" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">GIT</p>
    <div className="bar colour7 advanced" data-skill=""  data-aos="fade-right"></div>
    <p className="SkillText"  data-aos="fade-left">ROBO 3T</p>
    <div className="bar colour7 advanced" data-skill=""  data-aos="fade-left"></div>
    <p className="SkillText"  data-aos="fade-right">XCODE</p>
    <div className="bar colour7 advanced" data-skill=""  data-aos="fade-right"></div>
 </div>

</div>
<div class="custom-shape-divider-bottom-1643207379">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
    </>
}
export default Skills;