// Modal Component
'use client';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { LiaTimesSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import Modal from './Modal';
import email from '../../public/assets/emailicon.svg';
import leftnav from '../../public/assets/leftnav.svg';
import logicon from '../../public/assets/logicon.svg';
import logicon2 from '../../public/assets/logicon2.svg';
import triangle from '../../public/assets/triangle.svg';

const Navbar = ({ ciamData, solutionData, developerData, resourceData, customerData }) => {
  const [isFrameVisible, setFrameVisible] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const [isDropdownOpen, setDropdownOpen] = useState({
    ciam: false,
    solutions: false,
    customers: false,
    developers: false,
    resources: false,
  });
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);


  const toggleSearchBox = () => {
    setIsSearchBoxOpen((prev) => !prev);
  };


  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };


  const openModal = (title) => {
    setFrameVisible(false);
    const isMobileDevice = window.innerWidth <= 768;

    if (isModalOpen && modalTitle === title) {
      closeModal();
    } else {
      if (isMobileDevice) {
        closeModal();
      } else {
        setModalOpen(true);
        setModalTitle(title);
        // window.scrollBy(0, 44); 
      }
    }
  };


  const closeModal = () => {
    console.log("hover In closemodal func open");
    setModalOpen(false);
    setModalTitle("");
  };

  const handleMouseLeave = (e) => {
    if (true) {
      console.log("Hover outside modal - Closing modal");
      closeModal();
    }
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setFrameVisible(false);
  //     } else {
  //       setFrameVisible(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      {/* Notification Frame for mon=bile*/}
      {isFrameVisible && (
        <div className="bg-customBlue sm:hidden text-white py-2 text-center">
          <p className="flex items-center justify-center text-xs sm:text-sm underline cursor-pointer">
            2024 KupingerCole Leadership Compass recognizes
            LoginRadius as Overall Leader. Learn More
          </p>
        </div>
      )}
      {/* Notification Frame for desktop modal closed*/}
      {!isModalOpen && (
        <div className="bg-customBlue hidden sm:block text-white p-3 text-center h-[46px]">
          <p className="flex text-xs justify-center items-center sm:text-sm">
            2024 KupingerCole Leadership Compass recognizes LoginRadius as Overall Leader.
            <span className="ml-2 underline cursor-pointer flex text-xs sm:text-sm justify-center items-center">
              Learn More<MdArrowForward className='text-sm ml-1 sm:ml-1' />
            </span>
          </p>
        </div>
      )}
      {/* Motification frame when modal open */}
      {isModalOpen && (
        <div className="flex sticky top-0 z-50 bg-customBlue sm:block text-white px-6 py-3 text-center h-[46px]">
          <div className='flex justify-between'>
            <p className="flex text-xs justify-start items-center sm:text-sm">
              2024 KupingerCole Leadership Compass recognizes LoginRadius as Overall Leader.
              <span className="ml-2 underline cursor-pointer flex text-xs sm:text-sm justify-center items-center">
                Learn More<MdArrowForward className='text-sm ml-1 sm:ml-1' />
              </span>
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center mr-5'>
                <Image
                  src={email}
                  alt="Logo"
                  width={20}
                  height={20}
                  className=''
                />
                <p className='text-sm ml-2'>Contact Sales</p>
              </div>
              <div className='flex justify-center items-center'>
                <Image
                  src={logicon}
                  alt="Logo"
                  width={20}
                  height={20}
                  className='flex sm:block'
                />
                <p className='text-sm ml-2'>User Login</p>
              </div>
            </div>

          </div>
        </div>
      )}



      <nav className={` ${isModalOpen ? 'top-9 sticky' : 'top-0'} bg-black text-white z-50 shadow-md`}>
        <div className=" px-2 flex justify-between sm:justify-center items-center py-2">
          <div className="flex items-center  space-x-3">
            <Image
              src={leftnav}
              alt="Logo"
              width={140}
              height={140}
            />
            {/* <span className="text-sm sm:text-base tracking-wide " style={{ lineHeight: "2.5" }}>loginradius</span> */}
          </div>
          <ul className="hidden md:flex space-x-7 sm:ml-14 mr-40 text-slate-300">
            <li className={`relative group ${isModalOpen && modalTitle === "CIAM Platform" ? 'text-buttonHover' : 'hover:text-buttonHover'} `}>
              <button
                className="flex items-center space-x-2"
                onClick={() => openModal('CIAM Platform')}
              >
                <span className='text-sm md:text-[16px] '>CIAM Platform</span>
                <FaChevronDown className='md:text-[10px]' />
              </button>
              {isModalOpen && modalTitle === "CIAM Platform" && (
                <div className='flex justify-center absolute -bottom-8 left-8'>
                  <Image
                    src={triangle}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              )}

            </li>

            <li className={`relative group ${isModalOpen && modalTitle === "Solutions" ? 'text-buttonHover' : 'hover:text-buttonHover'} `}>
              <button
                className="flex items-center space-x-2"
                onClick={() => openModal('Solutions')}
              >
                <span className='text-sm md:text-[16px] '>Solutions</span>
                <FaChevronDown className='md:text-[10px]' />
              </button>
              {isModalOpen && modalTitle === "Solutions" && (
                <div className='flex justify-center absolute -bottom-8 left-8'>
                  <Image
                    src={triangle}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              )}
            </li>

            <li className={`relative group ${isModalOpen && modalTitle === "Customers" ? 'text-buttonHover' : 'hover:text-buttonHover'} `}>
              <button
                className="flex items-center space-x-2"
                onClick={() => openModal('Customers')}
              >
                <span className='text-sm md:text-[16px] '>Customers</span>
                <FaChevronDown className='md:text-[10px]' />
              </button>
              {isModalOpen && modalTitle === "Customers" && (
                <div className='flex justify-center absolute -bottom-8 left-8'>
                  <Image
                    src={triangle}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              )}
            </li>

            <li className={`relative group ${isModalOpen && modalTitle === "Developers" ? 'text-buttonHover' : 'hover:text-buttonHover'} `}>
              <button
                className="flex items-center space-x-2"
                onClick={() => openModal('Developers')}
              >
                <span className='text-sm md:text-[16px] '>Developers</span>
                <FaChevronDown className='md:text-[10px]' />
              </button>
              {isModalOpen && modalTitle === "Developers" && (
                <div className='flex justify-center absolute -bottom-8 left-8'>
                  <Image
                    src={triangle}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              )}
            </li>
            <li className="hover:text-buttonHover">
              <a href="" className='text-sm md:text-[16px]  '>Pricing</a>
            </li>
            <li className={`relative group ${isModalOpen && modalTitle === "Resources" ? 'text-buttonHover' : 'hover:text-buttonHover'} `}>
              <button
                className="flex items-center space-x-2"
                onClick={() => openModal('Resources')}
              >
                <span className='text-sm md:text-[16px] '>Resources</span>
                <FaChevronDown className='md:text-[10px]' />
              </button>
              {isModalOpen && modalTitle === "Resources" && (
                <div className='flex justify-center absolute -bottom-8 left-8'>
                  <Image
                    src={triangle}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              )}
            </li>
          </ul>

          {!isModalOpen && (<div className="flex flex-row space-x-2 md:space-x-4">
            <div className='flex space-x-2 md:space-x-4'>
              {/* <div className="bg-navBox p-2  rounded-md  items-center hover:cursor-pointer" onClick={toggleSearchBox}>
                <IoSearchOutline className="text-white text-sm sm:text-2xl" />
              </div>
              {isSearchBoxOpen && (
                <div className="absolute top-10 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg py-2 px-1 z-50 flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className=" rounded-md focus:outline-none"
                  />
                </div>
              )} */}
              <div className="bg-navBox p-2 rounded-md flex items-center ">
                <div className="flex sm:hidden">
                  <MdOutlineMail className="text-white text-xs scale-125 sm:text-2xl" />
                </div>
                <div className="hidden sm:block ">
                  <Image
                    src={email}
                    alt="Logo"
                    width={24}
                    height={24}
                    className=''
                  />
                </div>
              </div>
              <div className="bg-navBox p-2 space-x-1 rounded-md flex items-center hover:cursor-pointer" onClick={() => window.open('https://accounts.loginradius.com/auth.aspx?return_url=https://adminconsole.loginradius.com/login/', '_blank')}>
                <div className="flex sm:hidden">
                  <FiUser className="text-white sm:hidden text-xs scale-125 sm:text-xl" />
                </div>
                <div className=" hidden sm:block ">
                  <Image
                    src={logicon}
                    alt="Logo"
                    width={24}
                    height={24}
                    className='flex sm:block'
                  />
                </div>
                <span className="hidden md:block text-base tracking-wide px-1">Login</span>
                {/* <Image
                  src={logicon2}
                  alt="Logo"
                  width={40}
                  height={40}
                  className=' md:block flex items-center'
                /> */}
              </div>
            </div>

            {/* Burger Icon for Small Devices */}
            <div className="md:hidden flex space-x-1 items-center">
              <div className="bg-navBox p-2 rounded-md flex items-center">
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <LiaTimesSolid className="text-white scale-110 text-sm sm:text-xl" /> : <FaBars className="text-white text-xs sm:text-xl" />}
                </button>
              </div>
            </div>


          </div>)}
          {isModalOpen && (
            <div className="">
              <button className="flex justify-center items-center text-sm sm:text-base tracking-wide bg-[#3D63DD] text-textBlue px-2 py-2 sm:px-5 sm:py-2 rounded-md hover:bg-buttonHover"
                onClick={() => window.open('https://www.loginradius.com/book-a-demo/', '_blank')}
              >
                Free Trial
                {/* <MdArrowForward className='text-base ml-1 sm:ml-3' /> */}
              </button>
            </div>
          )}

        </div>

      </nav>

      {/* mobile device */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gradient-to-br from-[#302F2F] to-[#222222] `}>
        <ul className="flex flex-col items-start">
          <li className=' py-3 border-b w-full border-slate-400 border-opacity-50' style={{ borderBottomWidth: '0.5px' }}>
            <button
              className="flex px-4 items-center space-x-2 text-white hover:text-buttonHover"
              onClick={() => toggleDropdown('ciam')}
            >
              <span>CIAM Platform</span>
              <FaChevronDown className='text-[10px]' />
            </button>

          </li>
          <div className='w-full'>
            {isDropdownOpen.ciam && (

              <div className='bg-[#393A40]'>
                <div className=" py-8 text-white grid grid-cols-1 gap-6 border-t w-full border-[#2D2D2F] " style={{ borderTopWidth: '2px' }}>
                  {/* Core Platform Column */}
                  <div >
                    <h3 className="mb-4 px-4 text-slate-400 text-xs">Core Platform</h3>
                    <ul>
                      {ciamData.corePlatform.map((item, index) => (
                        <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                          <p className="text-sm leading-relaxed font-bold">{item.title}</p>
                          <p className="text-xs leading-relaxed text-gray-400">{item.subtitle}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Products Column */}
                  <div>
                    <h3 className="mb-4 px-4 text-slate-400 text-xs">Products</h3>
                    <ul>
                      {ciamData.products.map((item, index) => (
                        <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                          <p className="text-sm font-bold">{item.title}</p>
                          <p className="text-xs text-gray-400">{item.subtitle}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deployment and Latest Post Column */}
                  <div >
                    <h3 className="mb-4 px-4 text-slate-400 text-xs">Deployment</h3>
                    <ul className="mb-2">
                      {ciamData.deployment.map((item, index) => (
                        <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                          <p className="text-sm font-bold">{item.title}</p>
                          <p className="text-xs text-gray-400">{item.subtitle}</p>
                        </li>
                      ))}
                    </ul>


                  </div>
                </div>
              </div>
            )}
          </div>
          <li className=' py-3 border-b w-full border-slate-400 border-opacity-50' style={{ borderBottomWidth: '0.5px' }}>
            <button
              className="flex px-4 items-center space-x-2 text-white hover:text-buttonHover"
              onClick={() => toggleDropdown('solutions')}
            >
              <span>Solutions</span>
              <FaChevronDown className='text-[10px]' />
            </button>
           
          </li>
            <div className="w-full">
            {isDropdownOpen.solutions && (
              <div className=" py-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#393A40]">
                <div >
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Identity Type</h3>
                  <ul>
                    {solutionData.IdentityType.map((item, index) => (
                      <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div >
                  <ul>
                    <h3 className="mb-4 px-4 text-slate-400 text-xs">Use cases</h3>
                    {solutionData.UseCases.map((item, index) => (
                      <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Industries</h3>
                  <ul className="mb-2">
                    {solutionData.Industries.map((item, index) => (
                      <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )}
            </div>
          <li className=' py-3 border-b w-full border-slate-400 border-opacity-50' style={{ borderBottomWidth: '0.5px' }}>
            <button
              className="flex px-4 items-center space-x-2 text-white hover:text-buttonHover"
              onClick={() => toggleDropdown('customers')}
            >
              <span>Customers</span>
              <FaChevronDown className='text-[10px]' />
            </button>
            
          </li>
            <div className="w-full">
            {isDropdownOpen.customers && (
              <div className=" py-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#393A40]">
                <div >
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Identity Type</h3>
                  <ul>
                    {customerData.identityType.map((item, index) => (
                      <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            </div>
          <li className=' py-3 border-b w-full border-slate-400 border-opacity-50' style={{ borderBottomWidth: '0.5px' }}>
            <button
              className="px-4 flex items-center space-x-2 text-white hover:text-buttonHover"
              onClick={() => toggleDropdown('developers')}
            >
              <span>Developers</span>
              <FaChevronDown className='text-[10px]' />
            </button>
            
          </li>
            <div className="w-full">
            {isDropdownOpen.developers && (
              <div className=" py-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#393A40]">
                {/* Core Platform Column */}
                <div >
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Developer Hub</h3>
                  <ul>
                    {developerData.corePlatform.map((item, index) => (
                      <li key={index} className="mb-4 cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.subtitle}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products Column */}
                <div >
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Explore</h3>
                  <ul>
                    {developerData.products.map((item, index) => (
                      <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.subtitle}</p>
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            )}
            </div>
          <li className='px-4 py-3 border-b w-full border-slate-400 border-opacity-50' style={{ borderBottomWidth: '0.5px' }}>
            <a href="#pricing" className="text-white hover:text-buttonHover">Pricing</a>
          </li>

          <li className='w-full py-3'>
            <button
              className="px-4 flex items-center space-x-2 text-white hover:text-buttonHover"
              onClick={() => toggleDropdown('resources')}
            >
              <span>Resources</span>
              <FaChevronDown className='text-[10px]' />
            </button>
            
          </li>
          <div className="w-full">
          {isDropdownOpen.resources && (
              <div className=" py-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#393A40]">
                {/* Core Platform Column */}
                <div >
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Learn CIAM</h3>
                  <ul>
                    {resourceData.corePlatform.map((item, index) => (
                      <li key={index} className="mb-4 tracking-wide cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.subtitle}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products Column */}
                <div >
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Customer Success</h3>
                  <ul>
                    {resourceData.products.map((item, index) => (
                      <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.subtitle}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div >
                  <h3 className="mb-4 px-4 text-slate-400 text-xs">Deployment</h3>
                  <ul className="mb-8">
                    {resourceData.deployment.map((item, index) => (
                      <li key={index} className="mb-4  cursor-pointer py-2 px-4 rounded-md" onClick={() => window.open(item.urllink, '_blank')}>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.subtitle}</p>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )}
          </div>
        </ul>
        <div className='flex justify-center items-center w-full'>
          <div className='w-full'>
            <button className='bg-blue-600 text-white px-6 py-3 w-full' onClick={() => window.open('https://www.loginradius.com/book-a-demo/', '_blank')}>Free Trial</button>
          </div>
          <div className='w-full'>
            <button className='bg-black text-white px-6 py-3 w-full' onClick={() => window.open('https://www.loginradius.com/contact-sales/', '_blank')}>Contact Sales</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalTitle={modalTitle} ciamData={ciamData} solutionData={solutionData} customerData={customerData} developerData={developerData} resourceData={resourceData} />
    </>
  );
};

export default Navbar;
