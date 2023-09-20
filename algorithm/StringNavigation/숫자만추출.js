
function solution(str) {
  //문자열에서 숫자만을 남기는 정규식 적용
  //Number형변환으로 리턴하면 앞의 0이 자동으로 제거된다.
  return Number(str.replace(/[^0-9]/g, ''));
}

// 예제 테스트
console.log(solution('g0en2T0s8eSoft'));
