console.log('Welcome To The Pokedex')

console.log(fetch('https://pokeapi.co/api/v2/pokemon/'))

fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response) => {
    return response.json()
})

.then((data) => {
    console.log(data)
})

const get_pokemon_data = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)

    const poke_img = document.createElement('img')
    poke_img.setAttribute("src", data['sprites']['front_default'])
    const poke_name = document.createElement('h1')
    poke_name.innerText = data['name']
    // const poke_ability = document.createElement('h4')
    // poke_ability.innerText = data['abilities']['0']['ability']['name']
    // const poke_abilityy = document.createElement('h4')
    // poke_ability.innerText = data['abilities']['1']['ability']['name']

    document.querySelector('.pokedex').append(poke_img)
    document.querySelector('.pokedex').append(poke_name)
    // document.querySelector('.pokedex-data').append(poke_ability)
    // document.querySelector('.pokedex-data').append(poke_abilityy)
}

const form_data = document.querySelector('form')
form_data.addEventListener('submit', (event) => {
    event.preventDefault()
    const pokemon = document.querySelector('#pokedex').value
    get_pokemon_data(pokemon)
})