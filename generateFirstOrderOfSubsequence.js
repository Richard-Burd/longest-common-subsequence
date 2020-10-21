// This looping body generates the first possible subsequence in the matrix

let data = [
  { order: 1, x: 1, y: 7, character: 'r' },
  { order: 2, x: 1, y: 11, character: 'r' },
  { order: 3, x: 2, y: 1, character: 'q' },
  { order: 4, x: 3, y: 6, character: 'v' },
  { order: 5, x: 5, y: 8, character: 't' },
  { order: 6, x: 6, y: 4, character: 'w' },
  { order: 7, x: 6, y: 12, character: 'w' },
  { order: 8, x: 7, y: 5, character: 'e' },
  { order: 9, x: 8, y: 10, character: 'y' },
  { order: 10, x: 9, y: 7, character: 'r' },
  { order: 11, x: 9, y: 11, character: 'r' },
  { order: 12, x: 10, y: 2, character: 'z' },
  { order: 13, x: 11, y: 8, character: 't' },
  { order: 14, x: 13, y: 10, character: 'y' }
]

let sequence = []

let baseLocation = data[0];

// let's push the first location into the sequence
sequence.push(baseLocation)


for (elem of data) {
  if (
    elem.x > sequence[sequence.length-1].x
    &&
    elem.y > sequence[sequence.length-1].y
  ){
    sequence.push(elem)
  }
}

console.log(sequence)

// This is the output:
/*
[
  { order: 1, x: 1, y: 7, character: 'r' },
  { order: 5, x: 5, y: 8, character: 't' },
  { order: 7, x: 6, y: 12, character: 'w' }
]
*/
