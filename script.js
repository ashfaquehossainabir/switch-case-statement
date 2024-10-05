// Concept: Swicth Case in javascript

const display = document.getElementById('display')

let day = new Date().getDay()
let text

switch(day) {
    case 0:
        text = "Today is Sunday"
        break

    case 1:
        text = "Today is Monday"
        break

    case 2:
        text = "Today is Tuesday"
        break

    case 3:
        text = "Today is Wednesday"
        break

    case 4:
        text = "Today is Thursday"
        break
    
    case 5:
        text = "Today is Friday"
        break

    case 6:
        text = "Today is Saturday"
        break

    default:
        text = `${day} is not a day`
}

display.innerText = text