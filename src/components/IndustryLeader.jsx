'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import capabilitiesDiagram1 from '../../public/assets/State=Default.png';
import capabilitiesDiagram2 from '../../public/assets/State=Blink.png';
import IndustryLead from '../../public/assets/overall-leader.gif';

const IndustryLeader = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black max-w-1000 py-4 mt-20 sm:mt-6">
      <p className="mb-4 sm:mb-8 text-textcolor block text-center sm:text-start  mt-20 sm:mt-0">INDUSTRY LEADER</p>
      <div className="flex flex-col lg:flex-row justify-center items-center sm:justify-start sm:gap-x-24 sm:space-x-5 sm:items-start">
        <div className="text-center lg:text-left">
          <p className="text-3xl sm:font-bold lg:text-4xl leading-tight tracking-wide">
            LoginRadius is the Industry <br /> Leader in CIAM.
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-4 lg:mt-0 text-center sm:text-left sm:-ml-40">
          <p className="text-xl text-textBlue lg:text-2xl mb-6">
            Ahead of Okta, Auth0, Microsoft, IBM, Cognito
          </p>
          <a
            className="bg-buttonColor text-textBlue text-base lg:text-base font-thin px-3 sm:px-4 py-2 sm:py-2 rounded-lg hover:bg-buttonHover transition duration-300"
            href="https://www.loginradius.com/resource/analyst-report/kuppingercole-names-loginradius-top-ciam-platform-2024/"
            target='_blank'
          >
            Download full report
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-10">
        <Image
          src={IndustryLead}
          alt="Industry Capabilities Diagram"
          width={1200}
          height={900}
          className="rounded-lg transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default IndustryLeader;
