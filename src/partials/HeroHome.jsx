import React, { useState, useRef } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image-01.jpg';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const workWithUs = useRef(null);
  // const scrollSection = (element) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 pt-10" data-aos="fade-up">
              Lumina OnlyFans Management
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              We are an OnlyFans management company that specializes in helping content creators reach their full potential and achieve success on the platform.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="/#contact-us" onClick={() => scrollSection(workWithUs)}>
                  Work With us
                </a>

              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={"/ss.svg"} width="1024" height="504" alt="Hero" />
              <a
                className="absolute group"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path
                    className="fill-current text-purple-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                  />
                </svg>
              </a>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              {/* <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://vimeo.com/799982263" title="Video" allowFullScreen></iframe>
              </div> */}
              {/* <div style={{ padding: "75% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/799982263?h=ef0741d952&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="Untitled video - Made with Clipchamp.mp4"
                />
              </div> */}
              <div style={{ padding: "75% 0 0 0", position: "relative" }}>
                <iframe
                  src="/LuminaVideo.mp4"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="Untitled_video_-_Made_with_Clipchamp_AdobeExpress.mp4"
                />
              </div>

            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}


export default HeroHome;
