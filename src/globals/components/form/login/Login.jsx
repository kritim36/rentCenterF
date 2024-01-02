import React from "react";



export default function Login() {
  
  return (
    <>
      <div className="max-w-full h-full w-full m-auto py-6 ml-60 px-4 relative group ">
        <div class="container mx-auto">
          <div class="flex justify-center px-6 my-12">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
              

              <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="username"
                    >
                      Username
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    
                  </div>
                  <div class="mb-4">
                    <input
                      class="mr-2 leading-tight"
                      type="checkbox"
                      id="checkbox_id"
                    />
                    <label class="text-sm" for="checkbox_id">
                      Remember Me
                    </label>
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Log In
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Create an Account!
                    </a>
                  </div>
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}