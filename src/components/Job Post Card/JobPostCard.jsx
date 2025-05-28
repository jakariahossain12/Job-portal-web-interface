import React from 'react';



const JobPostCard = () => {
    return (
      <div className="border border-gray-300 p-3 rounded-md space-y-3 hover:shadow-2xl transition-transform transform duration-300 delay-200 hover:-translate-y-2 ">
        <div className="relative">
          <img
            className="rounded-md"
            src="https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636935038.jpg"
            alt=""
          />
          <span className="absolute top-3 bg-primary text-white px-2 rounded-md left-4">
            Fulltime
          </span>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-accent">
            React Native Web Developer
          </h1>
          <p className="flex gap-3 text-gray-400">
            <span>location</span>
            <span>time</span>
          </p>
        </div>
        <div>
          <p className="text-end font-bold text-primary">90$-120$/Hors</p>
        </div>
        <div>
          <p className="line-clamp-2 font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            blanditiis doloribus praesentium nemo omnis quod perspiciatis qui
            voluptates voluptatem vitae facere nobis voluptatibus consectetur
            dignissimos, laborum repellat corrupti hic et.
          </p>
        </div>
      </div>
    );
};

export default JobPostCard;