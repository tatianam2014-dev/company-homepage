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

        {/* Buttons */}
        <div className="flex gap-5 mb-8">
          <button className="bg-brand text-white px-8 py-4 rounded-full font-medium hover:bg-brand-hover transition">
            Shop iPhone
          </button>

          <button className="border-[1.6px] border-brand text-brand px-8 py-4 rounded-full font-medium hover:bg-brand hover:text-white transition-colors duration-200">
            Shop Samsung
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          
          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#FFB348] fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          {/* Rating number */}
          <span className="font-medium text-gray-800">
            4.8/5
          </span>

          {/* Divider */}
          <span className="text-gray-300">|</span>

          {/* Text */}
          <span className="text-gray-500">
            Over 15,000 satisfied customers
          </span>
        </div>
      </div>

      {/* Right Placeholder */}
      <div className="bg-gray-100 h-[400px] rounded-3xl flex items-center justify-center text-gray-400 text-lg">
        Product Image
      </div>

    </section>
  );
}
