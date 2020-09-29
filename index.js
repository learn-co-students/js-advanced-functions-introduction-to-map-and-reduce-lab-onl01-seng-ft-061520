function mapToNegativize(array){
  return array.map(x => x * -1);
}

function mapToNoChange(array){
  return array.map(x => x);
}

function mapToDouble(array){
  return array.map(x => x * 2);
}

function mapToSquare(array){
  return array.map(x => x ** 2);
}


function reduceToTotal(array, startingPoint=0){
  return array.reduce(function(total,element){return element + total},startingPoint);
}

function reduceToAllTrue(array){
  for (let i = 0; i < array.length; i++ ){
    if (Boolean(array[i]) === false){
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(array){
  for (let i = 0; i < array.length; i++ ){
    if (Boolean(array[i]) === true){
      return true;
    }
  }
  return false;
}
