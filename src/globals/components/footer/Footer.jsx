import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-footer-bg text-footer-text font-sans dark:bg-gray-900 mt-2">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-blue-800 xl:text-2xl dark:text-black">
                Subscribe our newsletter to get an update.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="emailAddress"
                  type="email"
                  className="px-4 py-2 text-black bg-white border rounded-md dark:bg-white-900 dark:text-black-700 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-300"
                  placeholder="Email Address"
                  style={{ "::placeholder": { color: "white" } }}
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-blue-800 rounded-lg hover:bg-blue-400 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-black">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">
                  Home
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">
                  About Us
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">
                  Team
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">
                  Contact 
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:cursor-pointer hover:text-blue-500">
                  Privacy Policies
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-black">
                Gadgets
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                 Two Wheelers
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Four Wheelers
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-900 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Electronics
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                height="110"
                alt=""
              />
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                height="110"
                alt=""
              />
            </div>

            <div className="flex mr-24 gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
            </div>
          </div>

          <p className="font-sans p-8 text-start dark:text-black-500 md:text-center md:text-lg md:p-4">
            © 2023 RENTCENTER | All rights reserved.
          </p>
        </div>
      </footer>

      {/* Add the following styles to the footer element */}
      <style jsx>{`
        .bg-footer-bg {
            background-color: #e7e9ed;
          }
        
      `}</style>
    </div>
  );
};

export default Footer;