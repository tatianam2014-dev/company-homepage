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
            <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-700">
              <span>PayPal</span>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Apple Pay</span>
              <span>Klarna</span>
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
            <div className="bg-w
