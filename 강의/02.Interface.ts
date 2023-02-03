'use strict';
// ❗️ 매우 중요 ❗️
// let user:object = {
//     name : "지성",
//     age : 26,
// }
// console.log(user.name);

// 이렇게 쓸 수 없고, 프로퍼티에 접근하려면 인터페이스를 사용한다.
// score라는 타입을 사용하면 올 수 있는 값이 저 5개 이외에는 안 됨. 
type Score = 'A' | 'B' | 'C' | 'D' | 'F';
type Gender = 'male' | 'female';
// 즉, 값의 범위를 줄여주고 싶을 때!! 
// 그냥 막 string이라고 하는 것 보다, 값이 정해져있다면 값의 범위를 좁혀준다. 
// string이긴해도 male or female이니까 저렇게 2개만 적어주면 가독성 높아짐. 
// 다른 쓸데없는 문자열을 차단해준다. 

interface User { // class 같이 사용하면 돼! 
    name : string,
    age : number,
    gender? : Gender,
    // ?: 있어도 되고, 없어도 되는 속성. 
    readonly birthYear? : number, 
    // readonly : 읽기 전용이라 변경할 수 없어. 
    [grade:number] : Score, 
    // key가 어떤 값이 올 지 알 수 없을 때! 
} 
let user:User = {
    name : '지성',
    age : 26,
    birthYear : 1998, 
    gender : 'male',
    4 : "A",
    3 : "B",
}
user.gender = "male";
// user.birthYear = 2000; => readonly라서 탄생년도를 변경 할 순 없어. 
console.log(user);
// 즉, js처럼 리터럴 방식으로 바로 못 쓰고, interface로 class처럼 명세서를 하나 만들어야돼! 


// interface에서 Method정의하기! 
// 우선 타입스크립트 함수 
// 항상 타입은 변수 뒤에 온다. 
let printArr = (...numberArr:number[]) => {
    return numberArr; // 배열 return 시 return type 안 적어준다. 
}
console.log(printArr(1,2,3,4,5,6,7));

interface Add {
    (num1:number, num2:number): number;
}

let add:Add = (x = 0, y = 0) => x + y; 
// 그냥 arrow function에 어떤 interface를 사용했는지 type만 적어줬어. 
console.log(add(3,4));
// 1개를 더 적는다거나...그러면 바로 error!


interface IsAdult{
    (age:number):boolean; 
}

let isAdult:IsAdult = (userAge = 0) => {
    let result = userAge >= 19 ? true : false;
    return result;
}

type RAMSIZE = 8 | 16 | 32;
type COMPANY = "lg" | "apple" | "samsung";
interface Notebook {
    title : string,
    conpany : COMPANY,
    ram : RAMSIZE,
    price : number,
    color? : string,
    // 메서드는 파라미터 and return type만 옴. 
}
// 함수 인터페이스 정의 
interface PrintRam {
    (ramSize : number) :number;
}
let printRamSize:PrintRam = (ramSize = 0) => {
    if(ramSize !== 8 && ramSize !== 16 && ramSize !== 32 ) {
        return 8;
    }else {
        return ramSize;
    }
}


// 인터페이스로 class를 정의 할 수 도 있다. 
// ❗️implement❗️를 사용한다!! 
// 여기서 이제 함수 interface와 같이 쓸 수 있나..?

{
    type GENDER = "male" | "female";
    interface User {
        name:string,
        age:number,
        gender?:GENDER,
        intro():void
    }
    interface NewUser extends User{
        sale:number
    }
    class Jisung implements User {
        name:string;
        age:number;
        gender?:GENDER;
        constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
        }
        intro() {
            console.log(`${this.name}입니다! 나이는 ${this.age}입니다.`);
        }
    }
    class New implements NewUser { // 상속받은 interface속성까지 전부 입력을 해줘야돼!
        // Jisung class에 있던 모든 값들을 다시 써줘야한다. 
        name:string;
        age:number;
        gender?:GENDER;
        sale:number;
        constructor(sale:number, name:string){
            this.sale = sale;
            this.name = name;
        }
        intro() {
            console.log(`${this.name}입니다! 나이는 ${this.age}입니다.`);
        }
    }
    let jisung1 = new Jisung("지성", 26);
    jisung1.intro();
    let new1 = new New(30, "지성");
    console.log(new1.sale);
}
