'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbwd1B20iA9s0fVEcXyvPbH2gByhUBKQZspS30xT_QHqCAA1_iRsjnXpptNpnPtH6TNnHQ/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });


      const data = await res.json();
      if (data.result === 'success') {
        setSubmitted(true);
        setEmail('');
      } else {
        alert('Submission failed: ' + data.message);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      alert('Submission failed. Try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get Help. Fast.</h1>
        <p className="text-lg text-gray-600 mb-6">
          Instantly book local pros for cleaning, junk removal, towing, yard work, and more — right from your phone.
        </p>

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
          <p className="text-green-600 font-semibold mt-4">Thanks for joining the waitlist! 🙌</p>
        )}
      </section>
    </main>
  );
}
