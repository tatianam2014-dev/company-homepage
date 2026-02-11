export default function TrustBar() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-12 items-start">

          {/* Secure Payment */}
          <div>
            <h3 className="text-xs text-gray-500 mb-4 tracking-normal">
              Secure payment
            </h3>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>PayPal</span>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Apple Pay</span>
              <span>Klarna</span>
            </div>
          </div>

          {/* Shipping Partners */}
          <div>
            <h3 className="text-xs text-gray-500 mb-4 tracking-normal">
              Shipping partners
            </h3>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>DHL</span>
              <span>Hermes</span>
              <span>UPS</span>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-xs text-gray-500 mb-4 tracking-normal">
              Customer rating
            </h3>

            <div className="bg-white rounded-lg px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-semibold text-gray-900">
                  4.85
                </span>
                <span className="text-sm text-gray-500">
                  / 5.00
                </span>
              </div>

              <div className="flex gap-1 mb-1">
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
