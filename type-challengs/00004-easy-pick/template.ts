type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
};


// js
function MyPick(T, K) {
  const res = {};

  K.forEach((key) => {
    if (key in K) {
      res[key] = T[key];
    }
  });

  return res;
}

// 1. K： 是 union 联合类型
// 2. mapped： 使用方括号 [] 来定义你想要转换的键，然后使用 in 来指定如何映射这些键
// 3. indexed： We can use an indexed access type to look up a specific property on another type
// 4. keyof：
//  - The keyof operator takes an object type and produces a string or numeric literal union of its keys
//  - If the type has a string or number index signature, keyof will return those types instead
// 5. extends in Type： we’ll use this interface and the extends keyword to denote our constraint: