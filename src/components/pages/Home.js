import React, { useState, useContext, useLayoutEffect } from "react";
import AuthContext from "../context/auth/authContext";
// import { LockClosedIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const authContext = useContext(AuthContext);
  const history = useNavigate();
  const { loadUser, user } = authContext;

  useLayoutEffect(() => {
    // eslint-disable-next-line
  }, []);

  const [users, setUsers] = useState({
    email: "",
    name: "",
  });

  const { email, name } = users;

  const onChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const regexEmail = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (email === "" || name === "") {
      return toast.error("Kindly fill all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!regexEmail.test(email)) {
      return toast.error("Enter a valid Email Address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.log({
        name,
        email,
      });

      loadUser({
        email,
        name,
      });

      //       if (user.status == true) {
      //         window.location.href = `${user.response.data.authorization_url}`;
      //         console.log(user.response.data.authorization_url);
      //       }
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Alvative Paystack Payment Integration
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-gray-500"
              >
                Using Paystack API Endpoints, Intialize Transaction, Verify
                Transaction, List Transactions.
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px my-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  onChange={onChange}
                  value={name}
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div className="my-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  onChange={onChange}
                  value={email}
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
