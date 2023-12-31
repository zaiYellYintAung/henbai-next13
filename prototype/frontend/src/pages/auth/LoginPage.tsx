import React from "react";
import Navbar from "../../components/Navbar";

const LoginPage = () => {
  return (
    <div className="app min-h-screen  bg-gray-200">
      <Navbar/>
      <div className="container mx-auto py-10 px-5 max-w-3xl">
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
          <h1 className="text-4xl mb-3 text-center">Welcome!</h1>
          <h2 className="text-3xl mb-3 text-center">Login</h2>

          <form className="px-4">
            <div className="mb-4">
              <input type="text" placeholder="Email" className="border border-gray-400 py-3 px-2 rounded-lg w-full" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Password" className="border border-gray-400 py-3 px-2 rounded-lg w-full" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Confirm Your Password" className="border border-gray-400 py-3 px-2 rounded-lg w-full" />
            </div>
            <div className="mb-4">
              <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className='text-blue-300 font-semibold'> Terms of Use </a>&<a href="#"  className='text-blue-300 font-semibold'> Privacy Policy</a>
                </span>
            </div>
            <div className="mb-4">
              <button className="w-full bg-blue-300 py-4 text-center text-white hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg">Login</button>
            </div>
            <p className="text-center mb-4">
              Don't have an account? <a className="text-blue-500">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;