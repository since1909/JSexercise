// 배열
function foo() {
    var arr = Array.from(arguments);

    arr.push("bam");
    console.log(arr);   
}

foo("bar", "baz");

// 문자열과 문자 배열은 다르다
var a = "sample";
var b = ["s", "a","m", "p", "l","e"];

console.log("a.length : " +  a.length + " b.length: " + b.length);

// 문자열 reverse는 문자 배열의 reverse 함수를 빌려 쓸수 없다.
// a.reverse() 불가능 -> 문자 배열로 바꿔서 변환하는 hack

// split: 문자열을 문자 배열로 변환
// join: 문자 배열을 다시 합하여 문자열로 변환 
var c = a.split("").reverse().join("");
console.log(c);                 //elpmas


// 특수 값  NaN에 대한 처리
// Not a Number은 어떤 것과도 동등하지 않다.
var d = 2 / "sample";
var e = "sample";

console.log(Number.isNaN(d)); //true
console.log(Number.isNaN(e)); //false

// 값과 레퍼런스
var a1 = [1,2,3];
var a2 = a1;
console.log("a1: " + a1 + " a2: " + a2);

a2 = [4,5,6];
console.log("a1: " + a1 + " a2: " + a2);

// 함수 인자일 때 
function sampleFunc(x) {
    x.push(4);
    console.log("x: " + x);

    x = [4,5,6];
    x.push(7);
    console.log("x: " + x);
}

// a의 레퍼런스 사본이 x에 할당된 것이므로
sampleFunc(a1);
console.log("a1: " + a1);


// 함수 인자일 때 
function sampleFunc2(x) {
    x.push(4);
    console.log("x: " + x);

    x.length = 0;
    x.push(4, 5, 6, 7);
    console.log("x: " + x);
}

var a3 = [1,2,3];
sampleFunc2(a3);
console.log("a3 : " + a3);

// 레퍼런스로 넘어가지 않게 하려면
// slice 함수로 얕은 복사 하여 값 자체를 넘겨주면 된다.
sampleFunc(a3.slice());

