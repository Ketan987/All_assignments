"use strict";
function adding() {
    const id = document.getElementById("id");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const rating = document.getElementById("rating");
    const detail = document.getElementById("detail");
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
function showall() {
    var records = JSON.parse(localStorage.getItem('record'));
    var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`;
    for (let i = 0; i < records.length; i++) {
        html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`;
    }
    var table = document.getElementById("mytable");
    table.innerHTML = html_code;
    var deleting = document.getElementById("mybutton");
    deleting.addEventListener("click", function () {
        var _a, _b;
        var cur = (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
        let first_id = (_b = cur === null || cur === void 0 ? void 0 : cur.firstElementChild) === null || _b === void 0 ? void 0 : _b.textContent;
        console.log(first_id);
        for (let i = 0; i < records.length; i++) {
            if (records[i].id === first_id) {
                records.splice(i, 1);
                localStorage.setItem('record', JSON.stringify(records));
            }
        }
        ;
        location.reload();
    });
}
function searching() {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var records = JSON.parse(localStorage.getItem('record'));
    var choose = document.getElementById("choose");
    var inputed = document.getElementById("search");
    if (choose.value == 'id') {
        console.log("in id");
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`;
        for (let i = 0; i < records.length; i++) {
            if (records[i].id == inputed.value) {
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`;
            }
        }
        var table = document.getElementById("mytable");
        table.innerHTML = html_code;
    }
    else if (choose.value == 'title') {
        console.log("in title");
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`;
        for (let i = 0; i < records.length; i++) {
            if (records[i].title.includes(inputed.value)) {
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`;
            }
        }
        var table = document.getElementById("mytable");
        table.innerHTML = html_code;
    }
    else if (choose.value == 'author') {
        console.log("in author");
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`;
        for (let i = 0; i < records.length; i++) {
            if (records[i].id.includes(inputed.value)) {
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`;
            }
        }
        var table = document.getElementById("mytable");
        table.innerHTML = html_code;
    }
    if (choose.value == 'rating') {
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`;
        for (let i = 0; i < records.length; i++) {
            if (records[i].id == inputed.value) {
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`;
            }
        }
        var table = document.getElementById("mytable");
        table.innerHTML = html_code;
    }
    else if (choose.value == 'detail') {
        var html_code = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>`;
        for (let i = 0; i < records.length; i++) {
            if (records[i].detail.includes(inputed.value)) {
                html_code += `<tr>
                        <td>${records[i].id}</td>
                        <td>${records[i].title}</td>
                        <td>${records[i].author}</td>
                        <td>${records[i].rating}</td>
                        <td>${records[i].detail}</td>
                        <td><button type = "submit" id ="mybutton">Delete</button></td>
                      </tr>`;
            }
        }
        var table = document.getElementById("mytable");
        table.innerHTML = html_code;
    }
}
