let passengerCount = 0;

let pCount = document.getElementById('count-el');
let prev = document.getElementById('saved');

function increment() {
    passengerCount += 1
    pCount.textContent = passengerCount;
}

function decrement() {
    passengerCount -= 1
    pCount.textContent = passengerCount
}

function save() {
    let prevCount = passengerCount + ' - ';
    prev.textContent += prevCount;
    pCount.textContent = 0;
    passengerCount = 0;
}