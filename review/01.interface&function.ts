'use strict';
// 일반 함수 
// return -> void, number, string

    // 항상 null, undefined값 단축평가도 check해주자. 
    let gogo = (age?:number):string => {
        return `제 나이는 ${age || "??"}살 입니다`;
    }
    console.log(gogo());
    console.log(gogo(26));