type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
};

// js
function MyReadonly(obj: object) {
  const res = {};

  for (let key in obj) {
    // @ts-ignore
    res["readonly" + key] = obj[key];
  }

  return res;
}
