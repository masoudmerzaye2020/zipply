'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbwd1B20iA9s0fVEcXyvPbH2gByhUBKQZspS30xT_QHqCAA1_iRsjnXpptNpnPtH6TNnHQ/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      console.log('Google script response:', data);

      if (data.result === 'success') {
        setSubmitted(true);
        setEmail('');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Submission failed. Try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get Help. Fast.</h1>
        <p className="text-lg text-gray-600 mb-6">
          Instantly book local pros for cleaning, junk removal, towing, yard work, and more — right from your phone.
        </p>

        {/* Waitlist Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-semibold mt-4">
            Thanks for joining the waitlist! 🙌
          </p>
        )}
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-10">How Zipply Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          {[
            { title: "Choose a service", desc: "Select cleaning, towing, junk removal, and more." },
            { title: "Set your time & location", desc: "Tell us where and when you need help." },
            { title: "Get matched instantly", desc: "Nearby pros send offers in real time." },
            { title: "Pay securely", desc: "No cash — just safe, simple in-app payments." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Services You Can Book</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "House Cleaning", desc: "Professional cleaners for deep or routine home cleaning." },
            { title: "Junk Removal", desc: "Quickly haul away old furniture, trash, or clutter." },
            { title: "Towing", desc: "Get emergency roadside help or towing on demand." },
            { title: "Yard Work", desc: "Lawn mowing, trimming, or yard cleanup services." },
            { title: "Loading Help", desc: "Hire muscle to move, lift, or load heavy items." },
            { title: "Car Detailing", desc: "Mobile cleaning for interior and exterior car care." },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ZipplyApp. All rights reserved.
      </footer>
    </main>
  );
}
