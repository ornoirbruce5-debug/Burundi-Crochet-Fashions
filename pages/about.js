import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Ivyerekeye Burundi Crochet Fashions</title>
        <meta name="description" content="Inkuru yacu: uko twatanguye, intego zacu, n'ubuhinga bwa crochet." />
      </Head>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-display mb-4">Ivyerekeye Burundi Crochet Fashions</h1>
          <p className="text-gray-700 mb-4">
            Burundi Crochet Fashions ni umuryango w'abakora imideri ya crochet mu Burundi. Twatanguriye mu muryango, dufise intego yo gukomeza umuco, guha agaciro ibara n'ubuhinga, no gushigikira abacrafters b'abanyagihugu.
          </p>
          <p className="text-gray-700">
            Duharanira gukoresha ibikoresho vyiza, guha agaciro ibara n'ubuhinga, no gutanga ibicuruzwa bifise umwihariko w'Uburundi.
          </p>
        </div>
      </main>
    </>
  );
}
