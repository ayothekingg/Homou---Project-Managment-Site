/** @format */
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import homeImg from "./homeImg.jpg";

const Home = () => {
  const homeRef = useRef();
  const homeRefTwo = useRef();
  useEffect(() => {
    gsap.fromTo(homeRef.current, { x: -100 }, { x: 0, duration: 1 });
    gsap.fromTo(homeRefTwo.current, { x: 100 }, { x: 0, duration: 1 });
  });

  return (
    <section className="mb-40 max-w-[1240px] ">
      <div className="flex flex-col lg:flex-row  items-center lg:ml-20 ">
        <div className=" lg:flex-[1_0_50%] justify-center ">
          <div
            ref={homeRef}
            className="text-center max-w-lg w-full [&>*]:mb-5 lg:text-start"
          >
            <h1 className="text-4xl lg:text-5xl lg:leading-[55px] font-bold ">
              We bring together people to achieve great things !
            </h1>
            <h2 className="text-xl md:text-2xl font-lato text-primary">
              The development of each work and the overall strategy will be
              visible to you. Never has tracking been more fun!
            </h2>
            <button className="border-none rounded-lg py-2 px-5 text-2xl text-white   border-2 bg-button hover:text-black">
              Get Started
            </button>
          </div>
        </div>
        <div ref={homeRefTwo} className="justify-center">
          <img src={homeImg} alt="home-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
