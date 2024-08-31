
const btn = document.getElementById('open-popup');
const btn1 = document.getElementById('open-popup_1');
function openPopup() {
    document.getElementById('popup').classList.add('popup-open')
    document.getElementById('popup').classList.remove('popup-close')
}

function closePopup() {
    document.getElementById('popup').classList.remove('popup-open')
    document.getElementById('popup').classList.add('popup-close')
}

btn.onclick = function () {
    openPopup()
    document.body.style.overflow = "hidden"
}
btn1.onclick = function () {
    openPopup()
    document.body.style.overflow = "hidden"
}
document.getElementById('close-popup').onclick = function() {
    closePopup()
    document.body.style.overflow = "visible"
}