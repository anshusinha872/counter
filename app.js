// const value = document.getElementById('value');
// const inc_btn = document.querySelector('.increase');
// const reset_btn = document.querySelector('.reset');
// const dec_btn = document.querySelector('.decrease');
// // console.log(inc_btn);
// // console.log(reset_btn);
// // console.log(dec_btn);
// inc_btn.addEventListener('click', function () {
//     console.log(value.textContent);
//     value.textContent++;
// });
// reset_btn.addEventListener('click', function () {
//     console.log(value.textContent);
//     value.textContent = 0;
// });
// dec_btn.addEventListener('click', function () {
//     console.log(value.textContent);
//     value.textContent--;
// });
let count = 0;
const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const class_list = e.currentTarget.classList[1];
        console.log(class_list);
        if (class_list === 'decrease') {
            count--;
        }
        else if (class_list === 'increase') {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black'
        }
        value.textContent = count;
    })
})