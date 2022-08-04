/** @format */
import avi from "./display.jpg";
import avi2 from "./display2.jpg";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useState } from "react";

const Testimonial = () => {
  gsap.registerPlugin(ScrollTrigger);
  const testimonialRef = useRef(null);
  useEffect(() => {
    const testRef = testimonialRef.current;
    gsap.fromTo(
      testRef.querySelectorAll(".testimonial-ref"),
      { opacity: 0, y: -20 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: testRef.querySelectorAll(".testimonial-ref"),

          ease: "power1.inOut",
        },
      }
    );
  }, []);

  const [firstClick, setFirstClick] = useState(1);

  return (
    <section ref={testimonialRef} className="bg-secondary py-10 mb-40 relative">
      <svg
        onClick={() => {
          setFirstClick(1);
        }}
        className="absolute top-[85%] lg:top-2/4 left-12 cursor-pointer w-16 h-16 md:w-20 md:h-20"
        viewBox="0 0 94 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_62_124)">
          <circle r="37" transform="matrix(-1 0 0 1 47 43)" fill="white" />
          <path
            d="M54.4 33.75L45.15 43L54.4 52.25L52.55 55.95L39.6 43L52.55 30.05L54.4 33.75Z"
            fill="#000813"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_62_124"
            x="0"
            y="0"
            width="94"
            height="94"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_124"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_124"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        onClick={() => {
          setFirstClick(0);
        }}
        className="absolute top-[85%] lg:top-2/4 right-12 cursor-pointer w-16 h-16 md:w-20 md:h-20"
        viewBox="0 0 94 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_62_123)">
          <circle cx="47" cy="43" r="37" fill="white" />
          <path
            d="M39.6 33.75L48.85 43L39.6 52.25L41.45 55.95L54.4 43L41.45 30.05L39.6 33.75Z"
            fill="#000813"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_62_123"
            x="0"
            y="0"
            width="94"
            height="94"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_123"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_123"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center md:text-4xl mb-8 font-bold">
          What Brands Say About Us
        </h1>
        {firstClick ? (
          <div className="testimonial-ref max-w-sm text-center px-4 py-4 md:max-w-3xl md:pt-16 pb-4 md:pl-12 flex flex-col  bg-white rounded-lg w-full shadow-lg md:text-start">
            <div className="max-w-sm md:max-w-3xl w-full">
              <h1 className="text-lg md:text-2xl ">
                One of the main factors in the organization's decision to use
                Homou as their project management platform is its usability.
                It's as simple as they come, making it a terrific choice for
                tiny teams searching for a straightforward answer.
              </h1>

              <div className="flex md:mt-8">
                <div className="mr-2">
                  <img src={avi} alt="display picture" />
                </div>
                <div className=" flex flex-col justify-center">
                  <h1 className="text-lg font-bold text-start">Sodiq David</h1>
                  <h1 className="text-xs">HARLY INCORPORATION</h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="testimonial-ref max-w-sm text-center px-4 py-4 md:max-w-3xl md:pt-16 pb-4 md:pl-12 flex flex-col  bg-white rounded-lg w-full shadow-lg">
            <div className="max-w-sm md:max-w-3xl w-full">
              <h1 className="text-lg md:text-2xl  ">
                The modern society, due to excessive workload and minimal
                manpower, has prompted the need for an adequate project
                management system to aid productivity . We put these two
                requirements first in our quest to attain a hundred percent
                success!
              </h1>

              <div className="flex mt-8">
                <div className="mr-2">
                  <img src={avi2} alt="display picture" />
                </div>
                <div className=" flex flex-col justify-center">
                  <h1 className="text-lg font-bold">James Amoo</h1>
                  <h1 className="text-xs">BE THE FIRST INC</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {firstClick ? (
          <svg
            width="37"
            height="17"
            viewBox="0 0 37 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.50002" cy="8.50002" r="8.50002" fill="#000813" />
            <circle cx="29.7501" cy="8.5001" r="7.08335" fill="#D0DDEE" />
          </svg>
        ) : (
          <svg
            width="38"
            height="17"
            viewBox="0 0 38 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.7501" cy="7.5001" r="7.08335" fill="#D0DDEE" />
            <circle cx="29.5" cy="8.50002" r="8.50002" fill="#000813" />
          </svg>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
