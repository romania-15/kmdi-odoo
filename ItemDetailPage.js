import React from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailPage() {
  const { id } = useParams();
  const item = {
    id,
    title: 'Denim Jacket',
    description: 'Classic blue denim jacket, gently used.',
    uploader: 'Jane Doe',
    available: true
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{item.title}</h2>
      <p className="mb-2">{item.description}</p>
      <p className="mb-2">Uploaded by: {item.uploader}</p>
      <p className="mb-4">Status: {item.available ? 'Available' : 'Not Available'}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Request Swap</button>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Redeem via Points</button>
    </div>
  );
}
