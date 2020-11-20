// нус с богом
/*
    Дано n мс
    Написать сколько дней, часов, минут и секунд в числе n
*/

let ms = Math.floor(Math.random() * (1000000000-10000 )+10000);
let sec = Math.floor(ms/1000);
let min = sec / 60;
sec = sec - (min * 60);
let hours = Math.floor(min / 60)
min = min - (hours * 60);
let day = Math.floor(hours / 24)
hours = hours - day * 24;

console.log("Милисекунд: " +ms);
console.log(`${day} дней ${hours} часов ${min} минут ${sec} секунд`);
// 
//Нихера не понимаю, вроде списываю
// но нихера не работает, роде вижу как делать,
// но нихера не понимаю как это работает
//       console.log("Привет, Вася!");
    /*
            let name = "Вася";
            console.log(`Привет, ${name}!`);
            let name = "Рома";
            console.log(`Привет, ${name}!`);
            let name = "Игорь";
            console.log(`Привет, ${name}!`);
            let name = "Лена";
            console.log(`Привет, ${name}!`);
            let name = "Лёня";
            console.log(`Привет, ${name}!`);
*/

function sayHello(name="EnsineChack", age = 16) {
    console.log(`Привет, ${name}, тебе - ${age} лет!`);
}

sayHello("Шлепок майонезный",55);
sayHello("Круглый Микрочелик Джентельмен",20);
sayHello("КМчД",1);
sayHello("Железобетонный Вася");
sayHello();

function parabola(x) {
    let y = x ** 2;
    //console.log(x, y);
    return y;
    console.log(x, y);
}
for (let  i = -5; i <= 5; i++) {
    let result = parabola(i);
    console.log(i, result);
}
