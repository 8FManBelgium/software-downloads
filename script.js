let time = document.getElementById("current-time");
let btnEl = document.querySelector("#knop");
let h2El = document.querySelector("#ip");

btnEl.addEventListener("click", ()=>{
    h2El.textContent = "Fetching...";
    fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => (h2El.textContent = data.ip))
    .catch((err) => console.log(err));
});



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





 