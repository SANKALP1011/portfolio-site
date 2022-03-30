import React from "react";
import Navigation from "../components/Navbar";
import "../components/About.css"
import Me from "../components/assets/Me.svg";
import "../styles/index.css"
import {init} from "ityped";
import { useEffect , useRef } from "react";
import Tilt from "react-tilt";
import Computer from "../components/assets/Computer.svg";
import Planet from "../components/assets/Planet.svg";
import Player from "../components/assets/Player.svg";
import Nature from "../components/assets/Nature.svg";
import Play from "../components/assets/Play.svg";
import Animals from "../components/assets/Animals.svg";
import aos from "aos";
import "aos/dist/aos.css";

 export const  About = () => {
   
    const AnimatedText = useRef()
    
      useEffect(() => {
    init(AnimatedText.current, { showCursor: false, strings: [ 'CODING.','HITTING GYM.', 'FOOTBALL.','WATCHING TV SERIES.' ] })
    },[]);

    useEffect(() =>{
      aos.init({duration:2000});
    },[]);
    

  return <div>
  <Navigation />
  <div className="custom-shape-divider-top-1642173651">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
    </svg>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  sm: content-center">
           <div>
               <h1 className="ABoutText" data-aos="fade-up-left"><span className="AboutMEOne">A</span>
               <span className="AboutMETwo" >B</span>
               <span className="AboutMEThree">O</span>
               <span className="AboutMEFour">U</span>
               <span className="AboutMEFive">T</span>
              </h1>
               <h2 className="SubText ContactUs" data-aos="fade-up-right">
               I LOVE  <span ref={AnimatedText} className="AnimatedText"></span>
               </h2>
               <div className="TextParagraph xs:text-xs sm:text-sm md:text-lg  xs:text-overflow" data-aos="fade-down-left">
               <p className="AboutMePara xs:p-4 xs:text-center">Well, I am second year student who is pursuing integrated bachelor's and master's of technology from Vellore Institute of Technology , Vellore in computer science field. I 
            am die hard barcelona fan. I started watching formula one around 8-9 months and now I could proudly say that I know a lot about formuala one. My github journey coould be summed in three words which would be push 
            || pull || commit . I love to hit the gym specially on the pull days. Sadly , I have never seen my college because I am a second year student that in Vit. Also , do hover below the blocks below !
               </p>
               </div>
               <div className="AboutBlocks grid lg:grid-cols-3 sm:grid-cols-2 xs: grid-cols-2 md:grid-cols-3">
               <Tilt>
               <div className="Blockone shadow-xl" data-aos="fade-down-right">
               <img src={Planet} className="AboutIcons" alt="planet" />
                       
                    </div>
               </Tilt>
               <Tilt>
               <div className="Blocktwo" data-aos="fade-down-left">
               <img src={Computer} className="AboutIcons" alt="computer" />
                    {/* <p><MDBIcon icon="fas fa-globe-asia" style={style} size="lg" className="AboutIcons" /></p> */}
               </div>
               </Tilt>
               <Tilt>
               <div className="Blockthree shadow-2xl" data-aos="fade-down-right">
               <img src={Player} className="AboutIcons" alt="player" />
                </div>
               </Tilt>
               <Tilt>
               <div className="Blockone shadow-2xl" data-aos="fade-down-left">
               <img src={Nature} className="AboutIcons" alt="nature" />
                    </div>
               </Tilt>
               <Tilt>
               <div className="Blocktwo shadow-2xl" data-aos="fade-down-right">
               <img src={Play} className="AboutIcons" alt="play" />
               </div>
               </Tilt>
               <Tilt>
               <div className="Blockthree shadow-2xl" data-aos="fade-down-left">
               <img src={Animals} className="AboutIcons" alt="animals" />

                </div>
               </Tilt>
               </div>
           </div>
           <div className="max-w-screen-lg mx-auto pb-10" data-aos="fade-down-right">
               <img src={Me} alt="Me" className="MeImage  mx-auto"/>
           </div>
       </div>
            
        



    
       {/* <div className="ABOUT">
           
               <h1 className="ABoutText">ABOUT ME</h1>
               <img src={Me} className="MeImage"></img>
        
       </div> */}
</div>

   <div className="custom-shape-divider-bottom-1642173415">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
  </div>
}
export default About;
