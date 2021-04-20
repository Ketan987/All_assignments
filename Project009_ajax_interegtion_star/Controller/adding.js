function ID() {
    var counter = 12;
    function plus() {counter += 1;}
    plus();   
    return counter;
}


const createbook = async() => {
    event.preventDefault();
    const form = document.querySelector("form");
    if(form){
        form.addEventListener("submit", adding)
    }
    async function adding(){
        var bookrecord ={
            id: ID(),
            title: form.title.value,
            author: form.author.value,
            price: form.price.value,
            rating: form.rating.value,
            series: form.series.value,
            description: form.description.value
        }
        console.log(bookrecord);
        await fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify(bookrecord),
            headers: {'Content-Type' : 'application/json'}
        });
    }
}
