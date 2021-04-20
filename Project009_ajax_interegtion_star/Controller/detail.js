
// const id = new URLSearchParams(window.location.search).get('id');

// console.log(id);


const renderDetail = async (obj, id) => {
    const res = await fetch('http://localhost:3000/books/');
    const book = await res.json();
    const container = document.getElementById('details');
    console.log(container)
    console.log(id);

    let template = `<div>
                    <h1>${book[id-1].title}</h1>
                    <p>${book[id-1].description}<p>
                    </div>`;
    container.innerHTML = template;
}

// var detailbtn = document.getElementById('detailbtn')
// detailbtn.addEventListener('click', () => renderDetail());