export default function NewsletterForm() {
  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
      <h3 className="font-display text-xl mb-2">Iyandikishe kuri Newsletter</h3>
      <p className="text-gray-700 mb-4">Ushobora kwakira amakuru y'ibicuruzwa bishasha n'udushya.</p>
      <form onSubmit={(e) => { e.preventDefault(); alert('Murakoze!'); }}>
        <label className="sr-only" htmlFor="email">Email</label>
        <div className="flex gap-2">
          <input id="email" type="email" required placeholder="Email yawe" className="flex-1 px-4 py-2 border rounded" />
          <button type="submit" className="px-4 py-2 bg-brandGreen text-white rounded">Iyandikishe</button>
        </div>
      </form>
    </div>
  );
}
