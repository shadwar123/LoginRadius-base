import { FaChevronDown, FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Image from 'next/image';
import img from '../../public/assets/modalNewImg.svg';
import share from '../../public/assets/share.svg';
import { MdArrowForward } from "react-icons/md";
const Modal = ({ isModalOpen, closeModal, modalTitle, ciamData, solutionData, customerData, developerData, resourceData }) => {

  const handleClickOutside = (e) => {
    console.log("Hover outside modal - Closing modal");
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (

    <>
      {isModalOpen && modalTitle === "CIAM Platform" && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 mt-28" onClick={handleClickOutside}>
          <div className=" bg-gradient-to-b from-[#302F2F] to-[#222222] rounded-lg shadow-lg w-11/12 sm:w-11/12 sm:h-full max-h-[92vh] overflow-y-auto scrollbar-hide">

            <div>
              <div className=" py-8 px-5 text-white grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* Core Platform Column */}
                <div className='border-r border-[#5F606A]'>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Core Platform</h3>
                  <ul>
                    {ciamData.corePlatform.map((item, index) => (
                      <li key={index} className="mb-2 pr-4 " onClick={() => window.open(item.urllink, '_blank')}>
                        <div className="bg-transparent hover:bg-modalHover transition-colors duration-100 ease-in-out cursor-pointer py-3 px-4 rounded-md">
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>

                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products Column */}
                <div className='border-r border-[#5F606A]'>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Products</h3>
                  <ul>
                    {ciamData.products.map((item, index) => (
                      <li key={index} className="mb-2 pr-4" onClick={() => window.open(item.urllink, '_blank')}>
                        <div className='bg-transparent hover:bg-modalHover transition-colors duration-300 ease-in-out cursor-pointer py-3 px-4 rounded-md'>
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deployment and Latest Post Column */}
                <div >
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Deployment</h3>
                  <ul className="mb-8">
                    {ciamData.deployment.map((item, index) => (
                      <li key={index} className="mb-2 pr-4" onClick={() => window.open(item.urllink, '_blank')}>
                        <div className='hover:bg-modalHover cursor-pointer py-3 px-4 rounded-md'>
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Latest Post Card */}
                  <div className="border-t border-[#5F606A]"></div>
                  <h3 className="mb-4 text-gray-400 text-sm mt-8">Latest Company Posts</h3>
                  <div className="bg-cardBg rounded-lg p-4 shadow-lg w-80 h-72 max-w-full max-h-full mt-5">
                    <Image
                      src={img}
                      alt="img"
                      className="w-full h-36 object-cover rounded-md mb-2"
                    />
                    <h4 className="text-sm font-semibold tracking-wide mb-1">{resourceData.latestPost.title}</h4>
                    <div className="flex flex-row justify-between mt-4"> 
                      <div className="flex flex-row gap-5">
                        <p className="text-xs text-gray-400 mb-1 tracking-wide truncate">{resourceData.latestPost.date}</p>
                        <p className="text-xs text-gray-400 mb-1 overflow-hidden text-ellipsis">{resourceData.latestPost.description}</p>
                      </div>
                      <div className='flex items-center justify-end'> 
                        <Image
                          src={share}
                          alt="img"
                          className="w-4 h-4 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-white text-xs flex items-center mt-10"
                  >
                    View more <MdArrowForward className='h-3 w-4 ml-1 text-white sm:ml-3' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && modalTitle === "Solutions" && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 mt-28" onClick={handleClickOutside} >
          <div className=" bg-gradient-to-b from-[#302F2F] to-[#222222] rounded-lg shadow-lg w-11/12 sm:w-11/12 sm:h-full max-h-[92vh] overflow-y-auto scrollbar-hide" >

            <div>
              <div className=" py-8 px-5 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className='border-r border-[#5F606A]'>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Identity Type</h3>
                  <ul>
                    {solutionData.IdentityType.map((item, index) => (
                      <li key={index} className="mb-2 pr-4 " onClick={() => window.open(item.urllink, '_blank')}>
                        <div className="bg-transparent hover:bg-modalHover transition-colors duration-100 ease-in-out cursor-pointer py-3 px-4 rounded-md">
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='border-r border-[#5F606A]'>
                  <ul>
                    <h3 className="mb-4 text-slate-400 text-xs px-4">Use cases</h3>
                    {solutionData.UseCases.map((item, index) => (
                      <li key={index} className="mb-2 pr-4 " onClick={() => window.open(item.urllink, '_blank')}>
                        <div className="bg-transparent hover:bg-modalHover transition-colors duration-100 ease-in-out cursor-pointer py-3 px-4 rounded-md">
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Industries</h3>
                  <ul className="mb-8">
                    {solutionData.Industries.map((item, index) => (
                      <li key={index} className="mb-2 pr-4 " onClick={() => window.open(item.urllink, '_blank')}>
                        <div className="bg-transparent hover:bg-modalHover transition-colors duration-100 ease-in-out cursor-pointer py-3 px-4 rounded-md">
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          
                        </div>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && modalTitle === "Customers" && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 mt-28" onClick={handleClickOutside}>
          <div className="bg-gradient-to-b from-[#302F2F] to-[#222222] rounded-lg shadow-lg w-11/12 sm:w-11/12 sm:h-full  max-h-[92vh] overflow-y-auto scrollbar-hide">
            <div>
              <div className="py-8 px-5 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-r border-[#5F606A]">
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Identity Type</h3>
                  <ul>
                    {customerData.identityType.map((item, index) => (
                      <li key={index} className="mb-2 pr-4" onClick={() => window.open(item.urllink, '_blank')}>
                        <div className="bg-transparent hover:bg-modalHover transition-colors duration-100 ease-in-out cursor-pointer py-3 px-4 rounded-md">
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-r border-[#5F606A] pr-4">
                  <h3 className="mb-4 text-slate-400 text-xs px-4 pb-2">Brands</h3>
                  <div className="grid grid-cols-3 gap-5">
                    {customerData.brands.map((brand, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-b from-[#111010] to-[#111010] flex justify-center items-center rounded-xl aspect-square p-2 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                      >
                        <Image
                          src={brand}
                          alt={`Brand ${index + 1}`}
                          width={50}
                          height={25}
                          className="w-64 h-50 object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Customer Stories</h3>
                  <div className="space-y-4">
                    {customerData.customerStories.map((story, index) => (
                      <div key={index} className="bg-[#19191B] rounded-lg p-4 shadow-lg w-full h-full">
                        <Image src={story?.image} alt={story.title} className="w-full h-18 object-cover rounded-md mb-2" />
                        <h3 className="text-base tracking-wide mb-1">{story.title}</h3>
                        <p className="text-sm leading-4 tracking-wide text-gray-400 mb-1 overflow-hidden text-ellipsis">{story.description}</p>
                      </div>
                    ))}
                  </div>

                  <a href="#" className="text-buttonHover text-xs flex items-center mt-10">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && modalTitle === "Developers" && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 mt-28" onClick={handleClickOutside} >
          <div className=" bg-gradient-to-b from-[#302F2F] to-[#222222] rounded-lg shadow-lg w-11/12 sm:w-11/12 sm:h-full max-h-[92vh] overflow-y-auto scrollbar-hide" >

            <div>
              <div className=" py-8 px-5 text-white grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* Core Platform Column */}
                <div className='border-r border-[#5F606A]'>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Developer Hub</h3>
                  <ul>
                    {developerData.corePlatform.map((item, index) => (
                      <li key={index} className="mb-2 pr-4" onClick={() => window.open(item.urllink, '_blank')}>
                        <div className='hover:bg-modalHover cursor-pointer py-3 px-4 rounded-md'>
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products Column */}
                <div className='border-r border-[#5F606A]'>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Explore</h3>
                  <ul>
                    {developerData.products.map((item, index) => (
                      <li key={index} className="mb-2 pr-4" onClick={() => window.open(item.urllink, '_blank')}>
                        <div className='hover:bg-modalHover cursor-pointer py-3 px-4 rounded-md'>
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deployment and Latest Post Column */}
                <div >
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Latest Company Post</h3>

                  {/* Latest Post Card */}
                  <div className="bg-cardBg rounded-lg p-4 shadow-lg w-80 h-72 max-w-full max-h-full mt-5">
                    <Image
                      src={img}
                      alt="img"
                      className="w-full h-36 object-cover rounded-md mb-2"
                    />
                    <h4 className="text-sm font-semibold tracking-wide mb-1">{resourceData.latestPost.title}</h4>
                    <div className="flex flex-row justify-between mt-4"> 
                      <div className="flex flex-row gap-5">
                        <p className="text-xs text-gray-400 mb-1 tracking-wide truncate">{resourceData.latestPost.date}</p>
                        <p className="text-xs text-gray-400 mb-1 overflow-hidden text-ellipsis">{resourceData.latestPost.description}</p>
                      </div>
                      <div className='flex items-center justify-end'> 
                        <Image
                          src={share}
                          alt="img"
                          className="w-4 h-4 object-cover"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="bg-cardBg rounded-lg p-4 shadow-lg w-80 h-72 max-w-full max-h-full mt-5">
                    <Image
                      src={img}
                      alt="img"
                      className="w-full h-36 object-cover rounded-md mb-2"
                    />
                    <h4 className="text-sm font-semibold tracking-wide mb-1">{resourceData.latestPost.title}</h4>
                    <div className="flex flex-row justify-between mt-4"> 
                      <div className="flex flex-row gap-5">
                        <p className="text-xs text-gray-400 mb-1 tracking-wide truncate">{resourceData.latestPost.date}</p>
                        <p className="text-xs text-gray-400 mb-1 overflow-hidden text-ellipsis">{resourceData.latestPost.description}</p>
                      </div>
                      <div className='flex items-center justify-end'> 
                        <Image
                          src={share}
                          alt="img"
                          className="w-4 h-4 object-cover"
                        />
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && modalTitle === "Resources" && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 mt-28" onClick={handleClickOutside} >
          <div className=" bg-gradient-to-b from-[#302F2F] to-[#222222] rounded-lg shadow-lg w-11/12 sm:w-11/12 sm:h-full max-h-[92vh] overflow-y-auto scrollbar-hide" >

            <div>
              <div className=" py-8 px-5 text-white grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* Core Platform Column */}
                <div className='border-r border-[#5F606A]'>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Learn CIAM</h3>
                  <ul>
                    {resourceData.corePlatform.map((item, index) => (
                      <li key={index} className="mb-2 pr-4" onClick={() => window.open(item.urllink, '_blank')}>
                        <div className="hover:bg-modalHover cursor-pointer py-3 px-4 rounded-md">
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products Column */}
                <div className='border-r border-[#5F606A]'>
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Customer Success</h3>
                  <ul>
                    {resourceData.products.map((item, index) => (
                      <li key={index} className="mb-2 pr-4 " onClick={() => window.open(item.urllink, '_blank')}>
                        <div className='hover:bg-modalHover cursor-pointer py-3 px-4 rounded-md'>
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div >
                  <h3 className="mb-4 text-slate-400 text-xs px-4">Deployment</h3>
                  <ul className="mb-8">
                    {resourceData.deployment.map((item, index) => (
                      <li key={index} className="mb-2 pr-4" onClick={() => window.open(item.urllink, '_blank')}>
                        <div className='hover:bg-modalHover cursor-pointer py-3 px-4 rounded-md'>
                          <p className="text-base mt-1   font-medium">{item.title}</p>
                          <p className="text-sm mt-1   text-gray-400">{item.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-cardBg rounded-lg p-4 shadow-lg w-80 h-72 max-w-full max-h-full mt-5">
                    <Image
                      src={img}
                      alt="img"
                      className="w-full h-36 object-cover rounded-md mb-2"
                    />
                    <h4 className="text-sm font-semibold tracking-wide mb-1">{resourceData.latestPost.title}</h4>
                    <div className="flex flex-row justify-between mt-4"> 
                      <div className="flex flex-row gap-5">
                        <p className="text-xs text-gray-400 mb-1 tracking-wide truncate">{resourceData.latestPost.date}</p>
                        <p className="text-xs text-gray-400 mb-1 overflow-hidden text-ellipsis">{resourceData.latestPost.description}</p>
                      </div>
                      <div className='flex items-center justify-end'> 
                        <Image
                          src={share}
                          alt="img"
                          className="w-4 h-4 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-white text-xs flex items-center mt-10"
                  >
                    View more <MdArrowForward className='h-3 w-4 ml-1 text-white sm:ml-3' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  );
};
export default Modal;


