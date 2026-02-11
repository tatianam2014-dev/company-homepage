export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          New iPhone & Samsung.
          <br />
          <span className="text-brand">Smart Prices.</span>
          <br />
          German Warranty.
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Certified new devices with fast delivery across Germany
        </p>

        <div className="flex gap-5">
          <button className="bg-brand text-white px-8 py-4 rounded-full font-medium hover:bg-brand-hover transition">
            Shop iPhone
          </button>

          <button className="border-[1.6px] border-brand text-brand px-8 py-4 rounded-full font-medium hover:bg-brand hover:text-white 
  transition-colors duration-200">
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
