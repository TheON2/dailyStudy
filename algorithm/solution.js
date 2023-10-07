function solution(num_list) {
  let result = 1;
  let boolean = num_list.length >= 11
  boolean ?
    num_list.forEach((n)=>result+=n)
    : num_list.forEach((n)=>result*=n)
  return boolean ? result-1 : result
}

console.log(
  solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]	,51	)
);
