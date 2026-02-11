export default function CategoryCards() {
  const categories = [
    {
      label: "APPLE",
      title: "iPhone",
      description: "Discover the latest models and tested classics.",
      cta: "Shop now →",
      href: "/iphone"
    },
    {
      label: "ANDROID",
      title: "Samsung",
      description: "Powerful Galaxy smartphones at the best price.",
      cta: "Shop now →",
      href: "/samsung"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Section title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Choose your brand
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="group bg-gray-50 rounded-2xl p-10 flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Left content */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                {category.label}
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>

              <p className="text-gray-600 mb-6 max-w-sm">
                {category.description}
              </p>

              <span className="text-brand font-medium group-hover:underline">
                {category.cta}
              </span>
            </div>

            {/* Image placeholder */}
            <div className="w-52 h-52 bg-gray-200 rounded-xl ml-8 flex-shrink-0"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
