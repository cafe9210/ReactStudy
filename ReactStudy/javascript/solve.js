// 생성자 함수
let stu01 = new Student('홍길동',20,20211002);
stu01.showInfo();
// 콜백함수
function buy_async(item, price, quantity) {
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    setTimeout(function () {
        console.log("계산이 필요합니다.");
        var total = price * quantity;
        return total;
    }, 1000);
}
function pay(tot) { 
    console.log(tot + "원을 지불하였습니다."); 
}
var tot = buy_async("고구마", 1000, 5);
pay(tot);
//------------------------------------------------------------------------
function fact(n) {
    if (n == 1) {
        return 1;
    } else {
        return [   ];
    }
}
console.log("5! = " + fact(5) );
// 함수리턴

// 함수를 호출과 동시에 출력
function f1(){
    console.log('1');
    return function(n){
        console.log(n);
    }
}
f1()(5);

// 클로저
let a = 1;  
function car(){
    function kia(){

    }

}

function tire(fn){

}

car();
car();

// var = 렉시컬 스코핑 (함수를 어디에 선언했는지에 따라 결정)
// let = 블록레벨 스코프






//변수의 스코프는 지역변수와 전역변수로 나눌 수 있다.
//아래 코드에서 console출력 결과는 어떻게 되는가?
// var a = 10;
// function f1() {
//     console.log(a);
//     var a = 20;
// }

// f1();
// 자바스크립트 유효범위 = 함수단위