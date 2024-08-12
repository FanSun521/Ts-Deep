// type First<T extends any[]> = T extends [] ? never : T[0] // T 本身
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0] // length
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never // T[0]
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


// js
function getFirst(arr) {
  
  if(arr.length === 0) {
    return "never"
  } 

  return arr[0]
}

// extend：条件(类型)约束
type arr = [1, 2, 3]
type zero = arr["length"]

// infer
type FirstElement<T> = T extends [infer First, ...any[]] ? First : never;

type First1 = FirstElement<[1, 2, 3]>;  // First 的类型是 1
