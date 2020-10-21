let data = [];
const string1 = "rqvjtweyrztuyio";
const string2 = "qzxwevrtbyrw";
iterX = 0;

for (elemX of string1) {
  let iterY = 0;
  iterX++;
  for (elemY of string2) {
    if (elemX == elemY) {
      let newMatch = {
        order: data.length + 1,
        x: iterX,
        y: iterY+1,
        character:elemX
      }
      data.push(newMatch)
    }
    iterY++;
  }
}

console.log(data)
