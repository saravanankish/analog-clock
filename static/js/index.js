const hr = document.getElementsByClassName("hr")[0];
const min = document.getElementsByClassName("min")[0];
const sec = document.getElementsByClassName("sec")[0];

setInterval(() =>{
    let date = new Date();
    let hours = date.getHours() * 30;
    let minutes = date.getMinutes() * 6;
    let seconds = date.getSeconds() * 6;

    hr.style.transform = `rotateZ(${ (hours) + (minutes / 12)}deg)`;
    min.style.transform = `rotateZ(${minutes}deg)`;
    sec.style.transform = `rotateZ(${seconds}deg)`;
})