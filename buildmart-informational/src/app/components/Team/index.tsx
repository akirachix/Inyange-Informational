import Image from 'next/image';
import React from 'react';

const teamMembers = [
  { name: "Rehema Funani", role: "Software Developer", image: "/images/rehema.png" },
  { name: "Eshe Aziz", role: "Software Developer", image: "/images/aziz.jpg" },
  { name: "Faith Nyambura", role: "Software Developer", image: "/images/faith.jpg" },
  { name: "Moureen Gitahi", role: "Software Developer", image: "/images/moureen.jpg" },
];

const TeamMember = ({ name, role, image }) => (
  <div className="team-member max-w-[300px] mx-auto">
    <img
      src={image}
      alt={name}
      className="object-cover mx-auto w-full h-auto max-w-[240px] sm:max-w-[270px] md:max-w-[290px]"
    />
    <div className="p-4 bg-[#263C5A]">
      <h3 className="text-base text-center text-[19px] font-bold text-[#F8B612]">{name}</h3>
      <p className="text-[12px] text-center text-white">{role}</p>
    </div>
  </div>
);

export default function Team() {
  return (
    <main >
      <section id="team">
      <div className="py-10 px-4 font-worksans mt-[70px]">
        <div className="container mx-auto">
          <h2 className="text-[32px] font-bold mb-8 text-[#263C5A] text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
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


