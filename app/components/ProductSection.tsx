type BadgeType = "bestseller" | "new" | "discount";

interface Product {
  id: number;
  brand: string;
  name: string;
  storage: string;
  price: string;
  oldPrice?: string;
  badge?: {
    label: string;
    type: BadgeType;
  };
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
  const getBadgeStyles = (type: BadgeType) => {
    switch (type) {
      case "bestseller":
        return "bg-brand text-white";

      case "new":
        return "bg-gray-200 text-gray-700";

      case "discount":
        return "bg-[#FFB348] text-gray-900 font-semibold";

      default:
        return "bg-brand text-white";
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            {subtitle}
          </p>
        </div>

        <a
          href="#"
          className="text-brand font-medium text-sm hover:underline"
        >
          View all
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition duration-300 relative"
          >
            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide ${getBadgeStyles(
                  product.badge.type
                )}`}
              >
                {product.badge.label}
              </span>
            )}

            {/* Image Placeholder */}
            <div className="bg-gray-100 h-48 mb-6 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Image
            </div>

            {/* Brand */}
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
              {product.brand}
            </p>

            {/* Product Name */}
            <h3 className="font-semibold text-gray-900 mb-1">
              {product.name}
            </h3>

            {/* Storage */}
            <p className="text-sm text-gray-500 mb-4">
              {product.storage}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-brand font-bold text-lg">
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
