/** @format */
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Timer from "./Timer.jpg";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);
  const featureRef = useRef(null);
  useEffect(() => {
    const feaRef = featureRef.current;

    gsap.fromTo(
      feaRef.querySelectorAll(".feature-ref"),
      { opacity: 0, y: -20 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: feaRef.querySelectorAll(".feature-ref"),

          ease: "power1.inOut",
        },
      }
    );
  }, []);

  return (
    <section ref={featureRef} className=" max-w-[1240px] lg:ml-20 mb-40">
      <h1 className="text-center text-3xl md:text-4xl mb-8 font-bold">
        Our Amazing Features !
      </h1>

      <div className="flex flex-col items-center  mt-10 gap-10 text-center md:grid  md:grid-cols-2 md:grid-rows-2 md:text-start ">
        <div className="feature-ref max-w-sm w-full  [&>*]:mb-8">
          <svg
            className="block m-auto md:inline-block"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 38.0964L38.3721 50L30.2326 41.6675L33.7209 38.0964L38.3721 42.8578L46.5116 34.5253L50 38.0964ZM43.0233 23.812C44.5652 23.812 46.044 24.4391 47.1343 25.5553C48.2247 26.6714 48.8372 28.1853 48.8372 29.7638C48.8372 30.5019 48.6977 31.2161 48.4651 31.8827C46.0465 29.7638 42.9302 28.5735 39.5349 28.5735C31.8372 28.5735 25.5814 34.9776 25.5814 42.8578V44.1434C24.7442 41.6675 22.4419 40.001 19.7674 40.001C16.2791 40.001 13.4884 42.8578 13.4884 46.4289V50H4.65116C2.09302 50 0 47.8573 0 45.2386V36.1918H3.48837C6.97674 36.1918 9.76744 33.3349 9.76744 29.7638C9.76744 26.1927 6.97674 23.3359 3.48837 23.3359H0V14.2891C0 13.0263 0.490032 11.8152 1.36229 10.9223C2.23456 10.0293 3.4176 9.52766 4.65116 9.52766H13.9535V5.95658C13.9535 2.67117 16.5581 0 19.7674 0C22.9767 0 25.5814 2.67117 25.5814 5.95658V9.52766H34.8837C36.1173 9.52766 37.3003 10.0293 38.1726 10.9223C39.0448 11.8152 39.5349 13.0263 39.5349 14.2891V23.812H43.0233Z"
              fill="#127099"
            />
          </svg>
          <h1 className="text-3xl md:text-4xl text-manage">
            An all-encompassing platform
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-lato">
            Mobilize everything into a single, central platform to handle all of
            your productivity objectives and track progress.
          </h2>
        </div>
        <div className="feature-ref max-w-sm w-full [&>*]:mb-8">
          <svg
            className="block m-auto lg:inline"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.3004 18.7932L36.3129 18.7807L34.1505 16.012C34.1103 15.9602 34.0603 15.9169 34.0034 15.8844C33.9464 15.852 33.8837 15.8311 33.8186 15.823C33.7536 15.8149 33.6876 15.8196 33.6245 15.8371C33.5613 15.8545 33.5022 15.8842 33.4505 15.9245L30.3006 18.3807L25.8945 12.7496C25.8543 12.6978 25.8043 12.6545 25.7474 12.622C25.6904 12.5896 25.6277 12.5687 25.5626 12.5606C25.4976 12.5525 25.4316 12.5572 25.3685 12.5747C25.3053 12.5921 25.2462 12.6218 25.1945 12.6621L22.8258 14.5183C22.774 14.5585 22.7307 14.6084 22.6982 14.6654C22.6658 14.7223 22.6449 14.7851 22.6368 14.8501C22.6287 14.9152 22.6335 14.9811 22.6509 15.0443C22.6683 15.1075 22.698 15.1666 22.7383 15.2183L27.1444 20.8556L27.1319 20.8618L29.2944 23.6305C29.4631 23.8493 29.7756 23.8868 29.9944 23.718L33.1443 21.2618L37.1504 26.3867C37.3191 26.6054 37.6316 26.6429 37.8504 26.4742L40.219 24.6242C40.4378 24.4555 40.4753 24.143 40.3065 23.9242L36.3004 18.7932ZM31.0006 0C20.5071 0 12.0011 8.50598 12.0011 18.9994C12.0011 23.393 13.4948 27.4366 15.9948 30.6553L0.145246 46.5048C0.0521974 46.5988 0 46.7257 0 46.8579C0 46.9902 0.0521974 47.1171 0.145246 47.211L2.78892 49.8547C2.98266 50.0484 3.3014 50.0484 3.49514 49.8547L19.3447 34.0052C22.5633 36.5051 26.607 37.9988 31.0006 37.9988C41.494 37.9988 50 29.4928 50 18.9994C50 8.50598 41.494 0 31.0006 0ZM41.0753 29.0741C38.3878 31.7678 34.8067 33.249 31.0006 33.249C27.1944 33.249 23.6133 31.7678 20.9259 29.0741C18.2322 26.3867 16.751 22.8055 16.751 18.9994C16.751 15.1933 18.2322 11.6121 20.9259 8.92472C23.6133 6.23106 27.1944 4.74985 31.0006 4.74985C34.8067 4.74985 38.3878 6.23106 41.0753 8.92472C43.7689 11.6121 45.2501 15.1933 45.2501 18.9994C45.2501 22.8055 43.7689 26.3867 41.0753 29.0741Z"
              fill="#4B7A0E"
            />
          </svg>

          <h1 className="text-3xl md:text-4xl text-manage">
            Set Regular Monitoring Intervals{" "}
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-lato ">
            Settle on an interval that fits your needs and the project timeline,
            and communicate those reporting expectations to your team.
          </h2>
        </div>
        <div
          ref={featureRef}
          className="feature-ref max-w-sm w-full [&>*]:mb-8"
        >
          <svg
            className="block m-auto lg:inline"
            width="50"
            height="44"
            viewBox="0 0 50 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1.73714e-07C13.0789 -0.000391918 11.2167 0.662973 9.72849 1.87782C8.2403 3.09267 7.21755 4.78439 6.83333 6.66667H0V10H6.83333C7.21586 11.8838 8.23788 13.5775 9.72624 14.794C11.2146 16.0105 13.0777 16.675 15 16.675C16.9223 16.675 18.7854 16.0105 20.2738 14.794C21.7621 13.5775 22.7841 11.8838 23.1667 10H50V6.66667H23.1667C22.7824 4.78439 21.7597 3.09267 20.2715 1.87782C18.7833 0.662973 16.9211 -0.000391918 15 1.73714e-07ZM35 26.6667C33.0789 26.6663 31.2167 27.3296 29.7285 28.5445C28.2403 29.7593 27.2176 31.4511 26.8333 33.3333H0V36.6667H26.8333C27.2159 38.5505 28.2379 40.2441 29.7262 41.4606C31.2146 42.6771 33.0777 43.3417 35 43.3417C36.9223 43.3417 38.7854 42.6771 40.2738 41.4606C41.7621 40.2441 42.7841 38.5505 43.1667 36.6667H50V33.3333H43.1667C42.7824 31.4511 41.7597 29.7593 40.2715 28.5445C38.7833 27.3296 36.9211 26.6663 35 26.6667Z"
              fill="#B62A2A"
            />
          </svg>

          <h1 className="text-3xl md:text-4xl text-manage">
            Customize Your Features Easily.{" "}
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-lato">
            To automate projects and make work easier, write your own code. To
            perform any other task, schedule notifications, call webhooks, or
            set off business rules.
          </h2>
        </div>
        <div
          ref={featureRef}
          className="feature-ref max-w-sm w-full [&>*]:mb-8"
        >
          <img className="block m-auto lg:inline" src={Timer} alt="real-time" />

          <h1 className="text-3xl md:text-4xl text-manage">
            Real-time Collaboration
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-lato">
            Work together in real time with your team and clients to get your
            questions answered and projects completed on schedule and within
            budget.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
