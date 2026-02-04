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

