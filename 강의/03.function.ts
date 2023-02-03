'use strict';
// 함수 파라미터 종류 

// -1) 일반 파라미터 
{
    /**
     * 두 수를 입력받아 두 수의 합을 return하는 함수! 
     * @param num1 : 정수1
     * @param num2 : 정수2
     * @returns : 두 수의 합(❗️정수 리턴❗️)
     */
    let add = (num1: number, num2: number):number => {
        return num1 + num2;
    }
    console.log(add(3,4));
    
    
    /**
     * 문자열을 입력받고, 그 입력받은 문자열에 "입니다"를 붙여서 출력시켜주는 함수
     * @param str1 : 입력받는 문자열 
     * @returns : 입력받은 문자열 + 입니다 라는 문자열 더해서 출력 (❗️string return❗️)
     */
    let str = (str1:string):string => {
        return str1 + "입니다!";
    }
    console.log(str("김지성"));

    /**
     * 나이를 입력받아 미성년자 인 지 아닌 지 판단해주는 함수. 
     * @param age : 입력받은 나이 
     * @returns : age가 19초과면 성인(true) 이하면 미성년자(false출력)
     */
    let isAdult = (age:number):boolean => {
        let result = age > 19 ? true : false;
        return result;
    }
    console.log(isAdult(20));

    /**
     * 이름을 그냥 출력하는 함수(이름을 받지 않았다면 user출력
     * @param name : 입력받을 이름(앞에 ?가 붙어서 입력을 안 받을 수 있다 => 원래는 error남(js에서는 안 잡아줌 ok undefined나옴)
     * @returns : 이름을 받지 않았다면 user라는 문자열로 출력하고 이름을 입력 했다면 이름 출력! 
     */
    let printName = (name?:string):string => {
        return `Hello ${name || "user~"}`;
    }
    console.log(printName());
    console.log(printName("지성"));

    /** ?연습 */
    // ❗️❗️❗️선택적 매개변수 ?가 필수 name보다 앞에오면 안 됨❗️❗️❗️
    let printUserInfo = (name:string, age?:number):string => {
        return `Hello ${name}님.. 나이는 ${age || "??"}살이네요!`;
    }
    console.log(printUserInfo("지성"));
    console.log(printUserInfo("지성", 26));

}
// -2) rest parameter
{
    let add = (...numbers:number[]) => {
        // array는 return 없음 
        let answer = numbers.filter(ele => ele % 2 === 0);
        return answer;
    }
    console.log(add(1,2,3,4,5,6,7,8,9));
}

// -3) this => call apply bind 
{
    interface User {
        name:string
    }

    let user:User = { // 객체 => 어떤 함수를 이 객체의 this로 만들고싶어. 
        name : '지성',
    }

    function printName(this:User, age:number, gender:'m' | 'w'):void{
        console.log(this.name, age, gender);
    }

    let a = printName.bind(user); // printName의 this를 user객체로 바꾸자.
    a(15, "m");
}