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
//     showitems()
// {
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
//     }
// };
// car2 =
// {
//     name: "Opel",
//     mode: "XXX",
//     color: "red"
// }
// infocar.showinfo.bind(car2)();
// infocar.showinfo.call(car2);
// infocar.showinfo.apply(car2);

//--------homework--------


//-------1-------

// const infostudent =
// {
//     name: "illya",
//     speciality: "biomechanics",
//     average_score: "150",
//     average_lesson: "10",
//     showinfo: function ()
//     {
//         console.log("\n name: " + this.name + "\n speciality: " + this.speciality + "\n average_score: " + this.average_score + "\n average_lesson: " + this.average_lesson);
//     },
// };
// infostudent2 =
// {
//     name: "Artem",
//     speciality: "Programermechanic",
//     average_score: "170",
//     average_lesson: "15"
// }
// infostudent3 =
// {
//     name: "Yarik",
//     speciality: "Bezdar",
//     average_score: "3",
//     average_lesson: "99"
// }
// infostudent.showinfo.call(infostudent2);
// infostudent.showinfo.bind(infostudent)();
// infostudent.showinfo.apply(infostudent3);


//------2-----
// const info =
// {
//     showInfo() {
//         console.log("Info: ", this.info[0]);
//     },
// };
// const HTML =
// {
//     info: [`https://ru.wikipedia.org/wiki/HTML`],
// };
// const CSS =
// {
//     info: ["https://ru.wikipedia.org/wiki/CSS"],
// };
// document
//     .querySelector("#button1")
//     .addEventListener("click", info.showInfo.bind(HTML))
// document
//     .querySelector("#button2")
//     .addEventListener("click", info.showInfo.bind(CSS))

//при помощи гугла
// const info =
// {
//     showInfo()
//     {
//         const output = document.querySelector("#output");
//         const link = this.info[0]; // Берем первый элемент из массива info

//         // Очищаем старую ссылку и добавляем новую
//         output.innerHTML = `<a href="${link}" target="_blank">Открыть Википедию: ${link}</a>`;// первый раз такое вижу??????

//         // Также оставим вывод в консоль
//         console.log("Ссылка выведена на экран:", link);
//     },
// };
// const HTML =
// {
//     info: [`https://ru.wikipedia.org/wiki/HTML`],
// };
// const CSS =
// {
//     info: ["https://ru.wikipedia.org/wiki/CSS"],
// };
// document
//     .querySelector("#button1")
//     .addEventListener("click", info.showInfo.bind(HTML))
// document
//     .querySelector("#button2")
//     .addEventListener("click", info.showInfo.bind(CSS))


//---------3--------

// const infomarket =
// {
//     name:"Banana",
//     cost_for_kg: 4.5,
//     value: 30
// }
// const infomarket2 =
// {
//     name: "Orange",
//     cost_for_kg: 3.4,
//     value: 89
// }
// const infomarket3 =
// {
//     name:"Chery",
//     cost_for_kg: 1.3,
//     value: 58
// }
// const market =
// {
//     showinfo()
//     {
//         console.log(infomarket, infomarket2, infomarket3);
//     }
// }
// market.showinfo();
