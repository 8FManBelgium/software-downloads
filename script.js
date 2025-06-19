let type = new Typed('#changing-text',{
    strings : ['laptop hersteller','paswoord resetter','photoshop Expert','windows11 upgrader','Website ontwerper','Logo ontwerper','softweare expert'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});
const showPopup = document.querySelector('.btn');
const popupContainer = document.querySelector('.popup-container1');
const closeBtn = document.querySelector('.close-btn');
const laatZien = document.querySelector('.btn1');
const springContainer = document.querySelector('.popup-container2');
const Sluitknop = document.querySelector('.close-btn1');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}
closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}
laatZien.onclick = () =>{
    springContainer.classList.add('active');
}
Sluitknop.onclick = () => {
    springContainer.classList.remove('active');
}


