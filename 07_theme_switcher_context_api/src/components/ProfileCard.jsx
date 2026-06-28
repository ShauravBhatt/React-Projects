function ProfileCard({ user }) {
  return (
    <div className="w-87.5 bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
      {/* Cover */}
      <div className="h-24 bg-blue-500"></div>

      {/* Avatar */}
      <div className="flex justify-center -mt-12">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800"
        />
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-black dark:text-white">
          {user.name}
        </h2>

        <p className="text-gray-500 dark:text-gray-400">@{user.login}</p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          {user.bio}
        </p>
      </div>

      {/* Stats */}
      <div className="border-t border-gray-200 dark:border-slate-700 flex justify-around py-4">
        <div className="text-center">
          <h3 className="font-bold text-black dark:text-white">
            {user.followers}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">Followers</p>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-black dark:text-white">
            {user.following}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">Following</p>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-black dark:text-white">
            {user.public_repos}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Repositories
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
