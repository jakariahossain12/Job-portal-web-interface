import axios from 'axios';
import React from 'react';
import UserAuth from '../../hooks/UseAuth/UseAuth';

const JobAdd = () => {
  const {user}=UserAuth()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const jobInfo = Object.fromEntries(formData.entries());
      const { min, max, currency, ...newJob } = jobInfo;

      // set salary range in a objcet
      newJob.salaryRange = { min, max, currency };
      // process convert a array 
      newJob.requirements = newJob.requirements.split(',').map(res => res.trim())
      newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())

      newJob.status = "active";
      console.log(newJob);

      axios
        .post("http://localhost:3000/jobs", newJob)
        .then((res) => {
          if (res.data.insertedId) {
            return alert('job post successfully')
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return (
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 bg-white rounded-2xl items-center shadow-md mt-10 space-y-4"
      >
        <div className='flex flex-col justify-center max-w-2xl gap-4'>
          <h2 className="text-2xl text-center font-bold mb-4">Add New Job</h2>

          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 gap-4">
            <input
              name="title"
              placeholder="Job Title"
              className="input"
              required
            />
            <input
              name="location"
              placeholder="Location"
              className="input"
              required
            />
            <input
              name="jobType"
              placeholder="Job Type (e.g. Remote, Hybrid)"
              className="input"
              required
            />
            <input
              name="category"
              placeholder="Category"
              className="input"
              required
            />
            <input
              type="date"
              name="applicationDeadline"
              className="input"
              required
            />
            <input
              name="company"
              placeholder="Company Name"
              className="input"
              required
            />
            <input
              name="min"
              type="number"
              placeholder="Min Salary"
              className="input"
              required
            />
            <input
              name="max"
              type="number"
              placeholder="Max Salary"
              className="input"
              required
            />
            <input
              name="currency"
              placeholder="Currency (e.g. bdt)"
              defaultValue="bdt"
              className="input"
              required
            />

            <input
              name="company_logo"
              placeholder="Company Logo URL"
              className="input"
            />
            <input name="hr_name" placeholder="HR Name" className="input" />
            <input
              name="hr_email"
              placeholder="HR Email"
              type="email"
              value={user?.email}
              className="input"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
            <textarea
              name="requirements"
              placeholder="Requirements (comma separated)"
              className="input h-24"
            />
            <textarea
              name="responsibilities"
              placeholder="Responsibilities (comma separated)"
              className="input h-24"
            />
          </div>
          <div className="">
            <textarea
              name="description"
              placeholder="Job Description"
              className="input h-28 w-full"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 w-full py-2 rounded-xl hover:bg-blue-700"
            >
              Submit Job
            </button>
          </div>
        </div>
      </form>
    );
};

export default JobAdd;