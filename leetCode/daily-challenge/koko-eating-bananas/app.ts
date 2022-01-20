function minEatingSpeed(piles: number[], h: number): number {
  function canEatAll(speed: number) {
    let time: number = 0;
    for (let p of piles) {
      time += Math.ceil(p / speed);
    }
    return time <= h;
  }

  let l: number = 0;
  let r: number = Math.max(...piles); // when the max speed = biggest pile, it only needs 1h to eat each pile
  while (l < r) {
    const m: number = Math.floor((l + r) / 2);
    if (!canEatAll(m)) l = m + 1;
    else r = m;
  }
  return l;
}

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
