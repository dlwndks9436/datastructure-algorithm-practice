function reverseWords(s: string): string {
  let storage: string[] = s.split(" ");
  let result: string = "";

  for (let i: number = 0; i < storage.length; i++) {
    for (let j: number = 0; j < storage[i].length; j++) {
      result += storage[i][storage[i].length - 1 - j];
    }
    if (storage[i + 1]) {
      result += " ";
    }
  }
  return result;
}

const input = "Let's take LeetCode contest";
const result = reverseWords(input);
console.log(result);

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
