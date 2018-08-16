class Timer {
    constructor(display) {
        this.running = false;
        this.global = 0;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
          return `${this.pad0(times.hours)}:${this.pad0(times.minutes)}:${this.pad0(times.seconds)}`;
    }

    pad0(value) {
    let result = value.toString();
      if (result.length < 2) {
          result = '0' + result;
      }
    return result;
    }

    start() {
      if (!this.running) {
          this.running = true;
          this.watch = setInterval(() => this.step(), 1000);
      } else { 
        clearInterval(this.watch);
        this.times.seconds = -1;
        this.watch = setInterval(() => this.step(), 1000);
      }
    }

    step() {
    if (!this.running) return;
    this.calculate();
    this.print();
    }

    calculate() {
    this.times.seconds += 1;
      if (this.times.seconds >= 60) {
          this.times.minutes += 1;
          this.times.seconds = 0;
      }
      if (this.times.minutes >= 60) {
          this.times.hours += 1;
          this.times.minutes = 0;
      }
    }
}


const stopwatch = new Timer(
document.querySelector('#timer'));

const startButton = document.getElementById('gameStart');
startButton.addEventListener('click', () => stopwatch.start());


