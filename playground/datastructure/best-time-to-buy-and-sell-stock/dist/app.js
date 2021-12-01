"use strict";
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1] && prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
        else if (prices[i] < prices[i - 1] && prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maxProfit;
}
const result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
//# sourceMappingURL=app.js.map