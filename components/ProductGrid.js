import ProductCard from './ProductCard';
import Filtres from './Filtres'; // Izina rya file ni Filtres.js
import { useState } from 'react';

const COLORS = ['red', 'green', 'yellow', 'black'];
const STYLES = ['Rasta', 'Nature', 'Héritage', 'Festival'];

export default function ProductGrid({ products, onFiltrer, selectedFilters }) {
  return (
    <div>
      <div className="mb-4">
        <Filtres
          colors={COLORS}
          styles={STYLES}
          selected={selectedFilters}
          onChange={onFiltrer}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
