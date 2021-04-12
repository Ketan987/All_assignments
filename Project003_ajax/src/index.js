function loadDoc(url, func, method) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            func(this);
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}
function showfunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr>\n                    <th>Author</th>\n                    <th>Title</th>\n                    <th>Genre</th>\n                    <th>Price</th>\n                    <th>Publish Date</th>\n                    <th>description</th>\n                </tr>";
    var x = xmlDoc.getElementsByTagName("book");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" + x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue + "\n        </td><td>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "\n        </td><td>" + x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue + "\n        </td><td>" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + " \n        </td><td>" + x[i].getElementsByTagName("publish_date")[0].childNodes[0].nodeValue + "\n        </td><td>" + x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
function searchfunction(xml) {
    var choose = document.getElementById("choose");
    console.log(choose.value);
    var selected = document.getElementById("selected");
    if ('author' == choose.value && choose.value != null) {
        var xmlDoc = xml.responseXML;
        var table = "<tr>\n                        <th>Author</th>\n                        <th>Title</th>\n                        <th>Genre</th>\n                        <th>Price</th>\n                        <th>Publish Date</th>\n                        <th>Description</th>\n                    </tr>";
        var x = xmlDoc.getElementsByTagName("book");
        for (var i = 0; i < x.length; i++) {
            if (x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue.includes(selected.value)) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("publish_date")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
                    "</td></tr>";
            }
        }
        document.getElementById("demo").innerHTML = table;
    }
    if ('title' == choose.value && choose.value != null) {
        var xmlDoc = xml.responseXML;
        var table = "<tr>\n                        <th>Author</th>\n                        <th>Title</th>\n                        <th>Genre</th>\n                        <th>Price</th>\n                        <th>Publish Date</th>\n                        <th>Description</th>\n                    </tr>";
        var x = xmlDoc.getElementsByTagName("book");
        for (var i = 0; i < x.length; i++) {
            if (x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue.includes(selected.value)) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("publish_date")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
                    "</td></tr>";
            }
        }
        document.getElementById("demo").innerHTML = table;
    }
}
// function addingrecord(xml) {
//     var payload;
//     var form = `<label for = "author">Author: </label><br>
//                 <input type= "text" id = "author"><br><br>
//                 <label for = "title">Title: </label><br>
//                 <input type= "text" id = "title"><br><br>
//                 <label for = "genre">Genre: </label><br>
//                 <input type= "text" id = "genre"><br><br>
//                 <label for = "price">Price(In $): </label><br>
//                 <input type= "number" id = "price"><br><br>
//                 <label for = "date">Publish Date: </label><br>
//                 <input type= "text" id = "date"><br><br>
//                 <label for = "descr">Description: </label><br>
//                 <input type= "text" id = "descr"><br><br>
//                 <input type = "submit" value = "Add Details" id = "adddetail">`
//     document.getElementById("myform").innerHTML = form;
//     // async function getdata(){
//     //     var author = await document.getElementById("author") as HTMLFormElement;
//     //     var title = await document.getElementById("title") as HTMLFormElement;
//     //     var genre = await document.getElementById("genre") as HTMLFormElement; 
//     //     var price = await document.getElementById("price") as HTMLFormElement;
//     //     var date = await document.getElementById("date") as HTMLFormElement;
//     //     var descr = await document.getElementById("descr") as HTMLFormElement;
//     //     console.log(author, title, genre, price, date, descr);
//     // }
//     var myform = document.getElementById("myform") as HTMLFormElement;
//     myform.addEventListener("submit", (e: Event) =>{
//         e.preventDefault();
//         var author = document.getElementById("author") as HTMLFormElement;
//         var title = document.getElementById("title") as HTMLFormElement;
//         var genre = document.getElementById("genre") as HTMLFormElement; 
//         var price = document.getElementById("price") as HTMLFormElement;
//         var date = document.getElementById("date") as HTMLFormElement;
//         var descr = document.getElementById("descr") as HTMLFormElement;
//         payload = {
//             author: author.value,
//             title : title.value, 
//             genre : genre.value, 
//             price : price.value, 
//             date : date.value, 
//             description : descr.value
//         };
//     })
//     return payload;
// }
