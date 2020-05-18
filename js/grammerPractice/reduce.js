const reduceTest = (reducer, acc) => targetList => {
  const [head, ...rest] = targetList;
  if(head === undefined ) return acc;
  return reduceTest(reducer, reducer(acc, head))(rest);
}

const arrayExample = [1,2,3]

const mapExample = iterationFunc => reduceTest((acc, c) => [...acc, iterationFunc(x)], [])

const expectedMap = mapExample(x=> x+1)(arrayExample)

console.log(expectedMap)





const lengthExample = reduceTest(acc=> 1+acc, 0);

const expectedLength = lengthExample(arrayExample)

console.log(expectedLength)
