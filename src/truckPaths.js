
// Each of these is a circle where a truck can go on the board

// East Paths
var westNewport = {
    occupied: false,
    x: 346,
    y: 231,
    neighbours: []
}
var eastNewport = {
    occupied: false,
    x: 426,
    y: 224,
    neighbours: []
}
var westNewportPath = {
    occupied: false,
    x: 328,
    y: 182,
    neighbours: [westNewport]
}
var eastNewportPath = {
    occupied: false,
    x: 417,
    y: 178,
    neighbours: [eastNewport]
}
var northPath = {
    occupied: false,
    x: 369,
    y: 114,
    neighbours: [westNewportPath, eastNewportPath]
}
var southWestPath6 = {
    occupied: false,
    x: 296,
    y: 215,
    neighbours: [westNewportPath]
}
var southWestPath5 = {
    occupied: false,
    x: 290,
    y: 258,
    neighbours: [southWestPath6]
}
var southWestPath4 = {
    occupied: false,
    x: 242, 
    y: 270,
    neighbours: [southWestPath5]
}
var southWestPath3 = {
    occupied: false,
    x: 239,
    y: 305,
    neighbours: [southWestPath4]
}
var southWestPath2 = {
    occupied: false,
    x: 188,
    y: 326,
    neighbours: [southWestPath3]
}
var southWestPath1 = {
    occupied: false,
    x: 130,
    y: 309,
    neighbours: [southWestPath2]
}
// 130, 309 ->
// 188, 326 ->
// 239, 305 
var northWestPath = {
    occupied: false,
    x: 271,
    y: 123,
    neighbours: [northPath]
}
var westPath2 = {
    occupied: false,
    x: 261,
    y: 220,
    neighbours: [southWestPath4, northWestPath]
}
var westPath1 = {
    occupied: false,
    x: 169,
    y: 238,
    neighbours: [northWestPath, westPath2]
}
var whitePath2 = {
    occupied: false,
    x: 171,
    y: 148,
    neighbours: [westPath1, southWestPath1]
}
var whitePath1 = {
    occupied: false,
    x: 147,
    y: 102,
    neighbours: [whitePath2]
}
var whiteMine = {
    occupied: false,
    x: 174,
    y: 48,
    neighbours: [whitePath1]
}
var greenPath2 = {
    occupied: false,
    x: 139,
    y: 170,
    neighbours: [westPath1, southWestPath1]
}
var greenPath1 = {
    occupied: false,
    x: 109,
    y: 131,
    neighbours: [greenPath2]
}
var greenMine = {
    occupied: false,
    x: 51,
    y: 148,
    neighbours: [greenPath1]
}
var purplePath2 = {
    occupied: false,
    x: 115,
    y: 229,
    neighbours: [westPath1, southWestPath1]
}
var purplePath1 = {
    occupied: false,
    x: 67,
    y: 256,
    neighbours: [purplePath2]
}
var purpleMine = {
    occupied: false,
    x: 61,
    y: 322,
    neighbours: [purplePath1]
}

// East Side
var eastSouthPath3 = {
    occupied: false,
    x: 519,
    y: 299,
    neighbours: [eastSouthPath3]
}
var eastSouthPath2 = {
    occupied: false,
    x: 573,
    y: 298,
    neighbours: []
}
var eastSouthPath1 = {
    occupied: false,
    x: 547,
    y: 248,
    neighbours: [eastSouthPath2]
}
var eastSouthPath3 = {
    occupied: false,
    x: 645,
    y: 306,
    neighbours: []
}
var redPath2 = {
    occupied: false,
    x: 637,
    y: 197,
    neighbours: []
}
var redPath1 = {
    occupied: false,
    x: 696,
    y: 222,
    neighbours: [redPath2]
}
var redMine = {
    occupied: false,
    x: 709,
    y: 276,
    neighbours: [redPath1]
}
var bluePath2 = {
    occupied: false,
    x: 623,
    y: 124,
    neighbours: []
}
var bluePath1 = {
    occupied: false,
    x: 673,
    y: 83,
    neighbours: [bluePath2]
}
var blueMine = {
    occupied: false,
    x: 738,
    y: 119,
    neighbours: [bluePath1]
}
var yellowPath2 = {
    occupied: false,
    x: 553,
    y: 127,
    neighbours: []
}
var yellowPath1 = {
    occupied: false,
    x: 564,
    y: 69,
    neighbours: [yellowPath2]
}
var yellowMine = {
    occupied: false,
    x: 542,
    y: 57,
    neighbours: [yellowPath1]
}