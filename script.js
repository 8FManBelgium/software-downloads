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

const ipElement = document.getElementById("ip");
const countryElement = document.getElementById("country");  
const cityElement = document.getElementById("city");
const proElement = document.getElementById("provider");

// Fetching IP and location data from ip-api.com
fetch('http://ip-api.com/json/?fields=61439')
.then((res) => res.json())
.then((res) => {
    ipElement.innerText = res.query;
    countryElement.innerText = res.country;
    proElement.innerText = res.as;
})