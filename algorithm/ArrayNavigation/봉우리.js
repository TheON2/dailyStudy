function check(x, y, arr1, n) {
  let arr = [];
  if (x - 1 >= 0) arr.push(arr1[x - 1][y]);
  if (y - 1 >= 0) arr.push(arr1[x][y - 1]);
  if (x + 1 < n) arr.push(arr1[x + 1][y]);
  if (y + 1 < n) arr.push(arr1[x][y + 1]);

  return arr1[x][y] > Math.max(...arr) ? 1 : 0;
}

function solution(n, arr1) {
  //상하좌우 체크시 자신이 가장 큰값일때 cnt ++
  //상하좌우가 존재하는지 and 상하좌우값을 체크하는 메서드 생성
  //전체조회
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cnt += check(i, j, arr1, n);
    }
  }
  return cnt;
}

// 예제 테스트
console.log(solution(5,[[5,3,7,2,3],[3,7,1,6,1],[7,2,5,3,4],[4,3,6,4,1],[8,7,3,5,2]]));
