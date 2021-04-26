// const DO = {
//   beds: {
//     keywords: ["bed", "beds"],
//     checked: true,
//   },
//   ICU: {
//     keywords: ["icu"],
//     checked: true,
//   },
//   oxygen: {
//     keywords: ["oxygen"],
//     checked: true,
//   },
//   ventilator: {
//     keywords: ["ventilator", "ventilators"],
//     checked: true,
//   },
//   fabiflu: {
//     keywords: ["fabiflu"],
//     checked: true,
//   },
//   remdesivir: {
//     keywords: ["remdesivir"],
//     checked: false,
//   },
//   favipiravir: {
//     keywords: ["favipiravir"],
//     checked: false,
//   },
//   tocilizumab: {
//     keywords: ["tocilizumab"],
//     checked: false,
//   },
//   plasma: {
//     keywords: ["plasma"],
//     checked: false,
//   },
//   tiffin: {
//     keywords: ["tiffin"],
//     checked: false,
//   },
// };

// export const generateLinkForCity = (city, do, dont) => {
//   const base = `https://twitter.com/search`;
//   const params = new URLSearchParams();

//   do = do.map((param) => {

//   })
//   const query = [
//     city.trim(),
//     getAlsoSearchForString(),
//     checkboxes.excludeUnverified && '-"not verified"',
//     checkboxes.excludeUnverified && '-"unverified"',
//     getExcludedKeywordsString(),
//   ]
//     .filter(Boolean)
//     .join(" ");
//   params.set("q", query);
//   params.set("f", "live");
//   if (checkboxes.nearMe) {
//     params.set("lf", "on");
//   }
//   const link = `${base}?${params.toString()}`;
//   return link;
// }
