// Longest Common Subsequence (LCS)
// by Richard Burd
// Homepage: https://richard-burd.github.io/
// This REPL will find the LCS for string1 & string2 below:

// enter your first sequence here:
const string1 = "rqvjtweyrztuyio";
// the first & last characters in this string are the first & last elements of
// the y-axis

// enter your second sequence here:
const string2 = "qzxwevrtbyrw";
// the first & last characters in this string are the first & last elements of
// the x-axis

// this is the master collection of "locations" that is ordered according to
// the locationOrder of their creation in createLocations() function below
let data = [];

// this iterates over the matrix and creates a location each time there is
// an element (character) in both string1 (y-axis) and string2 (x-axis)
const createLocations = (() => {
  let iterX = 0;

  for (elemX of string1) {
    let iterY = 0;
    iterX++;
    for (elemY of string2) { // this creates the locations with JSON
      if (elemX == elemY) {
        let locationConstructor = {
          locationOrder: data.length + 1,
          x: iterX,
          y: iterY+1,

          /*
          these 2 values below (descendants & descendantsOfDescendents) cannot be generated until all locations have been created by the function (we're currently inside of) because each location must have a "locationOrder" value that in turn is later used to find the "descendants" below.  NOTE: DESCENDENTS EXPLAINED: Assuming a subsequence of "asdf", the 'd' and 'f' are descendants of 's' and 'a' - likewise, 's', 'd', and 'f' are all descendants of 'a' and 'a' is the ancestor of the other three characters because any character to the right is a descendant of any character to its left whereas any character to the left is an ancestor of any character to its right
          */
          descendants: [], // populated in descendantsForThisLocation function
          descendantsOfDescendents: 1, // value created by totalChildCounts function

          // this is the character (number or letter) in the location that can
          // be found in both string1 & string2
          character:elemX
        }
        // this takes each new location and puts it in the data array
        data.push(locationConstructor)
      }
      iterY++;
    }
  }
})()

// This finds all descendants for the location passed into this function
function descendantsForThisLocation(location){
  for (elem of data) {
    if (
      elem.x > location.x
      &&
      elem.y > location.y
    )
    // descendants are tracked by pushing their locationOrder value into the
    // "descendants" array of the ancestor location.
    location.descendants.push(elem.locationOrder)
  }
  location.childCount = location.descendants.length
}

// this function below calls the function above; it iterates over each location
// in the matrix and asks each one to find its descendants by calling the
// above "descendantsForThisLocation()" function
const descendantsForAllLocations = (() => {
  for (elem of data) {
    descendantsForThisLocation(elem)
  }
})()

const totalChildCounts = (() => {
  for (let i = data.length - 1; i >= 0; i--){
    let cumulations = 0;
    for (elem of data[i].descendants) { // this cumulates the 'totalChidCount' values

      // larger input strings may require an even larger multiplier----> * 8
      cumulations = cumulations + (data[elem-1].descendantsOfDescendents * 8)
    }
    data[i].descendantsOfDescendents += cumulations
  }
})()

// this will hold the locations in locationOrder according their occurence in the longest
// common subsequence; each location is a JSON object
let sortedData = [];

function highestTotalChildrenCount(startPoint){
  let value = startPoint.sort( function ( a, b ) {
    return b.descendantsOfDescendents - a.descendantsOfDescendents;
  } );
  sortedData.push(value[0])
}

highestTotalChildrenCount(data)

function addToSortedData(location){
  let dataSubset = [];
  location = sortedData[sortedData.length-1]
  for (elem of location.descendants) {
    //console.log(elem);

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
  sortedData.pop(); // get rid of the undefined entry at the end of the array
}

makeSortedDataSet()

function main(){
  longestCommonSubsequence = [];
  for (elem of sortedData){
    //console.log(elem.character)
    longestCommonSubsequence.push(elem.character)
  }
  return longestCommonSubsequence.join('')
}

// The program calls the main function above to execute the code
// console.log(sortedData)
console.log(main())
