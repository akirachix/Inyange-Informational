
import Image from "next/image";

export default function Services() {
  const features = [
    {
      icon: '/images/shopping.png',
      title: 'Streamlined Procurement',
      description: 'Effortlessly find and order construction materials online, streamlining your project management.',
      width: 80,  
      height: 80, 
    },
    {
      icon: '/images/trust.png',
      title: 'Greater Transparency',
      description: 'Access clear, current pricing and availability data, ensuring you make informed decisions efficiently and effectively.',
      width: 80,  
      height: 80, 
    },
    {
      icon: '/images/calculator.png',
      title: 'Improved Cost Control',
      description: 'Get real-time pricing updates to manage your budget effectively and avoid unexpected costs.',
      width: 80, 
      height: 80,
    },
  ];

  return (
    <main>
      <section id="service">
        <div className="py-4 px-4 mt-[100px] font-worksans">
          <div className="container mx-auto text-center">
            <h2 className="text-[30px] font-bold text-[#263C5A] mb-4">Why Choose BuildMart?</h2>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-8 xl:gap-x-42 2xl:gap-x-72">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center px-4 py-2 max-w-xs sm:max-w-sm md:max-w-md">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={feature.width}  
                    height={feature.height}  

                    width={80}
                    height={80} 

                    className="mb-2"
                  />
                  <h3 className="text-[24px] font-bold mb-4 text-[#263C5A]">{feature.title}</h3>
                  <p className="lg:w-80 sm:w-64 text-[16px] md:text-[18px]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
