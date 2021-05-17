var records = JSON.parse(localStorage.getItem('record')!);
console.log(records);


var table = document.createElement('table');
table.id = "mytable";
table.setAttribute('border' ,'1');
table.setAttribute('width', '70%');
table.setAttribute('align', 'center');
var row = table.insertRow(0);
var cell = row.insertCell(0);
var text = document.createTextNode("Id");
cell.appendChild(text);
cell.setAttribute('align', 'center');
// two
cell = row.insertCell(1);
text = document.createTextNode("Title");
cell.appendChild(text);
cell.setAttribute('align', 'center');
// Three
cell = row.insertCell(2);
text = document.createTextNode("Author");
cell.appendChild(text);
cell.setAttribute('align', 'center');
// Four
cell = row.insertCell(3);
text = document.createTextNode("Rating");
cell.appendChild(text);
cell.setAttribute('align', 'center');
// Five
cell = row.insertCell(4);
text = document.createTextNode("Detail");
cell.appendChild(text);
cell.setAttribute('align', 'center');
// Delete Six
cell = row.insertCell(5);
text = document.createTextNode("ACTION");
cell.appendChild(text);
cell.setAttribute('align', 'center');

for (var j = 1; j <= records.length; j++){
    var row = table.insertRow(j);
    // one
    text = document.createTextNode(records[j-1].id);
    var cell = row.insertCell(0);
    cell.setAttribute('align', 'center')
    cell.appendChild(text);
    // Two
    text = document.createTextNode(records[j-1].title);
    var cell = row.insertCell(1);
    cell.setAttribute('align', 'center')
    cell.appendChild(text);
    // Three
    text = document.createTextNode(records[j-1].author);
    var cell = row.insertCell(2);
    cell.setAttribute('align', 'center')
    cell.appendChild(text);
    // Four
    text = document.createTextNode(records[j-1].rating);
    var cell = row.insertCell(3);
    cell.setAttribute('align', 'center')
    cell.appendChild(text);
    // FIve
    text = document.createTextNode(records[j-1].detail);
    var cell = row.insertCell(4);
    cell.setAttribute('align', 'center')
    cell.appendChild(text);
    // Six
    var cell = row.insertCell(5);
    cell.setAttribute('align', 'center')
    var htm_data = `<td><button > Delete </button></td>`;
    cell.innerHTML = htm_data;
    cell.addEventListener("click",function(){
        var i = this.parentNode;
        // console.log(i);
        let first_id = i?.firstChild;
        // console.log(first_id);
        // console.log(first_id?.textContent);
        var val = first_id?.textContent;
        console.log(val)
    
        for(let i = 0; i < records.length; i++){
            if(records[i].id === val){
                records.splice(i, 1);
                localStorage.setItem('record', JSON.stringify(records));
            }
        };
        location.reload();
    })
}
document.getElementById("output-dev")?.appendChild(table);


document.addEventListener("submit", searchList);
function searchList(e:Event) {
    e.preventDefault();
    var choose = document.getElementById("choose") as HTMLFormElement;
    var selected = document.querySelector("#search") as HTMLFormElement;
    var rmvtable = document.getElementById("mytable") as HTMLTableElement;
    var parent = rmvtable?.parentElement;
    parent?.removeChild(rmvtable);

    if(choose.value == 'id'){
        console.log("ID: ",choose.value);
        console.log(selected.value);
        // Creating a table 
        var table = document.createElement('table');
        table.setAttribute('border' ,'1');
        table.setAttribute('width', '70%');
        table.setAttribute('align', 'center');
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        var text = document.createTextNode("Id");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // two
        cell = row.insertCell(1);
        text = document.createTextNode("Title");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Three
        cell = row.insertCell(2);
        text = document.createTextNode("Author");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Four
        cell = row.insertCell(3);
        text = document.createTextNode("Rating");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Five
        cell = row.insertCell(4);
        text = document.createTextNode("Detail");
        cell.appendChild(text);
        // Deleting Row last
        cell = row.insertCell(5);
        text = document.createTextNode("ACTION");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        for (let i = 0; i < records.length; i++) {
            if (records[i].id == selected.value){
                var row = table.insertRow(i);
                // one
                text = document.createTextNode(records[i].id);
                var cell = row.insertCell(0);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Two
                text = document.createTextNode(records[i].title);
                var cell = row.insertCell(1);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Three
                text = document.createTextNode(records[i].author);
                var cell = row.insertCell(2);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Four
                text = document.createTextNode(records[i].rating);
                var cell = row.insertCell(3);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // FIve
                text = document.createTextNode(records[i].detail);
                var cell = row.insertCell(4);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // SIX
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Delete";
                btn.id = String(j);
                // btn.onclick = (e) => {table.deleteRow(+btn.id)};
                var cell = row.insertCell(5);
                cell.setAttribute('align', 'center')
                cell.appendChild(btn);
            }
            document.getElementById("output-dev")?.appendChild(table);   
        }
    }else if (choose.value == "title"){
        console.log("Title: ",choose.value);
        console.log(selected.value);
        // Creating a table 
        var table = document.createElement('table');
        table.setAttribute('border' ,'1');
        table.setAttribute('width', '70%');
        table.setAttribute('align', 'center');
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        var text = document.createTextNode("Id");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // two
        cell = row.insertCell(1);
        text = document.createTextNode("Title");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Three
        cell = row.insertCell(2);
        text = document.createTextNode("Author");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Four
        cell = row.insertCell(3);
        text = document.createTextNode("Rating");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Five
        cell = row.insertCell(4);
        text = document.createTextNode("Detail");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Delete Six
        cell = row.insertCell(5);
        text = document.createTextNode("ACTION");
        cell.appendChild(text);
        for (let i = 0; i < records.length; i++) {
            if (records[i].title == selected.value){
                var row = table.insertRow(i);
                // one
                text = document.createTextNode(records[i].id);
                var cell = row.insertCell(0);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Two
                text = document.createTextNode(records[i].title);
                var cell = row.insertCell(1);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Three
                text = document.createTextNode(records[i].author);
                var cell = row.insertCell(2);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Four
                text = document.createTextNode(records[i].rating);
                var cell = row.insertCell(3);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // FIve
                text = document.createTextNode(records[i].detail);
                var cell = row.insertCell(4);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // SIX
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Delete";
                btn.id = String(j);
                // btn.onclick = (e) => {table.deleteRow(+btn.id)};
                var cell = row.insertCell(5);
                cell.setAttribute('align', 'center')
                cell.appendChild(btn);
            }
            document.getElementById("output-dev")?.appendChild(table);   
        }
    }else if (choose.value == "author"){
        console.log("Author: ",choose.value);
        console.log(selected.value);
        // Creating a table 
        var table = document.createElement('table');
        table.setAttribute('border' ,'1');
        table.setAttribute('width', '70%');
        table.setAttribute('align', 'center');
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        var text = document.createTextNode("Id");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // two
        cell = row.insertCell(1);
        text = document.createTextNode("Title");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Three
        cell = row.insertCell(2);
        text = document.createTextNode("Author");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Four
        cell = row.insertCell(3);
        text = document.createTextNode("Rating");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Five
        cell = row.insertCell(4);
        text = document.createTextNode("Detail");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Delete Six
        cell = row.insertCell(5);
        text = document.createTextNode("ACTION");
        cell.appendChild(text);
        for (let i = 0; i < records.length; i++) {
            if (records[i].author == selected.value){
                var row = table.insertRow(i);
                // one
                text = document.createTextNode(records[i].id);
                var cell = row.insertCell(0);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Two
                text = document.createTextNode(records[i].title);
                var cell = row.insertCell(1);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Three
                text = document.createTextNode(records[i].author);
                var cell = row.insertCell(2);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Four
                text = document.createTextNode(records[i].rating);
                var cell = row.insertCell(3);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // FIve
                text = document.createTextNode(records[i].detail);
                var cell = row.insertCell(4);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // SIX
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Delete";
                btn.id = String(j);
                // btn.onclick = (e) => {table.deleteRow(+btn.id)};
                var cell = row.insertCell(5);
                cell.setAttribute('align', 'center')
                cell.appendChild(btn);
            }
            document.getElementById("output-dev")?.appendChild(table);   
        }
    }else if (choose.value == "rating"){
        console.log("Rating: ",choose.value);
        console.log(selected.value);
        // Creating a table 
        var table = document.createElement('table');
        table.setAttribute('border' ,'1');
        table.setAttribute('width', '70%');
        table.setAttribute('align', 'center');
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        var text = document.createTextNode("Id");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // two
        cell = row.insertCell(1);
        text = document.createTextNode("Title");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Three
        cell = row.insertCell(2);
        text = document.createTextNode("Author");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Four
        cell = row.insertCell(3);
        text = document.createTextNode("Rating");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Five
        cell = row.insertCell(4);
        text = document.createTextNode("Detail");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Delete Six
        cell = row.insertCell(5);
        text = document.createTextNode("ACTION");
        cell.appendChild(text);
        for (let i = 0; i < records.length; i++) {
            if (records[i].rating == selected.value){
                var row = table.insertRow(i);
                // one
                text = document.createTextNode(records[i].id);
                var cell = row.insertCell(0);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Two
                text = document.createTextNode(records[i].title);
                var cell = row.insertCell(1);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Three
                text = document.createTextNode(records[i].author);
                var cell = row.insertCell(2);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Four
                text = document.createTextNode(records[i].rating);
                var cell = row.insertCell(3);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // FIve
                text = document.createTextNode(records[i].detail);
                var cell = row.insertCell(4);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // SIX
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Delete";
                btn.id = String(j);
                // btn.onclick = (e) => {table.deleteRow(+btn.id)};
                var cell = row.insertCell(5);
                cell.setAttribute('align', 'center')
                cell.appendChild(btn);
            }
            document.getElementById("output-dev")?.appendChild(table);   
        }
    }else if (choose.value == "detail"){
        console.log("Detail: ",choose.value);
        console.log(selected.value);
        // Creating a table 
        var table = document.createElement('table');
        table.setAttribute('border' ,'1');
        table.setAttribute('width', '70%');
        table.setAttribute('align', 'center');
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        var text = document.createTextNode("Id");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // two
        cell = row.insertCell(1);
        text = document.createTextNode("Title");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Three
        cell = row.insertCell(2);
        text = document.createTextNode("Author");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Four
        cell = row.insertCell(3);
        text = document.createTextNode("Rating");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Five
        cell = row.insertCell(4);
        text = document.createTextNode("Detail");
        cell.appendChild(text);
        cell.setAttribute('align', 'center');
        // Delete Six
        cell = row.insertCell(5);
        text = document.createTextNode("ACTION");
        cell.appendChild(text);
        for (let i = 0; i < records.length; i++) {
            if (records[i].detail == selected.value){
                var row = table.insertRow(i);
                // one
                text = document.createTextNode(records[i].id);
                var cell = row.insertCell(0);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Two
                text = document.createTextNode(records[i].title);
                var cell = row.insertCell(1);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Three
                text = document.createTextNode(records[i].author);
                var cell = row.insertCell(2);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // Four
                text = document.createTextNode(records[i].rating);
                var cell = row.insertCell(3);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // FIve
                text = document.createTextNode(records[i].detail);
                var cell = row.insertCell(4);
                cell.setAttribute('align', 'center')
                cell.appendChild(text);
                // SIX
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Delete";
                btn.id = String(j);
                // btn.onclick = (e) => {table.deleteRow(+btn.id)};
                var cell = row.insertCell(5);
                cell.setAttribute('align', 'center')
                cell.appendChild(btn);
            }
            document.getElementById("output-dev")?.appendChild(table);   
        }
    }
}
