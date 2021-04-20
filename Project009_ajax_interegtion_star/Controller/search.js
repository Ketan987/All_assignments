
const rendersearch = async () => {
    console.log("yaha tk")
    const container = document.querySelector(".records");
    
    // var btn = document.getElementById("search");
    // btn.addEventListener("submit", searching());
    // console.log(books);
    console.log(container);
    var btn = document.getElementById("search");
    if(btn){
        btn.addEventListener("click", search)
    }
    async function search(){
        const choose = document.getElementById("choose");
        const select = document.getElementById("selection");
        const res = await fetch(`http://localhost:3000/books/?${choose.value}=${select.value}`);
        
        const books = await res.json();

        console.log(choose.value, select.value);
        console.log(books[0].id, books[0].author);
        var template  = `
        <div class="book">
            <h2>${books[0].title}</h2>
            <div class = "one">
                <p><small>Author: ${books[0].author}</small></p>
                <p><small>Series: ${books[0].series}</small></p>
                <button type ="submit" id = "detailbtn" onclick= "loadDoc('GET', '../details.html', renderDetail, ${books.id})">Details</button>
            </div>
            <div class = "one">
                <p><small>Price: ${books[0].price}</small></p>
                <p><small>Rating: ${books[0].rating}</small></p>
                <button>Delete</button>
            </div>
            
        </div>`;
        container.innerHTML = template;
    }
}
