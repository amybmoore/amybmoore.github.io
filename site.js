const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if(isMorning){
    const welcome = document.querySelector('#welcome')
    welcome.textContent = 'Good morning. Welcome to my website.'
}

else if(isAfternoon){
    const welcome = document.querySelector('#welcome')
    welcome.textContent = 'Good afternoon. Welcome to my website.'
}

else{
    const welcome = document.querySelector('#welcome')
    welcome.textContent = 'Good evening. Welcome to my website.'
}

// Store a secret message in local storage
const key = "It's a secret to everybody."

const message = "My age? It's a secret to everybody, but I graduated from high school the same year The Legend of Zelda was 'born'."

localStorage.setItem(key, message)

//  My own check to be sure secret message is stored
//  const storedValue = localStorage.getItem(key)
//  secret.textContent = storedValue

// Week 6 Assignment:
window.addEventListener('load', () => {

    const urls = [
        'img/charlotte_pillow-1260x750.jpg',
        'img/sewing-1260x750.jpg',
        'img/trees-1260x750.jpg',
        'img/charlotte-1260x750.jpg',
        'img/buds-1260x750.jpg'
        //'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        //'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        //'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ].map(url => { (new Image()).src = url; return url })

    const images = document.querySelectorAll('#carousel img')

    let currentImage = 0
    const showImages = () => {
        const offset = currentImage % urls.length
        images.forEach((image, index) => {
            const imageIndex = (index + offset + urls.length) % urls.length
            image.src = urls[imageIndex]
        })
        console.log('Current image srcs:', Array.from(images).map(img => img.src))
    }

    showImages()

    // Images advance when page is loaded every 5 seconds
    setInterval(() => {
        currentImage++
        showImages()
        console.log('Images loaded')
    }, 5000)

    // Function to advance images on Next button click
    const nextButton = document.querySelector('#next')
    nextButton.addEventListener('click', () => {
        currentImage++
        showImages()
    })


    // Function to reverse images on Previous button click
    const prevButton = document.querySelector('#prev')
    prevButton.addEventListener('click', () => {
        currentImage--
        showImages()
    })

})

// Pokemon image
//Create an arrow function called getRandomPokemon that will fetch a random pokemon from the PokeAPI. 
// Do not have your getRandomPokemon function call the renderPokemon function. Instead, have your getRandomPokemon function return the pokemon object. 
const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const pokemonObj = await response.json()
    return pokemonObj
}

// Create an arrow function called renderPokemon that takes a pokemon object as a parameter. This function should create an image element and append it to the DOM.

const renderPokemon = (pokemonObj) => {
    const parentElement = document.querySelector('#pokemon')

    const img = document.createElement('img')
    img.src = pokemonObj.sprites.front_default  // url of the image from the 'front_default' property
    img.alt = pokemonObj.name  // name of the pokemon
    parentElement.append(img)
    return pokemonObj
}

//Then, call the renderPokemon function with the returned object.
getRandomPokemon()
    .then(pokemon => {
        renderPokemon(pokemon)
    })



