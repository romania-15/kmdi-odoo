import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to ReWear</h1>
      <p className="text-lg mb-8">Exchange unused clothing and earn points. Join the movement for sustainable fashion.</p>
      <div className="space-x-4">
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">Start Swapping</Link>
        <Link to="/dashboard" className="bg-green-500 text-white px-4 py-2 rounded">Browse Items</Link>
        <Link to="/add-item" className="bg-purple-500 text-white px-4 py-2 rounded">List an Item</Link>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Featured Items</h2>
        <div className="mt-4 border p-4">[Carousel will go here]</div>
      </div>
    </div>
  );
}
