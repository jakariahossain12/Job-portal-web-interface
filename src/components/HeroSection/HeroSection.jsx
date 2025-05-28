import React from 'react';

const HeroSection = () => {
    return (
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 bg-white">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-snug">
            Find Jobs,
            <br />
            Hire Creatives
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
              Learn more
            </button>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-2">Trusted by</p>
            <div className="flex gap-6 items-center">
              <img src="/microsoft.png" alt="Microsoft" className="h-6" />
              <img src="/sony.png" alt="Sony" className="h-6" />
              <img src="/acer.png" alt="Acer" className="h-6" />
              <img src="/nokia.png" alt="Nokia" className="h-6" />
            </div>
          </div>
        </div>

        {/* Right Image Cluster */}
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
          <div className="relative w-full h-full">
            {/* Use absolute image placements to match circular layout */}
            <img
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
              className="rounded-full w-40 h-40 absolute -top-20 left-1/2 transform -translate-x-1/2 z-10"
            />
            <img
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
              className="rounded-full w-32 h-32 absolute top-20 left-16 z-0"
            />
            <img
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
              className="rounded-full w-56 h-56 absolute top-28 left-2/6 z-20"
            />
            <img
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
              className="rounded-full w-28 h-28 absolute top-0 right-0 z-0"
            />
            <img
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
              className="rounded-full w-24 h-24 absolute bottom-10 left-10 z-0"
            />
            <img
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
              className="rounded-full w-20 h-20 absolute bottom-0 right-1/4 z-0"
            />
          </div>
        </div>
      </section>
    );
};

export default HeroSection;