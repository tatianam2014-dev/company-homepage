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
       <div className="relative w-1/2">
  <input
    type="text"
    placeholder="What are you looking for? (e.g. iPhone 15, Samsung S24)"
    className="w-full rounded-full bg-gray-100 border border-gray-200 pl-12 pr-12 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
  />

  {/* Search icon left */}
  <svg
    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
    <path
      d="M21 21l-4.35-4.35"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>

  {/* Arrow button right */}
  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand flex items-center justify-center hover:bg-blue-700 transition">
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>


        {/* Right menu */}
       <div className="flex items-center gap-10 text-gray-500">

  {/* Account */}
  <div className="flex flex-col items-center text-[11px] hover:text-gray-800 transition cursor-pointer">
   <svg
  className="w-5 h-5 mb-1"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
  <path
    d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
</svg>

    Account
  </div>

  {/* Wishlist */}
  <div className="flex flex-col items-center text-[11px] hover:text-gray-800 transition cursor-pointer">
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
    Wishlist
  </div>

  {/* Cart */}
  <div className="flex flex-col items-center text-[11px] relative hover:text-gray-800 transition cursor-pointer">
    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12m-5-5v5m-4-5v5" />
    </svg>
    Cart
    <span className="absolute -top-1 -right-3 bg-orange-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
      2
    </span>
  </div>

</div>


      </div>
    </header>
  );
}
