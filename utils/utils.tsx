function rotateLeft(arr: string[]) {
  if (!arr.length) {
    return arr;
  }
  const newArr = [...arr];
  const firstItem = newArr.shift();
  newArr.push(firstItem!);
  return newArr;
}

function rotateRight(arr: string[]) {
  if (!arr.length) {
    return arr;
  }
  const newArr = [...arr];
  const lastItem = newArr.pop();
  newArr.unshift(lastItem!);
  return newArr;
}
