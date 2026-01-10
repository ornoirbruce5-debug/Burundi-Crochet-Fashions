export default function BentoBlock() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-2 bg-white rounded-lg p-6 shadow">
          <h3 className="font-display text-xl mb-2">Ibiranga</h3>
          <p className="text-gray-700">Ibikoresho vyiza, ibara, n'ubuhinga bwa gakondo.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h4 className="font-semibold">Rasta</h4>
          <p className="text-gray-600 text-sm">Ibara n'uburanga.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h4 className="font-semibold">Nature</h4>
          <p className="text-gray-600 text-sm">Imiterere n'ubwiza.</p>
        </div>
      </div>
    </section>
  );
}
