export default function Filters({ colors, styles, selected, onChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex gap-2 items-center">
        <span className="text-sm font-medium">Ibara:</span>
        {colors.map(c => (
          <button
            key={c}
            onClick={() => onChange({ type: 'color', value: c })}
            className={`w-8 h-8 rounded-full border ${selected.color === c ? 'ring-2 ring-offset-2' : ''}`}
            aria-label={`Filter ${c}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-sm font-medium">Style:</span>
        {styles.map(s => (
          <button
            key={s}
            onClick={() => onChange({ type: 'style', value: s })}
            className={`text-sm px-3 py-1 rounded ${selected.style === s ? 'bg-brandAccent text-white' : 'bg-gray-100'}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
