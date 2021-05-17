var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function loadDoc() {
    fetch("http://localhost:3000/books")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        var table = "<tr>\n                        <th>Author</th>\n                        <th>Title</th>\n                        <th>Genre</th>\n                        <th>Price</th>\n                        <th>Publish Date</th>\n                    </tr>";
        for (var i = 0; i < data.length; i++) {
            table += "<tr><td>" + data[i].author + "\n            </td><td>" + data[i].title + "\n            </td><td>" + data[i].rating + "\n            </td><td>" + data[i].price + " \n            </td><td>" + data[i].releaseDate + "</td></tr>";
        }
        document.getElementById("demo").innerHTML = table;
    });
}
function searchDoc() {
    var choose = document.getElementById("choose");
    var selected = document.getElementById("selected");
    fetch("http://localhost:3000/books")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        if ('author' == choose.value && choose.value != null) {
            var table = "<tr>\n                            <th>Author</th>\n                            <th>Title</th>\n                            <th>Genre</th>\n                            <th>Price</th>\n                            <th>Publish Date</th>\n                        </tr>";
            for (var i = 0; i < data.length; i++) {
                if (data[i].author.includes(selected.value)) {
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
            document.getElementById("demo").innerHTML = table;
        }
        else if ('title' == choose.value && choose.value != null) {
            var table = "<tr>\n                            <th>Author</th>\n                            <th>Title</th>\n                            <th>Genre</th>\n                            <th>Price</th>\n                            <th>Publish Date</th>\n                        </tr>";
            for (var i = 0; i < data.length; i++) {
                if (data[i].title.includes(selected.value)) {
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
            document.getElementById("demo").innerHTML = table;
        }
    });
}
function addDoc() {
    return __awaiter(this, void 0, void 0, function () {
        var form, myform;
        return __generator(this, function (_a) {
            form = "<label for = \"author\">Author: </label><br>\n                <input type= \"text\" id = \"author\"><br><br>\n                <label for = \"title\">Title: </label><br>\n                <input type= \"text\" id = \"title\"><br><br>\n                <label for = \"genre\">Genre: </label><br>\n                <input type= \"text\" id = \"genre\"><br><br>\n                <label for = \"price\">Price(In $): </label><br>\n                <input type= \"number\" id = \"price\"><br><br>\n                <label for = \"date\">Publish Date: </label><br>\n                <input type= \"text\" id = \"date\"><br><br>\n                <label for = \"descr\">Description: </label><br>\n                <input type= \"text\" id = \"descr\"><br><br>\n                <input type = \"submit\" value = \"Add Details\" id = \"adddetail\">";
            document.getElementById("myform").innerHTML = form;
            myform = document.getElementById("myform");
            myform === null || myform === void 0 ? void 0 : myform.addEventListener("submit", function (e) {
                e.preventDefault();
                var Dauthor = document.getElementById("author");
                var Dtitle = document.getElementById("title");
                var Drating = document.getElementById("genre");
                var Dprice = document.getElementById("price");
                var Ddate = document.getElementById("date");
                var rec = {
                    author: Dauthor.value,
                    title: Dtitle.value,
                    rating: Drating.value,
                    price: Dprice.value,
                    releaseDate: Ddate.value
                };
                fetch('http://localhost:3000/books', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(rec)
                })
                    .then(function (res) {
                    return res.json;
                })
                    .then(function (data) {
                    console.log(data);
                })["catch"](function (err) {
                    console.log(err);
                });
            });
            return [2 /*return*/];
        });
    });
}
