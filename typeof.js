console.log(typeof undefined === "undefined");
console.log(typeof true === "boolean");
console.log(typeof 42 === "number");
console.log(typeof "42" === "string");
console.log(typeof {life: 42} === "object");

console.log(typeof Symbol() === "symbol");
console.log(typeof null === "object");

// null 값 정확하게 확인하기 위한 방법
var a = null;
console.log(!a && typeof a === "object");

//함수는 function 타입을 반환하지만 
//object의 하위 타입이다.
console.log(typeof function() { } === "function");

//함수는 객체다
//함수의 길이 2 는 인자의 개수
function a(b, c) {}
console.log(a.length); 

console.log(typeof [1, 2, 3] === "object");

/* 
 * undefine VS undeclared  
 * 
 * 할당 되지 않음 과 선언 되지 않음을 구분 해야함
 * 선언 되지 않아 발생하는 에러 역시
 * "ReferenceError : a is not defined" 이므로 헷갈리기 쉬움
*/
