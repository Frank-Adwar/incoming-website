import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
          <Mail className="text-white w-8 h-8" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
          Something Amazing <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Is Coming Soon
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-600 text-lg md:text-xl max-w-md mx-auto">
          We're crafting an exceptional experience just for you. Join our waitlist to be the first to know when we launch.
        </p>

        {/* Form */}
        <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-xl focus:outline-none text-slate-700"
          />
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Notify Me
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-slate-500 text-sm">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
