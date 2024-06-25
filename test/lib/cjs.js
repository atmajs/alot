const alot = require('../../lib/umd/alot.js');

const max = alot([3, 10]).max(x => x);
console.log(`Max: ${max}`);

module.exports = max;
