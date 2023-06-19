const countDownDate = new Date("Oct 16, 2023 00:00:00").getTime();
const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const getTimeInterval = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
}

// setInterval(getTimeInterval, 1000)

const time = {
  countdown: new Date("Oct 16, 2023 00:00:00").getTime(),
  name: Math.floor(distance / (1000 * 60 * 60 * 24))
}

console.log(time)

// console.log(getTimeInterval())


