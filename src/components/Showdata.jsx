import React from 'react';

function Showdata({ users }) {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-pink-100 via-white to-pink-100">
      
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-pink-800 tracking-wide mb-10">
        Users List
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {users.slice(0, 12).map((user) => (
          <div
            key={user.id}
            className="bg-white/70 backdrop-blur-md border border-pink-200 rounded-3xl p-6 flex flex-col items-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            
            {/* Photo */}
            <img
              src={user.url}
              alt={user.title}
              className="w-24 h-24 rounded-full border-4 border-pink-300 object-cover shadow-sm"
            />

            {/* Title */}
            <p className="mt-3 text-sm text-center text-pink-800 line-clamp-2">
              {user.title}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Showdata;