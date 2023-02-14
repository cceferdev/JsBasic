const obtenerPokemones = async() => {
    try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()
    // discriminar objeto  
    // const arrayNombres = data.results.filter(poke => poke.name !== 'venusaur')
    
    // apuntar objeto
    // const arrayNombres = data.results.filter(poke => poke.name === 'venusaur')
    
    //verificar console.log(arrayNombres)
}
    catch (error) {
        console.log(error)
    }
}
obtenerPokemones()