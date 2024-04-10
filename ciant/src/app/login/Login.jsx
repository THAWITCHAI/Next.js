"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState(0);
  const router = useRouter();
  const onSubmit = () => {
    axios.get("http://localhost:3520/api").then((res) => {
      res.data.map((item) => {
        if (name == item.name && password == item.password) {
          console.log("Log in Successfully")
          router.push("/contact");
        }
      });
    });
  };

  return (
    <div className="container mx-auto h-80 w-3/6 login">
      <div className="w-full max-w-xs">
        <form
          action=""
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              required
              placeholder="User Name"
              type="text"
              className='className="shadow appearance-none border 
                        rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline" id="username" type="text'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              type="password"
              required
              className='className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" type="password"'
            />
            <p className="text-xs italic">
              Not have an account yet?{" "}
              <a href="/register" className="text-red-500">
                Register
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              Sign In
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
  );
}

export default Login;
