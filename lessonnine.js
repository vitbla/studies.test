// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');

// btn1.addEventListener('click', () => console.log('click'));
// btn2.addEventListener('contextmenu', () => console.log('contextmenu'));
// btn3.addEventListener('mouseover', () => console.log('mouseover')); //еще mouseout есть
// btn4.addEventListener('mousemove', () => console.log('mousemove'));
// btn5.addEventListener('mouseup', () => console.log('mouseup')); // еще mousedown есть

// const btn6 = document.querySelector('#btn6');
// btn6.addEventListener('keydown', () => console.log('keydown'));


// const addBtn = document.querySelector("#add");
// const removeBtn = document.querySelector("#remove");
// const clickMeBtn = document.querySelector("#click");

// const handleClick = () => {
//     console.log("Hello");
// };
// addBtn.addEventListener('click', () => {
//     clickMeBtn.addEventListener("click", handleClick);
// })
// removeBtn.addEventListener('click', () => {
//     clickMeBtn.removeEventListener('click', handleClick);
// })

// const clickMeBtn = document.querySelector("#click");
// const infoClick = (event) =>
// {
//     console.log("event", event.target);
// }
// clickMeBtn.addEventListener('click', infoClick);


// const form = document.querySelector('.form');
// const loginInput = form.querySelector('input[type="text"]');
// const passwordIn = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSumbit);

// function handleSumbit(event)
// {
//     event.preventDefault();
//     const login = loginInput.value;
//     const password = passwordIn.value;
//     console.log(`Login: ${login}, \nPassword: ${password}`);
//     form.reset();
// };


// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const item = document.querySelector('#item');

// parent.addEventListener('click', () => console.log('click parent'));
// child.addEventListener('click', () => console.log('click child'));
// item.addEventListener('click', () => console.log('click item'));

// const handleClick = event => {
//     console.log("event: ", event.target);
// };
// parent.addEventListener('click', handleClick);

// const itemClick = (event) => {
//     console.log("itemClick stop");
//     event.stopPropagation();
// };
// const childClick = (event) => {
//     console.log("childClick stop");
//     event.stopPropagation();
// };
// const parentClick = (event) => {
//     console.log("parentClick stop");
//     event.stopPropagation();
// };

// parent.addEventListener("click", parentClick);
// child.addEventListener("click", childClick);
// item.addEventListener('click', parentClick);


// const nav = document.querySelector(".nav");
// nav.addEventListener('click', handleClick);
// function handleClick(event) {
//     const checkClass = nav.querySelector('li.active');
//     if (checkClass) {
//         event.target.classList.remove('active');
//     } else {
//         event.target.classList.add('active');
//     }
// }


// const ball = document.querySelector('.ball');
// ball.onmousedown = function (event) {
//     function move(pageX, pageY) {
//         ball.style.left = pageX - ball.offsetWidth / 2 + "px";
//         ball.style.top = pageY - ball.offsetWidth / 2 + "px";
//     }
//     move(event.pageX, event.pageY);
//     function onMouseMove(event) {
//         move(event.pageX, event.pageY);
//     }
//     document.addEventListener('mousemove', onMouseMove);
//     ball.onmouseup = function () {
//         document.removeEventListener('mousemove', onMouseMove);
//     }
// };


//----------homework-----------

//1
// const button = document.querySelector("button");
// const textDiv = document.getElementById('text');
// button.addEventListener('click', () => {
//     textDiv.style.display = 'none';
// });

//2
// const button = document.querySelector("button");
// const textDiv = document.getElementById('text');
// button.addEventListener('click', () => {
//     button.style.display = 'none';
// });

//3
// const tree = document.getElementById('tree');
// tree.onclick = function (event) {
//     if (event.target.tagName !== 'SPAN') return;
//     let childContainer = event.target.parentNode.querySelector('ul');
//     if (!childContainer) return;
//     childContainer.hidden = !childContainer.hidden;
// };

