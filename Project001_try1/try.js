// localStorage.removeItem('showList');

function addNewShow(titleArg, typeArg, genreArg, watchedArg) {
  var showList = [];

  var show = {
    title: titleArg,
    type: typeArg,
    genre: genreArg,
    watched: watchedArg
  };
  showList.push(show);
  showList = showList.concat(JSON.parse(localStorage.getItem('showList')||'[]'));
  console.log(showList);


  localStorage.setItem("showList", JSON.stringify(showList));
};

addNewShow(1,2,3,4);
addNewShow(1,2,3,5);
addNewShow(1,2,3,6);
addNewShow(1,2,3,7);
