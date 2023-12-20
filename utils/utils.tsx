export function rotateLeft(arr: any[]) {
  if (!arr.length) {
    return arr;
  }
  const newArr = [...arr];
  const firstItem = newArr.shift();
  newArr.push(firstItem!);
  return newArr;
}

export function rotateRight(arr: any[]) {
  if (!arr.length) {
    return arr;
  }
  const newArr = [...arr];
  const lastItem = newArr.pop();
  newArr.unshift(lastItem!);
  return newArr;
}
