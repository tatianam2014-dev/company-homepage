export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          New iPhone & Samsung.
          <br />
          <span className="text-blue-600">Smart Prices.</span>
          <br />
          German Warranty.
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Certified new devices with fast delivery across Germany
        </p>

        <div className="flex gap-5">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition">
            Shop iPhone
          </button>

          <button className="border border-gray-300 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition">
            Shop Samsung
          </button>
        </div>
      </div>

      {/* Right Placeholder */}
      <div className="bg-gray-100 h-[400px] rounded-3xl flex items-center justify-center text-gray-400 text-lg">
        Product Image
      </div>

    </section>
  );
}
