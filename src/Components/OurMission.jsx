import React from 'react';
import Image from 'next/image';

const OurMission = () => {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden bg-[#f0f4f5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Open+Sans:wght@300;400;600&display=swap');
        .mission-title {
          font-family: 'Lora', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: #1a2e30;
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .mission-body {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.9;
          color: #4a5e60;
          max-width: 480px;
          margin-bottom: 36px;
        }
        .btn-read {
          font-family: 'Open Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: #3db8c8;
          color: #fff;
          border: none;
          padding: 16px 36px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn-read:hover { background: #2a9aaa; }
      `}</style>

      {/* Background image - full section */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assests/fernandozhiminaicela-treatment-4099432.jpg"
          alt="Our Mission"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Left fade overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #eef3f4 0%, #eef3f4 38%, rgba(238,243,244,0.7) 55%, transparent 75%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-36">
        <div className="max-w-lg">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-body">
            At Docure, we believe dignity and respect are two of the most valuable
            commodities in the world. There is no higher praise for us than the
            smile of a happy patient, the thanks of a relieved client, or the
            revitalized embrace of an engaged resident.
          </p>
          <button className="btn-read">Read More</button>
        </div>
      </div>

    </section>
  );
};

export default OurMission;