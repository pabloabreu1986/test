'use-strict'

/**
 * Get an array and order it
 */

const countBinInt = (list) => {
  if (list.substr(1, list.length - 2).length == 0) {
    return '{}';
  } else {
    // clean the {}
    let res = list.substr(1, list.length - 2);

    //separate the numbers and format them
    let arr = res.split(',').map(num => parseInt(num, 10));

    let binArr = arr.map(a => a.toString(2));

    //sort the number array
    arr.sort( (a, b) => {
      if (a.toString(2).split("1").length - 1 < b.toString(2).split("1").length - 1) {
        return 1;
      } else if (a.toString(2).split("1").length - 1 > b.toString(2).split("1").length - 1) {
        return -1;
      } else if (a.toString(2).split("1").length - 1 === b.toString(2).split("1").length - 1) {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      }
    });
    return arr;
  }
}

module.exports = {
    countBinInt
}
