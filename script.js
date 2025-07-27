let time = document.getElementById("current-time");
let h2El = document.querySelector("#ip");


    fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => (h2El.textContent = data.ip))
    .catch((err) => console.log(err));




setInterval(() => {

let d = new Date();
time.innerHTML = d.toLocaleTimeString();
}, 1000);






 