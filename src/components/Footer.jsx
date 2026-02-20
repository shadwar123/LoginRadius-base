import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import { BsTwitterX } from "react-icons/bs";

const footerData = [
    {
        heading: "Products",
        items: [
            { label: "Passkey", href: "https://www.example.com/passkey" },
            { label: "Passwordless", href: "https://www.example.com/passwordless" },
            { label: "Federation Protocols", href: "https://www.example.com/federation-protocols" },
            { label: "AI Login Page Builder", href: "https://www.example.com/ai-login-page-builder" },
            { label: "Adaptive MFA", href: "https://www.example.com/adaptive-mfa" },
            { label: "Customer Intelligence", href: "https://www.example.com/customer-intelligence" },
            { label: "Machine to Machine", href: "https://www.example.com/machine-to-machine" },
            { label: "Consent Management", href: "https://www.example.com/consent-management" },
            { label: "High Performance CIAM", href: "https://www.example.com/high-performance-ciam" },
        ],
    },
    {
        heading: "Industries",
        items: [
            { label: "Media & Communications", href: "https://www.example.com/media-communications" },
            { label: "Government", href: "https://www.example.com/government" },
            { label: "Retail & Ecommerce", href: "https://www.example.com/retail-ecommerce" },
            { label: "Banking, Finance & Insurance", href: "https://www.example.com/banking-finance-insurance" },
            { label: "Travel & Hospitality", href: "https://www.example.com/travel-hospitality" },
            { label: "Healthcare", href: "https://www.example.com/healthcare" },
            { label: "Consumer Brands", href: "https://www.example.com/consumer-brands" },
            { label: "B2B Service & Partnerships", href: "https://www.example.com/b2b-service-partnerships" },
            { label: "SaaS (Software as a Service)", href: "https://www.example.com/saas" },
        ],
    },
    {
        heading: "For Developers",
        items: [
            { label: "Docs", href: "https://www.example.com/docs" },
            { label: "Getting Started", href: "https://www.example.com/getting-started" },
            { label: "Tutorials", href: "https://www.example.com/tutorials" },
            { label: "API References", href: "https://www.example.com/api-references" },
            { label: "Web SDKs", href: "https://www.example.com/web-sdks" },
            { label: "Mobile SDKs", href: "https://www.example.com/mobile-sdks" },
            { label: "Engineering Blog", href: "https://www.example.com/engineering-blog" },
            { label: "System Status", href: "https://www.example.com/system-status" },
            { label: "Bug Bounty", href: "https://www.example.com/bug-bounty" },
        ],
    },
    {
        heading: "Resources",
        items: [
            { label: "Industry Reports", href: "https://www.example.com/industry-reports" },
            { label: "White Papers", href: "https://www.example.com/white-papers" },
            { label: "E-books", href: "https://www.example.com/e-books" },
            { label: "Case Studies", href: "https://www.example.com/case-studies" },
            { label: "Product Sheets", href: "https://www.example.com/product-sheets" },
            { label: "Videos", href: "https://www.example.com/videos" },
            { label: "Webinars", href: "https://www.example.com/webinars" },
            { label: "Identity Blog", href: "https://www.example.com/identity-blog" },
            { label: "Growth Blog", href: "https://www.example.com/growth-blog" },
        ],
    },
    {
        heading: "Company",
        items: [
            { label: "Our Story", href: "https://www.example.com/our-story" },
            { label: "Leadership", href: "https://www.example.com/leadership" },
            { label: "Customers", href: "https://www.example.com/customers" },
            { label: "Partners", href: "https://www.example.com/partners" },
            { label: "Press", href: "https://www.example.com/press" },
            { label: "Careers", href: "https://www.example.com/careers" },
        ],
    },
];

const Footer = ({ data }) => {
    return (
        <footer className="bg-black text-white sm:pt-12 max-w-1000">

            <div className="container flex flex-col sm:flex-row justify-start sm:justify-between gap-3 px-4 pb-8">
                <div className="flex items-center space-x-3">
                    <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} className='hidden sm:block' />
                    <Image src="/assets/logo.svg" alt="Logo" width={25} height={25} className=' sm:hidden' />
                    <span className="ml-3 text-xl sm:text-3xl">loginRadius</span>
                </div>

                {/* <div className="relative items-center">
                    <input
                        type="text"
                        placeholder="Search this site"
                        className="bg-zinc-800 text-white p-2 rounded-md pl-10"
                    />
                    <svg
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.296 4.297a1 1 0 01-1.414 1.414l-4.296-4.297zM8 14A6 6 0 108 2a6 6 0 000 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div> */}
            </div>

            <div className="border-t border-gray-700"></div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 py-8 px-4">
                {data.map((section, index) => (
                    <div key={index}>
                        <h4 className="text-sm font-thin mb-4">{section.heading}</h4>
                        <ul className="space-y-2">
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-textBlue hover:text-buttonHover font-thin text-sm"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


            {/* <div className="border-t border-gray-700"></div> */}

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 gap-8 px-4 py-5">
                <div className='flex items-center justify-center'>
                    <Image src="/assets/Footer/footer-1.png" alt="Cert 1" width={140} height={140} />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/Footer/footer-2.png" alt="Cert 1" width={100} height={100} />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/Footer/footer-3.png" alt="Cert 1" width={140} height={140} />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/Footer/footer-4.png" alt="Cert 1" width={140} height={140} />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/Footer/footer-5.png" alt="Cert 1" width={140} height={140} />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/Footer/footer-6.png" alt="Cert 1" width={100} height={100} />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/assets/Footer/footer-7.png" alt="Cert 1" width={140} height={140} />
                </div>


                <Image src="/assets/footer.png" alt="Cert 1" width={100} height={100} className="sm:hidden" />
                <Image src="/assets/footer.png" alt="Cert 1" width={100} height={100} className="sm:hidden" />
            </div>


            <div className="border-t border-gray-700"></div>


            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start py-8 px-3">

                <div className="text-xs sm:text-sm text-slate-300">
                    <div className="flex sm:text-xs">
                        <p className="">Privacy |</p>
                        <p className=" ml-1">Terms |</p>
                        <p className=" ml-1">Security Policy |</p>
                        <p className=" ml-1">Site Map</p>
                    </div>
                    <p className="mt-2 text-blue-400 text-xs">© Copyright 2003-2024 LoginRadius Inc.</p>
                </div>

                <div className="flex space-x-32 mt-4 sm:mt-0 justify-items-stretch sm:space-x-4 ">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-8 w-8 sm:h-6 sm:w-6 transition-colors" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <BsTwitterX className="h-8 w-8 sm:h-6 sm:w-6 transition-colors" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="h-8 w-8 sm:h-6 sm:w-6 transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
