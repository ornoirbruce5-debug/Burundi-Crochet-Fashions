import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Burundi Crochet Fashions</title>
        <meta name="description" content="Twandikire: ornoirbruce5@gmail.com. Dushobora kandi kukubona i Gihosha, Bujumbura." />
      </Head>
      <main className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-display mb-4">Twandikire</h1>
            <p className="text-gray-700 mb-4">Ushobora kutwandikira kuri email: <a className="text-brandGreen underline" href="mailto:ornoirbruce5@gmail.com?subject=Kubaza%20ku%20bicuruzwa">burundicrochet@gmail.com</a></p>
            <p className="text-gray-700 mb-4">Aho turi: Gihosha, Bujumbura, Burundi.</p>
            <ul className="text-gray-700">
              <li>Youtube: <a href="#" className="text-brandAccent underline">YouTube</a></li>
              <li>Instagram: <a href="#" className="text-brandAccent underline">Instagram</a></li>
              <li>TikTok: <a href="#" className="text-brandAccent underline">TikTok</a></li>
            </ul>
          </div>
          <div>
            <div className="w-full h-64 rounded overflow-hidden shadow">
              <iframe
                title="Gihosha, Bujumbura"
                src="https://www.google.com/maps?q=-3.361,29.389&z=15&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                aria-hidden="false"
                role="application"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
