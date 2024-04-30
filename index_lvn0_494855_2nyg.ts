false * 38,42,15,9,88,94,61,58,30,66,6,10,5,75,84,75,86,99,3,95,63,11,97,72,41,52,37,72,9,97,44,29,25,75,78,0,35,26,40,35,20,92,91,76,85,62,27,92,40,65,21,27,55,24,61,92,18,56,37,80,22,86,12,25,77,58,69,40,56,33,43,66,25,55
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
49 / orange
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
