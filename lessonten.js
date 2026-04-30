// let form = document.querySelector('.form');
// let inputFName = document.querySelector(".inputFName");
// let inputLName = document.querySelector(".inputLName");
// let age = document.querySelector("#age");
// let Gender = document.getElementsByName("radio");

// form.addEventListener('submit', handleSubmit);
// function handleSubmit(event) {
//     event.preventDefault();
//     const info = {
//         Fname: inputFName.value,
//         Lname: inputLName.value,
//         age: age.value,
//         Gender: Gender[1].checked,
//     };
//     console.log(info);
//     localStorage.setItem('info', JSON.stringify(info));
// };

// if (localStorage.getItem('info')) {
//     const ls = JSON.parse(localStorage.getItem('info'))
//     console.log(ls);
//     inputFName.value = ls.name;
//     inputLName.value = ls.Lname;
// }

// let form = document.querySelector('#form');
// let formData = {};
// form.addEventListener('input', function (event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem('formData', JSON.stringify(formData))
// });
// if (localStorage.getItem("formData")) {
//     formData = JSON.parse(localStorage.getItem('formData'));
//     for (let key in formData) {
//         form.elements[key].value = formData[key];
//     }
// }

