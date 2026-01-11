import Head from 'next/head';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import BentoBlock from '../components/BentoBlock';
import NewsletterForm from '../components/NewsletterForm';
import Testimonials from '../components/Testimonials';
import { useState } from 'react';
import productsData from '../data/products.json';

export default function Home({ lang, productsData }) {
  const [filters, setFilters] = useState({ color: null, style: null });

  const handleFilter = ({ type, value }) => {
    setFilters((prev) => ({ ...prev, [type]: prev[type] === value ? null : value }));
  };

  const filtered = productsData.filter((p) => {
    if (filters.color && !p.colors.includes(filters.color)) return false;
    if (filters.style && !p.tags.includes(filters.style)) return false;
    return true;
  });

  return (
    <>
      <Head>
        <title>Burundi Crochet Fashions — Imideri ya Crochet</title>
        <meta
          name="description"
          content="Imideri ya crochet ivuye mu mutima w'Uburundi. Reba ibicuruzwa vyacu."
        />
      </Head>

      <main>
        <Hero />
        <BentoBlock />
        <section id="products" className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display mb-4">Ibicuruzwa</h2>
            <ProductGrid
              products={filtered}
              onFilter={handleFilter}
              selectedFilters={filters}
            />
          </div>
        </section>

        <Testimonials />
        <section className="py-8">
          <div className="container mx-auto px-4">
            <NewsletterForm />
          </div>
        </section>
      </main>
    </>
  );
}

// ✅ Static props for Next.js export
export async function getStaticProps() {
  const productsData = require('../data/products.json');
  return {
    props: {
      productsData,
    },
  };
}
