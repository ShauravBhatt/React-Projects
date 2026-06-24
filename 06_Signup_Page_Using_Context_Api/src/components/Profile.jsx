import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";
import { Navigate } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user || !user.username?.trim() || !user.password?.trim()) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
          Profile Card
        </h2>

        <div className="space-y-3">
          <p className="text-gray-700">
            <strong>Username:</strong> {user.username}
          </p>

          <p className="text-gray-700">
            <strong>Password:</strong> {user.password}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
