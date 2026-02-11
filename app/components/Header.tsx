import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/logo_large.svg"
          alt="Handyswap logo"
          width={140}
          height={40}
          priority
        />

        {/* Search */}
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="What are you looking for? (e.g. iPhone 15, Samsung S24)"
            className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Search icon */}
          <svg
            className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>

          {/* Blue action button */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
            →
          </div>
        </div>

        {/* Right menu */}
        <div className="flex gap-8 text-sm text-gray-600">
          <div className="text-center">
            <div>👤</div>
            <span className="block text-xs mt-1">Account</span>
          </div>

          <div className="text-center">
            <div>♡</div>
            <span className="block text-xs mt-1">Wishlist</span>
          </div>

          <div className="text-center relative">
            <div>🛒</div>
            <span className="block text-xs mt-1">Cart</span>
            <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
