import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend
    alert(`Logging in user: ${email}`);
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 mt-10 border rounded">
      <h2 className="text-2xl mb-4">Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full mb-3 p-2 border rounded" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full mb-3 p-2 border rounded" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
