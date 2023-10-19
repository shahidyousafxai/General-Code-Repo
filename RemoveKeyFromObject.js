// function to remove key from object
// it takes the "key" you want to remove and object from which you want to remove specific key

const removeKey = (key, obj) => {
  const {[key]: omitted, ...res} = obj;
  return res;
}
const obj = {
  foo: 1,
  bar: 2,
  id: 3,
}
removeKey("foo", obj)
