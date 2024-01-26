import React from "react";
import { FaGithubAlt } from "react-icons/fa";
export default function Header() {
  return (
    <div className="text-gray-200 flex flex-row justify-between px-8 h-12 items-center">
      <div>
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-xl"
     >Git-Analyzer</h1>
      </div>
      <div>
		<a href="https://github.com/iamtonmoy0/git-analyzer">
		<FaGithubAlt className="text-4xl " />
		</a>
	  </div>
    </div>
  );
}
