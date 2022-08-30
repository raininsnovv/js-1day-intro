// Задача 2.1: Создай файл numbers.js. Создай в нем переменные и сразу задай им значениями для следующих сущностей:

let myAge = 28; // твой возраст;
let dateofBirth = 1994;// год рождения;
let shortDate=7;// число рождения (без нолика в начале);
let countBro = 3;// количество родных братьев;
let countSisters = 0;// количество родных сестер;
let sizeFamily = 5;// количество человек в семье;
let payforWay = 100;// стоимость проезда до места обучения;
let currentYear = 2022;// текущий год;
let rubUsd = 60.4;// курс доллара;
let rubEuro = 60.1;// курс евро;
let usdBtc = 20000;// курс биткоина;
 
myAge = currentYear - dateofBirth;
// текущий год минус год рождения;
dateofBirth = currentYear - myAge;
// текущий год минус твой возраст;
totalNum = countBro + countSisters;
// количество родных братьев плюс количество родных сестер;
rubEuro = 1000 * rubEuro
// курс евро умноженный на 1000;
rubUsd = 2.5 * rubUsd;
// курс доллара умноженный на 2.5;
usdBtc = usdBtc/10000;
// курс биткоина разделенный на 10000;
payforWay = payforWay/rubUsd;
// стоимость проезда до места обучения разделенная на курс доллара;
let totalNew = totalNum - countBro - countSisters;
// количество человек в семье минус количество братьев минус количество сестер;
let whatIs = 0 / myAge;
// 0 деленный на твой возраст;
let diffAge = 35 - myAge;
// 35 минус твой возраст;