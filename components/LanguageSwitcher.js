export default function LanguageSwitcher({ lang, onToggle }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onToggle('ki')} aria-pressed={lang === 'ki'} className={`px-2 py-1 rounded ${lang === 'ki' ? 'bg-brandGreen text-white' : 'bg-gray-100'}`}>KI</button>
      <button onClick={() => onToggle('en')} aria-pressed={lang === 'en'} className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-brandGreen text-white' : 'bg-gray-100'}`}>EN</button>
    </div>
  );
}
