/*
    В зависимости от возраста правильно написать слово (существительное)
    лет     0;   5-20; 25-30;   
    год     1;   22; //все с еденичкой кроме 11
    года    2-4; 22-24; //все двойки, тройки и четвёрки кроме 12-14
*/
let age = 14;
let word = '';
// 45 % 2

if (age % 100 >= 11 && age % 100 <= 14) {word='лет'}
else if (age % 10 === 1) { word = "год"}
else if (age % 10 === 2 || age % 10 === 3 || age % 10 ===4) {word='года'}
else {word="лет"}



console.log(`Vlady ${age} ${word}`);

/*
    Math.PI - число пи 3.14  
    Math.E - число Эйлера 2.7
    Math.sin(0) -
*/