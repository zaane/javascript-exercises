const removeFromArray = function(array, ...args) {
    filteredArray = array;
    for (j = 0; j < args.length; j++) {
        filteredArray = filteredArray.filter((arg) => arg !== args[j]);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
