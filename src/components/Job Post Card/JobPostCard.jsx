import React from 'react';
import { Link } from 'react-router';



const JobPostCard = ({ data }) => {
  console.log(data);
    return (
      <>
        <Link to={`/details/${data?._id}`}>
          <div className="border  border-gray-300 p-3 rounded-md space-y-3 hover:shadow-2xl transition-transform transform duration-300 delay-200 hover:-translate-y-2 ">
            <div className="relative">
              <img
                className="rounded-md w-md "
                src={data?.company_logo}
                alt=""
              />
              <span className="absolute top-3 bg-primary text-white px-2 rounded-md right-4">
                {data?.jobType}
              </span>
            </div>
            <div>
              <h1 className="font-bold text-2xl text-accent">{data?.title}</h1>
              <p className="flex gap-3 text-gray-400">
                <span>location:</span>
                <span>{data?.location}</span>
              </p>
            </div>
            <div>
              <p className="text-end font-bold text-primary">
                {`${data?.salaryRange.min}- ${data?.salaryRange.max}/${data?.salaryRange.currency}`}
              </p>
            </div>
            <div>
              <p className="line-clamp-2 font-semibold text-gray-500">
                {data?.description}
              </p>
            </div>
          </div>
        </Link>
      </>
    );
};

export default JobPostCard;