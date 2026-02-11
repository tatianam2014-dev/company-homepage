export default function CategoryCards() {
  const categories = [
    {
      title: "iPhone",
      description: "Discover the latest Apple models with official warranty.",
      cta: "Shop iPhone →",
      href: "/iphone"
    },
    {
      title: "Samsung",
      description: "Explore powerful Galaxy smartphones.",
      cta: "Shop Samsung →",
      href: "/samsung"
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group bg-gray-50 rounded-lg p-8 flex items-center justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <span className="text-blue-600 font-medium">
                  {category.cta}
                </span>
              </div>
              <div className="w-48 h-48 bg-gray-200 rounded-lg ml-8 flex-shrink-0"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
