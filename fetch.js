fetch('https://pokeapi.co/api/v2/pokemon/')
    .then ( res => res.json())
    .then(data =>{
        data.results.forEach(element => {
            console.log('el pokemon se llama:  ' + element.name)
        });
    })
    .catch(error => console.log(error))