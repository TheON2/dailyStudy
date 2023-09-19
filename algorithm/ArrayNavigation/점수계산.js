function solution(n,arr) {
//가산점 체인을 기록하는 변수가 필요함
  //체인이 끊길때 다시 0으로 초기화
  let chain=0;
  let result=0;
  for (let i = 0; i < n; i++) {
    if(arr[i]===0)chain=0;
    result+=arr[i]+chain;
    if(arr[i]!==0)chain++;
  }
  return result
}

// 예제 테스트
console.log(solution(10,[1,0,1,1,1,0,0,1,1,0]));
