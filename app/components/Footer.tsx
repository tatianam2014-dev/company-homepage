

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-4 gap-16 mb-12">

          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <div className="text-3xl font-bold tracking-tight text-brand cursor-pointer select-none">
  Logo
</div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Your reliable partner for new and tested smartphones. 
              Affordable, sustainable and secure from Germany.
            </p>

            <div className="flex gap-4 text-gray-500 text-sm">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>TikTok</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Categories
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>iPhone new</li>
              <li>Samsung Galaxy S-Series</li>
              <li>Samsung Galaxy A-Series</li>
              <li>Accessories</li>
              <li>Sale %</li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Service & Help
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Shipping & Delivery</li>
              <li>Returns</li>
              <li>Warranty Terms</li>
              <li>Payment Methods</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Imprint</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Right of Withdrawal</li>
              <li>Cookie Settings</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 text-sm text-gray-400">
          © 2026 Handyswap GmbH. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

