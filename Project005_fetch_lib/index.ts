function loadDoc(){
    fetch("http://localhost:3000/books")
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
    var table = `<tr>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Price</th>
                        <th>Publish Date</th>
                    </tr>`
        for (let i = 0; i < data.length; i++) {
            table += `<tr><td>${data[i].author}
            </td><td>${data[i].title}
            </td><td>${data[i].rating}
            </td><td>${data[i].price} 
            </td><td>${data[i].releaseDate}</td></tr>`;
            
        }
        document.getElementById("demo")!.innerHTML = table;
    })
}

function searchDoc() {
    var choose = document.getElementById("choose") as HTMLInputElement;
    var selected = document.getElementById("selected") as HTMLInputElement;
    fetch("http://localhost:3000/books")
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        if('author' == choose.value && choose.value != null){
            var table = `<tr>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Publish Date</th>
                        </tr>`;
            for (let i = 0; i < data.length; i++) {
                if(data[i].author.includes(selected.value)){
                    table += "<tr><td>" +
                        data[i].author +
                        "</td><td>" +
                        data[i].title +
                        "</td><td>" +
                        data[i].rating +
                        "</td><td>" +
                        data[i].price +
                        "</td><td>" +
                        data[i].releasedate +
                        "</td></tr>";
                }
            }
            document.getElementById("demo")!.innerHTML = table;
        }
        else if('title' == choose.value && choose.value != null){
            var table = `<tr>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Publish Date</th>
                        </tr>`;
            for (let i = 0; i < data.length; i++) {
                if(data[i].title.includes(selected.value)){
                    table += "<tr><td>" +
                        data[i].author +
                        "</td><td>" +
                        data[i].title +
                        "</td><td>" +
                        data[i].rating +
                        "</td><td>" +
                        data[i].price +
                        "</td><td>" +
                        data[i].releasedate +
                        "</td></tr>";
                }
            }
            document.getElementById("demo")!.innerHTML = table;
        }
    })
}


async function addDoc(){
    var form = `<label for = "author">Author: </label><br>
                <input type= "text" id = "author"><br><br>
                <label for = "title">Title: </label><br>
                <input type= "text" id = "title"><br><br>
                <label for = "genre">Genre: </label><br>
                <input type= "text" id = "genre"><br><br>
                <label for = "price">Price(In $): </label><br>
                <input type= "number" id = "price"><br><br>
                <label for = "date">Publish Date: </label><br>
                <input type= "text" id = "date"><br><br>
                <label for = "descr">Description: </label><br>
                <input type= "text" id = "descr"><br><br>
                <input type = "submit" value = "Add Details" id = "adddetail">`
        
    document.getElementById("myform")!.innerHTML = form;

    var myform = document.getElementById("myform");

    myform?.addEventListener("submit", (e)=>
    {
        e.preventDefault();

        var Dauthor = document.getElementById("author") as HTMLFormElement;
        var Dtitle = document.getElementById("title") as HTMLFormElement;
        var Drating = document.getElementById("genre") as HTMLFormElement; 
        var Dprice = document.getElementById("price") as HTMLFormElement;
        var Ddate = document.getElementById("date") as HTMLFormElement;


        const rec ={
            author :Dauthor.value,
            title: Dtitle.value,
            rating: Drating.value,
            price : Dprice.value,
            releaseDate : Ddate.value
        }
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(rec)
        })
        .then((res) => {
            return res.json;
        })
        .then((data) =>{
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    })
}