/** @format */
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import BuzzFeed from "./BuzzFeed.jpg";
import Amazon from "./Amazon.jpg";
import Nokia from "./Nokia.jpg";
import WeWork from "./WeWork.jpg";
import Feebris from "./Feebris.jpg";
import Spotify from "./Spotify.jpg";
import Canon from "./Canon.jpg";
import Epson from "./Epson.jpg";

const Sponsors = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sponsorRef = useRef(null);
  useEffect(() => {
    const sponsRef = sponsorRef.current;

    gsap.fromTo(
      sponsRef.querySelectorAll(".sponsor-ref"),
      { opacity: 0, y: -20 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sponsRef.querySelectorAll(".sponsor-ref"),

          ease: "power1.inOut",
        },
      }
    );
  }, []);

  useEffect(() => {
    const sponsRef = sponsorRef.current;

    gsap.fromTo(
      sponsRef.querySelectorAll(".sponsor-ref-two"),
      { opacity: 0, y: 20 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sponsRef.querySelectorAll(".sponsor-ref-two"),

          ease: "power1.inOut",
        },
      }
    );
  }, []);

  return (
    <section ref={sponsorRef} className="mb-56">
      <div>
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Leading Brands Who Trust Us{" "}
        </h1>
        <div className=" flex flex-col items-center mt-12 md:ml-24 md:grid gap-10 md:grid-cols-2 lg:grid-cols-4 grid-rows-2">
          <div className="sponsor-ref-two">
            <img className="mt-20" src={BuzzFeed} alt="buzzfeed-logo" />
          </div>
          <div className="sponsor-ref">
            <img className="mt-20" src={Amazon} alt="amazon-logo" />
          </div>
          <div className="sponsor-ref-two">
            <img className="mt-20" src={Nokia} alt="nokia-logo" />
          </div>
          <div className="sponsor-ref">
            <img className="mt-16 -ml-8" src={WeWork} alt="wework-logo" />
          </div>
          <div className="sponsor-ref-two">
            <img className="md:-mt-0 -ml-4" src={Feebris} alt="feebris-logo" />
          </div>
          <div className="sponsor-ref">
            <img className="" src={Spotify} alt="spotify-logo" />
          </div>
          <div className="sponsor-ref-two">
            <img className="" src={Canon} alt="conon-logo" />
          </div>
          <div className="sponsor-ref">
            <img className="md:mt-0" src={Epson} alt="epson-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
