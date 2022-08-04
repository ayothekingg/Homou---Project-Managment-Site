/** @format */

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center">
      <div className="grid gap-10 grid-cols-2 lg:grid-cols-6 py-20">
        <div className="col-span-2 mb-4">
          <div className="flex justify-center lg:h-72 items-center">
            <div>
              <svg
                width="172"
                height="50"
                viewBox="0 0 172 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5981 21.0605L46.0199 13.4736C46.9715 13.2221 47.9804 13.1403 48.9756 13.2341C49.9709 13.3279 50.9285 13.595 51.7809 14.0166C52.6333 14.4381 53.36 15.004 53.9099 15.6743C54.4597 16.3446 54.8193 17.1031 54.9635 17.8965C56.4316 25.6017 56.0027 38.279 39.6599 43.7535C32.9761 46.173 25.5197 46.8775 18.3153 45.7699M40.91 28.2201L12.4882 35.807C11.5366 36.0586 10.5277 36.1403 9.53241 36.0465C8.53713 35.9527 7.5796 35.6856 6.72716 35.264C5.87471 34.8425 5.14803 34.2767 4.59821 33.6064C4.04838 32.9361 3.68875 32.1775 3.5446 31.3841C2.07645 23.6789 2.50533 11.0016 18.8467 5.52714C25.5309 3.10733 32.9878 2.4029 40.1927 3.51067"
                  stroke="white"
                  stroke-width="5.85503"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M73.7932 7.51172H78.7678V22.2949H83.1096V7.51172H88.0842V42H83.1096V27.2168H78.7678V42H73.7932V7.51172ZM106.612 36.1465C106.612 40.4121 104.227 42.5508 99.4573 42.5625C94.6995 42.5625 92.3206 40.4238 92.3206 36.1465V17.4961C92.3206 13.2305 94.6995 11.0977 99.4573 11.0977C104.227 11.0977 106.612 13.2305 106.612 17.4961V36.1465ZM101.637 17.4961C101.637 16.125 100.916 15.4395 99.4749 15.4395H99.4397C98.01 15.4395 97.2952 16.125 97.2952 17.4961V36.1465C97.2952 37.5176 98.0159 38.2031 99.4573 38.2031C100.91 38.2031 101.637 37.5176 101.637 36.1465V17.4961ZM121.676 32.4023L127.459 11.5195H132.434V42H127.67V24.8965L123.416 42H120.041L115.664 24.8965V42H110.848V11.5195H115.823L121.676 32.4023ZM150.944 36.1465C150.944 40.4121 148.559 42.5508 143.789 42.5625C139.031 42.5625 136.653 40.4238 136.653 36.1465V17.4961C136.653 13.2305 139.031 11.0977 143.789 11.0977C148.559 11.0977 150.944 13.2305 150.944 17.4961V36.1465ZM145.969 17.4961C145.969 16.125 145.248 15.4395 143.807 15.4395H143.772C142.342 15.4395 141.627 16.125 141.627 17.4961V36.1465C141.627 37.5176 142.348 38.2031 143.789 38.2031C145.242 38.2031 145.969 37.5176 145.969 36.1465V17.4961ZM169.295 36.1465C169.295 40.4121 166.91 42.5508 162.141 42.5625C157.383 42.5625 155.004 40.4238 155.004 36.1465V11.5723H159.979V36.1465C159.979 37.5176 160.699 38.2031 162.141 38.2031C163.594 38.2031 164.321 37.5176 164.321 36.1465V11.5723H169.295V36.1465Z"
                  fill="white"
                />
              </svg>

              <div className="max-w-[150px] [&>*]:my-1 flex-col mt-8">
                <h1 className=" text-xl md:text-2xl">Stay Updated</h1>
                <h2 className="text-sm md:text-xl">
                  Keep track of our new and Latest insight
                </h2>
                <button className="text-white border-button rounded-xl px-8 py-1 hover:bg-button ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl">Learn More</h1>
          <ul className="[&>*]:mt-4 [&>*]:text-sm md:[&>*]:text-lg text-footer ">
            <li>
              <a href="#">Why us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <h1 className="text-xl md:text-2xl">Support</h1>
          <ul className="[&>*]:mt-4 [&>*]:text-sm md:[&>*]:text-lg  text-footer">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <h1 className="text-xl md:text-2xl">Solutions</h1>
          <ul className="[&>*]:mt-4 [&>*]:text-sm md:[&>*]:text-lg text-footer">
            <li>
              <a href="#">Management</a>
            </li>
            <li>
              <a href="#">Time Tracking</a>
            </li>
            <li>
              <a href="#">Reduce Admin Burden</a>
            </li>
            <li>
              <a href="#">Progress Monitoring</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <h1 className="text-xl md:text-2xl">Follow Us</h1>
          <ul className="[&>*]:mt-4 [&>*]:text-sm md:[&>*]:text-lg text-footer">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="text-center text-sm md:text-lg py-4">
        Designed by{" "}
        <a
          href="https://www.behance.net/dewuyiaderibi?tracking_source=search_users%7Cdewuyi%20aderibigbe"
          target="_blank"
          rel="noopener"
          className="text-button tracking-widest"
        >
          Dewuyi Aderibigbe
        </a>
        , developed by{" "}
        <a
          href="https://ayotheking.netlify.app/"
          target="_blank"
          rel="noopener"
          className="text-button tracking-widest "
        >
          Ayomide
        </a>
        .
      </h1>
    </footer>
  );
};

export default Footer;
