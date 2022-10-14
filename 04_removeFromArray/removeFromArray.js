const removeFromArray = function(inArray) {
    const removeItems = Array.from(arguments).slice(1);
    const newArray =[];

    for (const value of inArray) {
        if (!(removeItems.indexOf(value) > -1)){
            newArray.splice(inArray.length, 0, value);
        }
    }
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
