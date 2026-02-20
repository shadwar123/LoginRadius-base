import Image from "next/image";
import Navbar from '../components/Navbar';
import HeroContent from '../components/HeroContent';
import CardSection from "../components/ImgCard";
import CompanyList from "../components/CompanyListSlider";
import IndustryLeader from "../components/IndustryLeader";
import StartToday from "../components/StartToday";
import GoLiveSection from "../components/GoLiveSection";
import TechStack from "../components/TechStack";
import DeveloperComponent from "../components/DeveloperComponent";
import Industries from "../components/Industries";
import Resource from "../components/Resource";
import Footer from "../components/Footer";
import { CardStackDemo } from "../components/CardStackDemo";
import Head from 'next/head';

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
import customer1 from '../../public/assets/customer1.svg'
import customer2 from '../../public/assets/customer2.svg'
import cardImg1 from '../../public/assets/cardstack/image.png'
import cardImg2 from '../../public/assets/cardstack/image2.png'
import cardImg3 from '../../public/assets/cardstack/image3.png'
import cardImg4 from '../../public/assets/cardstack/image4.png'
import cardImg5 from '../../public/assets/cardstack/image5.png'

export default function Home() {

  const resourceCardData = {
    heading: "Resources",
    subheading: "Learn more about CIAM",
    subheadingTwo: "Stay up to date with the latest stories, events and more with Loginradius",
    data: [
      {
        label: 'E-book',
        title: '4 Key Entry Points to a Digital Transformation for Media and Publications',
        description: 'Everywhere you look, companies are announcing plans to undergo digital business transformations.',
        imageUrl: '/assets/Resources/img2.png',
        action: 'Get E-book',
      },
      {
        label: 'Blog',
        title: 'Leading the Charge in Customer IAM: LoginRadius Recognized as an Overall Leader...',
        description: 'KuppingerCole\'s 2024 Leadership Compass reports recognize LoginRadius as an overall leader...',
        imageUrl: '/assets/Resources/img3.png',
        action: 'Read the blog',
      },
      {
        label: 'White Paper',
        title: 'Identity Management Architectures for Ecommerce Products that Prioritize...',
        description: 'Stepping up traditional ID systems for new-age privacy demands...',
        imageUrl: '/assets/Resources/img1.png',
        action: 'Get White paper',
      },
      {
        label: 'Blog',
        title: 'Leading the Charge in Customer IAM: LoginRadius Recognized as an Overall Leader...',
        description: 'KuppingerCole\'s 2024 Leadership Compass reports recognize LoginRadius as an overall leader...',
        imageUrl: '/assets/Resources/img3.png',
        action: 'Read the blog',
      },
      {
        label: 'E-book',
        title: '4 Key Entry Points to a Digital Transformation for Media and Publications',
        description: 'Everywhere you look, companies are announcing plans to undergo digital business transformations.',
        imageUrl: '/assets/Resources/img2.png',
        action: 'Get E-book',
      },
    ]
  }

  const industryCardData = {
    heading: "INDUSTRIES",
    subheading: "See how enterprises in different industries are using LoginRadius to manage customer identities",
    cards: [
      { header: 'Media & Communications', imageUrl: '/assets/industryCardImg.svg', imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'Government Bodies', imageUrl: '/assets/industryCardImg.svg',imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'Retail & Ecommerce', imageUrl: '/assets/industryCardImg.svg',imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'Banking, Finance & Insurance', imageUrl: '/assets/industryCardImg.svg',imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'Travel & Hospitality', imageUrl: '/assets/industryCardImg.svg',imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'Healthcare', imageUrl: '/assets/industryCardImg.svg',imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'SaaS (Software as a Service)', imageUrl: '/assets/industryCardImg.svg',imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'Consumer Brands', imageUrl: '/assets/industryCardImg.svg',imageUrl2: '/assets/imgUrl2.svg', link: '/' },
      { header: 'B2B Service & Partnership', imageUrl: '/assets/industryCardImg.svg', imageUrl2: '/assets/imgUrl2.svg',link: '/' },
    ]
  };


  const projectsData = {
    heading: "Capabilities",
    subheading: "",
    data: [
      {
        id: 1,
        title: "Authenticate Every User No Matter Where They Are.",
        description: "LoginRadius lets enterprise developers select login methods that make sense for customers’ journey: implement traditional passwords and OTPs to social login, federated SSO, and passkeys with few lines of code..",
        src: cardImg1,
        color: "#FFAC81",
        subColor: "#CA845F"
      },
      {
        id: 2,
        title: "Next-gen security standards to safeguard your users and data",
        description: "Extra layer of no-code security, such as bot detection, IP throttling, breached password alerting to DDoS protection and adaptive MFA, to secure user accounts and protect PII.",
        src: cardImg3,
        color: "#7DCFB6",
        subColor: "#5AA08B"
      },
      {
        id: 3,
        title: "Build end-to-end login experiences with minimal effort",
        description: "Use our AI builder, hosted pages, and drag-and-drop workflow orchestration to set up branded sign-up and login experiences with customizable email templates.",
        src: cardImg4,
        color: "#F25F5C",
        subColor: "#CB4845"
      },
      {
        id: 4,
        title: "Scale confidently with LoginRadius",
        description: "LoginRadius lets enterprise developers select login methods that make sense for customers’ journey: implement traditional passwords and OTPs to social login, federated SSO, and passkeys with few lines of code.",
        src: cardImg5,
        color: "#8CB369",
        subColor: "#58872E"
      },
      {
        id: 5,
        title: "Manage thousands of brands and apps within one platform.",
        description: "Efficiently build multiple identity apps for all your brands within a unified platform: decide whether you want isolated or combined data stores for specific brands.",
        src: cardImg2,
        color: "#FFC43D",
        subColor: "#C19224"
      }
    ]
  }
  const ciamData = {
    corePlatform: [
      { title: 'Authentication & Registration', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/authentication/' },
      { title: 'Authorisation & Federation', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/passkeys-login-authentication/' },
      { title: 'Multi-factor Authentication', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/multi-factor-authentication/' },
      { title: 'User Management', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/user-management/' },
      { title: 'Identity & ciamData Store', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Account Security & Management', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Identity Orchestration & Workflows', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Cloud Deployments', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/'},
      { title: 'Third Party Integrations', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
    ],
    products: [
      { title: 'Passkey', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/passkeys-login-authentication/' },
      { title: 'Passwordless', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/passwordless-login/' },
      { title: 'Federation Protocols', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/federated-sso/' },
      { title: 'AI Login Page Builder', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Adaptive MFA', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/'},
      { title: 'High Performance CIAM', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/'},
      { title: 'Consent Management', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/'},
      { title: 'Customer Intelligence', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Machine to Machine', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
    ],
    deployment: [
      { title: 'Multi-tenant Cloud', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/multi-tenant-cloud/'},
      { title: 'Private Cloud', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/private-cloud/'},
    ],
    latestPost: {
      image: 'https://via.placeholder.com/150',
      title: 'LoginRadius launches Identity Orchestration for seamless Identity Workflows',
      date: 'July 24, 2024',
      description: '3 min read',
    }
  };

  const solutionData = {
    Industries: [
      { title: 'Media & Communications', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/industry-media-and-communications/' },
      { title: 'Government', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/industry-government/' },
      { title: 'Retail & Ecommerce', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/industry-retail-and-ecommerce/' },
      { title: 'Banking, Finance and Insurance', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/industry-finance-and-banking/' },
      { title: 'Travel and Hospitality', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/industry-travel-and-hospitality/' },
      { title: 'Healthcare', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/industry-healthcare/' },
      { title: 'Consumer Brands', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/industry-consumer-brands/' },
      { title: 'B2B Service & Partnerships', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/b2b-service-partnerships' },
      { title: 'SaaS (Software as a Service)', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/saas' },
    ],
    UseCases: [
      { title: 'Scalibility', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'High Performance CIAM', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/high-performance-ciam' },
      { title: 'Peak-load Handling', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Multi-brand CIAM Deployment', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Private Cloud Deployment', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Account Secourity ', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Customer Experiance', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Identity as a service(IaaS)', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Life cycle management', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Consent & Privacy', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Digital Transformation', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },


    ],
    IdentityType: [
      { title: 'Consumer (B2B Users)', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/b2c-identity/' },
      { title: 'Business Customers (B2B Users)', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
    ]
  };

  const developerData = {
    corePlatform: [
      { title: 'Docs', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/docs/' },
      { title: 'Getting Started', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/getting-started' },
      { title: 'Tutorials', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/tutorials' },
      { title: 'API reference', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/docs/api/v2/getting-started/introduction/' },
      { title: 'WebSDKs', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/docs/libraries/sdk-libraries/overview/'},
      { title: 'Mobile SDKs', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/docs/libraries/mobile-sdk-libraries/overview/' },

    ],
    products: [
      { title: 'Engineering Blog', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Change log', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'System Status', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Bug Bounty', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Github', subtitle: 'Turn website visitors into customers'   , urllink: 'https://www.loginradius.com/'},
      ],
    deployment: [
      { title: 'Multi-tenant Cloud', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Private Cloud', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
    ],
    latestPost: {
      image: 'https://via.placeholder.com/150',
      title: 'LoginRadius launches Identity Orchestration for seamless Identity Workflows',
      date: 'July 24, 2024',
      description: '3 min read',
    }
  };

  const resourceData = {
    corePlatform: [
      { title: 'Industry Reports', subtitle: 'Turn website visitors into customers' , urllink: 'https://www.loginradius.com/resources/#industry-report' },
      { title: 'White Papers', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/resources/#white-paper'},
      { title: 'E-Books', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/resources/#ebooks'},
      { title: 'Case Studies', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/resources/#case-study'},
      { title: 'Product Sheets', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/resources/#data-sheet'},
      { title: 'Videos', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/resources/#infographic'},
      { title: 'Webinars', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/resources/#webinars'},
      { title: 'Identity Blog', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/blog/identity/'},
      { title: 'Growth Blog', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/blog/growth/'},
    ],
    products: [
      { title: 'Customer Success Overview', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/'},
      { title: 'Support Services', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Professional Services', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Help & Support', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Knowledge Base', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Contact Us', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
     ],
    deployment: [
      { title: 'Our story', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Leadership', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Press', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Partners', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
      { title: 'Careers', subtitle: 'Turn website visitors into customers'  , urllink: 'https://www.loginradius.com/' },
    ],
    latestPost: {
      image: '',
      title: 'LoginRadius launches Identity Orchestration for seamless Identity Workflows',
      date: 'July 24, 2024',
      description: '3 min read',
    }
  };
  const customerData = {
    identityType: [
      { title: "500+ Brands"  , urllink: 'https://www.loginradius.com/customers/' },
      { title: "Customer Stories"  , urllink: 'https://www.loginradius.com/customers/#case-studies' }
    ],
    brands: [
      companyLogo1,
      companyLogo6,
      companyLogo3,
      companyLogo4,
      companyLogo6,
      companyLogo5,
      companyLogo7,
      companyLogo9,
      companyLogo7,
      companyLogo1,
      companyLogo18,
      companyLogo1,
      companyLogo4,
      companyLogo6,
      companyLogo1,
      companyLogo5,
      companyLogo4,
      companyLogo3,

    ],
    customerStories: [
      {
        image: customer2,
        title: 'Peter Gailey',
        description: 'President and Broadcast at Broadcast Med'  , urllink: 'https://www.loginradius.com/'
      },
      {
        image: customer1,
        title: 'Aaron Clark',
        description: 'VP of Corporate Services, IFMA'  , urllink: 'https://www.loginradius.com/'
      }
    ]
  };


  const footerData = [
    {
      heading: "Products",
      items: [
        { label: "Passkey", href: "https://www.loginradius.com/passkeys-login-authentication/" },
        { label: "Passwordless", href: "https://www.loginradius.com/passwordless-login/" },
        { label: "Federation Protocols", href: "https://www.loginradius.com/federated-sso/" },
        { label: "AI Login Page Builder", href: "https://www.loginradius.com/ai-login-page-builder" },
        { label: "Adaptive MFA", href: "https://www.loginradius.com/push-notification-mfa/" },
        { label: "Customer Intelligence", href: "https://www.loginradius.com/customer-intelligence" },
        { label: "Machine to Machine", href: "https://www.loginradius.com/machine-to-machine" },
        { label: "Consent Management", href: "https://www.loginradius.com/consent-management" },
        { label: "High Performance CIAM", href: "https://www.loginradius.com/high-performance-ciam" },
      ],
    },
    {
      heading: "Industries",
      items: [
        { label: "Media & Communications", href: "https://www.loginradius.com/industry-media-and-communications/" },
        { label: "Government", href: "https://www.loginradius.com/industry-government/" },
        { label: "Retail & Ecommerce", href: "https://www.loginradius.com/industry-retail-and-ecommerce/" },
        { label: "Banking, Finance & Insurance", href: "https://www.loginradius.com/industry-finance-and-banking/" },
        { label: "Travel & Hospitality", href: "https://www.loginradius.com/industry-travel-and-hospitality/" },
        { label: "Healthcare", href: "https://www.loginradius.com/industry-healthcare/" },
        { label: "Consumer Brands", href: "https://www.loginradius.com/industry-consumer-brands/" },
        { label: "B2B Service & Partnerships", href: "https://www.loginradius.com/b2b-service-partnerships" },
        { label: "SaaS (Software as a Service)", href: "https://www.loginradius.com/saas" },
      ],
    },
    {
      heading: "For Developers",
      items: [
        { label: "Docs", href: "https://www.loginradius.com/docs/" },
        { label: "Getting Started", href: "https://www.loginradius.com/getting-started" },
        { label: "Tutorials", href: "https://www.loginradius.com/tutorials" },
        { label: "API References", href: "https://www.loginradius.com/docs/api/v2/getting-started/introduction/" },
        { label: "Web SDKs", href: "https://www.loginradius.com/docs/libraries/sdk-libraries/overview/" },
        { label: "Mobile SDKs", href: "https://www.loginradius.com/docs/libraries/mobile-sdk-libraries/overview/" },
        { label: "Engineering Blog", href: "https://www.loginradius.com/blog/engineering/" },
        { label: "System Status", href: "https://status.loginradius.com/" },
        { label: "Bug Bounty", href: "https://www.loginradius.com/bug-bounty" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { label: "Industry Reports", href: "https://www.loginradius.com/industry-reports" },
        { label: "White Papers", href: "https://www.loginradius.com/white-papers" },
        { label: "E-books", href: "https://www.loginradius.com/e-books" },
        { label: "Case Studies", href: "https://www.loginradius.com/case-studies" },
        { label: "Product Sheets", href: "https://www.loginradius.com/product-sheets" },
        { label: "Videos", href: "https://www.loginradius.com/videos" },
        { label: "Webinars", href: "https://www.loginradius.com/webinars" },
        { label: "Identity Blog", href: "https://www.loginradius.com/identity-blog" },
        { label: "Growth Blog", href: "https://www.loginradius.com/growth-blog" },
      ],
    },
    {
      heading: "Company",
      items: [
        { label: "Our Story", href: "https://www.loginradius.com/our-story" },
        { label: "Leadership", href: "https://www.loginradius.com/leadership/" },
        { label: "Customers", href: "https://www.loginradius.com/customers/" },
        { label: "Partners", href: "https://www.loginradius.com/partner-with-us/" },
        { label: "Press", href: "https://www.loginradius.com/press/" },
        { label: "Careers", href: "https://www.loginradius.com/careers/" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Loginradius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="LoginRadius is a customer identity solution that manages user authentication, identity verification, social login, SSO, login security &amp; more."></meta>
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="keywords" content="ciam,customer identity and access management"></meta>
        <link rel="canonical" href="https://www.loginradius.com/"></link>
        <meta name="generator" content="All in One SEO (AIOSEO) 4.2.5.1 "></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:site_name" content="LoginRadius"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:title" content="LoginRadius: Start With Identity, Go Anywhere"></meta>
        <meta property="og:description" content="LoginRadius is a customer identity solution that manages user authentication, identity verification, social login, SSO, login security &amp; more."></meta>
        <meta property="og:url" content="https://www.loginradius.com/"></meta>
        <meta property="og:image" content="https://www.loginradius.com/wp-content/uploads/2024/07/lr-logo.png"></meta>
        <meta property="og:image:secure_url" content="https://www.loginradius.com/wp-content/uploads/2024/07/lr-logo.png"></meta>
        <meta property="og:image:width" content="213"></meta>
        <meta property="og:image:height" content="53"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="LoginRadius: Start With Identity, Go Anywhere"></meta>
        <meta name="twitter:description" content="LoginRadius is a customer identity solution that manages user authentication, identity verification, social login, SSO, login security &amp; more."></meta>
        <meta name="twitter:image" content="https://www.loginradius.com/wp-content/uploads/2024/07/lr-logo.png"></meta>
        <meta name="google" content="nositelinkssearchbox" />


      </Head>
      <div className="">
        <Navbar ciamData={ciamData} solutionData={solutionData} developerData={developerData} resourceData={resourceData} customerData={customerData} />
        <HeroContent />
        <CardSection />
        <CompanyList />
        <CardStackDemo cardData={projectsData} />
        <div className="mt-36 sm:mt-0 sm:mb-24">
          <IndustryLeader />
        </div>
        <StartToday />
        <GoLiveSection />
        <TechStack />
        <DeveloperComponent />
        <Industries data={industryCardData} />
        <Resource data={resourceCardData} />
        <Footer data={footerData} />
      </div>
    </>
  );
}
