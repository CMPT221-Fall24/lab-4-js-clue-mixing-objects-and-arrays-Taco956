let results = document.getElementById("results")


const element = document.querySelector(".querySel")
element.addEventListener('click', function(){
    revealMystery(mystery)
})


let suspects = ["Lance", "Matt", "Tim", "Henry", "Aidan", "Drew"]
let weapons = ["knife", "candlestick", "dagger", "revolver", "lead pipe", "wrench", "rope", "axe"]
let rooms = ["livingroom", "kitchen", "bathroom", "ballroom", "bedroom", "garage", "diningroom", "gameroom", "guestroom", "basement"]

let mystery = {}

function randomSelector(array)
{
    let len = array.length
    randomNum = Math.floor(Math.random()*len)
    return array[randomNum]
}

function pickMystery()
{
    mystery = {suspect:randomSelector(suspects),weapon:randomSelector(weapons),room:randomSelector(rooms)}
    return mystery
}

function revealMystery(obj)
{
    obj = pickMystery()
    results.innerHTML =`${obj.suspect} killed Mr. Marist using the ${obj.weapon} in the ${obj.room}`
}