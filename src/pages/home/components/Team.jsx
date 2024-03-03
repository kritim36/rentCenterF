import React from "react";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <div>
      <Helmet>
        {/* Add the Material Design Icons stylesheet link */}
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
        />
      </Helmet>

      <div className="flex items-center justify-center min-h-screen bg-white py-30 mb-20">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            {/* <!-- Meet the Team --> */}
            <div className="container max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div className="flex flex-wrap justify-center text-center mb-24">
  <div className="w-full lg:w-6/12 px-4 ">
    {/* <!-- Header --> */}
    <h1 className="text-gray-900 text-4xl font-bold mb-8 whitespace-nowrap ">
      Meet the Team
    </h1>

    {/* <!-- Description --> */}
    <div className="text-center">
      <p
        className="text-gray-700 text-lg font-light whitespace-nowrap -ml-28"
      >
        Get to know the amazing team that fosters innovation at the
        heart of  success!
      </p>
    </div>
  </div>
</div>


              {/* <!-- Team Members --> */}
              <div className="flex flex-wrap items-center justify-center gap-13 mt-[-1rem]">
                {/* Member #1 */}
                <div className="mb-9 mr-20 sm:px-6 lg:px-4 max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img
                        className="rounded-md drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://i.pinimg.com/564x/ee/99/72/ee9972fe6256e3a3d6ca806e15786b2d.jpg"
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-lg font-bold mb-1">
                        Ganga Pandey
                      </h1>

                      <div className="text-gray-700 font-light mb-2">
                        Frontend Developer
                      </div>

                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-8 w-8"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-8 w-8"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-8 w-8"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member #2 */}
                <div className="mb-9 sm:px-6 lg:px-4 max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img
                        className="rounded-md drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://i.pinimg.com/564x/ee/99/72/ee9972fe6256e3a3d6ca806e15786b2d.jpg"
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-lg font-bold mb-1">
                       Kriti Mallik
                      </h1>

                      <div className="text-gray-700 font-light mb-2">
                        Backend Developer
                      </div>

                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-8 w-8"
                        >
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-8 w-8"
                        >
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-8 w-8"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
