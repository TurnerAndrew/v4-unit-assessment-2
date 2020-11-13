const formBtn = document.getElementById('close-form')
let form = document.getElementsByClassName('form')

function toggler(){
    form.classList.toggle('hide')
    //toggle form classList to/from #hide
    form.innerText === 'X' ? form.innerText === '+' ? form.innerText === '+' : form.innerText === X
    //conditional to check innerText === X
    //x -> + and vice versa
}

formBtn.addEventListener('click', () => {
    toggler()
})