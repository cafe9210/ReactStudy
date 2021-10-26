//1-1
(function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
})();

(function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
})()
//1-2
console.log(3 ** 4);
console.log(Math.pow(3, 4));
//1-3
currDate = new Date().getTime();
for (let index = 0; new Date().getTime() < currDate + 300; index++) {  // 3000
    
}
console.log('다람쥐');

// 1-4-1. 기본꼴 
function f1(){
    console.log('다람쥐');
}
f1();
// 1-4-2. 기본꼴 -> 함수 자체를 변수에 담기
let fn = function f1(){
    console.log('다람쥐');
}
fn;
// 1-4-3. 기본꼴 -> 람다식
()=>console.log('다람쥐');
// 1-4-4. 기본꼴 -> 즉시 실행 함수
(function f1(){
    console.log('다람쥐');
})();
// 1-4-5. 4번을 람다로 고쳐서 작성
(()=>console.log('다람쥐'))();
// 1-5
function Humen(name, age) {
    this.name = name
    this.age = age
    this.introduce = function () {
        console.log(this.name, this.age);
    }
}
let h1 =new Humen('상연',20);
h1.introduce();

function f2(){
    var sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    console.log(sum);
}
f2(1,2,3,4);

//-----------------------------------------------------------------
//2-1
//내꺼이니 pass
//2-2
let ar = [
    {
        name: '호랑이',
        age: 20
    }, {
        name: '코끼리',
        age: 30
    },
    {
        name: '독수리',
        age: 40
    }
];

ar[3] = {
    name: '기린',
    age: 50
}

for (const key in ar) {
    let name = ar[key].name;
    let age = ar[key].age;
    console.log(key,name,age);
}

function t(a) {
    return function (b) {
        return a + b;
    }
}

function t(a) {
    return (b) => a + b;    
}

(a) => (b) => a + b;    
// setTimeout() : 사용자가 지정한 시간뒤에 작업을하는 함수
// seyInterva() : 사용자가 지정한 시간마다 작업을 실행하는 함수
// 클로저함수란 : 내부함수에서 외부함수에 접근 하는것
// 5번 문제, 다음은 eval() 함수에 대한 예이다. 어떤 함수인가? 한번 설명해봐라.
let str = '';
str += 'let a = 10;'
str += 'console.log(a);'
console.log(str);
eval(str);
// 문자열을 디코딩하여 코드로 변환하여 디버깅하는 함수
//3
const stack = [];
// 변경 전 좌석
let info = [
{name:'김민건', seat:1},
{name:'오정환', seat:2},
{name:'박정민', seat:3},
{name:'송용민', seat:4},
{name:'김나은', seat:5},
{name:'최예준', seat:6},
{name:'최진웅', seat:7},
{name:'이우주', seat:8},
{name:'박주은', seat:9},
{name:'박진현', seat:10},
{name:'김령은', seat:11},
{name:'김경도', seat:12},
{name:'강아름', seat:13},
{name:'윤성준', seat:14},
{name:'김상연', seat:15},
{name:'박유나', seat:16},
{name:'이태훈', seat:17},
{name:'최영진', seat:18},
{name:'이용연', seat:19},
{name:'강동하', seat:20},
{name:'채송화', seat:21},
{name:'김도훈', seat:22},
{name:'이재현', seat:23},
{name:'김수인', seat:24},
{name:'이수빈', seat:25},
{name:'김진우', seat:26}
]

// 변경 후 좌석
let info2 = [
{name:'김민건'},
{name:'오정환'},
{name:'박정민'},
{name:'송용민'},
{name:'김나은'},
{name:'최예준'},
{name:'최진웅'},
{name:'이우주'},
{name:'박주은'},
{name:'박진현'},
{name:'김령은'},
{name:'김경도'},
{name:'강아름'},
{name:'윤성준'},
{name:'김상연'},
{name:'박유나'},
{name:'이태훈'},
{name:'최영진'},
{name:'이용연'},
{name:'강동하'},
{name:'채송화'},
{name:'김도훈'},
{name:'이재현'},
{name:'김수인'},
{name:'이수빈'},
{name:'김진우'}
]

for (let i = 0; i < 26; i++) {
    // 이전 좌석 번호를 담는 변수
    let temp = info[i].seat;
    // 랜덤 좌석을 담을 변수
    let randSeat;

    while (true) {
        // 구현 : 랜덤 좌석 부여를 위해 randSeat 초기화하세요. 주의 사항 : 정수입니다. 실수 아닙니다.
        randSeat = Math.floor(Math.random() * 26)+1;
        //구현 : (이전 좌석과 랜덤 좌석이 동일한지) or (랜덤 좌석이 이미 다른 사람에게 부여 한 좌석인지(stack 변수 사용))
        if (temp === randSeat || stack.includes(randSeat)) {
            // 구현 : 조건에 충족할 때 처리
            console.log(randSeat);
            continue;
        } else {
            // 구현 : 조건에 충족하지 않을 때 처리
            stack.push(randSeat);
            break;
        }

    };
    // 랜덤좌석 부여.
    info2[i]['seat'] = randSeat;

}


console.log('=============변경 전 좌석=============');
console.log(info);
console.log('=============변경 후 좌석=============');
console.log(info2);

function solution(s) {
    var answer = '';
    return answer;
}
console.log(solusion(s));


//4
function F2() {
    this.a = 10
}
let ins1 = new F2();
let ins2 = new F2();

// 여기에 코드 작성
F2.prototype.f = ()=> console.log('x');
console.log(ins1.f === ins2.f);

let array = [];
array.push({n1:10,n2:60});
array.push({n1:20,n2:70});
array.push({n1:30,n2:80});
array.push({n1:40,n2:90});
array.push({n1:50,n2:10});

// 여기에 코드 작성
array.forEach(element => {
    let n1 = element.n1;
    let n2 = element.n2;
    console.log(n1,n2);
});

// 여기에 코드 작성
function F1(){
    this.f1 = () => {
        console.log(2);
    }
}
let ins = new F1();
ins.f1();

function listInfo(name, age) {
    this.name = name,
    this.age = age
}
let array2 = [];
array2.push(new listInfo('낙타', 10));
array2.push(new listInfo('토끼', 20));
array2.push(new listInfo('강아지', 30));
array2.push(new listInfo('고양이', 40));
array2.push(new listInfo('사자', 50));

// 여기에 코드 작성
listInfo.prototype.result = function(){
    console.log(this.name, this.age);
}
for (let index in array2) {
    array2[index].result();
}

function Apple() {
    this.a = 10;
}
function Orange() {
    this.b = 20;
}

// 여기에 코드 작성
Orange.prototype.a = new Apple().a;
let obj = new Orange();
console.log(obj.a, obj.b);

let r = Math.PI * 30.0 / 180.0;
console.log(Math.sin(r));