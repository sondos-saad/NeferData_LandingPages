import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import CertificationCard from './CertificationCard';
import visibility2 from 'react-useanimations/lib/visibility2'
import UseAnimations from "react-useanimations";
import activity from 'react-useanimations/lib/activity'
// Function to display the Google icon
const GoogleIcon = () => (
  <span className='w-full h-full   flex justify-center items-center text-[7.5rem]'>
    <FcGoogle aria-label="Google Icon" />
  </span>
);

// Function to display the Microsoft icon
const MicrosoftIcon = () => (
  <span className='w-full h-full  flex justify-center items-center text-[2rem] p-2'>

    <figure className="overflow-hidden rounded-xl flex justify-center items-center p-px">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" viewBox="0 0 23 23">
        <path fill="#F25022" d="M0 0h11v11H0z" />
        <path fill="#7CBB00" d="M12 0h11v11H12z" />
        <path fill="#05A6F0" d="M0 12h11v11H0z" />
        <path fill="#FFB900" d="M12 12h11v11H12z" />
      </svg>
    </figure>
  </span>
);

// Function to display the Fly icon
const FlyIcon = () => (
  <span className='w-full h-full flex justify-center items-center'>
<UseAnimations animation={activity} size={100} strokeColor='black' />
  </span>
);

// Function to provide a description
const description = () => (
  <div className='flex flex-col text-center justify-center items-center'>
    <p>More coming soon</p>
    <a className='text-[#2F80ED] flex justify-center items-center gap-2' href='/'>
      <span>Learn More</span> <FaArrowRightLong className='pt-1' aria-label="Arrow Icon" />
    </a>
  </div>
);

//  Main Function Component
const PrivacyCertifications = () => {
  const certificationList = [
    { icon: GoogleIcon, certDescription: 'Verified OAuth app with completed OWASP security scan & 3rd party review' },
    { icon: MicrosoftIcon, certDescription: 'Verified Microsoft partner & publisher; Neferdata earned a blue verified badge.' },
    { icon: FlyIcon, certDescription: description },
  ]

  // Render the section
  return (
    <section className='flex flex-col w-[90%] max-w-[1200px] justify-center items-center py-[112px] gap-10 m-auto'>
         <div className='bg-black w-54 p-2 shadow-2xl shadow-blue-700 rounded-3xl h-54'>
< UseAnimations animation={visibility2} size={100} strokeColor='blue' />

</div>
      <HeaderText />
      <div className='flex justify-center items-center gap-12 flex-wrap'>
        {certificationList.map((certification, index) => (
          <CertificationCard key={index} Icon={certification.icon} Description={certification.certDescription} />
        ))}
      </div>
    </section>
  );
}

// Function to render section header and text
const HeaderText = () => (
  <div className='max-w-[560px] box-border px-5 flex flex-col gap-6 justify-center items-center'>
   <div className='w-full justify-center pb-12 pt-0 flex'>
        <div
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontWeight: "bold",
            lineHeight: "120%",
          }}
          className='text-4xl md:text-7xl text-[#121212] max-w-[1000px] text-center font-bold relative leading-120%'>
          <div className='flex flex-col md:flex-row place-items-center'>
          Privacy Certifications
          </div>
          <p className='text-lg pt-4 text-center '>We’re continuously investing in security features & industry certifications for our customer’s safety.</p>

        </div>
      </div>
   
  </div>
);

export default PrivacyCertifications;