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
// the order of their creation in createLocations() below
let data = [];

// this iterates over the matrix and creates a location each time ther is a
// an element (character) in both string1 (y-axis) and string2 (x-axis)
const createLocations = (() => {
  let iterX = 0;

  for (elemX of string1) {
    let iterY = 0;
    iterX++;
    for (elemY of string2) {
      if (elemX == elemY) {
        let newMatch = {
          order: data.length + 1,
          x: iterX,
          y: iterY+1,

          // these 3 values cannot be generated until all locations have been
          // created by this function because they rely on the values above
          children: [], // populated in singleChildData function
          childCount: 0, // value created by totalChildCounts function
          totalChildrenCount: 0, // value created by totalChildCounts function

          // this is the character (number or letter) in the location that can
          // be found in both string1 & string2
          character:elemX
        }
        data.push(newMatch)
      }
      iterY++;
    }
  }
})()

function singleChildData(location){
  for (elem of data) {
    if (
      elem.x > location.x
      &&
      elem.y > location.y
    )
    location.children.push(elem.order)
  }
  location.childCount = location.children.length
}

// this function below calls the function above
const allChildData = (() => {
  for (elem of data) {
    singleChildData(elem)
  }
})()

const totalChildCounts = (() => {
  for (let i = data.length - 1; i >= 0; i--){
    //console.log( `Order: ${data[i].order}`)
    //console.log( `Children: ${data[i].childCount}`)
    data[i].childCount = data[i].children.length
    data[i].totalChildrenCount = data[i].childCount
    let cumulations = 0;
    // this cumulates the 'totalChidCount' values
    for (elem of data[i].children) {
      //console.log(elem)
      //console.log(`Data location: ${data[elem-1].order}`)

      // this is the original algorithm I started with:
      // cumulations += data[elem-1].totalChildrenCount

      // after looking at discrepancies between the outputs produced by my
      // code and the textbook dynamicProgrammingLCS solution available here:
      // https://rosettacode.org/wiki/Longest_common_subsequence#JavaScript
      // I noticed that making the following change gave this algorithm the
      // same result as the aforementioned textbook algorithm with this data set:
      // string1 = "zpeolgihjyxcrhelginh"
      // string2 = "qcvjtixcroplighigopleichdjkeup"
      // the correct answer is: "ixcrlgih"
      // but my algorithm produces: "plgiche" without this-------->* 4
      cumulations = cumulations + (data[elem-1].totalChildrenCount * 4)
    }
    data[i].totalChildrenCount += cumulations
    //console.log(`childCount: ${data[i].childCount}`)
    //console.log("\n")
  }
})()

// this will hold the locations in order of their occurence in the longest
// common subsequence; each location is a JSON object
let sortedData = [];

function highestTotalChildrenCount(startPoint){
  let value = startPoint.sort( function ( a, b ) {
    return b.totalChildrenCount - a.totalChildrenCount;
  } );
  sortedData.push(value[0])
}

highestTotalChildrenCount(data)

function addToSortedData(location){
  let dataSubset = [];
  location = sortedData[sortedData.length-1]
  for (elem of location.children) {
    //console.log(elem);

    let result = data.filter(obj => {
      return obj.order == elem
    })
    for (thing of result) {
      dataSubset.push(thing);
    }
  }
  highestTotalChildrenCount(dataSubset)
  //console.log(dataSubset);
  //console.log(data[0])
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
console.log(main())
// console.log(data)
