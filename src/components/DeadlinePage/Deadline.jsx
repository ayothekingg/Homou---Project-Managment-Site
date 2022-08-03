/** @format */
import mainRec from "./mainRec.jpg";
import sideRec from "./sideRec.jpg";
import blackCircle from "./black.jpg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Deadline = () => {
  gsap.registerPlugin(ScrollTrigger);
  const deadlineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      deadlineRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: deadlineRef.current,

          ease: "power1.inOut",
        },
      }
    );
  }, []);

  return (
    <section className="mb-56 overflow-x-clip">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-[0_0_40%] flex justify-center items-center">
          <div
            ref={deadlineRef}
            className="text-center flex-col [&>*]:my-2 max-w-[380px] lg:text-start"
          >
            <h1 className="text-4xl lg:text-5xl lg:leading-[50px] text-manage">
              Avoid Missing Project Deadline
            </h1>
            <h2 className="text-2xl text-primary">
              To evaluate what, when, and who to prioritize, plan ahead by
              comparing the hours that your team have worked against the
              estimated times.
            </h2>
            <button className="border-none rounded-lg py-2 px-5 text-2xl text-white   border-2 bg-button hover:text-black">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative mt-10">
          <div className="py-10">
            <img
              className="relative z-10 rounded-xl"
              src={mainRec}
              alt="main-rectangle"
            />
            <img
              className="absolute -top-0  -left-8     "
              src={blackCircle}
              alt="circle"
            />

            <img
              className="absolute bottom-2  -right-12"
              src={blackCircle}
              alt="circle"
            />
          </div>
          <img
            className="absolute top-2/4 z-20"
            src={sideRec}
            alt="side-rectangle"
          />
        </div>
      </div>
    </section>
  );
};

export default Deadline;
