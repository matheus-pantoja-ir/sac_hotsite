
const chat = document.getElementById('chat')
const openButton = document.getElementById('chatButton')
const closeButton = document.getElementById('closeChat')


closeButton.onclick = function () {
    chat.removeAttribute('open')
    openButton.style.display = 'flex'
}