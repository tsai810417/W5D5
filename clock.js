// class Clock {
//   constructor() {
//     setInterval(this._tick.bind(this), 1000);
//
//     let current = new Date();
//     this.hr = current.getHours();
//     this.min = current.getMinutes();
//     this.sec = current.getSeconds();
//   }
//
//   printTime() {
//     if (this.sec < 10) {
//       console.log(`${this.hr} : ${this.min} : 0${this.sec}`);
//     }
//     else {
//       console.log(`${this.hr} : ${this.min} : ${this.sec}`);
//     }
//   }
//
//  _tick() {
//    this.sec += 1;
//    if (this.sec === 60) {
//      this.sec = 0;
//      this.min += 1;
//    }
//    this.printTime();
//   }
// }


//funTime.printTime();
//setInterval(_tick,1000);

class Clock {
  constructor() {
    this.current = new Date();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    if (this.sec < 10) {
          console.log(`${this.hr} : ${this.min} : 0${this.sec}`);
        }
        else {
          console.log(`${this.hr} : ${this.min} : ${this.sec}`);
        }
  }

  _tick() {
    this.current = new Date();
    this.sec = this.current.getSeconds();
    this.min = this.current.getMinutes();
    this.hr = this.current.getHours();
    this.printTime();
  }

}

// 
//
// const clock = new Clock();
