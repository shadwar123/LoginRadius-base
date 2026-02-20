'use client'
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { LuKey } from "react-icons/lu";
import { MdArrowForward } from "react-icons/md";
import code1 from '../../public/assets/DevComponent/code1.png'
import code2 from '../../public/assets/DevComponent/code2.png'
import img1 from '../../public/assets/DevComponent/img6.svg'
import img2 from '../../public/assets/DevComponent/img5.svg'
import img3 from '../../public/assets/DevComponent/img4.svg'
import img4 from '../../public/assets/DevComponent/img3.svg'
import img5 from '../../public/assets/DevComponent/img2.svg'
import img6 from '../../public/assets/DevComponent/img1.svg'

import code1img1 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant1.png';
import code1img2 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant2.png';
import code1img3 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant3.png';
import code1img4 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant4.png';
import code1img5 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant5.png';
import code1img6 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant6.png';
import code1img7 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant7.png';
import code1img8 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant8.png';
import code1img9 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant9.png';
import code1img10 from '../../public/assets/DeveloperDesign/Code1/Property 1=Variant10.png';

import code2img1 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint1.png';
import code2img2 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint2.png';
import code2img3 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint3.png';
import code2img4 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint4.png';
import code2img5 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint5.png';
import code2img6 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint6.png';
import code2img7 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint7.png';
import code2img8 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint8.png';
import code2img9 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint9.png';
import code2img10 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint10.png';
import code2img11 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint11.png';
import code2img12 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint12.png';
import code2img13 from '../../public/assets/DeveloperDesign/Code2/Property 1=Varaint13.png';
import code2img14 from '../../public/assets/DeveloperDesign/Code2/Property 1=Variant14.png';
import CodeBlock from './CodeBlock';
import { Code } from 'lucide-react';


export default function DeveloperComponent() {
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

    const codeImages1 = [
        code1img1,
        code1img2,
        code1img3,
        code1img4,
        code1img5,
        code1img6,
        code1img7,
        code1img8,
        code1img9,
        code1img10,
    ];
    const codeImages2 = [
        code2img1,
        code2img2,
        code2img3,
        code2img4,
        code2img5,
        code2img6,
        code2img7,
        code2img8,
        code2img9,
        code2img10,
        code2img11,
        code2img12,
        code2img13,
        code2img14,
    ];

    const language = [
        {
            language: 'Node.js',
            code:
                `// index.js or your main server file
const LoginRadius = require('loginradius-sdk')
// Configure the LoginRadius SDK
const loginRadiusConfig = {
    apiKey: process.env.LOGINRADIUS_API_KEY,
    apiSecret: process.env.LOGINRADIUS_API_SECRET,
};

const lrClient = new LoginRadius(loginRadiusConfig);`,
        },
        {
            language: 'Ruby',
            code:
                `require 'httparty'
LOGINRADIUS_API_KEY = ENV['LOGINRADIUS_API_KEY']
LOGINRADIUS_API_SECRET = ENV['LOGINRADIUS_API_SECRET']

class LoginRadiusClient
include HTTParty
base_uri 'https://api.loginradius.com'

    def initialize
        @auth = { apiKey: LOGINRADIUS_API_KEY, apiSecret: LOGINRADIUS_API_SECRET }
    end
end`
        },
        {
            language: 'Python',
            code:
                `from loginradius import LoginRadius as LR

loginradius = LR(
    api_key=os.getenv("LOGINRADIUS_API_KEY"),
    api_secret=os.getenv("LOGINRADIUS_API_SECRET")
)`
        },
        {
            language: 'Go',
            code:
                `package main

import (
    "os"
    loginradius "github.com/LoginRadius/go-sdk"
)

func main() {
    apiKey := os.Getenv("LOGINRADIUS_API_KEY")
    apiSecret := os.Getenv("LOGINRADIUS_API_SECRET")

    lrClient := loginradius.NewLoginradius(apiKey, apiSecret)
}`
        },
        {
            language: 'PHP',
            code:
                `<?php
require 'vendor/autoload.php';

use LoginRadiusSDK\LoginRadius;

$apiKey = getenv('LOGINRADIUS_API_KEY');
$apiSecret = getenv('LOGINRADIUS_API_SECRET');

$lrClient = new LoginRadius($apiKey, $apiSecret);`
        },
        {
            language: 'Java',
            code:
                `import com.loginradius.sdk.LoginRadius;

public class Main {
    public static void main(String[] args) {
    String apiKey = System.getenv("LOGINRADIUS_API_KEY");
    String apiSecret = System.getenv("LOGINRADIUS_API_SECRET");

    LoginRadius lrClient = new LoginRadius(apiKey, apiSecret);
    }
}`
        },
        {
            language: '.NET',
            code:
                `using LoginRadiusSDK.V2;

var apiKey = Environment.GetEnvironmentVariable("LOGINRADIUS_API_KEY");
var apiSecret = Environment.GetEnvironmentVariable("LOGINRADIUS_API_SECRET");

var lrClient = new LoginRadius(apiKey, apiSecret);`
        },
        {
            language: 'cURL',
            code:
                `curl -X GET "https://api.loginradius.com/identity/v2/auth
/login?apiKey=$LOGINRADIUS_API_KEY&apiSecret=$LOGINRADIUS
_API_SECRET"`
        }
    ]

    const [text, setText] = useState(language[0]?.code)
    const [selectedLanguage, setSelectedLanguage] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex1((prevIndex) =>
                prevIndex === codeImages1.length - 1 ? 0 : prevIndex + 1
            );
        }, 900);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex2((prevIndex) =>
                prevIndex === codeImages2.length - 1 ? 0 : prevIndex + 1
            );
        }, 900);

        return () => clearInterval(interval);
    }, []);

    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(80);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[selectedLanguage];
            if (currentTab) {
                if (selectedLanguage === 0) {
                    setTabUnderlineLeft(0);
                }
                else {
                    setTabUnderlineLeft(currentTab.offsetLeft - 10);
                }
                setTabUnderlineWidth(currentTab.clientWidth + 20);
            }
        }

        setTabPosition(); // Initial position
        window.addEventListener('resize', setTabPosition);

        setText(language[selectedLanguage]?.code);
        console.log('sad', text)
        return () => window.removeEventListener('resize', setTabPosition);
    }, [selectedLanguage]);


    const [loginData, setLoginData] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = process.env.LOGINRADIUS_API_KEY;
    const apiSecret = process.env.LOGINRADIUS_API_SECRET;

    useEffect(() => {
        const fetchLogin = async () => {
            try {
                const response = await fetch(`https://api.loginradius.com/identity/v2/auth/login?apiKey=${apiKey}&apiSecret=${apiSecret}`);

                if (!response.ok) {
                    const errorData = await response.json(); // Get the error response body
                    throw new Error(JSON.stringify(errorData)); // Throw error with the error object
                }

                const data = await response.json();
                setLoginData(data); // Store the successful response in state
                setError(null); // Clear any previous errors
            } catch (error) {
                setError(JSON.parse(error.message)); // Store the entire error object in state
                console.error('Fetch error:', error);
            }
        };

        fetchLogin();
    }, [apiKey, apiSecret]);

    const formatJsonForDisplay = (data) => {
        return JSON.stringify(data, null, 2)
            .replace(/,(?=\s*")/g, ',\n'); // Add newline after comma if followed by a quote
    };


    return (
        <div className="bg-black text-white max-w-1000 pt-16 pb-6 sm:py-16 mt-28 px-5  md:px-0 items-center">
            <div className="flex flex-col justify-center items-center">
                <h5 className="text-sm sm:text-base text-textcolor mb-3">DEVELOPER-FIRST DESIGN</h5>
                <h1 className="text-3xl text-center flex justify-center tracking-wide sm:font-semibold items-center md:text-4xl mb-2 sm:mb-6">
                    Built for Developers, Performs for Enterprise Scale!
                </h1>
            </div>
            <div className=" mx-auto mt-8  flex flex-col md:flex-row gap-16">
                {/* Left Section */}
                <div className="flex-1">

                    <p className="mb-6 text-2xl text-textBlue">
                        LoginRadius provides a single, elegant interface that abstracts dozens of enterprise integrations.
                    </p>
                    <div className="flex items-center ">
                        <Link href="https://www.loginradius.com/docs/">
                            <div className="flex group items-center bg-buttonColor mr-4 text-textBlue px-3 sm:px-6 py-2 sm:py-2 rounded-lg hover:bg-buttonHover transition">
                                Read the docs <MdArrowForward className='h-3 w-4 ml-1 text-white sm:ml-3 transform transition-transform duration-200 group-hover:translate-x-1' />
                            </div>
                        </Link>
                        <LuKey />
                        <button className="bg-transparent text-textBlue px-2 py-3 flex items-center rounded-lg hover:text-buttonHover transition">
                            Button
                        </button>
                    </div>

                    {/* Grid Section */}
                    <div className="mt-16 container mx-auto sm:px-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">

                        <div className="flex flex-col">
                            <div className="">
                                <Image src={img1} alt="img2" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold mt-3 ">CLI-Scripting & Automation</h4>
                                {/* <p className="text-xs mt-4 text-textBlue">
                                    Sign up for free to explore the LoginRadius CIAM without needing to commit.
                                </p> */}
                                <p className="font-poppins text-[14px] font-normal leading-[21px] text-left mt-4 text-[#D5E2FF]">
                                    Sign up for free to explore the LoginRadius CIAM without needing to commit.
                                </p>

                            </div>
                        </div>


                        <div className="flex flex-col">
                            <div className=" ">
                                <Image src={img2} alt="img2" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mt-3">Plugins and Widgets</h4>
                                <p className="font-poppins text-[14px] font-normal leading-[21px] text-left mt-4 text-[#D5E2FF]">
                                    Sign up for free to explore the LoginRadius CIAM without needing to commit.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="">
                                <Image src={img3} alt="img2" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mt-3">Quick Integrations</h4>
                                <p className="font-poppins text-[14px] font-normal leading-[21px] text-left mt-4 text-[#D5E2FF]">
                                    SDKs for popular web and mobile platforms to fast-track the integration process.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="">
                                <Image src={img4} alt="img2" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mt-3">Web and mobile SDKs</h4>
                                <p className="font-poppins text-[14px] font-normal leading-[21px] text-left mt-4 text-[#D5E2FF]">
                                    SDKs for popular web and mobile platforms to fast-track the integration process.
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col">
                            <div className="">
                                <Image src={img5} alt="img2" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mt-3">Restful APIs and Json</h4>
                                <p className="font-poppins text-[14px] font-normal leading-[21px] text-left mt-4 text-[#D5E2FF]">
                                    APIs for full control.
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col">
                            <div className=" ">
                                <Image src={img6} alt="img2" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mt-3">Developer Docs</h4>
                                <p className="font-poppins text-[14px] font-normal leading-[21px] text-left mt-4 text-[#D5E2FF]">
                                    Explore our helpful documentation to see how you can integrate LoginRadius into your apps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className=" flex flex-col gap-7 w-full sm:w-[50%]">

                    <div className="w-full sm:min-w-[554px] h-[400px] rounded-lg shadow-lg bg-[#181B39] relative flex flex-col">
                        {/* Tabs Header */}
                        <div className="w-full h-[49px] border-b border-[#1D2E61]">
                            <div className="h-full flex items-center px-4 py-2 text-[12px] lg:text-[14px] font-[400] justify-between select-none ">
                                {language.map((val, idx) => (
                                    <span
                                        key={idx}
                                        className={`cursor-pointer ${selectedLanguage === idx ? 'text-[#D5E2FF]' : 'text-[#727792]'
                                            }`}
                                        ref={(el) => (tabsRef.current[idx] = el)}
                                        onClick={() => setSelectedLanguage(idx)}
                                    >
                                        {val.language}
                                    </span>
                                ))}
                                <Image src="/copy.svg" alt="copy" height={16} width={16} />
                            </div>
                        </div>

                        {/* Underline Indicator */}
                        <div className="w-full ">
                            <span
                                className="absolute top-[3.45rem] block h-[2px] rounded-[100px] bg-[#B4CF00] transition-all duration-300"
                                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                            />
                        </div>

                        <div className="p-4 font-mono text-sm relative mt-4">
                            <div className="absolute left-1 top-4 bottom-4 w-12 items-center flex flex-col text-[#626A95] text-[10px] font-[400] text-right">
                                {Array.from({ length: 13 }, (_, i) => (
                                    <div key={i + 1} className="h-6">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>

                            <div className="pl-12 overflow-hidden w-full flex flex-grow text-[10px] font-[400]">
                                <CodeBlock text={text} apiORres={'api'}/>
                            </div>
                        </div>
                    </div>


                    <div className="w-full sm:min-w-[554px] h-[400px] rounded-2xl shadow-lg bg-transparent relative flex flex-col border border-[#172448]">
                        <div className='w-full flex items-center justify-center text-[#727792] text-[14px] font-normal mt-[12px]'>
                            HTTP 200
                        </div>
                        <div className="pl-4 sm:pl-8 overflow-hidden w-full flex flex-grow text-[10px] font-[400] ">
                            {error ? (
                                <CodeBlock text={formatJsonForDisplay(error)} apiORres={'res'}/>
                            ) : loginData ? (
                                <CodeBlock text={formatJsonForDisplay(loginData)} apiORres={'res'}/>
                            ) : (
                                <p>Loading...</p>
                            )}

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}
