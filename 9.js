let e = 3;
let step = 5;
let result = 1, i=0;
/*
    3*1=3 => 1 степень
    3*3=9 => 2 степень
    3*9=27 => 3 степень
*/
while (i<step) {
                 result *=e;
                 i++;
                 console.log(`${e}^${i}=${result}`)}
result=1;
for (let i=1;i < step; i++){ 
     result *= e;
     console.log(`${e}^${i}=${result}`)}

let x = 11, b = 2, c = x, f=0;
for (let i = 0; i < 10 ; i++) {
    c=x;
    if (c % b === 0) {
        console.log(c);
        f++;
    }
    c++;
    if(f===10){
        break;
    }
}