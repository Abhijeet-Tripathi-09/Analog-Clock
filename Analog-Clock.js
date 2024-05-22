let body = document.querySelector("body");
let hourHand = document.querySelector(".hour");
let minutesHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");
let modeSwitch = document.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode"
}

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    let isDarkMode = body.classList.contains("dark")
    modeSwitch.textContent = isDarkMode ? "LightMode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
})


const updateTime = () => {
    // Get Current Time
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360
    minToDeg = (date.getMinutes() / 60) * 360
    hrToDeg = (date.getHours() / 12) * 360

    // Rotate The Clock
    secondHand.style.transform = `rotate(${secToDeg}deg)`
    minutesHand.style.transform = `rotate(${minToDeg}deg)`
    hourHand.style.transform = `rotate(${hrToDeg}deg)`
}


setInterval(updateTime, 1000);