function solution(str, t) {
  //문자열내 t의 인덱스값들을 구한다
  //각 요소를 조회하며 좌우의 t의 인덱스를 체크한다
  //더가까운 t와의 거리를 구한다
  let indices = [];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      indices.push(i);
    }
  }
  for (let i = 0; i < str.length; i++) {
    const distances = indices.map(index => Math.abs(index - i));
    result.push(Math.min(...distances));
  }
  return result;
}

// 예제 테스트
console.log(solution('teachermode','e'));
