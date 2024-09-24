import Image from "next/image";
import Link from 'next/link';

export default function Landingpage() {
  return (
    <section id="home">
    <div className="bg-secondary text-white flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 mt-[-75px] md:mt-[-30px] lg:mt-[-80px] xl:pb-[127px] font-worksans">
      <div className="w-full lg:w-1/2 flex flex-col items-start mt-[30px] lg:mt-[10px] lg:pr-12">
        <h2 className="text-[16px] lg:w-[100%] sm:text-[20px] lg:text-[19px] xl:text-[24px] mt-[40px] sm:mt-[50px] lg:mt-[60px] mb-4 mx-auto lg:mx-0 text-center lg:text-left sm:w-[90%] xl:ml-[100px] md:text-[24px] md:ml-[25px] xl:mt-[-10px]">
          Transparent Prices for Every Kenyan Builder
        </h2>

        <h1 className="text-[21px] sm:text-[23px] lg:text-[36px] xl:text-[40px] font-bold text-primary leading-tight text-center lg:text-left w-[100%] sm:w-[90%] lg:w-[100%] xl:w-[70%] mb-6 lg:mb-[60px] mx-auto lg:mx-0 xl:ml-[100px] md:text-[32px] md:ml-[20px]">
          Get instant price comparisons and find trusted suppliers near you
        </h1>
        <Link href="/target-page" className="bg-primary text-black text-[14px] sm:text-[16px] lg:text-[23px] lg:ml-[100px] font-semibold py-3 sm:py-4 lg:py-6 px-5 sm:px-6 lg:px-10 rounded-full mx-auto lg:mx-0 hover:bg-white transition duration-300 mt-[20px] lg:mt-[20px] md:text-[20px]">
        <button >
          Shop Now
        </button>
        </Link>
      </div>

      <div className="w-full lg:w-[50%] mt-[20px] lg:mt-0 lg:ml-[100px] flex justify-center xl:mt-[-40px]">
        <Image
          src="/images/Construction.png"
          alt="Builder"
          width={500}
          height={300}
          className="max-w-full w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto" 
        />
      </div>
    </div>
    </section>
  );
}