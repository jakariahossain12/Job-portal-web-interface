import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
    

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={job?.company_logo}
            alt="Company Logo"
            className="w-16 h-16 rounded-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{job?.title}</h1>
            <p className="text-gray-600">{job?.company}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p>
              <span className="font-semibold">Location:</span> {job?.location}
            </p>
            <p>
              <span className="font-semibold">Job Type:</span> {job?.jobType}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {job?.category}
            </p>
            <p>
              <span className="font-semibold">Application Deadline:</span>{" "}
              {job?.applicationDeadline}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {job?.status}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Salary Range:</span>{" "}
              {job?.salaryRange.min} - {job?.salaryRange.max}{" "}
              {job?.salaryRange.currency.toUpperCase()}
            </p>
            <p>
              <span className="font-semibold">HR Name:</span> {job?.hr_name}
            </p>
            <p>
              <span className="font-semibold">HR Email:</span>{" "}
              <a
                href={`mailto:${job?.hr_email}`}
                className="text-blue-600 underline"
              >
                {job?.hr_email}
              </a>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-700">{job?.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job?.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job?.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link 
            to={`/job-apply/${job?._id}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl transition duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
