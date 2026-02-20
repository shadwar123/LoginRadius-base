import Image from "next/image";
import globeImage from "../../public/assets/Globe.png";
import fullGlobe from "../../public/assets/fullGlobe.png";
import halfGlobeImage from "../../public/assets/halfGlobe.png";
import { MdArrowForward } from "react-icons/md";

const StartToday = () => {
  return (
    <div className="bg-[linear-gradient(270deg,#172448_-2.57%,#111725_102.96%)] text-white py-8  mt-5 sm:mt-10 pt-10 sm:pt-[120px] sm:pb-[150px] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto flex flex-col items-center justify-between z-20">
        <div className="text-start px-4 text-bold mt-4 md:text-center sm:mb-10 relative z-30">
          <p className="text-base text-[16px] text-textBlue mb-3 sm:mb-[24px]">
            START TODAY
          </p>

          <h1 className="text-3xl sm:text-3xl font-bold leading-snug tracking-wider sm:leading-[48px]">
            Built for Developers, Performs for Enterprise Scale!
          </h1>
        </div>

        <div className="flex sm:gap-24 pt-6 sm:pt-[40px] w-full justify-start sm:px-12">
          <div className="flex flex-col gap-8 px-0 text-start sm:text-center z-20">
            <div className="flex flex-col mb-5 sm:mb-16 max-w-[900px] mx-auto px-5 sm:px-0">
              <p className="font-poppins text-semibold text-textBlue leading-snug font-normal text-left text-lg sm:text-[24px]">
                Try our platform for free or talk to our CIAM expert
                <br className="hidden sm:block" /> to book a customer demo.
              </p>
              <div className="flex items-center space-x-5 sm:space-x-7 mt-7">
                <a
                  href="https://www.loginradius.com/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex group items-center w-44 h-10 pl-6 pr-2 py-3 rounded-lg bg-buttonColor hover:bg-buttonHover text-sm text-textBlue transition-colors duration-300 gap-2 text-normal"
                >
                  <span>Read the docs</span>
                  <MdArrowForward className="text-base h-3 w-4 sm:ml-1 transform transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  className="px-3 sm:px-0 py-1.5 sm:py-3 hover:text-buttonHover group rounded-lg transition duration-300 flex justify-start items-center"
                  href="https://www.loginradius.com/contact-sales/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to sales
                  <MdArrowForward className="text-base ml-1 h-3 w-4 sm:ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-14 sm:gap-y-12 sm:gap-x-24 mx-auto lg:-mt-[10px]">
              {/* 1st Stat */}
              <div className="text-left space-y-3 sm:space-y-5">
                <h2 className="text-4xl sm:text-6xl tracking-tighter font-thin text-transparent bg-gradient-to-r from-[#F087FF] to-[#8834D8] bg-clip-text leading-none scale-x-125 scale-y-125">
                  1.5 B+
                </h2>
                <p className="sm:text-2xl text-[#93B4FF] mt-3 -ml-3 sm:-ml-4">IDENTITIES</p>
              </div>

              {/* 2nd Stat */}
              <div className="text-left space-y-3 sm:space-y-5">
                <h2 className="text-4xl sm:text-6xl font-thin text-transparent bg-gradient-to-r from-[#1FCFF1] to-[#234FB7] bg-clip-text leading-none scale-x-125 scale-y-125 tracking-tighter">
                  28+
                </h2>
                <p className="sm:text-2xl text-blue-300 mt-3 -ml-3 sm:-ml-5">DATA CENTERS</p>
              </div>

              {/* 3rd Stat */}
              <div className="text-left space-y-3 sm:space-y-5">
                <h2 className="text-4xl sm:text-6xl font-thin text-transparent bg-gradient-to-r from-[#19FB9B] to-[#08726B] bg-clip-text leading-none scale-x-125 scale-y-125 tracking-tighter">
                  100%
                </h2>
                <p className="sm:text-2xl text-blue-300 mt-3 -ml-3 sm:-ml-4">UPTIME</p>
              </div>

              {/* 4th Stat */}
              <div className="text-left space-y-3 sm:space-y-5">
                <h2 className="text-4xl sm:text-6xl font-thin text-transparent bg-gradient-to-r from-[#FBF219] to-[#766B04] bg-clip-text leading-none scale-x-125 scale-y-125 tracking-tighter">
                  200,000
                </h2>
                <p className="sm:text-2xl text-blue-300 mt-3 -ml-3 sm:-ml-5">RPS SCALING</p>
              </div>
            </div>
          </div>

          {/* Globe for web desktop */}
        </div>
      </div>

      <div className="absolute left-[35%] lg:left-auto lg:right-0 top-[20%] lg:top-[36%] z-10">
        <div className="flex justify-center pointer-events-none sm:block right-0 top-0 relative h-[553px] w-[553px]">
          <div id="box" className="relative rounded-full overflow-hidden">
            {/* Inner gradient border effect */}
            <div className="absolute z-12 inset-0 rounded-full pointer-events-none before:absolute before:inset-[15px] before:rounded-full before:bg-gradient-radial from-white via-white/60 to-transparent"></div>

            {/* Spinning globe */}
            <div className="spin-container relative h-full w-full rounded-full">
              <Image
                src={fullGlobe}
                alt="Spinning Globe"
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StartToday;
