// Your code here
function mapToNegativize(sourceArray) {
  let n = []
  for (let i = 0; i < sourceArray.length; i++) {
    n.push(sourceArray[i] * -1)
  }
  return n
}

function mapToNoChange(sourceArray) {
  let n = []
  for (let i = 0; i < sourceArray.length; i++) {
    n.push(sourceArray[i])
  }
  return n
}

function mapToDouble(sourceArray) {
  let n = []
  for (let i = 0; i < sourceArray.length; i++) {
    n.push(sourceArray[i] * 2)
  }
  return n
}

function mapToSquare(sourceArray) {
  let n = []
  for (let i = 0; i < sourceArray.length; i++) {
    n.push(sourceArray[i] ** 2)
  }
  return n
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    total = total + sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let i =0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i =0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true
  }
  return false
}
