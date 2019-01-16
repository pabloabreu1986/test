'use-strict'

const { countBinInt } = require('../order');

const unord = '{1,15,5,7,3}'; 
const ord = '{15,7,3,5,1}';

test('Should return an ordered array', () => {
    const result = `{${countBinInt(unord)}}`;
    expect(result).toEqual(ord)
});
