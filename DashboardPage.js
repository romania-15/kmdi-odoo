import React from 'react';

export default function DashboardPage() {
  const user = { name: 'Jane Doe', points: 120 };
  const items = [
    { id: 1, title: 'Denim Jacket', status: 'Available' },
    { id: 2, title: 'Wool Sweater', status: 'Swapped' }
  ];
  const swaps = [
    { id: 101, item: 'Denim Jacket', status: 'Pending' },
    { id: 102, item: 'Wool Sweater', status: 'Completed' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="mt-2">Welcome, {user.name}! You have <strong>{user.points}</strong> points.</p>
      <div className="mt-6">
        <h3 className="text-xl">My Items</h3>
        <ul>{items.map(i => (<li key={i.id}>{i.title} - {i.status}</li>))}</ul>
      </div>
      <div className="mt-6">
        <h3 className="text-xl">My Swaps</h3>
        <ul>{swaps.map(s => (<li key={s.id}>{s.item} - {s.status}</li>))}</ul>
      </div>
    </div>
  );
}
