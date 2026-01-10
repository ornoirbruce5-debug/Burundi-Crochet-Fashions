export default function Footer() {
  return (
    <footer className="bg-brandBlack text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          © {new Date().getFullYear()} Burundi Crochet Fashions. Uburenganzira bwose burabitswe.
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-sm underline">Privacy</a>
          <a href="#" className="text-sm underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
