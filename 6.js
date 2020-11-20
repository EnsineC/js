/*
    Если ты не помоешь посуду - Жак Фреско не скажет ответ на вопрос
*/

let clearDish = true;
let Answer = 0;
let cleanRoom = false;

if (clearDish&&cleanRoom) {Answer+=2; /*Answer = старое значение + 1*/}
else if (cleanRoom || clearDish){Answer++;}
else {Answer--;}

console.log(Answer)

let age=201;

/* 
    В зависемости от переменной age выводить одну из фраз:
    При возрасте от 0 до 17 - "Вы ещё пока не работаете"
    При возрасте от 18 до 40 - "Ваш рабочий путь только начался"
    При возрасте от 41 до 63 - "Вам осталось чуть чуть"
    При возрасте больше 63 - "Пшёл вон старикашка"
*/

if (age<18)  {console.log ("Вы ещё пока не работаете")}
else if (age<40) {console.log ('Ваш рабочий путь только начался')}
else if (age<=63) {console.log ("Вам осталось чуть чуть")}
else {console.log ("Пшёл вон старикашка")}