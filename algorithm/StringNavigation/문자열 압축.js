function solution(str) {
  //반복문으로 str전체를 조회한다
  //다음 인덱스의 문자가 일치할때 카운팅 +
  //아닐경우 문자열을 결과배열에 푸시
  //cnt가 2이상일때만 cnt를 함께푸시
  //결과배열을 join으로 합쳐서 리턴
  let cnt=1;
  let result=[];
  for (let i = 0; i < str.length; i++) {
    if(str[i+1]===str[i]) cnt++;
    else
     {
      result.push(str[i]);
       if(cnt>1)result.push(cnt);
      cnt=1;
    }
  }
  return result.join('')
}

// 예제 테스트
console.log(solution('KKHSSSSSSSE'));
