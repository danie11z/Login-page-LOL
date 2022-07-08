const username = document.querySelectorAll('input')[0]
const password = document.querySelectorAll('input')[1]
const button = document.querySelector('#btn')

button.classList.add('btnOFF')

function handleChange(){
    if(username.value && password.value.length>=8){
        button.classList.add('btnON')
        button.classList.remove('btnOFF')
    }else{
        button.classList.add('btnOFF')
        button.classList.remove('btnON')
    }
}

username.addEventListener('input', handleChange)
password.addEventListener('input', handleChange)