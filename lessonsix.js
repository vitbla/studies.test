// const summ = 20000;
// const month = 12;
// const p = 1000;
// const credit = (summ, date, p) => {
//     return summ + p * date;
// };
// console.log(credit(summ, month, p)); //процедурное програмирование


// const credit =
// {
//     summ: 20000,
//     month: 12,
//     p: 1000,
//     result()
//     {
//         return this.summ + this.p * this.month;
//     },
// };
// console.log(credit.result()); // ооп метод


//class


// class Bank
// {
//     static type = "privat";
//     constructor(option)
//     {
//         this.summ = option.summ;
//         this.month = option.month;
//         this.p = option.p;
//     }
//     credit()
//     {
//         return console.log("I am privat");
//     }
// }

// const userbank = new Bank(
//     {
//         summ: 30000,
//         month: 5,
//         p: 500
//     });
// userbank.credit();
// console.log(Bank.type);

// class newbank extends Bank
// {
//     constructor(option)
//     {
//         super(option);
//         this.card = option.card;
//     }
//     credit()
//     {
//         super.credit();
//         return console.log("I am aval");
//     }
// }
// const aval = new newbank
//     ({
//         summ: 30000,
//         month: 5,
//         p: 500,
//         card: true,
//     });
// console.log(aval.credit());

// class user
// {
//     constructor(props)
//     {
//         this.name = props.name;
//     }
//     firstname = "";
//     lastname = "";
//     age = "";
//     city = "";
//     set name(newname)
//     {
//         const namerow = newname.split(" ");
//         this.firstname = namerow[0];
//         this.lastname = namerow[1];
//     }
//     get name()
//     {
//         return ` first name : ${this.firstname} last name : ${this.lastname}`
//     }
// }
// const Ill = new user
//     ({
//         name: "Illya Sheva",
//     });
// const Mas = new user
//     ({
//         name: "Masha Sheva",
//     });
// console.log(Ill, Mas);


//prototype
//object

// const a = [1, 2, 3];
// console.log(a);

// const a =
// {
//     x: 1,
//     y: 2,
// };
// const b = Object.create(a);
// console.log(b)


// function Manager(name, sales)
// {
//     this.name = name;
//     this.sales = sales;
// };

// const ann = new Manager("Anna", 5);
// const Ivan = new Manager("Ivan", 10);

// Manager.prototype.sale = function ()
// {
//     this.sales += 1;
// };
// console.dir(Manager);

// class Manager
// {
//     constructor(name, sales)
//     {
//         this.name = name;
//         this.sales = sales;
//     }
//     sale() {
//         this.sales += 1;
//     }
// };

// const ann = new Manager("Anna", 5);
// const Ivan = new Manager("Ivan", 10);

// console.dir(Manager);


// class CoffeMachine
// {
//     _water = 0;
//     #waterLimit = 500;
//     constructor(power)
//     {
//         this.power = power;
//     }
//     set waterAnount(value)
//     {
//         if (value < 0)
//         {
//             value =0;
//         }
//         this._water = value;
//     }
// }
// let coffemachine = new CoffeMachine(100);
// coffemachine.waterAnount = -20;

// console.log(coffemachine);



//interface

//homework


// class user {
//     constructor(props)
//     {
//         if (props.name)
//         {
//             const [fname, lname, ageFromStr] = props.name.split(" ");
//             this.firstname = fname;
//             this.lastname = lname;
//             this.age = ageFromStr;
//         }
//         if (props.firstname) this.firstname = props.firstname;
//         if (props.lastname) this.lastname = props.lastname;
//         if (props.age) this.age = props.age;
//         if (props.city) this.city = props.city;
//     }
//     get name()
//     {
//         return[
//     `first name : ${this.firstname}`,
//     `last name : ${this.lastname}`,
//     `Age : ${this.age}`,
//     `City : ${this.city || "Not specified"}`
//     ].join('\n');
//     }
// }
// const Ill = new user
//     ({
//         name: "Illya Sheva 33",
//         age: "22",
//         city:"Kyiv"
//     });
// const Mas = new user
//     ({
//         name: "Masha Sheva 15",
//         age: "25"
//     });
// console.log(Ill.name);
// console.log(Mas.name);


// class Abonent
// {
//     constructor()
//     {
//         this.name = "";
//         this.phone = "";
//     }

//     setData(name, phone)
//     {
//         this.name = name;
//         this.phone = phone;
//     }

//     getInfo()
//     {
//         return `Abonent: ${this.name}, \nNumber: ${this.phone}`;
//     }
// }

// const user1 = new Abonent();
// const user2 = new Abonent();
// const user3 = new Abonent();

// user1.setData("Alex", "+23654632432423");
// user2.setData("Dep", "+2453545535545435");
// user3.setData("Voly", "+2435345345345435");

// console.log(user1.getInfo());
// console.log(user2.getInfo());
// console.log(user3.getInfo());




