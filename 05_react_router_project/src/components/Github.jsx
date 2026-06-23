import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Cover */}
          <div className="h-40 bg-linear-to-r from-orange-500 to-orange-600"></div>

          {/* Profile Section */}
          <div className="relative px-8 pb-8">
            <img
              src={data.avatar_url}
              alt="profile"
              className="absolute -top-16 h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
            />

            <div className="pt-20">
              <h1 className="text-3xl font-bold text-slate-900">{data.name}</h1>

              <p className="mt-3 max-w-2xl text-slate-600">{data.bio}</p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <p className="text-2xl font-bold text-orange-600">
                  {data.followers}
                </p>
                <p className="text-sm text-slate-500">Followers</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <p className="text-2xl font-bold text-orange-600">
                  {data.following}
                </p>
                <p className="text-sm text-slate-500">Following</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <p className="text-2xl font-bold text-orange-600">
                  {data.public_repos}
                </p>
                <p className="text-sm text-slate-500">Repositories</p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 w-full flex justify-center">
              <div>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/ShauravBhatt");
  return data.json();
};
