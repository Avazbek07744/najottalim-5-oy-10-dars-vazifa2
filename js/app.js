let counter = 0;
let intervalId;

document.getElementById('startCounter').addEventListener('click', () => {
    intervalId = setInterval(() => {
        counter++;
        document.getElementById('counter').textContent = counter;
    }, 800);
});

document.getElementById('stopCounter').addEventListener('click', () => {
    clearInterval(intervalId);
});