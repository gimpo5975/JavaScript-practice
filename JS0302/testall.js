// 1번 문제
//현재 날짜와 시간을 아래 형식으로 표시하세요.
//오늘은 0000년 00월 00일 00요일입니다.  그리고 지금 시간은 오전 00시 00분 00초 입니다.
//* hint : 날짜 함수 new Date() 이용.

// const d = new Date();
// const days = ["일", "월","화","수","목","금","토"];
// var y = d.getFullYear();
// var m = d.getMonth()+1;
// var da = d.getDate();
// var day = days[d.getDay()];
// var h = d.getHours();
// var mn = d.getMinutes();
// var s = d.getSeconds();
// console.log("오늘은" + y + "년" + m + "월" + da + "일 " + day +
//             "요일입니다. 그리고 지금 시간은 오전" + h + "시" + mn + "분" + s + "초입니다." );

//2번 문제
//버튼을 클릭하 현재 페이지의 내용을 인쇄하는 JavaScript  코드를 작성하세요.
//* hint : 프린트 함수를 찾아 볼 것

//function printPage(){
//window.print();
//}

//3번 문제
//현재 날짜를 가져오는 JavaScript 코드를 작성하세요.
//2023-03-02

// const d = new Date("2022-03-25");
// console.log(d)

//4. 세 변의 길이가 5, 6, 7인 삼각형의 넓이를 찾는 자바스크립트 코드를 작성하세요.
//* hint1:  헤론의 공식 ==> https://miho273.tistory.com/28   6번.
// * hint2: javascript 에서 루트 구하는 함수 찾아 볼 것
// const a = 5;
// const b = 6;
// const c = 7;
// const ss = (a+b+c)/2;
// const s = Math.sqrt(ss*(ss-a)*(ss-b)*(ss-c));
// console.log(s);


//5. JavaScript 라는 문자의 끝을 하나씩 지우고 앞으로 붙이는 함수를 만든 후  setInterval을 이용하여 일정시간동안 문자열이 흐르는 듣한 모습을 만드시오.
//* 문자열 함수 검색
