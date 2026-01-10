import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, lang, onToggleLang }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} onToggleLang={onToggleLang} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
