class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    const addChar = (node: TrieNode, parentOfChar: string | null) => {
      let char: string;
      if (!parentOfChar) {
        node.isEnd = true;
        return;
      } else {
        char = parentOfChar[0];
      }
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      addChar(node.children.get(char)!, parentOfChar.substring(1));
    };
    addChar(this.root, word);
  }

  search(word: string): boolean {
    const searchChar = (
      node: TrieNode,
      parentOfChar: string | null
    ): boolean => {
      let char: string;
      if (!node) return false;
      if (!parentOfChar) {
        if (node.isEnd === true) return true;
        else return false;
      } else {
        char = parentOfChar[0];
        if (char === ".") {
          let result: boolean = false;
          for (const child of node.children.keys()) {
            result =
              result ||
              searchChar(node.children.get(child)!, parentOfChar.substring(1));
          }
          return result;
        } else if (node.children.has(char)) {
          return searchChar(
            node.children.get(char)!,
            parentOfChar.substring(1)
          );
        } else {
          return false;
        }
      }
    };
    return searchChar(this.root, word);
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("an");
wordDictionary.addWord("add");
wordDictionary.addWord("bat");
console.log(wordDictionary.search("."));

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
