// Scroll Smooth Up
let icon = document.querySelector(".up");
// Moving Progress Bar
let skills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");
// Count Numbers
let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".box .number");
let started = false;

// Function Scroll Event
window.onscroll = function () {
    // Scroll to Up
    this.scrollY >= 736 ? icon.classList.add("show") : icon.classList.remove("show");
    // Progress Bar to Section Our Skills
    if (window.scrollY >= skills.offsetTop - 72) {
        console.log("Arrived");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
     }
    //  Count Number to Section Statistics
    if(window.scrollY >= stats.offsetTop - 72) {
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
} 

// function on Click icon (Scroll to Up)
icon.onclick = function() {
    if (window.scrollY >= 737) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}

// Function Count Number
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 2000 / goal);
}
// End Count Numbers
// CountDown Timer in Section Events
/*  
** 1000 Milliseconds = 1 Second 
*/
let endDate = new Date("Dec 31, 2022 23:59:59").getTime();

let Counter = setInterval(() => {

    let dateNow = new Date().getTime();
    // Different Date
    let dateDiff = endDate - dateNow;

    // Get times Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));
    
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // When Date = 1 jan 2022
    if(dateDiff < 0) {
        clearInterval(Counter);
        document.querySelector(".events .info .title").innerHTML = "";
        document.querySelector(".events .info .title").innerHTML = "2023";
    }

}, 1000);
// End CountDown Timer in Section Events

