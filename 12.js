/* 
    Есть пачка со свечками
    5-100(включительно) свечек в пачке
    каждый год ставим свечки = возрасту 
    на сколько лет хватит пачки
*/

function getNumber(max = 100, min = 0) {
    let n =  Math.random() * (max - min) + min;
    n = Math.floor(n);
    return n;
}

/*
    function getName(name="Gryazniy") {
        console.log("Привет, " + name + "!");
    }
    getName();
*/  

function ololo(cnt) {
    let age = 0;
    while (cnt >= 0) {
        //console.log(`Существу исполниось ${age} лет`);
        cnt = cnt - age;
        //console.log(`В упаковке осталось ${cnt} свечек`);
        age++;
        if (cnt < age) {
            return age;
        }
    }
}
console.time("candles");
let candles = getNumber(100001,100);
let finalAge = ololo(candles, 15);
console.log(candles + " свечек хватило на " + finalAge + " лет");
console.timeEnd("candles");
