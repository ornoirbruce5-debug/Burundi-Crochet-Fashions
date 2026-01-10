import Head from 'next/head';
import testimonials from '../data/testimonials.json';
import { useState } from 'react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <>
      <Head>
        <title>Abakiriya bacu - Testimonials</title>
      </Head>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display mb-6">Ivyiyumviro vy'abakiriya</h2>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <p className="text-gray-700 mb-4">“{t.text}”</p>
            <p className="font-semibold">{t.name} <span className="text-sm text-gray-500">— {t.location}</span></p>
            <div className="mt-4 flex justify-center gap-3">
              <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="px-3 py-1 bg-gray-100 rounded">Prev</button>
              <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)} className="px-3 py-1 bg-gray-100 rounded">Next</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
