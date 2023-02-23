console.log('working')

const url = "https://pokeapi.co/api/v2/pokemon/ditto"
let button = document.querySelector('#searchButton')


async function getData (event){
    event.preventDefault()

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(yee => {
        console.log('yay!', yee.name)
    })
    .catch(noo => {
        console.log('oops', noo)
    })
}