import React from 'react';

export default function Signup() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input className="border p-2 w-full mb-4" placeholder="Username" />
      <input className="border p-2 w-full mb-4" placeholder="Email" />
      <input type="password" className="border p-2 w-full mb-4" placeholder="Password" />
      <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Create Account</button>
    </div>
  );
}