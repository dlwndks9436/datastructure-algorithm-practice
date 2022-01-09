function isRobotBounded(instructions: string): boolean {
  if (!instructions.includes("G")) return true;

  const directions: string[] = ["north", "east", "south", "west"];
  let indexOfCurrentDirection: number = 0;
  let currentX: number = 0;
  let currentY: number = 0;
  let offset: number | undefined;

  const action = (instruction: string) => {
    if (instruction === "L") {
      if (indexOfCurrentDirection === 0) {
        indexOfCurrentDirection = 3;
      } else {
        indexOfCurrentDirection = indexOfCurrentDirection - 1;
      }
    } else if (instruction === "R") {
      if (indexOfCurrentDirection === 3) {
        indexOfCurrentDirection = 0;
      } else {
        indexOfCurrentDirection = indexOfCurrentDirection + 1;
      }
    } else {
      if (directions[indexOfCurrentDirection] === "north") {
        currentY = currentY + 1;
      } else if (directions[indexOfCurrentDirection] === "east") {
        currentX = currentX + 1;
      } else if (directions[indexOfCurrentDirection] === "south") {
        currentY = currentY - 1;
      } else if (directions[indexOfCurrentDirection] === "west") {
        currentX = currentX - 1;
      } else {
        console.error("error");
      }
    }
  };

  while (true) {
    for (let i: number = 0; i < instructions.length; i++) {
      action(instructions[i]);
    }
    if (!offset) {
      offset = Math.abs(currentX) + Math.abs(currentY);
    } else {
      if (offset * 2 < Math.abs(currentX) + Math.abs(currentY)) return false;
    }
    if (
      currentX === 0 &&
      currentY === 0 &&
      directions[indexOfCurrentDirection] === "north"
    )
      return true;
  }
}

const instruction: string = "GL";
const output: boolean = isRobotBounded(instruction);
console.log(output);

// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:
// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.
// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

//  Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot moves north indefinitely.
// Example 3:

// Input: instructions = "GL"
// Output: true
// Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
