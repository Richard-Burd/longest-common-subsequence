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
let locations = [];

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
          locationOrder: locations.length + 1,
          x: iterX,
          y: iterY+1,

          /*
          these 2 values below (descendants & progenyCensus) cannot be generated until all locations have been created by the function (we're currently inside of) because each location must have a "locationOrder" value that in turn is later used to find the "descendants" below.  NOTE: DESCENDENTS EXPLAINED: Assuming a subsequence of "asdf", the 'd' and 'f' are descendants of 's' and 'a' - likewise, 's', 'd', and 'f' are all descendants of 'a' and 'a' is the ancestor of the other three characters because any character to the right is a descendant of any character to its left whereas any character to the left is an ancestor of any character to its right
          */
          descendants: [], // populated in descendantsForThisLocation function
          progenyCensus: 1, // value created by takeTheProgenyCensus function

          // this is the character (number or letter) in the location that can
          // be found in both string1 & string2
          character:elemX
        }
        // this takes each new location and puts it in the locations array
        locations.push(locationConstructor)
      }
      iterY++;
    }
  }
})();

// This finds all descendants for the location passed into this function
function descendantsForThisLocation(location){
  for (elem of locations) {
    if (
      elem.x > location.x
      &&
      elem.y > location.y
    )
    // descendants are tracked by pushing their locationOrder value into the
    // "descendants" array of the ancestor location.
    location.descendants.push(elem.locationOrder)
  }
}

// this function below calls the function above; it iterates over each location
// in the matrix and asks each one to find its descendants by calling the
// above "descendantsForThisLocation()" function
const descendantsForAllLocations = (() => {
  for (elem of locations) {
    descendantsForThisLocation(elem)
  }
})();

const takeTheProgenyCensus = (() => {
  for (let i = locations.length - 1; i >= 0; i--){ // here we are iterating backwards
    let cumulations = 0;
    for (elem of locations[i].descendants) { // this cumulates the 'totalChidCount' values

      // larger input strings may require an even larger multiplier that just 8
      cumulations = cumulations + (locations[elem-1].progenyCensus * 8)
    }
    locations[i].progenyCensus += cumulations
  }
})();

// this will hold the locations in locationOrder according their occurence in the longest
// common subsequence; each location is a JSON object
let sortedLocations = [];

// start with the location that has the highest progenyCensus value and only
// examine descendants of that location...it is the "alpha" location and thus,
// it is the first element in the longest common subsequence.
function highestProgenyCensusValue(locations){
  let value = locations.sort( function ( a, b ) {
    return b.progenyCensus - a.progenyCensus;
  } );
  sortedLocations.push(value[0])
};

highestProgenyCensusValue(locations)

// ...now that the "alpha" location with the highest progenyCensus value is
// alone in the sortedLocations array, go ahead and take all of the descendents of
// that "alpha" location and repeat the process; the result will be the "beta"
// location, or the second character in the longest common subsequence.
function addToSortedLocations(location){
  let locationsSubset = [];
  location = sortedLocations[sortedLocations.length-1]
  for (elem of location.descendants) {
    let result = locations.filter(obj => {
      return obj.locationOrder == elem
    });
    for (locationObject of result) {
      locationsSubset.push(locationObject);
    }
  }
  highestProgenyCensusValue(locationsSubset)
};

const makeSortedLocationsSet = (() => {
  while (true) {
    addToSortedLocations()
    if (sortedLocations[sortedLocations.length-1] == undefined) {
        break;
    }
  }
  sortedLocations.pop(); // get rid of the undefined entry at the end of the array
})();

function main(){
  longestCommonSubsequence = [];
  for (elem of sortedLocations){
    //console.log(elem.character)
    longestCommonSubsequence.push(elem.character)
  }
  return longestCommonSubsequence.join('')
}

// The program calls the main function above to execute the code
// console.log(sortedLocations)
console.log(main())
