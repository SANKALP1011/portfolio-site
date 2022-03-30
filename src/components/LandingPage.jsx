import React from "react";
import Lottie from "lottie-web";
import Rocket from "../components/assets/Rocket.json";
import { useEffect , useRef } from "react";
import { init } from "ityped";
import { NavLink } from "react-router-dom";


export const LandingPage = () => {
    React.useEffect(() => {
        Lottie.loadAnimation({
          container: document.querySelector("#Rocket"),
          animationData: Rocket,
        });
      }, []);
      const Intro = useRef();
      useEffect(() => {
        init(Intro.current, { showCursor: false, strings: [ 'HELLO,','HOLA,' ] })
        },[]);
    return<>
    <div id="Rocket" />
    <div className="LandingIntro">
    <NavLink exact to='/Main'>
        <button  type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Let's Begin</button>
        </NavLink>
        <br></br>
        <h1><span className="GreetText" ref={Intro}></span> </h1>
        <h3 className="SubGreetText">I am  Sankalp and I welcome you to my portfolio.</h3>
        <p>For the best experience , visit this site on the laptop or pc.</p>
        
      
    </div>

    </>
}
export default LandingPage;