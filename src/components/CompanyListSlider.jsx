import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import companyLogo1 from '../../public/assets/CompanyList/image 150.svg';
import companyLogo2 from '../../public/assets/CompanyList/image 139.png';
import companyLogo3 from '../../public/assets/CompanyList/image 151.svg';
import companyLogo4 from '../../public/assets/CompanyList/image 152.svg';
import companyLogo5 from '../../public/assets/CompanyList/image 153.svg';
import companyLogo6 from '../../public/assets/CompanyList/image 154.svg';
import companyLogo7 from '../../public/assets/CompanyList/image 155.svg';
import companyLogo8 from '../../public/assets/CompanyList/image 156.svg';
import companyLogo9 from '../../public/assets/CompanyList/image 157.svg';
import companyLogo10 from '../../public/assets/CompanyList/image 158.svg';
import companyLogo18 from '../../public/assets/CompanyList/image 159.svg';
import companyLogo19 from '../../public/assets/CompanyList/image 152.png';
import companyLogo20 from '../../public/assets/CompanyList/image 153.png';


const CompanyList = () => {
  return (
    <div className="sm:mt-10 items-center">
      <div className="w-full h-64 flex flex-col justify-center items-center bg-black relative overflow-hidden">
        {/* Top Light Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-400 to-transparent opacity-30 z-20 pointer-events-none"></div> */}
        <p className="text-center px-4 sm:px-0 text-sm sm:text-base text-textBlue leading-4 mb-10">
          Trusted by individuals and teams at the world’s boldest companies
        </p>

        {/* Left and Right Transparent Overlays */}
        <div className="absolute top-24 sm:top-0 left-0 w-10 sm:w-20 h-full bg-black bg-opacity-50 z-10"></div>
        <div className="absolute top-24 sm:top-0 right-0 w-10 sm:w-20 h-full bg-black bg-opacity-50 z-10"></div>

        <Marquee
          pauseOnHover
          gradient={false}
          speed={150}
          delay={5}
        >
          <div className="flex space-x-14 mb-12">
            <Image src={companyLogo1} alt="Company 1" />
            <Image src={companyLogo3} alt="Company 3" />
            <Image src={companyLogo4} alt="Company 4" />
            <Image src={companyLogo5} alt="Company 5" />
            <Image src={companyLogo6} alt="Company 6" />
            <Image src={companyLogo7} alt="Company 7" />
            <Image src={companyLogo8} alt="Company 8" />
            <Image src={companyLogo9} alt="Company 9" />
            <Image src={companyLogo10} alt="Company 10" />
            <Image src={companyLogo4} alt="Company 11" />
            <Image src={companyLogo5} alt="Company 12" />
            <Image src={companyLogo6} alt="Company 13" />
            <Image src={companyLogo7} alt="Company 14" />
            <Image src={companyLogo8} alt="Company 15" />
            <Image src={companyLogo9} alt="Company 16" />
            <Image src={companyLogo10} alt="Company 17" />
            <Image src={companyLogo18} alt="Company 18" />
            <Image src={companyLogo19} alt="Company 19" />
            <Image src={companyLogo20} alt="Company20" />

          </div>
        </Marquee>
      </div>
    </div>
  );

};

export default CompanyList;

