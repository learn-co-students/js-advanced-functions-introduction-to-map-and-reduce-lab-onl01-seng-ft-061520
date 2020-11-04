// Your code here

//returns an array with all values made negative
function mapToNegativize(sourceArray) {
    return sourceArray.map(myFunc)

    function myFunc(argu) {
        return argu * -1;
    }
}

//returns an array with the original values
function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x);
}

//returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
    return sourceArray.map(myFunc)

    function myFunc(arg) {
        return arg * 2;
    }
}

//returns an array with the original values squared
function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x);
}

//returns a running total when when not given a starting point 
//or when given a starting point
function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = function(accumulator, currentValue) {
        return accumulator + currentValue
    }
    return sourceArray.reduce(reducer, startingPoint)
}

//returns true when all values are truthy 
//or returns false when any value is falsy
function reduceToAllTrue(sourceArray) {
    const reducer = function(accumulator, currentValue) {
        if (!!accumulator == true && !!currentValue == true) {
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}


//returns true when a true value is present or
//returns false when no true value is present
function reduceToAnyTrue(sourceArray) {
    const reducer = function(accumulator, currentValue) {
        if (accumulator == true) {
            return true
        } else {
            return !!currentValue
        }
    }
    return sourceArray.reduce(reducer, false)
}