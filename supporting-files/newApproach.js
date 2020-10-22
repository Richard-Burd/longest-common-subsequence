// Available here:
// https://repl.it/@Richard_Burd/Longest-Common-Subsequence#index.js

// Longest Common Subsequence (LCS)
// by Richard Burd
// Homepage: https://richard-burd.github.io/
// This REPL will find the LCS for string1 & string2 below:

const string1 =
"rqvjtweyrztuyio";
const string2 =
"qzxwevrtbyrw";
// give it a try :)

// graphic used to make this program
// https://i.imgur.com/25HvbPV.jpg

/*
This algorithm differs from the traditional LCS solutions in that it takes the number of possible locations that are downstream in the sequence (children) and adds those numbers to the parent's count of possible children to a compounded value called "totalChildrenCount" - this is an experimental approach that limits the number of sequences you need to recursively investigate in order to find the LCS because you can find the location with the highest "totalChildrenCount" and then in turn go to its next possible child with the highest "totalChildrenCount" value.  Feel free to try & break this algorithm; you cannot save anything to this REPL so it will refresh as I left it.
*/

let data = [];


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
        children: [],
        childCount: 0,
        totalChildrenCount: 0,
        character:elemX
      }
      data.push(newMatch)
    }
    iterY++;
  }
}

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

function allChildData(){
  for (elem of data) {
    singleChildData(elem)
  }
}

allChildData()

function totalDescendantCounts(){
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

      cumulations += data[elem-1].totalChildrenCount
    }
    data[i].totalChildrenCount += cumulations
    //console.log(`childCount: ${data[i].childCount}`)
    //console.log("\n")
  }
}

totalDescendantCounts()

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
  sortedData.pop(); // get rid of the undefined entry
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

console.log(main())
// console.log(data)
