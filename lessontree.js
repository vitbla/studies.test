// let a = 1;
// while (a < 5) {
//     a++;
//     console.log("a", a);
// } // while делает пока условие (true)


// let a = 0;
// while (a) console.log(a--);
// do {
//     console.log(a);
//     a++;
// } while (a < 5); // (while)делает пока (do) а > 5


// let a = 0;
// for (; a < 3;) {
//     a++
//     console.log(a);
// } // выводит в консоль числа пока они не буду больше 3


// let summ = 0;
// while (true) {
//     let value = +prompt("write number");
//     if (!value) break;
//     summ += value;
// }
// console.log("summ", summ); // плюсует значение пока мы его не остановим и выводит сумму в консоль


// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// } // выводит значение через 1, то есть 1, 3 и тд. и пока не станет больше 10


// let arr = ["apple", 'orange', 'melon']; // массив

// arr[2] = "lemon"; // замена
// arr[3] = "cherry";
// console.log(arr);

// arr.push("tomat"); // добавить
// console.log(arr);

// arr.pop(); // убрать последнее
// console.log(arr);

// arr.shift(); // убрать первое
// console.log(arr);

// arr.unshift('tomat'); // возвращает индекс
// console.log(arr);

// let arr = ["apple", 'orange', 'melon'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// } // перерасчет массива


// let arr = ["apple", 'orange', 'melon'];
// for (let item of arr) {
//     console.log(item);
// } // наименование еденицы через итем


// let arr = ["apple", 'orange', 'melon'];
// for (let key in arr) {
//     console.log(arr[key])
// } // через in


// let mtx = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]; // массив внутри массива
// console.log(mtx[2][2]); // вывод нужного элемента


// let a = 5;
// let b = a;
// a = 10;
// console.log(a);
// console.log(b); // присвоение


// let are = [1, 2, 3];
// let are2 = are;
// are.push(4);
// console.log(are2); // присвоение массива


// let list = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'f'
// ]; // все что ниже требует этот массив

// list.splice(1, 2); // удаляает выбраный элемент в скобках и далее сколько элементов
// console.log(list);

// console.log(list.slice(1, 4)); // копирует данные которые нужны в скобках

// let a = [1, 2, 3];
// console.log(list.concat(a)); // плюсует массивы в один

// console.log(list.indexOf('c', 3)); // ищет элемент из индекса, второе это с какого элемента поиск

// console.log(list.lastIndexOf('f')); // ищет элемент только с конца

// console.log(list.includes('c')); // проверяет наличее данного элемента в массиве


// const fruits = [
//     { id: 0, name: 'aplle' },
//     { id: 1, name: 'cherry' },
//     { id: 2, name: 'melon' },
//     { id: 3, name: 'grape' },
//     { id: 4, name: 'orange' },
// ];

// console.log(fruits.find((item) => item.id === 4)); // поиск чего то конкретного

// console.log(fruits.filter(item => (item.id >= 2 && item.id <= 4))); // выводит элементы с айди от 2 до 4 включительно

// let result = fruits.map(item => item.name.length);
// console.log(result); // выводит количевство букв в имени

// let names = "dima, petya, boba, biba";
// let list = names.split(", ");
// console.log(list); // делает из строки, массив

// let newlist = list.join(", ");
// console.log(newlist); // делает из массива, строку


// let rff = [1, 2, 3, 4, 5];
// let red = rff.reduce((summ, item) => summ + item);
// console.log(red); // узнаем сумму всего массива на основе цифр c помощью reduce

// let ffr = [23, 45, 30];
// let summ = ffr.reduce((sum, item) => sum + item) / ffr.length;
// console.log(summ); // узнаем среднее значение на основе цифр, в конце делится на длинну массива


//--------------HOMEWORK-------------------

// --1--
// const fruits = [
//     { id: 0, name: 'aplle' },
//     { id: 1, name: 'cherry' },
//     { id: 2, name: 'melon' },
//     { id: 3, name: 'grape' },
//     { id: 4, name: 'orange' },
// ];
// let list = [
//     fruits.map(item => item.name)
// ];
// console.log(list); // из масива сделали массив имён

// --2--
// for (let i = 2; i < 10; i++) {
//     console.log(i, i + 1);
// }

// --3--
// for (let i = 0; i < 5; i++) {
//     console.log(` ${i}!`);
// }

// let o = 0;
// while (o) console.log(o--);
// do {
//     console.log(` ${o}!`);
//     o++;
// } while (o < 5);
//---------
// let o = 0;
// while (o < 5)
// {
//     console.log(` ${o}!`);
//     o++;
// }

//--4--
// let num = 0;
// while (num < 100)
// {
//     num = prompt("Write number > 100");
//     console.log(num);
//     if (num > 100)
//     {
//         alert("peremoga");
//         break;
//     }
//     else
//     {
//         alert('ti pidor');
//     }
// }


//--5--

// let girls = [
//     { age: 23, name: "Оля" },
//     { age: 29, name: "Аня" },
//     { age: 10, name: "Юля" },
//     { age: 20, name: "Катя" },
// ];
// const sumage = girls.reduce((summ, girls) => summ + girls.age, 0);
// const average = sumage / girls.length;
// console.log(average);
