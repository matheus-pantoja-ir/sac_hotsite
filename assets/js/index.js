
const chat = document.getElementById('chat')
const openButton = document.getElementById('chatButton')
const closeButton = document.getElementById('closeChat')

openButton.onclick = function () {
    chat.setAttribute('open', '')
    openButton.style.display = 'none'
    document.querySelector('main').style.overflow = 'hidden'
}

closeButton.onclick = function () {
    chat.removeAttribute('open')
    openButton.style.display = 'flex'
}