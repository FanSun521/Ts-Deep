type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key
};


// js
function TupleToObject(array) {
  const res = {};

  array.forEach((val) => {
    res[val] = val;
  });

  return res;
}


// 遍历数组值：T[number]
type arr1 = [1, '2', 3]
type a = arr1[number]