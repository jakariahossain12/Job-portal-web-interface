import React from 'react';
import { useParams } from 'react-router';
import UserAuth from '../../hooks/UseAuth/UseAuth';
import axios from 'axios';

const JobApply = () => {
  const { id } = useParams();
  const { user } = UserAuth();
  console.log(user);
  console.log(id);
  const handleApply = (e) => {
    e.preventDefault()
    const form = e.target;
    const formDate = new FormData(form);
    const applicantInfo = Object.fromEntries(formDate.entries());
    applicantInfo.job_id = id;
    
    console.log(applicantInfo);
    axios.post("http://localhost:3000/application", applicantInfo)
      .then((res) => {
        if (res.data.insertedId) {
          return alert('apply successfully Complete')
        };
      })
      .catch((error) => {
        console.log(error);
      });
  }
    return (
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleApply}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Name" className="text-sm">
                  First name
                </label>
                <input
                  id="Name"
                  value={user?.displayName}
                  type="text"
                  name="name"
                  placeholder=" name"
                  className="w-full rounded-md border focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  value={user?.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md border focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder=""
                  className="w-full rounded-md border focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  GitHub Link
                </label>
                <input
                  id="city"
                  name="github"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border focus:ring focus:ring-opacity-75   focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Linkedin
                </label>
                <input
                  id="state"
                  type="text"
                  name="linkedin"
                  placeholder=""
                  className="w-full rounded-md border focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Resume
                </label>
                <input
                  id="zip"
                  type="text"
                  name="resume"
                  placeholder=""
                  className="w-full rounded-md border focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full rounded-md border cursor-pointer "
                >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    );
};

export default JobApply;