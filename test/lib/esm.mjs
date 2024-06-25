import alot from '../../lib/esm/alot.mjs';

const max = alot([1, 2, 3, 4, 5]).max(x => x);
console.log(`Max: ${max}`);

export { max }
