import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
  src="/logo_large.svg"
  alt="Handyswap logo"
  width={140}
  height={40}
  priority
/>

        <input
          type="text"
          placeholder="Search for iPhone, Samsung..."
          className="w-1/2 border rounded-full px-4 py-2"
        />

        <div className="flex gap-6 text-sm">
          <span>Account</span>
          <span>Wishlist</span>
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
}
