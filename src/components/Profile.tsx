import Image from "next/image";
import React from "react";

export default function Profile({ user }) {
  console.log(user);
  const {
    avatar_url,
    bio,
    website: blog,
    company,
    member: created_at,
    email,
    followers,
    following,
    name,
    location,
    public_repos,
    repos_url,
  } = user;
  return (
    <div className="text-white mb-10">
      <div >
        <Image src={avatar_url} height={60} width={60} alt="name" />
        <p>{name}</p>
      </div>
    </div>
  );
}
