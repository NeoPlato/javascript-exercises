const fibonacci = function(N) {
    if (N <= 0) return "OOPS";
    let a = 1;
    let b = 1;
    for (let i=2; i<=N; i++) {
        [a, b] = [b, a+b];
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
