// function createNewSum(n)
// {
//     return function ()
//     {
//         console.log(10 * n);
//         }
// };
// const calc = createNewSum(5);
// calc();

// function createnEwNumber(n)
// {
//     return function (num) {
//         return n + num;
//     };
// };
// const addFive = createnEwNumber(5);
// console.log(addFive(10));

// function createUrl(domain)
// {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     };
// };
// const comUrl = createUrl("com");
// console.log(comUrl("google"));


// function hello()
// {
//     console.log("hello", this);
// };
// hello();

// const user =
// {
//     name: "Ivan",
//     city: "Odesa",
//     sayHello: hello,
// };
// user.sayHello();

// function abc()
// {
//     console.log("function");
//     console.log(this);
// };
// abc();
// document.querySelector('p').onclick = abc;

// function changeColor()
// {
//     console.log(this);
//     this.style.background = "green";
// };
// document.querySelector('div').onclick = changeColor;

// function changeColor()
// {
//     this.style.background = "green";
// };
// let user = document.querySelectorAll('div');
// user.forEach(function (element) {
//     element.onclick = changeColor;
// });


// const showList = () => {
//     console.log(this);
// };
// showList();
// const list =
// {
//     names: ["Ann", "Olga", "Nata"],
//     showList: showList,
// };
// list.showList();


// function hello() {
//     console.log(this);
// };
// const user = {
//     name: "Ivan",
//     age: 30,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function (city) {
//         console.log(`name is ${this.name}`);
//         console.log(`age is ${this.age}`);
//         console.log(`form city ${city}`);
//     },
// };
// // user.info();

// const ann =
// {
//     name: "Anna",
//     age: 23,

// };
// const M =
// {
//     name: "Masha",
//     age: 18,
// };

// user.info.bind(ann)("Warsaw");

// const Annainfo = user.info.bind(M, "Prushkow");
// Annainfo();

// const userinfo =
// {
//     name: "name",
//     age: 99,
//     loginfo: function (job) {
//         console.group(`${name} info:`);
//         console.log(`name is: ${this.name} `);
//         console.log(`age is: ${this.age}`);
//         console.log(`job is: ${job}`);
//         console.groupEnd();
//     },
// };
// const Vsa =
// {
//     name: "Assa",
//     age: 44,
// };

// userinfo.loginfo.call(Vsa, "developer");


// const showUserinfo =
// {
//     name: name,
//     age: 33,
//     loginfo: function (job, city)
//     {
//         console.group(`${name} info:`);
//         console.log(`name is: ${this.name} `);
//         console.log(`age is: ${this.age}`);
//         console.log(`job is: ${job}`);
//         console.log(`from city: ${city}`);
//         console.groupEnd();
//     },
// };
// const Vsa =
// {
//     name: "Assa",
//     age: 44,
// };
// showUserinfo.loginfo.apply(Vsa, ["developer", "Nigga"]);

// const message = function (name, stars)
// {
//     console.log(`${name}, welcome to ${this.hotel}, stars ${stars}`);
// };
// const Bukovel =
// {
//     hotel: "Bukovel"
// };
// const Turist =
// {
//     hotel: "Turist"
// };
// message.call(Bukovel, "Ivan", "5");
// message.call(Turist, "Inav", "3");

// message.apply(Bukovel, ["Ivan", "5"]);
// message.apply(Turist, ["Ivan", "5"]);

// message.bind(Bukovel, "Ivan", "5")();
// message.bind(Turist, "Ivan", "4")();


// const cart =
// {
//     showitems() {
//         console.log("In basket: ", this.items);
//     },
// };
// const woman =
// {
//     items: ["dress", "shoes"],
// };
// const man =
// {
//     items: ["trousers", "boots"],
// };
// const child =
// {
//     items: ["bib", "socks"],
// };
// document
//     .querySelector("#Wom")
//     .addEventListener("click", cart.showitems.bind(woman));
// document
//     .querySelector("#Man")
//     .addEventListener("click", cart.showitems.bind(man));
// document
//     .querySelector("#kid")
//     .addEventListener("click", cart.showitems.bind(child));


// const infocar =
// {
//     name: "BMW",
//     mode: "M7",
//     color: "white",
//     showinfo: function ()
//     {
//         console.log("Car " + this.name + " model " + this.mode + " color " + this.color);
//     },
// };
// car2 = 
// {
//     name: "Opel",
//     mode: "XXX",
//     color: "red",
// }
// infocar.showinfo.bind(car2)();
// infocar.showinfo.call(car2);
// infocar.showinfo.apply(car2);
