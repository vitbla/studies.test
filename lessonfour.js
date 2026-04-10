// функции

// function showmessage(name, age)
// {
//     console.log("Hello, my name is "+ name +" My age "+ age);
// }

// showmessage("Illya", 16);
// showmessage("Artem", 15);

// const username = "Anna"
// const sayhi = function ()
// {
//     let message = "hello, my name Kola";
//     console.log(message + username);
// };
// sayhi();

// function sum(a, b)
// {
//     return a + b;
// }
// let result = sum(7, 8);
// console.log(result);

//---------return--------

// const testfunk = function (a, b)
// {
//     console.log("a :", a);
//     console.log("b :", b);
//     c = a + b;
//     return 100;
// };
// testfunk(5,8);

// const a = function ()
// {
//     c();
//     console.log("function a");
//     b();
// }
// const b = function ()
// {
//     console.log("function b");
// };

// const c = function ()
// {
//     console.log("function c");
// };

// a();

//аргумент

// const addname = function ()
// {
//     const arg = Array.from(arguments); // сделать из псевдо массива, в нормальный массив
//     console.log(arguments);
//     console.log(arg)
// };
// addname(1, 2, 3);

//--------rest---------

// const Addname = function (...argu)
// {
//     console.log(argu);
// };
// Addname(24, 5, 76, 456, 43);

//----------callback-----------

// function ask(question, yes, no)
// {
//     if (confirm(question))
//      {
//         yes();
//     } else
//      {
//         no();
//     }
// }

// function showOK()
// {
//     console.log("You say ok");
// };

// function showCancel()
// {
//     console.log("You say no");
// };

// ask("Yes or no?", showOK, showCancel);

//----------hof-----------

// const hello = function (name)
// {
//     console.log(`hello, ${name}`);
// };
// const searchname = function (callback)
// {
//     const name = "Ivan";
//     callback(name);
// };
// searchname(hello);

// function checkAge(age)
// {
//     if (age > 18)
//     {
//         return console.log('Hello');
//     }
//         return console.log("good bye");
// };
// checkAge(21);

// function showMovie(age)
// {
//     if (age < 21)
//     {
//         return;
//     }
//     return console.log("Go to movie!");
// };
// showMovie(55);

//------стрелочные функции-----------

// const test = (arg) => {
//     console.log(arg);
// };
// test("hello") //---------------  =>  basic

// const showmovie = (age) => {
//     if (age < 21) {
//         return console.log("hello");
//     }
//     return console.log("Bye");
// };
// showmovie(2);

// const a = () =>
// {
//     console.log("a");
// };
// const b = () =>
// {
//     console.log("b");
// };
// const c = () =>
// {
//     console.log("c");
//     a();
//     b();
// };
// c();

// const addNumber = (number) => {
//     let summ = Number(number) + 10;
//     return console.log(summ);
// };
// const numberRef = document.querySelector("input[name='number']");
// const buttonRef = document.querySelector("button");
// buttonRef.addEventListener('click', () => addNumber(numberRef.value));

//-------------------HOMEWORK---------------------------


//------1-------

// function checkAge(age)
// {
//     if (age > 18)
//     {
//         return console.log(true);
//     }

//     else
//     {
//         return confirm('ТЫ АХУЕЛ?');
//     }
// };
// checkAge(10);


//--------------2---------------

// function min(a, b)
// {
//     return a < b ? a : b;
// }
// console.log(min(3459, 2987));

// const min = (a, b) => Math.min(a, b);
// console.log(min(200, 100));


//--------3--------

// function ask(question, yes, no)
// {
//     if (confirm(question)) yes();
//     else no();
// }
// ask("confirm?",
//     function () { alert('you confirm') },
//     function () { alert("you didn't confirm") });

// const Ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// };
// Ask("confirm?",
//      function () { alert('you confirm') },
//      function () { alert("you didn't confirm") });
