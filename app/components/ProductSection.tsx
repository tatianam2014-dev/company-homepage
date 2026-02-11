
interface Product {
  id: number;
  brand: string;
  name: string;
  storage: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductSection({ title, subtitle, products }: ProductSectionProps) {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {product.badge && (
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4"></div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.storage}</p>
                
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
