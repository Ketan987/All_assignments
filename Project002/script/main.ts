function adding(){
    const id = document.getElementById("id") as HTMLSelectElement;
    const title = document.getElementById("title") as HTMLSelectElement;
    const author = document.getElementById("author") as HTMLSelectElement;
    const rating = document.getElementById("rating") as HTMLSelectElement;
    const detail = document.getElementById("detail") as HTMLSelectElement;
    
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

    var old_data = JSON.parse(localStorage.getItem('record')!);
    old_data.push(book);

    localStorage.setItem('record', JSON.stringify(old_data));
}


function showall(){
    var records = JSON.parse(localStorage.getItem('record')!);
    var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`
    for (let i = 0; i < records.length; i++) {
        html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`
    }
    var table = document.getElementById("mytable") as HTMLTableElement;
    table.innerHTML = html_code;
    var deleting = document.getElementById("mybutton") as HTMLButtonElement;
    deleting.addEventListener("click", function(){
        var cur = this.parentNode?.parentNode;
        let first_id = cur?.firstElementChild?.textContent;
        console.log(first_id);
        for(let i = 0; i < records.length; i++){
            if(records[i].id === first_id){
                records.splice(i, 1);
                localStorage.setItem('record', JSON.stringify(records))
            }
        };
        location.reload();
    })
}



function searching(){
    event?.preventDefault();
    var records = JSON.parse(localStorage.getItem('record')!);
    var choose = document.getElementById("choose") as HTMLSelectElement;
    var inputed = document.getElementById("search") as HTMLInputElement;
    
    if(choose.value == 'id'){
        console.log("in id");
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`
        for (let i = 0; i < records.length; i++) {
            if(records[i].id == inputed.value){
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`
                
            }
        }
        var table = document.getElementById("mytable") as HTMLTableElement;
        table.innerHTML = html_code;
    }
    else if(choose.value == 'title'){
        console.log("in title");
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`
        for (let i = 0; i < records.length; i++) {
            if(records[i].title.includes(inputed.value)){
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`
                
            }
        }
        var table = document.getElementById("mytable") as HTMLTableElement;
        table.innerHTML = html_code;
    }
    else if(choose.value == 'author'){
        console.log("in author");
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`
        for (let i = 0; i < records.length; i++) {
            if(records[i].id.includes(inputed.value)){
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`
                
            }
        }
        var table = document.getElementById("mytable") as HTMLTableElement;
        table.innerHTML = html_code;
    }
    if(choose.value == 'rating'){
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`
        for (let i = 0; i < records.length; i++) {
            if(records[i].id == inputed.value){
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`
                
            }
        }
        var table = document.getElementById("mytable") as HTMLTableElement;
        table.innerHTML = html_code;
    }
    else if(choose.value == 'detail'){
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`
        for (let i = 0; i < records.length; i++) {
            if(records[i].detail.includes(inputed.value)){
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`
                
            }
        }
        var table = document.getElementById("mytable") as HTMLTableElement;
        table.innerHTML = html_code;
    }
    
}

