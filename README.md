# Burundi Crochet Fashions

Static Next.js site (exportable) for Burundi Crochet Fashions. Iyi repo irimwo PWA, Tailwind CSS, n'uburyo bworoshye bwo kongeramwo ibicuruzwa ukoresheje `data/products.json`.

## Gutangura (Development)
1. `npm install`
2. `npm run dev`
3. Fungura `http://localhost:3000`

## Kubaka no gutanga (Static export)
1. `npm run build`
2. `out/` izoba irimwo site y'exported
3. Deploy `out/` kuri GitHub Pages (cyangwa indi static host)

## Kongera ibicuruzwa
- Fungura `data/products.json` wongeramwo object nshasha ukoresheje schema iri muri file.
- Ongeramwo amafoto muri `public/images/products/` (WebP recommended).
- Commit & push, hanyuma rebuild/export.

## PWA
- `manifest.json` na `service-worker.js` birahari.
- Reba `public/offline.html` ku buryo bw'ubutumwa igihe nta internet.

## Ibyerekeye
- Ijambo ryose riri mu Kirundi; shyiramo inyandiko zuzuye mu `locales/ki.json`.
