import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const SocialIcons = () => {
    const style = {color: "white"};
    useEffect(() =>{
        aos.init({duration:2000});
      },[]);
    return <>
         <div className="SocialIcons">
               <a href="https://github.com/SANKALP1011"><MDBIcon fab icon="github" size="lg" style={style} className="SocialIconsImages" data-aos="fade-up-left"/></a> 
               <a href="https://www.instagram.com/sankalp_.10"><MDBIcon fab icon="instagram" size="lg" style={style}  className="SocialIconsImages" data-aos="fade-down-right"/></a> 
                <a href="https://www.linkedin.com/in/sankalp-pandey-688a28223"><MDBIcon fab icon="linkedin" size="lg" style={style}  className="SocialIconsImages" data-aos="fade-up-left"/></a>
            </div>
    </>
}
export default SocialIcons;