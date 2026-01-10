import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ lang, onToggleLang }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <img src="/icons/icon-192.png" alt="Burundi Crochet Fashions logo" className="w-10 h-10 rounded" />
            <span className="font-display text-lg">Burundi Crochet Fashions</span>
          </a>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/about"><a className="text-sm">Ivyerekeye</a></Link>
          <Link href="/#products"><a className="text-sm">Ibicuruzwa</a></Link>
          <Link href="/contact"><a className="text-sm">Twandikire</a></Link>
          <LanguageSwitcher lang={lang} onToggle={onToggleLang} />
        </nav>
      </div>
    </header>
  );
}
