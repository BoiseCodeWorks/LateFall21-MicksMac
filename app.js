console.log('app.js loaded')

let total = 0
let sleeping = 10

// Data array, need to uses methods like find to get items out
let toppings = [
  {
    name: 'cheese',
    price: 3.47
  },
  {
    name: 'cat',
    price: 25
  },
  {
    name: 'noodles',
    price: 2
  },
  {
    name: 'katschup',
    price: 1.50
  }
]


// Data Dictionary, can access items immediately by name/key
let toppingsDict = {
  cat: {
    name: 'cat',
    price: 25,
    qty: 0
  },
  cheese: {
    name: 'cheese',
    price: 3.47,
    qty: 0
  },
  noodles: {
    name: 'noodles',
    price: 2,
    qty: 0
  },
  katschup:  {
    name: 'katschup',
    price: 1.50,
    qty: 0
  }
}

let cart = [

]

// NOTE draws from Cart array
function drawUpdate(){
  let htmlTemplate = ''
  for( let i = 0; i < cart.length; i++){
    let topping = cart[i]
    htmlTemplate +=`<li>a ${topping.name}  -  $${topping.price}</li>`
  }
  console.log(htmlTemplate)
  let listElm = document.getElementById('toppings-list')
  listElm.innerHTML =  htmlTemplate
  let totalElm = document.getElementById('total')
  totalElm.innerText = `total : $ ${total.toFixed(2)}`
}

// NOTE draws from dictionary object
function drawUpdateBetta(){
  sleeping = 10
let htmlTemplate = ''
for (const key in toppingsDict) {
  const topping = toppingsDict[key];
  if(topping.qty > 0){
    htmlTemplate +=`<li>a ${topping.name} - ${topping.qty}  -  $${(topping.price * topping.qty).toFixed(2)}</li>`
  }
}
console.log(htmlTemplate)
// this next line doesn't change between the array or dictionary method
let listElm = document.getElementById('toppings-list')
listElm.innerHTML =  htmlTemplate

let totalElm = document.getElementById('total')
totalElm.innerText = `total : $ ${total.toFixed(2)}`
}

// NOTE this fuction works but is not flexible
function addCat(){
console.log('you added a cat')
let listElm = document.getElementById('toppings-list')
listElm.innerHTML +=  '<li>a cat</li>'
// listElm.innerHTML =  listElm.innerHTML + '<li>a cat</li>'
}


function addTopping(choice){
console.log('you added a ' + choice)
//ARRAY WAY itterate over array to find topping \/    where this \/ is true
//          let foundTopping = toppings.find(topping =>  topping.name == choice)

// DICTIONARY WAY
let foundTopping = toppingsDict[choice]

console.log('the found topping', foundTopping)
cart.push(foundTopping)
console.log('your current toppings', cart);

foundTopping.qty++
total += foundTopping.price

// drawUpdate()
drawUpdateBetta()

// updates the list with the correct topping => moved to drawUpdate 
// let listElm = document.getElementById('toppings-list')
// listElm.innerHTML +=  `<li>a ${foundTopping.name}  -  $${foundTopping.price}</li>`

// adds the found topping's price to the global scoped variable "total => moved to drawUpdate"
// let totalElm = document.getElementById('total')
// totalElm.innerText = `total : $ ${total}`
}


function checkout(){
  console.log('checkout');
  total = 0
  // This checkout works for clearing the ARRAY
cart = []
drawUpdate()

// this is how to clear the dictionary
for(let key in toppingsDict){
  // this targets the element's qty property in the dictionary and sets it to 0 (resetting it)
  toppingsDict[key].qty = 0
}
drawUpdateBetta()
}

function screenSaver(){
  let interval = setInterval(checkForSleeping, 1000)
}

function checkForSleeping(){
  sleeping--
  if(sleeping < 0){
    document.getElementById('saver').classList.remove('d-none')
  } else {
    document.getElementById('saver').classList.add('d-none')
  }
}

screenSaver()
drawUpdate()