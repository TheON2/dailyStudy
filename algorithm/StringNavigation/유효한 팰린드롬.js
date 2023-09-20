
function solution(str) {
  //문자열을 소문자로 변환하고 정규식으로 알파뱃만을 남긴다.
  //팰린드롬체크결과를 반환한다.
  let str2 = str.toLowerCase().replace(/[^a-z]/g,'');
  return str2 === str2.split("").reverse().join("") ?
    "YES":"NO"
}

// 예제 테스트
console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
