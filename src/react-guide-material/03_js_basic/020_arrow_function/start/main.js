function fn(number) {
  return number * 2;
}
console.log(fn(2));

/* アロー関数
  const fnArrow = (number) => {
  return number * 2;
}
*/

/* 引数が一つの場合は（）が、処理が一行の場合は｛｝が省略できる */
const fnArrow = number => number * 2

/* 戻り値がオブジェクトの場合、処理を()で囲う */

const fnArrowObj = number => ({ result: number * 2})

console.log(fnArrowObj(2));