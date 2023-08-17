import { LockClosedIcon } from "@heroicons/react/20/solid";
import { React, useState } from "react";
export default function Example() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <div className="flex  items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20  "
              src="default.svg"
              alt="Stadium soccor"
            />
            <h2 className="mt-6 text-center text-2xl font-semibold font-mono  text-[#FEFAF1] ">
              Sign in to your stadium
            </h2>
          </div>

          <input type="hidden" name="remember" defaultValue="true" />

          <div>
            <label htmlFor="user" className="sr-only">
              User
            </label>
            <input
              id="user"
              name="user"
              type="text"
              autoComplete="user"
              required
              className="relative block w-full appearance-none text-center rounded-2xl border  px-3 py-2 text-[#060606] placeholder-gray-500  sm:text-sm"
              placeholder="user"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none text-center  rounded-2xl border  px-3 py-2 text-[#060606] placeholder-gray-500  sm:text-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <button
              className="group relative flex w-full text-[#060606] justify-center rounded-2xl border border-transparent py-2 px-4 text-sm font-medium  bg-[#68FE9A] hover:bg-[#06a93c] "
              onClick={handleSubmit}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-[#060606]"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
