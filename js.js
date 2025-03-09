document.querySelector('.submit').addEventListener('click', addToList)

function addToList(){
    const li = document.createElement('li')
    document.querySelector('ul').appendChild(li)
    const input = document.querySelector('input')
    li.innerText = input.value
}

document.querySelector('.clear').addEventListener('click', clearList)

function clearList(){
    document.querySelector('ul').innerHTML = ''
}