import Image from 'next/image';
import React from 'react';

const teamMembers = [
  { name: "Rehema Funani", role: "Software Developer", image: "/images/rehema.png", width: 240, height: 240 },
  { name: "Eshe Aziz", role: "Software Developer", image: "/images/aziz.jpg", width: 240, height: 240 },
  { name: "Faith Nyambura", role: "Software Developer", image: "/images/faith.jpg", width: 240, height: 240 },
  { name: "Moureen Gitahi", role: "Software Developer", image: "/images/moureen.jpg", width: 240, height: 240 },
];

const TeamMember = ({ name, role, image, width, height }) => (
  <div className="team-member max-w-[300px] mx-auto">
    <Image
      src={image}
      alt={name}
      width={width}  
      height={height} 
      className="object-cover mx-auto w-full h-auto"
    />
    <div className="p-4 bg-[#263C5A]">
      <h3 className="text-center text-[18px] font-bold text-[#F8B612]">{name}</h3>
      <p className="text-[14px] text-center text-white">{role}</p>
    </div>
  </div>
);

export default function Team() {
  return (
    <main>
      <section id="team">
        <div className="py-10 px-4 font-worksans mt-[70px]">
          <div className="container mx-auto">
            <h2 className="text-[32px] font-bold mb-8 text-[#263C5A] text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

