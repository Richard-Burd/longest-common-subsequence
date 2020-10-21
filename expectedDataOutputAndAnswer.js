// all valid sequences will go in here
// the final equation will search this array to see which one
// has the largest subsequence
let sequenceList = [
  [ // Path - (1)
    { order: 1, x: 1, y: 7, character: 'r' },
    { order: 5, x: 5, y: 8, character: 't' },
    { order: 7, x: 6, y: 12, character: 'w' }
  ],
  [ // Path - (2)
    { order: 1, x: 1, y: 7, character: 'r' },
    { order: 5, x: 5, y: 8, character: 't' },
    { order: 9, x: 8, y: 10, character: 'y' },
    { order: 11, x: 9, y: 11, character: 'r' }
  ],
  [ // Path - (3)
    { order: 1, x: 1, y: 7, character: 'r' },
    { order: 13, x: 11, y: 8, character: 't' },
    { order: 14, x: 13, y: 10, character: 'y' }
  ],
  [ // Path - (4)
    { order: 2, x: 1, y: 11, character: 'r' },
    { order: 7, x: 6, y: 12, character: 'w' }
  ],
  [ // Path - (5)
    { order: 3, x: 2, y: 1, character: 'q' },
    { order: 4, x: 3, y: 6, character: 'v' },
    { order: 5, x: 5, y: 8, character: 't' },
    { order: 7, x: 6, y: 12, character: 'w' },

  ],
  [ // Path - (6)
    { order: 3, x: 2, y: 1, character: 'q' },
    { order: 4, x: 3, y: 6, character: 'v' },
    { order: 5, x: 5, y: 8, character: 't' },
    { order: 9, x: 8, y: 10, character: 'y' },
    { order: 11, x: 9, y: 11, character: 'r' }
  ],
  [ // Path - (7)
    { order: 4, x: 3, y: 6, character: 'v' },
    { order: 10, x: 9, y: 7, character: 'r' },
    { order: 13, x: 11, y: 8, character: 't' },
    { order: 14, x: 13, y: 10, character: 'y' }
  ],
  [ // Path - (8)
    { order: 3, x: 2, y: 1, character: 'q' },
    { order: 6, x: 6, y: 4, character: 'w' },
    { order: 8, x: 7, y: 5, character: 'e' },
    { order: 9, x: 8, y: 10, character: 'y' },
    { order: 11, x: 9, y: 11, character: 'r' }
  ],
  [ // Path - (9)
    { order: 3, x: 2, y: 1, character: 'q' },
    { order: 6, x: 6, y: 4, character: 'w' },
    { order: 8, x: 7, y: 5, character: 'e' },
    { order: 10, x: 9, y: 7, character: 'r' },
    { order: 13, x: 11, y: 8, character: 't' },
    { order: 14, x: 13, y: 10, character: 'y' }
  ],
  [ // Path - (10)
    { order: 3, x: 2, y: 1, character: 'q' },
    { order: 12, x: 10, y: 2, character: 'z' },
    { order: 13, x: 11, y: 8, character: 't' },
    { order: 14, x: 13, y: 10, character: 'y' }
  ]

]

// find the length of the largest array like this:
Math.max(...sequenceList.map(el => el.length));

// return the longest subsequence in sequenceList:
var longestSubsequence = sequenceList.reduce(function (a, b) { return a.length > b.length ? a : b; });

console.log(longestSubsequence)

// now let's iterate over the actual subsequence and
// create an array that we can send to the user:
let longestSubsequenceArray = [];

for (let elem of longestSubsequence) {
  longestSubsequenceArray.push(elem.character);
}

let longestSubsequenceString = longestSubsequenceArray.join("");

console.log(`The longest common subsequence is: "${longestSubsequenceString}"`)
