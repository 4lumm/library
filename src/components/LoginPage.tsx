import React, { useState } from 'react';
import { BookOpen, Key } from 'lucide-react';

interface LoginPageProps {
  onLogin: (username: string, password: string) => boolean;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin(username, password)) {
      setError('');
    } else {
      setError('Invalid credentials. Only visitors may enter.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-green-50 flex items-center justify-center p-6">
      <div className="bg-gradient-to-br from-cream-100 to-amber-50 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-amber-200/50 backdrop-blur-sm">
        {/* Decorative header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mb-4 shadow-lg">
            <BookOpen className="w-10 h-10 text-cream-100" />
          </div>
          <h1 className="text-3xl font-serif text-amber-900 mb-2">The Library</h1>
          <p className="text-amber-700 text-sm">Where every letter finds its place</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-amber-800 text-sm font-medium mb-2">
              Visitor
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 bg-white/80 text-amber-900 placeholder-amber-500 transition-all"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div>
            <label className="block text-amber-800 text-sm font-medium mb-2">
              Pass Key
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 bg-white/80 text-amber-900 placeholder-amber-500 transition-all"
              placeholder="Enter the key"
              required
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Key className="w-4 h-4" />
            <span>Enter the Library</span>
          </button>
        </form>

        {/* Decorative footer */}
        <div className="mt-8 text-center text-amber-600 text-xs">
          Enter your credentials to access the archive
        </div>
      </div>
    </div>
  );
}