const gettingData = async() => {
    let Theaders = new Headers();
    Theaders.append('Content-Type', 'application/json');
    Theaders.append('Access-Control-Allow-Origin', '*');
    Theaders.append('Access-Control-Allow-Credentials', 'true')

    fetch('http://localhost:5000/books', {
        method : 'GET',
        mode : 'cors',
        headers : Theaders
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // this.setState({gotData : data})
        return data;
        
    })
}

export default gettingData;