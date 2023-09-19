
function solution(n,arr1) {
  //arr1을 구조분해할당 하여 정렬한 arr2를 생성
  //arr1의 요소가 arr2의 몇번째 인덱스+1에 존재하는지에대한 배열을 리턴한다.
  let arr2 = [...arr1].sort((a, b) => b - a);
  return arr1.map((a) => arr2.indexOf(a) + 1);
}

// 예제 테스트
console.log(solution(5,[87,89,92,100,76]));
