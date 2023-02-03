// typescript기본타입 
// - string
    let car:string = "hello";
// - number 
    let firstNum:number = 10;
// - boolean  
    let isTrue:boolean = true;
    console.log(isTrue && "true맞습니다~");
// - array(정수 arr, 문자열 arr type이 또 나뉨.)
    let arr1:Array<number> = [1,2,3,4,5];
    let arr2:number[] = [5,6,7,8];
    console.log([...arr1, ...arr2]);

    let str1:Array<string> = ["dwd","dwd","qrq","fbb"];
    let str2:string[] = ["w111", "2323", "46464", "56565"];
    // 그냥.. index 3번
    str2.forEach((value) => {
        console.log(value[3]);
        console.log(value.replace("6", "helo"));
        // value[3]이라고 하면 그걸 바꾸는게 아니라... 
        // value[3]과 똑같은 값을 가진 값을 앞에서부터 찾아서 바꾼다.
        // 그래서 [1]번째 값이 바뀌는거야. 
    })

    let boolean:boolean[] = [true, false, false];
    let boolean2:Array<boolean> = [false, false, true];

// - tuple(튜플) ❗️자바스크립트에는 없는 타입, 파이썬에는 존재❗️
    // ⭐️ 정의 ⭐️
    // - 길이와 순서가 고정된 배열 
    // - 순서와 크기가 미리 정해져있는 배열 => 배열의 크기가 고정돼있고, 특정 순서가 정해져있는 데이터를 표현하는데 사용됨. 
    // ❌ push를 쓰게되면 순서가 뒤바뀐다 ❌
    
    // ex) RGB색생 => 순서가 RGB로 고정 
    // ex) 학생 => 이름 나이로 고정 
    let rgb1:[string, string, number] = ["Dwdw","ddd", 3];
    // 이처럼 크기와 순서가 고정 

    type RGB = number | string; // 타입을 number or string으로 고정 
    let rgbColor:[RGB, RGB, RGB] = ["red", 356, "blue"];
    
    type NAME = string;
    type AGE = number;
    let student:[NAME, AGE] = ["김지성", 26];

    // ❗️생략가능❗️
    let myInfo = ["지성", 26];  
    console.log(typeof myInfo);  // object

    // - 배열이 가진 모든 함수에 접근이 가능하다. 
    // ❗️push를 쓴다면 기존의 tuple에서 벗어나게 된다.❗️
    type RAM = number;
    type CPUNAME = string;
    let notebook:[RAM, CPUNAME] = [8, "m1"];
    notebook.push("dwdw");
    console.log(notebook); // [ 8, 'm1', 'dwdw' ] => 튜플의 목적과 어울리지 않게된다.

    // 이걸 방지하려면 readonly key word를 해주면 된다. 
    type NOTEBOOK = readonly [string, number];
    let notebook1:NOTEBOOK = ["m1", 100000];
    // notebook1.push("push값"); => push error 발생 

    // Named tuple : type에 이름을 붙여줄 수 있음. 
    let notebook2 : [ramSize : number, cpuName : string] = [8, "i5"];

    // 구조분해할당! 
    let [ram, cpu] = notebook2;
    console.log(ram, cpu); // 8 "i5"

// enum : 역시 자바스크립트에는 존재하지 않는다. 
// - 값을 고정해놓고 갖다 쓰고 싶을 때 사용한다. 
// - 즉 값이 절대 바뀌지 않아. 
    enum Project {
        admin = 0,
        supplier = 1,
        user = 2,
        // 값을 생략하면 자동으로 첫 번째 값은 0이 되고, 
        // 중간에 값을 9에서 100으로 바꿔줬고, 그 다음 값을 생략했다면,
        // 그 다음 값은 101이 된다.
    }

    console.log(Project.admin);

    // 체인점 본점 
    enum PriceOfCoffee {
        americano = 3000,
        latte = 3200,
        caramel = 3500
    }
    // 그럼 밑에 생성되는 지점들이 저 값을 따르게 된다. 
    let coffee1:PriceOfCoffee = PriceOfCoffee.americano;
    // coffee1 = "dwdwdw";
    console.log(coffee1);

// - null, undefined 
    
    let nullValue:null = null;
    let unde:undefined = undefined;

    console.log(nullValue || "false");
    console.log(unde || "false too..");


    type Numbers = 1 | 2; 
    // Number라는 타입에 올 수 있는 값은 1아니면 2
    let number:Numbers = 2; // 다른 값이 오면 안 돼!  