import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const [pendingItems, setPendingItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');

    const decoded = JSON.parse(atob(token.split('.')[1]));
    if (decoded.role !== 'admin') return navigate('/');

    const fetchPending = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/pending', {
          headers: { Authorization: token }
        });
        setPendingItems(res.data);
      } catch (err) {
        console.error('Failed to fetch pending items', err);
      }
    };

    fetchPending();
  }, [navigate]);

  const handleApprove = async (id) => {
    const token = localStorage.getItem('token');
    await axios.post(`http://localhost:5000/api/admin/approve/${id}`, {}, {
      headers: { Authorization: token }
    });
    setPendingItems(prev => prev.filter(item => item._id !== id));
  };

  const handleReject = async (id) => {
    const token = localStorage.getItem('token');
    await axios.post(`http://localhost:5000/api/admin/reject/${id}`, {}, {
      headers: { Authorization: token }
    });
    setPendingItems(prev => prev.filter(item => item._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel - Pending Listings</h1>
      {pendingItems.length === 0 ? (
        <p className="text-gray-600">No items pending approval.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pendingItems.map(item => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <img
                src={`http://localhost:5000/${item.image}`}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-md font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category} | {item.size} | {item.condition}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleApprove(item._id)}
                  className="flex-1 bg-green-500 text-white py-1 px-2 rounded text-sm"
                >Approve</button>
                <button
                  onClick={() => handleReject(item._id)}
                  className="flex-1 bg-red-500 text-white py-1 px-2 rounded text-sm"
                >Reject</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

