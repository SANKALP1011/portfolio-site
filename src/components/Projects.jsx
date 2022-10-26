import React, { useRef, useEffect } from "react";
import Navigation from "../components/Navbar";
import WebImage from "../components/assets/WebImage.svg";
import AppImage from "../components/assets/App.svg";
import DatabaseImage from "../components/assets/Database.svg";
import "../styles/index.css";
import { init } from "ityped";
import aos from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  const WebAnimated = useRef();
  useEffect(() => {
    init(WebAnimated.current, {
      showCursor: false,
      strings: [
        "Full Stack Applications.",
        "Frontend Applications.",
        "Database applications.",
      ],
    });
  }, []);

  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navigation />
      <div class="custom-shape-divider-top-1643035441">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
          <div className="WebHeading" data-aos="fade-up-left">
            <h1 className="WebMainText">
              <span className="Ctwo">W</span>
              <span className="Cone">E</span>
              <span className="Cfour">B</span>
              <span className="Cfive"></span>
              <span className="Cthre">P</span>
              <span className="Csix">R</span>
              <span className="Ctwo">O</span>
              <span className="Cfive">J</span>
              <span className="Cthree">E</span>
              <span className="Cone">C</span>
              <span className="Cfour">T</span>
              <span className="Cfive">S</span>
            </h1>
            <p className="SubprojectText">
              I have a keen interest in web related technologies and frameworks
              and currently I have developed and would be developing various{" "}
              <span className="WebSpanText" ref={WebAnimated}></span>
            </p>
          </div>
          <div
            className="WebImage max-w-screen-lg mx-auto pb-10"
            data-aos="fade-down-right"
          >
            <img src={WebImage} alt="WebImage" className="Web mx-auto"></img>
          </div>
        </div>

        <div className="ProjectBlocks grid lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-1 xs:justify-center">
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Reservation Web</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the minimal frontend for the reservation api which
                    is built using the react.js as the framework and is built to
                    showcase the features the reservation api.
                  </p>
                  <div className="LinkButtons">
                    <a href="http://reservationweb.vercel.app/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/Reservation-web">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Reservation Api</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the booking api where once the user authenticates
                    them they could book the flights , cabs and trains for their
                    journey. This is built using node,express and mongoDb along
                    with jwt.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://reservation-apii.herokuapp.com/v1/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/ReservationApi">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Football Api</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the football api which is built using node , express
                    and mysql and tested on postman along with the postman
                    collection link.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://www.postman.com/material-observer-91426431/workspace/football-api/collection/24017825-7f078c23-7575-4119-bf33-a7ca56a59619?action=share&creator=24017825">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/Football-Api">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Data Dashboard</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is data visualisation dashboard which is built using
                    react as frontend and uses chart.js visualising user data
                    which is in json format.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://data-visualisation-dashbaord.vercel.app/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/data-visualisation-dashbaord">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Maps App</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is a web app which uses react as the frontend and
                    google maps api to calculate the distance , route and
                    duration to reach a place.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://react-google-mapsroute.netlify.app/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/react-google-map">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Booking app</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This the ongoing all in one booking app where you can book
                    plane , flight and cabs ticket in single application. Api is
                    also designed by me.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/BookingSystem">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/BookingSystem">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Photo engine</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the image search engine which is built using react
                    as framework and consumes unsplash api.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://unsplashapiengine.vercel.app">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/unsplashapiengine">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Tweet-x</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is frontend for the tweet-x web app which is built
                    using react as framework and will be conncted to node and
                    express based backend.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://tweet-x-ten.vercel.app/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/tweet-x">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Anime app</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is an anime app that is build uisng react as framework
                    and fetches the info from the anime api with dedicated
                    routes.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://anime-app-ebon.vercel.app">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/anime_app">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Weather Api</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the express based weather api that displays live
                    weather information and stores the information to the
                    database.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://my-weather-apiii.herokuapp.com/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/WeatherApi">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-down-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle ">Item manager</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    Grocery database manager built using ejs , html and css as
                    frontend languages and backend built using node , express
                    and mysql workbench.Deployed on heroku.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://shop-databasee.herokuapp.com/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/GROCERY_MANAGER">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">My Portfolio</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    My personel Portfolio built from scratch using React and
                    various other frameworks . if you are seeing this you are on
                    my portfolio site and I'll assume that you are impressed
                    from the design?
                  </p>
                  <div className="LinkButtons">
                    <a href="https://sankalp-pandey.vercel.app">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/portfolio-site.">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-down-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Weather Spy</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    A single screen weather app built using node , express and
                    weather api as backend and frontend built using html , css
                    and ejs. This web app is deployyed on heroku server.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://weatherspy.herokuapp.com/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/WeatherApp">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">TASKY</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    A simple but neat task app build using html , css and ejs as
                    backend and for the backend uses node , express and mongo
                    database. Deployed on heroku using aws server and monngo
                    atlas.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://todooy.herokuapp.com/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/TASKY">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-down-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Sneaker Site</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    Well , I love building static sites with no functanality so
                    here is static nike snekar site built using vanilla html ,
                    css and javascript using tailwind and bootstrap as
                    framework.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://sankalp1011.github.io/SneakerSite/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/SneakerSite">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Coffee Bean</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is another static designed which I saw on dribble and
                    got inspired to code it down using html , css and javascript
                    using bootstarp as the framework.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://sankalp1011.github.io/CoffeeBeans/">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/CoffeeBeans">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-down-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="ProjectTitle">Backend Api</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the solar sytem api built using node , express and
                    mysql database which contains information about the planet
                    and deployed on heroku.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://solarapii.herokuapp.com/#">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Live
                      </button>
                    </a>
                    <a href="https://github.com/SANKALP1011/BackendSolarSystemApi">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
          <div
            className="WebImage max-w-screen-lg mx-auto pb-10"
            data-aos="fade-up-left"
          >
            <img src={AppImage} alt="WebImage" className="Web mx-auto"></img>
          </div>

          <div className="WebHeading" data-aos="fade-down-right">
            <h1 className="WebMainText">
              {" "}
              <span className="Ctwo">A</span>
              <span className="Cone">P</span>
              <span className="Cfour">P</span>
              <span className="Cfive"></span>
              <span className="Cthre">P</span>
              <span className="Csix">R</span>
              <span className="Ctwo">O</span>
              <span className="Cfive">J</span>
              <span className="Cthree">E</span>
              <span className="Cone">C</span>
              <span className="Cfour">T</span>
              <span className="Cfive">S</span>
            </h1>
            <p className="SubprojectText">
              As I love ios platform, hence I have developed various app using
              swift for the ios platforms.<span className="SpanText"></span>
            </p>
          </div>
        </div>
        <div className="ProjectBlocks grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 xs:justify-center">
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">CONNECT-Y</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is complete messaging app built using swift and using
                    firebase as the backend , having a neat ui.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/CONNECT-Y">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Blocks" data-aos="fade-down-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">RICKIPEDIA</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is an app coded using swift for the rick and morty
                    series , app includes facts from tha api and a small quiz
                    about the series.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/RICKIPEDIA">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">MOVIE</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    An app with neat ui built using swift which consume the
                    movie api for the finding the highest rated movie from all
                    the time.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/MOVIE-APP">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-down-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">BEVERAGES</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    An hot beverage ordering app with neat ui which uses
                    firebase as the backend for the user auth and database coded
                    using swift.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/BEVERAGES">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">TIC TAC TOE</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    A tic tac toe game app built using swift where user can play
                    against the compueter , obviously the ai of computer side is
                    weak so it's quite easy to win.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/TIC-TAC-TOEY">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-down-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">PIZZA</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is an pizza calculater app coded using swift where we
                    can calculate how many pizza should we order based on the
                    various factors.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/PIZZA-CALCULATOR">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
          <div
            className="WebImage max-w-screen-lg mx-auto pb-10"
            data-aos="fade-up-left"
          >
            <img
              src={DatabaseImage}
              alt="WebImage"
              className="Web mx-auto"
            ></img>
          </div>

          <div className="WebHeading" data-aos="fade-down-right">
            <h1 className="WebMainText">
              {" "}
              <span className="Ctwo">D</span>
              <span className="Cone">A</span>
              <span className="Cfour">T</span>
              <span className="Cfive">A</span>
              <span className="Cthree">B</span>
              <span className="Csix">A</span>
              <span className="Ctwo">S</span>
              <span className="Cfive">E</span>
            </h1>
            <p className="SubprojectText">
              {" "}
              I love designing database for the various web applications using
              sql related technologies. <span className="SpanText"></span>
            </p>
          </div>
        </div>
        <div className="ProjectBlocks grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 xs:justify-center">
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">INVENTORY DB</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the database which I am currently building using
                    mysql workbench where I'll demonstrate all the sql queries ,
                    triggers and everything.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/OnlineInventoryDatabase">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Blocks" data-aos="fade-down-right">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">GROCERY DB</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the database designed and developed using mysql
                    workbench for the project grocery manager which I mentioned
                    in the web section.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/GROCERY_MANAGER">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Blocks" data-aos="fade-up-left">
            <div className="ProjectBox">
              <div className="SubProjectBox">
                <div className="ProjectContent">
                  <h2 className="AppTitle">LIBRARY DB</h2>
                  <h2 className="ContactUs"></h2>
                  <p className="AboutProject">
                    This is the database designed for the college project where
                    created an library management app using mysql workbench.
                  </p>
                  <div className="LinkButtons">
                    <a href="https://github.com/SANKALP1011/LibraryDatabase">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1643035612">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Projects;
