
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            A childhood dream <br/> turned reality.
          </h2>
          <div className="w-24 h-1 bg-[#0284C7] mt-8"></div>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#475569] leading-relaxed mb-8">
            nworksinc is a group of companies that merged due to the uniqueness of goals and projection. Formed in a humble idea of a childhood dream, we operate with team spirit, transparency, discipline, and coordination.
          </p>
          <p className="text-lg md:text-xl text-[#475569] leading-relaxed mb-8">
            We work on giving our clients the best customer experience. All departments work together to create an exceptional product that stands out in the market.
          </p>
        </div>
      </div>

      {/* Mission & Vision Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="order-2 lg:order-1 relative h-[400px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
             alt="Team Collaboration" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale"
           />
           <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply"></div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#F1F5F9]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7] mb-6">Our Mission</span>
           <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#0F172A] leading-tight">
             Unique design & <br/> financial growth.
           </h3>
           <p className="text-lg text-[#475569] leading-relaxed mb-12 max-w-md">
             Creating unique design & experiences while ensuring financial growth by providing excellent customer services. We strive to meet the demands of customer satisfaction with the best perceived value.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#0F172A] text-white">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8] mb-6">Our Vision</span>
           <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
             Exquisite products tailored to your taste.
           </h3>
           <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-md">
             To provide artistically satisfying and exquisite products to our clients' tastes. We look beyond the boundaries of modernization to create timeless value.
           </p>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" 
             alt="Business Vision Planning" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-[#0284C7]/30 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
