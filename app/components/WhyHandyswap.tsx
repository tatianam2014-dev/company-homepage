import { BadgeEuro, ShieldCheck, Headphones, RotateCcw } from "lucide-react";

export default function WhyHandyswap() {
 const features = [
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. You see immediately what you pay – including VAT and shipping.",
    icon: ShieldCheck,
  },
  {
    title: "Tested Quality",
    description:
      "Every device goes through our 50-point check by certified technicians in Germany.",
    icon: BadgeCheck,
  },
  {
    title: "German Support",
    description:
      "Our customer service is based in Berlin and helps you quickly and competently.",
    icon: Headphones,
  },
  {
    title: "Easy Returns",
    description:
      "Doesn't fit? No problem. You can return your device free of charge within 30 days.",
    icon: RotateCcw,
  },
];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why buy from Handyswap?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We make buying smartphones easy, safe and transparent. 
            Rely on our German premium service.
          </p>
        </div>

       {/* Features */}
<div className="grid grid-cols-4 gap-12">
  {features.map((feature, index) => {
    const Icon = feature.icon;

    return (
      <div key={index} className="text-center">

        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-6 bg-brand/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-brand" strokeWidth={2} />
        </div>


              {/* Title */}
              <h3 className="font-semibold text-lg mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
