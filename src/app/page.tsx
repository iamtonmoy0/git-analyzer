"use client";

import Profile from "@/components/Profile";
import { fetchUser } from "@/functions/fetcingData";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    fetchUser(name)
      .then((res) => {
        setUser(res);
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-[18081f]">
      <form className="relative" onSubmit={(e) => handleClick(e)}>
        <label className="sr-only"> Search </label>

        <input
          className="h-10 w-[400px] rounded-full text-gray-300 border-none bg-gray-600 pe-10 ps-4 text-sm shadow-sm "
          id="search"
          type="search"
          placeholder="Enter Github Username ..."
        />

        <button
          type="submit"
          className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
        >
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      {/* profile section */}
      <Profile />
    </main>
  );
}
