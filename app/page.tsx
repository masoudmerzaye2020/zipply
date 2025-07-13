export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Get Help. Fast.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Instantly book local pros for cleaning, junk removal, towing, yard work, and more — right from your phone.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Join the Waitlist
          </a>
          <a
            href="#"
            className="border border-gray-300 hover:border-gray-500 text-gray-700 px-6 py-3 rounded-xl transition"
          >
            Learn More
          </a>
        </div>
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

      {/* Services Section */}
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
