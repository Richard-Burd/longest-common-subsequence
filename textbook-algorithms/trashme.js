const string1 = "rqvjtweyrztuyio";
const string2 = "qzxwevrtbyrw";

let data = [];

const createLocations = (() => {
  let iterX = 0;

  for (elemX of string1) {
    let iterY = 0;
    iterX++;
    for (elemY of string2) {
      if (elemX == elemY) {
        let locationConstructor = {
          locationOrder: data.length + 1,
          x: iterX,
          y: iterY+1,
          descendants: [],
          descendantsOfDescendants: 1,
          character:elemX
        }
        data.push(locationConstructor)
      }
      iterY++;
    }
  }
})()

function descendantsForThisLocation(location){
  for (elem of data) {
    if (
      elem.x > location.x
      &&
      elem.y > location.y
    )
    location.descendants.push(elem.locationOrder)
  }
  location.childCount = location.descendants.length
}

const descendantsForAllLocations = (() => {
  for (elem of data) {
    descendantsForThisLocation(elem)
  }
})()

const totalDescendantCounts = (() => {
  for (let i = data.length - 1; i >= 0; i--){
    let cumulations = 0;
    for (elem of data[i].descendants) {
      cumulations = cumulations + (data[elem-1].descendantsOfDescendants * 8)
    }
    data[i].descendantsOfDescendants += cumulations
  }
})()

let sortedData = [];

function highestTotalChildrenCount(startPoint){
  let value = startPoint.sort( function ( a, b ) {
    return b.descendantsOfDescendants - a.descendantsOfDescendants;
  } );
  sortedData.push(value[0])
}

highestTotalChildrenCount(data)

function addToSortedData(location){
  let dataSubset = [];
  location = sortedData[sortedData.length-1]
  for (elem of location.descendants) {
    let result = data.filter(obj => {
      return obj.locationOrder == elem
    })
    for (thing of result) {
      dataSubset.push(thing);
    }
  }
  highestTotalChildrenCount(dataSubset)
};

function makeSortedDataSet(){
  while (true) {
    addToSortedData()
    if (sortedData[sortedData.length-1] == undefined) {
        break;
    }
  }
  sortedData.pop();
}

makeSortedDataSet()

function main(){
  longestCommonSubsequence = [];
  for (elem of sortedData){
    longestCommonSubsequence.push(elem.character)
  }
  return longestCommonSubsequence.join('')
}
console.log(main())
