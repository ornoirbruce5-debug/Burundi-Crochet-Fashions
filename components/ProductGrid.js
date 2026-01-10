import ProductCard from './ProductCard';
import Filtres from './Filtres';
import { useState } from 'react';

const COLORS = ['red', 'green', 'yellow', 'black'];
const STYLES = ['Rasta', 'Nature', 'Héritage', 'Festival'];

export default function ProductGrid({ products, onFilter, selectedFilters }) {
  return (
    <div>
      <div className="mb-4">
        <Filters colors={COLORS} styles={STYLES} selected={selectedFilters} onChange={onFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
