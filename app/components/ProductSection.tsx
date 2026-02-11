interface Product {
  id: number;
  brand: string;
  name: string;
  storage: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

interface Props {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductSection({
  title,
  subtitle,
  products,
}: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-500 mt-2">{subtitle}</p>
        </div>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View all
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300 relative"
          >
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}

            <div className="bg-gray-100 h-48 mb-6 rounded-lg flex items-center justify-center text-gray-400">
              Image
            </div>

            <p className="text-sm text-gray-400 mb-1">
              {product.brand}
            </p>

            <h3 className="font-semibold mb-1">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              {product.storage}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-lg">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
