
// Starting from here
const form = document.querySelector('.myform') as HTMLFormElement;
// console.log(form.children);
const id = document.querySelector('#id') as HTMLSelectElement;
const title = document.querySelector('#title') as HTMLSelectElement;
const author = document.querySelector('#author') as HTMLSelectElement;
const rating = document.querySelector('#rating') as HTMLSelectElement;
const detail = document.querySelector('#detail') as HTMLSelectElement;
var num = 0;

var retriveObject = localStorage.getItem('b');
console.log(JSON.parse(retriveObject));

function adding(){
    // e.preventDefault();
    let book = {
        "id": id.value,
        "title":title.value,
        "author":author.value,
        "rating":rating.value,
        "detail":detail.value
    }
    
    if(localStorage.getItem('record') == null){
        localStorage.setItem('record', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('record'));
    old_data.push(book);

    localStorage.setItem('record', JSON.stringify(old_data));
}


