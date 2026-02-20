'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Resource = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState('All');
    const visibleCardsCount = 3;
    const handleRightClick = () => {
        if (currentIndex + visibleCardsCount < data.data.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handleLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const handleButtonClick = (buttonName) => {
        setSelected(buttonName);
    };

    return (
        <>
            <div className="hidden sm:block">
                <div className="max-w-1000 flex justify-center">
                    <div className="flex flex-col justify-center mt-10 items-center">
                        <p className="text-base text-textcolor uppercase">{data.heading}</p>
                        <div className="flex flex-col justify-center items-center mt-5">
                            <h1 className="text-center text-4xl bold">{data.subheading}</h1>
                            <p className="text-center mt-7 text-textBlue">{data.subheadingTwo}</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-1000 py-8">
                    <div className="flex justify-between items-center mb-8">
                        <div className="space-x-4">
                            <button
                                className={`px-4 py-3 rounded-xl ${selected === 'All' ? 'bg-white text-black' : 'bg-navBox text-white'
                                    }`}
                                onClick={() => handleButtonClick('All')}
                            >
                                All
                            </button>
                            <button
                                className={`px-4 py-3 rounded-xl ${selected === 'White paper' ? 'bg-white text-black' : 'bg-navBox text-white'
                                    }`}
                                onClick={() => handleButtonClick('White paper')}
                            >
                                White paper
                            </button>
                            <button
                                className={`px-4 py-3 rounded-xl ${selected === 'E-book' ? 'bg-white text-black' : 'bg-navBox text-white'
                                    }`}
                                onClick={() => handleButtonClick('E-book')}
                            >
                                E-book
                            </button>
                            <button
                                className={`px-4 py-3 rounded-xl ${selected === 'Blog' ? 'bg-white text-black' : 'bg-navBox text-white'
                                    }`}
                                onClick={() => handleButtonClick('Blog')}
                            >
                                Blog
                            </button>
                        </div>
                        <Link href="/" className="text-white hover:underline">View all</Link>
                    </div>

                    <div className="flex space-x-6 overflow-hidden">
                        {data.data.slice(currentIndex, currentIndex + visibleCardsCount).map((card, index) => (
                            <div
                                key={index}
                                className="bg-black border group text-white rounded-lg flex-grow p-4 basis-1/3 min-w-0 shadow-lg hover:bg-navBox hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-full h-[220px] relative">
                                    <Image
                                        src={card.imageUrl}
                                        alt={card.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-2xl"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-thin text-textcolor uppercase flex-wrap mt-3">{card.label}</p>
                                    <h3 className="text-sm tracking-wide leading-normal mt-4">{card.title}</h3>
                                    <p className="text-sm text-gray-400 mt-6">{card.description}</p>
                                    <Link href="/" className="inline-flex items-center mt-10 mb-3 group-hover:text-buttonHover text-sm">
                                        <span>{card.action}</span>
                                        <MdArrowForward className="mt-1 ml-3 h-3 w-4" />
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div>

                    {/* Left and right buttons */}
                    <div className="flex justify-center space-x-7 mt-6">
                        <button
                            onClick={handleLeftClick}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-thin ${currentIndex === 0 ? 'text-gray-500 bg-zinc-900 ' : 'bg-navBox text-slate-200'
                                }`}
                            disabled={currentIndex === 0}
                        >
                            <IoIosArrowBack className='w-5 h-6 ' />
                        </button>
                        <button
                            onClick={handleRightClick}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-thin ${currentIndex + visibleCardsCount >= data.data.length ? 'text-gray-500 bg-zinc-900 ' : 'bg-navBox text-slate-200'
                                }`}
                            disabled={currentIndex + visibleCardsCount >= data.data.length}
                        >
                            <IoIosArrowForward className='w-5 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resource;
