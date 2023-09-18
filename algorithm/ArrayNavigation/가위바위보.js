function compare(a,b){
  return a===b? "D" : a-b===1 ? "A" : "B";
}

function solution(n,arr1,arr2) {
//차이가 1일때 이기고 2일때 지며 0일때 비긴다.
//같은 인덱스를 탐색하도록 두배열을 반복문으로 조회한다.
return arr1.map((a,i)=>compare(a,arr2[i]))
}

// 예제 테스트
console.log(solution(5,[2,3,3,1,3],[1,1,2,2,3]));
