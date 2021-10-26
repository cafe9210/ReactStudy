// 생성자 함수
function Student(name,age,stuNum){
    this.name = name
    this.age = age
    this.stuNum = stuNum

    this.showInfo = ()=>{
        console.log(name,age,stuNum);
    }
}
let stu01 = new Student('홍길동',20,20211002);
stu01.showInfo();
console.log('/////////////////////////////////////////////////');
// 콜백함수
// 비동기
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
// var tot = buy_async("고구마", 1000, 5);
// pay(tot);

// 동기
function buy_sync(item, price, quantity, callback) {
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    setTimeout(function () {
        console.log("계산이 필요합니다.");
        var total = price * quantity;
        callback(total);
    }, 1000);
}
buy_sync("호박", 2000, 3, pay);
console.log('/////////////////////////////////////////////////');
function fact(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fact(n-1);
    }
}
console.log("5! = " + fact(5) );
console.log('/////////////////////////////////////////////////');
// 함수리턴

// 함수를 호출과 동시에 출력
(()=>{
    console.log('1');
    return (n)=>{console.log(n);}
})()(5);
console.log('/////////////////////////////////////////////////');
// 클로저
let a = 1;  
function car(){
    // var a = 1;
    function kia(){
        console.log(a++);
    }

    tire(kia);
}
function tire(fn){
    console.log('타이어 교체');
    fn();
}

car();
car(); 
console.log('/////////////////////////////////////////////////');
