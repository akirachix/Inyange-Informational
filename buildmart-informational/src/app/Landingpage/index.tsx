import Image from 'next/image';

export default function Landingpage() {
  return (
    <div className="bg-secondary text-white flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 lg:mt-[-150px] lg:pb-[120px] font-worksans im:mt-[-20px] sd:mt-[-30px] is:mt-[-80px]">
      <div className="w-full lg:w-1/2 flex flex-col items-start lg:mt-[10px] lg:pr-12 is:mt-[-30px] sd:mt-[-10px]">
        <h2 className="text-[15px] lg:text-[24px] nhm:mt-[100px] nhm:w-[130%] nhm:ml-[50px] text-center lg:mt-[60px] mb-4 lg:mb-[20px] mx-auto lg:mx-0 lg:ml-[100px] is:mt-[50px] sd:text-[18px] nh:text-[20px] nh:w-[150%] nh:ml-[28px] im:text-[24px] nh:mt-[50px]">
          Transparent Prices for Every Kenyan Builder
        </h2>
        <h1 className="lg:text-[40px] font-bold text-primary nhm:ml-[60px] leading-tight tracking-wide text-center lg:text-left w-[70%] nhm:w-[140%] mx-auto lg:mx-0  lg:ml-[100px] mb-6 lg:mb-[60px] sd:text-[24px] nh:text-[30px] nh:w-[160%] nh:ml-[28px] im:text-[30px] is:text-[20px] is:w-[100%]">
          Get instant price comparisons and find trusted suppliers near you
        </h1>
        <button className="bg-primary nhm:ml-[50px] text-black text-[16px] lg:text-[24px] font-semibold py-4 px-6 lg:py-6 lg:px-10 rounded-full mx-auto lg:mx-0 lg:ml-[100px] hover:bg-white transition duration-300 is:mt-[30px] sd:mt-[30px] im:text-[20px] im:mt-[40px] nh:ml-[30px] nh:text-[20px] nh:mt-[-20px]">
          Get Started
        </button>
      </div>
      
      <div className="w-full lg:w-[50%] nhm:w-[70%] lg:ml-[100px] md:pl-[120px] nh:w-[75%] nh:ml-[100px] nh:mt-[-10px]">
        <img
          src="/images/Construction.png"
          alt="Builder"
          width={500}
          height={300}
          className="max-w-full w-[78%] mx-auto lg:mx-0 is:mt-[10px] sd:mt-[-20px] sd:w-[80%] im:w-[70%] im:ml-[30px] lg:ml-[40px] lg:mt-[60px] nhm:text-[24px]"
        />
      </div>
    </div>
  );
}