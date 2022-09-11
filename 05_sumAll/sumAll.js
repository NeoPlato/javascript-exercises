const sumAll = function(start, end) {
    if (typeof start != 'number' || typeof end != 'number') {
      return "ERROR";
    }
    if (start < 0 || end < 0) {
      return "ERROR";
    }
    let N = Math.abs(end - start) + 1;
    return N * (start + end) / 2;
};

// Do not edit below this line
module.exports = sumAll;
