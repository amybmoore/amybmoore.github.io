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


