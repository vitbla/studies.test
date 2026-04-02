//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

//***2***

//Який буде результат виконання скрипта?
let city = "Kiev";
let name = "Ivan";
city = name;
console.log(`привіт ${1}`); // privit 1
console.log(`привіт ${"name"}`); // privit name
console.log(`привіт ${name}`); // privit ivan
console.log(city); // это вообще пиздец, вывод скрипта в консоль страницы?

//***3***
//Видобути число зі змінних
let a = "5";
let b = "13cvb";
let c = "12.9sxdcfgv";
console.log(typeof a); // ебатория чисел в сменных
// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
let n1 =0.1;
let n2 =0.2;
console.log(n1 + n2); // база 
//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
//const list =[20, 10, 50, 40];
//console.log(Math.max(...list)); // находим наибольшое число среди в массиве
console.log(Math.max(10,20,60,78,20));
//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
//console.log(Math.round(Math.random() * 2 + 2)); // не ебу как но мы делаем рамдомное число от 2 до 4
console.log(Math.random() * (10  - 1) + 1);
//***7**
//дізнатись довжину message
const message = "Welcome to Bahamas!!!!!!";
console.log(message.length); //узнал количество символов в сообщении
//***8**
//вивести в консоль message  великими літерами
const message1 = "hello world!"
console.log(message1.toUpperCase()); //вывод большими буквами
//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
const user = {
    "name":"vasyavetrov",
    "age":13,
    "like_flowers":true
};
console.log(user); // работа с обьектом 
//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
for(let key in user){
//    console.log(`${key}:${data[key]}`);
//    console.log(key);
//    console.log(user[key]);
    console.log(key + " : " + user[key]);
}; // ебанина, ххуй догадаешся без боженьки Артёма.

let Yarik = {
    "name":"Yarik",
    "age":17,
    "like_Dota":true,
    "Danger_AI":true
};
for(con in Yarik){
            console.log(con + ' :' + Yarik[con]);
        };