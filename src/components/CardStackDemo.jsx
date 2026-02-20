
"use client";
import { useState } from "react";
import { CardStack } from "../components/ui/card-stack";
import CardTab from "./CardTab";

export function CardStackDemo(cardData) {
  const [activeTab, setActiveTab] = useState(1); 

  return (
    <>
      <div className="max-w-1000 flex justify-center">
        <div className="flex flex-col justify-center items-center mb-2 sm:mb-10">
          <p className="text-sm sm:text-base text-[#93B4FF]">CAPABILITIES</p>
          <h2 className="text-4xl text-center font-bold mt-3">
          LoginRadius is a Identity-as-a-service(IdaaS) Platform
        </h2>
        </div>
      </div>
      <div className="h-auto sm:h-[40rem] flex flex-col items-center justify-center w-full sm:mt-28">
        <div className="mb-8">
          <CardTab setActiveTabInd={setActiveTab} />
        </div>
        <div className="mt-1 sm:mt-8 mb-24 w-full p-6 flex justify-center items-center  sm:px-4">
          <CardStack items={cardData?.cardData.data} activeTab={activeTab} />
        </div>
      </div>
    </>
  );
}
