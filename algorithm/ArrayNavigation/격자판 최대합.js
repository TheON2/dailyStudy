
function solution(n,arr1) {
  //행의합 : 0.0 0.1 0.2 0.3 ... 0.n
  //열의합 : 0.0 1.0 2.0 3.0 ... n.0
  //왼쪽대각선 : 0.0 1.1 2.2 3.3 ... n.n
  //오른쪽 대각선 : n.0 n-1.1 n-2.2 ... 0.n
  let arr = [0,0,0,0];//값을 누적해서 더해야 하기 때문에 0으로 인덱스값들 초기화
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < n; j++) {
      switch (i){
        case 0:arr[i]+=arr1[0][j];
          break;
        case 1:arr[i]+=arr1[j][0];
          break;
        case 2:arr[i]+=arr1[j][j];
          break;
        case 3:arr[i]+=arr1[n-1-j][j];
          break;
      }
    }
  }
  return Math.max(...arr)
}

// 예제 테스트
console.log(solution(5,[[10,13,10,12,15],[12,39,30,23,11],[11,25,50,53,15],[19,27,29,37,27],[19,13,30,13,19]]));
