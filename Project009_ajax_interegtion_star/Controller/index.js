const contain = document.querySelector(".books");


const renderbooks = async () => {
    const res = await fetch('http://localhost:3000/books?');
    const books = await res.json();
    
    
    let template = '';
    for (let i = 0; i < books.length; i++) {
        template += `
        <div class="book">
            <h2>${books[i].title}</h2>
            <div class = "one">
                <p><small>Author: ${books[i].author}</small></p>
                <p><small>Series: ${books[i].series}</small></p>
                <button type ="submit" id = "detailbtn" onclick= "loadDoc('GET', '../details.html', renderDetail, ${books[i].id})">Details</button>
            </div>
            <div class = "one">
                <p><small>Price: ${books[i].price}</small></p>
                <p><small>Rating:<star-rating current = ${books[i].rating} outof = "5" minof = "1"></star-rating></small></p>
                <button onclick = "deleteBook(${books[i].id})">Delete</button>
            </div>
            
        </div>`
    }

  contain.innerHTML = template;
}

// <a href="/details.html?id=${books[i].id}">Read more</a>

window.addEventListener('DOMContentLoaded', ()=>renderbooks());


// function loadDoc(method, url, func, position){
//     var xhr = new XMLHttpRequest;
    
//     xhr.onreadystatechange = function() {
//         if(this.status == 200 && this.status == 200){
//             document.querySelector(".books").innerHTML = this.responseText;
//             func(this, position);
//         }
//     };
//     xhr.open(method, url, true);
//     xhr.send();
// }

// function deleteBook(id){
//     fetch('http://localhost:3000/books/'+id, {
//         method: "DELETE",
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(rej => console.log(rej))
// }