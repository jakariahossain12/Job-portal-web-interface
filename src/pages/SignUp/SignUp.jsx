import React, { useContext } from "react";
import { Formik } from "formik";
import { AuthContext } from "../../context/Context";
const SignUp = () => {
  const { newUser, updateUserInfo } = useContext(AuthContext);
  const handleSignUP = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, name, password, photo } = Object.fromEntries(
      formData.entries()
    );
    newUser(email, password)
      .then((res) => {
          console.log(res);
          const updateInfo = {
            displayName: name,
            photoURL:photo
          };
          updateUserInfo(updateInfo)
              .then(() => {
              
              })
              .catch(error => {
              console.log(error);
          })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-2/6 mx-auto">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSignUP}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="photo" className="block mb-2 text-sm">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="photo url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Sign in
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
