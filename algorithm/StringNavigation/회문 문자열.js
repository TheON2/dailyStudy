function solution(str) {
  // 뒤집은 문자열이 기존의 문자열과 일치하는지를 삼항연산자로 리턴
  return str.split('').map((a)=>a.toLowerCase()).join("")
    === str.split('').reverse().map((a)=>a.toLowerCase()).join("") ?
    "YES" : "NO"
}

// 예제 테스트
console.log(solution('GooG'));