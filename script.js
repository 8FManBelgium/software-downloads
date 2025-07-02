let time = document.getElementById("current-time");

setInterval(() => {

let d = new Date();
time.innerHTML = d.toLocaleTimeString();
}, 1000);

const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const message =[
    'Mail Program Opend Zo',
    'Nog even geduld',
    'Mail Programma word geopend',
    'Mail Programma word geopend, even geduld',
]

button.addEventListener("click", () => createNotification())

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 4000);
}
function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)

    ];
}
const http = new XMLHttpRequest()
let result = document.getElementById("#result")

document.querySelector("#share").addEventListener("click", () => {
    findMyCoordinates();
})
function findMyCoordinates() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude)
        },
        (err) => {
                alert(err.message)
               })

    }else{
        alert("Geolocation is niet supported door u browser.");
    }
}