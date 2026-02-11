export default function TrustBar() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 items-center gap-12">

          {/* Secure Payment */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-3">
              Secure payment
            </p>
            <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-700">
              <span>PayPal</span>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Apple Pay</span>
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-3">
              Shipping partners
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-700">
              <span>DHL</span>
              <span>Hermes</span>
              <span>UPS</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl px-6 py-5 text-center shadow-sm">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-2xl font-semibold text-gray-900">
                  4.85
                </span>
                <span className="text-sm text-gray-500">
                  / 5.00
                </span>
              </div>

              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-xs text-gray-500">
                Excellent – Trusted Shops
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
