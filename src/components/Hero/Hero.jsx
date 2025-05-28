import React from "react";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <>
      <div className="w-9/12 mx-auto h-screen flex items-center justify-center">
        <div className=" space-y-5">
          <h1 className="font-bold text-6xl text-accent">
            Find <span>Jobs</span>,
            <br /> Hire Creatives
          </h1>
          <p className="w-4/5 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            omnis perspiciatis provident saepe esse illum optio{" "}
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="px-4 py-2 font-bold bg-primary border border-primary text-white hover:rounded-md">
              Get Start
            </button>
            <button className="px-4 py-2 font-bold border border-primary bg-white text-primary hover:rounded-md">
              Lorn More
            </button>
          </div>
        </div>
        <div className="hidden  lg:block lg:grid grid-cols-3 gap-0    items-center ">
          <div className="col-span-2  w-40">
            <motion.img
              className="rounded-full h-40"
              animate={{ y: [30, 80, 30] }}
              transition={{ duration: 6, repeat: Infinity }}
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
            />
          </div>
          <div className="col-span-1 w-40">
            <motion.img
              animate={{ x: [-7, -50, -10] }}
              className="rounded-full h-40"
              transition={{ duration: 6, repeat: Infinity }}
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
            />
          </div>

          <div className="col-span-1 w-40">
            <motion.img
              animate={{ x: [-7, -50, -10] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="rounded-full h-40"
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
            />
          </div>
          <div className="col-span-1 h-[300px]  rounded-full   w-[400px]">
            <motion.img
              className="h-[400px]  rounded-full    "
              animate={{ x: [-60, -100, -60] }}
              transition={{ duration: 9, repeat: Infinity, delay: 2 }}
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
            />
          </div>

          <div className="col-span-2 w-40">
            <motion.img
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="rounded-full h-40"
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
            />
          </div>
          <div className="col-span-1 w-40">
            <motion.img
              animate={{}}
              className="rounded-full h-40"
              src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg?h=436&iar=0&w=705&hash=837B0AD519A78570DDE3BC96916C1E64"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
