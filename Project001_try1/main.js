// Starting from here
var form = document.querySelector('.myform');
// console.log(form.children);
var id = document.querySelector('#id');
var title = document.querySelector('#title');
var author = document.querySelector('#author');
var rating = document.querySelector('#rating');
var detail = document.querySelector('#detail');
var num = 0;
var retriveObject = localStorage.getItem('b');
console.log(JSON.parse(retriveObject));
function adding() {
    // e.preventDefault();
    var book = {
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
