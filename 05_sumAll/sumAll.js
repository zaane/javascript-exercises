const sumAll = function (start, end) {
    if ((typeof start === 'number' && start >= 0)
        && (typeof end === 'number' && end >= 0)) {
            sum = (start + end)/2 * (Math.abs(end - start) + 1);
            return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
