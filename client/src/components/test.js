

const tweentyFiveMinutes = 60 * 25 * 1000
const now = new Date().getTime();

const minutes = Math.floor((tweentyFiveMinutes % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((tweentyFiveMinutes % (1000 * 60)) / 1000);

console.log(minutes)
console.log(seconds)