const formBtn = document.getElementById('close-form')
const form = document.getElementsByClassName('form')[0]

function toggler() {
    form.classList.toggle('hide')
    formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X'
}

formBtn.addEventListener ('click', toggler)

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
let emailList = [] //stores user input

function validateForm (){
    if (nameInput.value != true && emailInput.value != true){
        nameInput.style = 'border: 2px solid red'
        emailInput.style = 'border: 2px solid red'
        window.alert('You must enter a valid name and e-mail address to subscribe')
    } else if(nameInput.value != true){
        nameInput.style = 'border: 2px solid red'
        window.alert('Please enter your name to subscribe')
    } else if(emailInput.value != true){
        emailInput.style = 'border: 2px solid red'
        window.alert('Please enter your e-mail address to subscribe')
    } else {
        emailList.push[nameInput.value, emailInput.value]
        displayThankYou()
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    validateForm()
})

const formContainer = document.getElementsByClassName('form-container')[0]

function displayThankYou(){
    formContainer.innerText('Thank you for subscribing!')
}

nameInput.addEventListener('change', () => nameInput.style = 'border: none')
emailInput.addEventListener('change', () => emailInput.style = 'border: none')

let cart = document.createElement('div')
cart.className = 'cart'
let main = document.querySelector('main')
let cartItems = 0

function addToCart(){
    if(cartItems === 0){
        cartItems = 1
        cart.setAttribute('class', 'cart-display')
        cart.innerText('Your Cart: 1 item')
        main.appendChild(cart)
    } 
    else {
        cartItems += 1
        cart.innerText = "Your Cart: " + cartItems
    }
    
}