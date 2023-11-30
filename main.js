const btn = document.getElementById('open')
const span = document.querySelector('#close')

btn.addEventListener('click', open)

span.addEventListener('click', close)

function open(){
    let modaldiv=document.querySelector('#modal')
    modaldiv.style.display = 'block'
}
function close(){
    let modaldiv=document.querySelector('#modal')
    modaldiv.style.display = 'none'
}