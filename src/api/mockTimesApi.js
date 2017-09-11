import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const timers = [
  {
    id: '1',
    title: 'timer1',
    name: 'workout',
    length: '45:32'
  },
  {
    id: '2',
    title: 'timezilla',
    name: 'mediatation',
    length: '10:11'
  },
  {
    id: '3',
    title: 'timetastic',
    lastName: 'snoozing', 
    length: '3:20:05.'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (timer) => {
  return timer.firstName.toLowerCase() + '-' + timer.lastName.toLowerCase();
};

class times {
  static getAllTimers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], timers));
      }, delay);
    });
  }

  static saveTimer(timer) {
    timer = Object.assign({}, timer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTimerNameLength = 3;
        if (timer.firstName.length < minTimerNameLength) {
          reject(`First Name must be at least ${minTimerNameLength} characters.`);
        }

        if (timer.lastName.length < minTimerNameLength) {
          reject(`Last Name must be at least ${minTimerNameLength} characters.`);
        }

        if (timer.id) {
          const existingTimerIndex = timers.findIndex(a => a.id == timer.id);
          timers.splice(existingTimerIndex, 1, timer);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new timers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          timer.id = generateId(timer);
          timers.push(timer);
        }

        resolve(timer);
      }, delay);
    });
  }

  static deleteTimer(timerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTimerToDelete = timers.findIndex(timer => {
          return timer.timerId == timerId;
        });
        timers.splice(indexOfTimerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default times;
