export default function TrustBar() {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-12">
          {/* Secure Payment */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              Secure Payment
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                PayPal
              </div>
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                Visa
              </div>
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                MC
              </div>
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                Apple
              </div>
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                Klarna
              </div>
            </div>
          </div>

          {/* Shipping Partners */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              Shipping Partners
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                DHL
              </div>
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                Hermes
              </div>
              <div className="w-16 h-10 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                UPS
              </div>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              Customer Rating
            </h3>
            <div className="bg-white rounded border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">4.85</span>
                <span className="text-sm text-gray-600">/ 5.00</span>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-600">Excellent – Trusted Shops</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
