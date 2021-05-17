"use strict";
// Starting from here
const form = document.querySelector('.myform');
// console.log(form.children);
const id = document.querySelector('#id');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const rating = document.querySelector('#rating');
const detail = document.querySelector('#detail');
function adding() {
    // e.preventDefault();
    let book = {
        "id": id.value,
        "title": title.value,
        "author": author.value,
        "rating": rating.value,
        "detail": detail.value
    };
    if (localStorage.getItem('record') == null) {
        localStorage.setItem('record', '[]');
    }
    var old_data = JSON.parse(localStorage.getItem('record'));
    old_data.push(book);
    localStorage.setItem('record', JSON.stringify(old_data));
}
