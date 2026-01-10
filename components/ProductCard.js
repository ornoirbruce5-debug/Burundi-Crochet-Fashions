import clsx from 'clsx';

export default function ProductCard({ product }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.badges && product.badges.map((b) => (
            <span key={b} className={clsx("text-xs px-2 py-1 rounded", {
              'bg-yellow-400 text-black': b === 'New',
              'bg-red-500 text-white': b === 'Best Seller',
              'bg-gray-800 text-white': b === 'Limited Edition'
            })}>
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-brandBlack">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.subtitle}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            {product.tags.map(t => (
              <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>
            ))}
          </div>
          <div className="text-lg font-bold text-brandGreen">{product.price}</div>
        </div>
      </div>
    </article>
  );
}
