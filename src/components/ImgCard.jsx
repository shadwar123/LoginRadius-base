import { FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';
import imgCard from '../../public/assets/cardImg.png';

const CardSection = () => {
  return (
    <div className="flex justify-center sm:mt-6 bg-black px-5 sm:px-10">
      <div
        className="relative bg-black rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)] sm:p-4"
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: '100%',
        }}
      >
        <div className="relative rounded-2xl ml-1 mt-2 overflow-hidden sm:bg-black">
          <Image
            src={imgCard}
            alt="Video Thumbnail"
            objectFit="cover"
            className="w-full h-full"
          />
          <FaPlayCircle
            className="absolute cid text-navBox text-5xl sm:text-7xl"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
