import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-display text-brandBlack leading-tight">
            Burundi Crochet Fashions
          </h1>
          <p className="text-lg text-gray-700">
            Imideri ya crochet ivuye mu mutima w'Uburundi — ibikoresho vyiza, ibara, n'ubuhinga.
          </p>
          <div className="flex gap-3">
            <Link href="/#products">
              <a className="inline-flex items-center px-5 py-3 bg-brandGreen text-white rounded-md shadow hover:bg-brandGreen/90 transition">
                Reba Ivyacu
              </a>
            </Link>
            <Link href="/about">
              <a className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-md hover:shadow transition">
                Ibidukikije vyacu
              </a>
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/hero-placeholder.jpg"
            alt="Imideri ya crochet ya Burundi"
            className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
