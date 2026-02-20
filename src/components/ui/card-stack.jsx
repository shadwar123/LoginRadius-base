"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import rectangle from '../../../public/assets/Rectangle.svg';
import Image from 'next/image';

export const CardStack = ({
  items,
  activeTab,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    moveCardToFront(activeTab);
  }, [activeTab]);

  const moveCardToFront = (activeTabId) => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      const cardIndex = newArray.findIndex((card) => card.id === activeTabId);
      if (cardIndex !== -1) {
        const [selectedCard] = newArray.splice(cardIndex, 1);
        newArray.unshift(selectedCard);
      }
      return newArray;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative h-80 w-full sm:h-[600px] sm:w-[1280px]"
    >
      <div className="hidden sm:block">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute rounded-3xl px-4 py-6 shadow-lg border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between items-center sm:min-h-[544px]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              backgroundColor: card.color,
            }}
          >
            <div className="flex flex-col items-center sm:flex-row text-black text-opacity-70 mt-3">
              <div className=" sm:order-last mr-4">
                <motion.div
                  className="flex justify-center items-center px-4  w-[500px] h-[460px] sm:px-10 rounded-lg font-bold text-lg"
                  style={{ backgroundColor: card.subColor }}
                >
                  <div className="flex justify-center items-center sm:w-[300px] sm:h-[150px]">
                    <Image
                      src={card.src}
                      alt={card.title}
                      width={150}
                      height={150}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Card content */}
              <div className="flex flex-col sm:w-2/3 items-center p-3">
                <h2 className="text-lg sm:text-[42px] leading-tight sm:leading-snug space-y-5 mb-5 opacity-95">{card.title}</h2>
                <div className="mt-2">
                  <p className="text-xs sm:text-sm lg:text-base">{card.description}</p>
                  {card.id === 4 && (
                   <div className="grid gap-6 sm:gap-8 mt-4">
                   {/* Row 1 */}
                   <div className="grid grid-cols-3 gap-3 sm:gap-x-6 sm:gap-y-2">
                     {/* 1st Stat */}
                     <div className="text-left flex space-x-2 p-2 col-span-1">
                       <div>
                         <Image src={rectangle} alt="react" width={8} height={40} />
                       </div>
                       <div>
                         <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">&lt;100ms</h2>
                         <p className="text-xs sm:text-sm lg:text-base mt-2 opacity-90">API RESPONSE TIME</p>
                       </div>
                     </div>
                 
                     {/* 2nd Stat */}
                     <div className="text-left flex space-x-2 p-2">
                       <div>
                         <Image src={rectangle} alt="react" width={8} height={40} />
                       </div>
                       <div>
                         <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">100%</h2>
                         <p className="text-xs sm:text-sm lg:text-base mt-2 opacity-90">UPTIME</p>
                       </div>
                     </div>
                 
                     {/* 3rd Stat */}
                     <div className="text-left flex space-x-2 p-2">
                       <div>
                         <Image src={rectangle} alt="react" width={8} height={40} />
                       </div>
                       <div>
                         <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">240k+</h2>
                         <p className="text-xs sm:text-sm lg:text-base mt-2 opacity-90">RPS</p>
                       </div>
                     </div>
                   </div>
                 
                   {/* Row 2 */}
                   <div className="grid grid-cols-3 gap-3 sm:gap-x-6 sm:gap-y-2">
                     {/* 4th Stat */}
                     <div className="text-left flex space-x-2 p-2">
                       <div>
                         <Image src={rectangle} alt="react" width={8} height={40} />
                       </div>
                       <div>
                         <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">28+</h2>
                         <p className="text-xs sm:text-sm lg:text-base mt-2 opacity-90">DATA CENTER REGIONS</p>
                       </div>
                     </div>
                 
                     {/* 5th Stat */}
                     <div className="text-left flex space-x-2 p-2">
                       <div>
                         <Image src={rectangle} alt="react" width={8} height={40} />
                       </div>
                       <div>
                         <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">150+</h2>
                         <p className="text-xs sm:text-sm lg:text-base mt-2 opacity-90">MILLION USERS</p>
                       </div>
                     </div>

                   </div>
                 </div>
                 
                  )}
                  <div className="flex flex-row gap-2 sm:gap-5 mt-4 sm:mt-8">
                    <button className="flex justify-center items-center text-xs sm:text-sm lg:text-base bg-[#3D63DD] text-textBlue px-2 sm:px-4 py-2 sm:py-2 rounded-lg hover:bg-blue-500">
                      Try now
                    </button>
                    <span className="flex justify-center sm:justify-start items-center">
                      <div className="text-black ">
                        Learn more
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Render as a carousel for mobile */}
      <div className="block sm:hidden ">
        <motion.div
          key={cards[currentIndex].id}
          className="relative min-h-[600px] rounded-3xl px-4 py-6 shadow-lg border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between w-full"
          style={{ backgroundColor: cards[currentIndex].color }}
        >
          <div className="flex flex-col text-black text-opacity-70">
            <div className="mb-4">
              <motion.div
                className="flex justify-center items-center px-4 w-full h-40 rounded-lg font-bold text-lg"
                style={{ backgroundColor: cards[currentIndex].subColor }}
              >
                <div className="flex justify-center items-center h-32 w-48">
                  <Image
                    src={cards[currentIndex].src}
                    alt={cards[currentIndex].title}
                    width={100}
                    height={100}
                  />
                </div>
              </motion.div>
            </div>

            {/* Card content */}
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">{cards[currentIndex].title}</h2>
              <div className="mt-2">
                <p className="text-xs">{cards[currentIndex].description}</p>
                {currentIndex != 3 && (
                  <div className="mb-44"></div>
                )}
                {currentIndex === 3 && (
                 <div className="grid gap-2 sm:gap-8 mt-4">
                 {/* Row 1 */}
                 <div className="grid grid-cols-2 ">
                   {/* 1st Stat */}
                   <div className="flex items-center space-x-1 text-left">
                     <div>
                       <Image src={rectangle} alt="react" width={6} height={48} />
                     </div>
                     <div>
                       <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">&lt;100ms</h2>
                       <p className="text-xs sm:text-sm lg:text-base mt-1 opacity-90">API RESPONSE TIME</p>
                     </div>
                   </div>
               
                   {/* 2nd Stat */}
                   <div className="flex items-center space-x-1 text-left">
                     <div>
                       <Image src={rectangle} alt="react" width={6} height={48} />
                     </div>
                     <div>
                       <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">100%</h2>
                       <p className="text-xs sm:text-sm lg:text-base mt-1 opacity-90">UPTIME</p>
                     </div>
                   </div>
                 </div>
               
                 {/* Row 2 */}
                 <div className="grid grid-cols-2 gap-2 mt-4">
                   {/* 3rd Stat */}
                   <div className="flex items-center space-x-1 text-left">
                     <div>
                       <Image src={rectangle} alt="react" width={6} height={48} />
                     </div>
                     <div>
                       <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">240k+</h2>
                       <p className="text-xs sm:text-sm lg:text-base mt-1 opacity-90">RPS</p>
                     </div>
                   </div>
               
                   {/* 4th Stat */}
                   <div className="flex items-center space-x-1 text-left">
                     <div>
                       <Image src={rectangle} alt="react" width={6} height={48} />
                     </div>
                     <div>
                       <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">150+</h2>
                       <p className="text-xs sm:text-sm lg:text-base mt-1 opacity-90">MILLION USERS</p>
                     </div>
                   </div>
                 </div>
               
                 {/* Row 3 */}
                 <div className="flex items-center space-x-1 text-left mt-4">
                   <div>
                     <Image src={rectangle} alt="react" width={6} height={48} />
                   </div>
                   <div>
                     <h2 className="text-lg sm:text-xl lg:text-3xl opacity-90">28+</h2>
                     <p className="text-xs sm:text-sm lg:text-base mt-1 opacity-90">DATA CENTER REGIONS</p>
                   </div>
                 </div>
               </div>
               
                )}
                <div className="flex flex-row gap-2 mt-4 ">
                  <button className="flex justify-center items-center text-xs bg-blue-700 text-white px-2 py-2 rounded-lg hover:bg-blue-500">
                    Try now
                  </button>
                  <span className="flex justify-center items-center">
                    <div className="text-black">
                      Learn more
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Circles indicator */}
        <div className="flex justify-center mt-4 mb-40">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full mx-1 ${currentIndex === idx ? "bg-white" : "bg-white/50"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
