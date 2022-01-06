function carPooling(trips: number[][], capacity: number): boolean {
  let destination: number = 0;
  const schedule: { [index: number]: [pickUp: number, drop: number] } = {};
  let loaded: number = 0;

  for (let i: number = 0; i < trips.length; i++) {
    if (trips[i][2] > destination) destination = trips[i][2];
    if (!schedule[trips[i][1]]) {
      schedule[trips[i][1]] = [0, 0];
    }
    if (!schedule[trips[i][2]]) {
      schedule[trips[i][2]] = [0, 0];
    }
    schedule[trips[i][1]][0] += trips[i][0];
    schedule[trips[i][2]][1] += trips[i][0];
  }

  for (const index in schedule) {
    if (schedule[index][1]) {
      loaded -= schedule[index][1];
    }
    if (schedule[index][0]) {
      loaded += schedule[index][0];
      if (loaded > capacity) return false;
    }
  }

  return true;
}

const trips: number[][] = [
  [3, 2, 8],
  [4, 4, 6],
  [10, 8, 9],
];
const capacity: number = 11;

const output: boolean = carPooling(trips, capacity);
console.log(output);

// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).
// You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.
// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

// Example 1:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 4
// Output: false

// Example 2:

// Input: trips = [[2,1,5],[3,3,7]], capacity = 5
// Output: true
