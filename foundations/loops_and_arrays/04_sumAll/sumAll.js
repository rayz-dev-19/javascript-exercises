const sumAll = function(a, b) {

    if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(b) || b <= 0 ) {
    return "ERROR";
    } else {
        let sumAllInt = 0;

        let min = Math.min (a, b);
        let max = Math.max (a, b);

        for (let i = min; i <= max; i++) {
             sumAllInt += i;
        }
        
        return sumAllInt;
    };
}

// Do not edit below this line
module.exports = sumAll;
