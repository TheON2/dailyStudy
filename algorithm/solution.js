function solution(num_list, n) {
  let result = []
  for (let i = n-1; i < num_list.length; i++) {
    result.push(num_list[i])
  }
  return result
}

console.log(
  solution([2, 1, 6]	,3)
);
