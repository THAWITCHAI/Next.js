"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Register_page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState(0);
  const [c_password, setC_password] = useState(0);
  const [id, setId] = useState(0);
  const router = useRouter();

  const onSubmit = () => {
    if (password == c_password) {
      axios
        .post("http://localhost:3520/creact", {
          id: id,
          name: name,
          password: password,
        })
        .then(() => {
          router.push("/login");
          // setContact([
          //   ...contact,
          //   {
          //     name: name,
          //     age: age,
          //   },
          // ]);
        });
    } else {
      alert("Passwords don't match");
    }
  };
  return (
    <div>
      <div className="container mx-auto  login">
        <div className="w-full max-w-xs">
          <form
            action="/login"
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                ID
              </label>
              <input
                required
                onChange={(e) => {
                  setId(e.target.value);
                }}
                placeholder="ID"
                type="text"
                className='className="shadow appearance-none border 
                        rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline" id="username" type="text'
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="User Name"
                type="text"
                className='className="shadow appearance-none border 
                        rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline" id="username" type="text'
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>

              <input
              required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className='className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" type="password"'
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setC_password(e.target.value);
                }}
                type="password"
                className='className="shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" type="password"'
                placeholder="ConFirm Password"
              />
              <p className="text-xs italic">
                have an account yet?{" "}
                <a href="/login" className="text-red-500">
                  Sign In
                </a>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/"
              >
                Cancle
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register_page;
