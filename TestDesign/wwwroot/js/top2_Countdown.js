function startCountdown(id, targetDate) {
    const countdownElement = document.getElementById(id);
    const daysElement = countdownElement.querySelector("span[id^='days']");
    const hoursElement = countdownElement.querySelector("span[id^='hours']");
    const minutesElement = countdownElement.querySelector("span[id^='minutes']");
    const secondsElement = countdownElement.querySelector("span[id^='seconds']");

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Süre doldu!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
    }, 1000);
}

startCountdown("gs", new Date("2024-09-28T19:00:00").getTime());
startCountdown("ts", new Date("2024-09-29T16:00:00").getTime());
startCountdown("fb", new Date("2024-09-29T19:00:00").getTime());
startCountdown("bjk", new Date("2024-09-30T20:00:00").getTime());
