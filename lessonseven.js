// class CircleBox
// {
//     constructor(selector)
//     {
//         this.$el = document.querySelector(selector);
//     }
//     hide()
//     {
//         this.$el.style.display = 'none';
//     }
//     show()
//     {
//         this.$el.style.display = 'block';
//     }
// }
// class CircleItem extends CircleBox
// {
//     constructor(options)
//     {
//         super(options.selector);
//         this.$el.style.width = options.size + "px";
//         this.$el.style.height = options.size + "px";
//         this.$el.style.borderRadius = '50%';
//         this.$el.style.background = options.color;
//     }
// }
// const Circle02 = new CircleItem
//     ({
//         selector: '#circle02',
//         color: 'red',
//         size: 50,
//     });
// const Circle01 = new CircleItem
//     ({
//         selector: '#circle01',
//         color: 'purple',
//         size: 80,
//     });
// const Circle00 = new CircleItem
//     ({
//         selector: '#circle00',
//         color: 'blue',
//         size: 40,
//     });


// function Car(name, color)
// {
//     this.name = name;
//     this.color = color;
// };
// Car.prototype.message = function ()
// {
//     console.log(`${this.name} is ${this.color} color`);
// };
// Car.prototype.start = function ()
// {
//     console.log(`${this.name} is start!!`);
// }
// const BMW = new Car('bmw', 'red');
// const Opel = new Car('opel', 'white');


// let message =
// {
//     messageHello()
//     {
//         console.log(`Hello, ${this.name}`);
//     },
//     messageBye()
//     {
//         console.log(`Bye, ${this.name}`);
//     },
// };
// class User
// {
//     constructor(name)
//     {
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, message);
// new User('Ivan').messageHello();
// new User('Ivan').messageBye();


//homework

// function Calculator(Calculator)
// {
//     this.read = function ()
//     {
//         this.a = +prompt('Write first number:', 0);
//         this.b = +prompt('Write last number:', 0);
//     };

//     this.sum = function ()
//     {
//         return this.a + this.b;
//     };

//     this.mul = function ()
//     {
//         return this.a * this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();
// alert("Summ+ = " + calculator.sum());
// alert("Summ mul = " + calculator.mul());
