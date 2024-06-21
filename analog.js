const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeswitch = document.querySelector(".mode-switch");


modeswitch.addEventListener("click", () =>{

    body.classList.toggle("Dark");

    const isDarkMode = body.classList.contains("Dark");
    modeswitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

    localStorage.setItem("mode", isDarkMode? "Dark Mode": "Light Mode");
});

const updateTime = () =>{
    
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12) * 360;
    

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

setInterval(updateTime, 1000);

updateTime();