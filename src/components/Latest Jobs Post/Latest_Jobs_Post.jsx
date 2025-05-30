import { motion } from "motion/react";

import React, { use } from "react";
import { NavLink } from "react-router";
import JobPostCard from "../Job Post Card/JobPostCard";

const Latest_Jobs_Post = ({ jobsPromise }) => {
  const jobsData = use(jobsPromise);

  return (
    <div className="w-11/12 mx-auto py-24 space-y-10">
      <div className=" space-y-3">
        <h1 className="md:text-4xl text-accent font-bold">
          Latest Jobs{" "}
          <motion.span
            animate={{
              color: [
                "#FF6B6B",
                "#6BCB77",
                "#4D96FF",
                "#F7B801",
                "#9B5DE5",
                "#00BBF9",
                "#F15BB5",
                "#00F5D4",
                "#FFC75F",
                "#D65DB1",
              ],
            }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 5 }}
          >
            Post
          </motion.span>
        </h1>
        <p className="md:w-3/5">
          Explore the different types of available jobs to apply <br /> discover
          which is right for you.
        </p>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-3 items-center gap-4 ">
        <button className="px-4 py-2 font-bold rounded-md border border-gray-300 bg-white text-accent hover:text-primary transition duration-200  hover:border-primary">
          Lorn More
        </button>

        <button className="px-4 py-2 font-bold rounded-md border border-gray-300 bg-white text-accent hover:text-primary transition duration-200  hover:border-primary">
          Lorn More
        </button>

        <button className="px-4 py-2 font-bold rounded-md border border-gray-300 bg-white text-accent hover:text-primary transition duration-200  hover:border-primary">
          Lorn More
        </button>

        <button className="px-4 py-2 font-bold rounded-md border border-gray-300 bg-white text-accent hover:text-primary transition duration-200  hover:border-primary">
          Lorn More
        </button>

        <button className="px-4 py-2 font-bold rounded-md border border-gray-300 bg-white text-accent hover:text-primary transition duration-200  hover:border-primary">
          Lorn More
        </button>

        <button className="px-4 py-2 font-bold rounded-md border border-gray-300 bg-white text-accent hover:text-primary transition duration-200  hover:border-primary">
          Lorn More
        </button>
      </div>

      {/* search */}
      <div className="w-11/12 mx-auto flex flex-wrap justify-center items-center">
        <input
          type="text"
          placeholder="search "
          className="w-4/5 text-center py-2 border border-primary  "
        />
        <button className="px-4 py-2 font-bold bg-primary border border-primary  text-white ">
          Get Start
        </button>
      </div>
      {/* all job post item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center ">
        {jobsData.map((data) => (
          <JobPostCard key={data._id} data={data}></JobPostCard>
        ))}
      </div>
    </div>
  );
};

export default Latest_Jobs_Post;
