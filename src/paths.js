
// Each of these is a circle where a truck can go on the board

// East Paths
var newport = {
    occupied: false,
    x: 383,
    y: 224,
    neighbours: []
}
var longBluePath7 = {
    occupied: false,
    x: 310,
    y: 215,
    neighbours: [newport]
}
var longBluePath6 = {
    occupied: false,
    x: 278,
    y: 220,
    neighbours: [longBluePath7]
}
var longBluePath5 = {
    occupied: false,
    x: 237,
    y: 219,
    neighbours: [longBluePath6]
}
var longBluePath4 = {
    occupied: false,
    x: 196,
    y: 224,
    neighbours: [longBluePath5]
}
var longBluePath3 = {
    occupied: false,
    x: 171,
    y: 230,
    neighbours: [longBluePath4]
}
var longBluePath2 = {
    occupied: false,
    x: 151,
    y: 240,
    neighbours: [longBluePath3]
}
var longBluePath1 = {
    occupied: false,
    x: 140,
    y: 266,
    neighbours: [longBluePath2]
}
var blueGreenPath4 = {
    occupied: false,
    x: 309,
    y: 231,
    neighbours: [newport]
}
var blueGreenPath3 = {
    occupied: false,
    x: 287,
    y: 254,
    neighbours: [blueGreenPath4]
}
var blueGreenPath2 = {
    occupied: false,
    x: 244,
    y: 265,
    neighbours: [blueGreenPath3]
}
var blueGreenPath1 = {
    occupied: false,
    x: 214,
    y: 287,
    neighbours: [blueGreenPath2]
}
var bluePath2 = {
    occupied: false,
    x: 153,
    y: 287,
    neighbours: [blueGreenPath1, longBluePath1]
}
var bluePath1 = {
    occupied: false,
    x: 142,
    y: 294,
    neighbours: [bluePath2]
}
var blueMine = {
    occupied: false,
    x: 115,
    y: 304,
    neighbours: [bluePath1]
}
var greenYellowPath4 = {
    occupied: false,
    x: 359,
    y: 248,
    neighbours: [newport]
}
var greenYellowPath3 = {
    occupied: false,
    x: 305,
    y: 270,
    neighbours: [greenYellowPath4]
}
var greenYellowPath2 = {
    occupied: false,
    x: 281,
    y: 287,
    neighbours: [greenYellowPath3]
}
var greenYellowPath1 = {
    occupied: false,
    x: 265,
    y: 302,
    neighbours: [greenYellowPath2]
}
var greenPath2 = {
    occupied: false,
    x: 217,
    y: 314,
    neighbours: [blueGreenPath1, greenYellowPath1]
}
var greenPath1 = {
    occupied: false,
    x: 192,
    y: 329,
    neighbours: [greenPath2]
}
var greenMine = {
    occupied: false,
    x: 165,
    y: 347,
    neighbours: [greenPath1]
}
var yellowPurplePath4 = {
    occupied: false,
    x: 381,
    y: 254,
    neighbours: [newport]
}
var yellowPurplePath3 = {
    occupied: false,
    x: 360,
    y: 275,
    neighbours: [yellowPurplePath4]
}
var yellowPurplePath2 = {
    occupied: false,
    x: 354,
    y: 298,
    neighbours: [yellowPurplePath3]
}
var yellowPurplePath1 = {
    occupied: false,
    x: 382,
    y: 311,
    neighbours: [yellowPurplePath2]
}
var yellowPath2 = {
    occupied: false,
    x: 302,
    y: 295,
    neighbours: [greenYellowPath1, yellowPurplePath1]
}
var yellowPath1 = {
    occupied: false,
    x: 302,
    y: 335,
    neighbours: [yellowPath2]
}
var yellowMine = {
    occupied: false,
    x: 305,
    y: 354,
    neighbours: [yellowPath1]
}

// East Side
var purpleRedPath4 = {
    occupied: false,
    x: 432,
    y: 243,
    neighbours: [newport]
}
var purpleRedPath3 = {
    occupied: false,
    x: 453,
    y: 276,
    neighbours: [purpleRedPath4]
}
var purpleRedPath2 = {
    occupied: false,
    x: 508,
    y: 287,
    neighbours: [purpleRedPath3]
}
var purpleRedPath1 = {
    occupied: false,
    x: 534,
    y: 309,
    neighbours: [purpleRedPath2]
}
var purplePath2 = {
    occupied: false,
    x: 498,
    y: 326,
    neighbours: [yellowPurplePath1, purpleRedPath1]
}
var purplePath1 = {
    occupied: false,
    x: 500,
    y: 341,
    neighbours: [purplePath2]
}
var purpleMine = {
    occupied: false,
    x: 507,
    y: 361,
    neighbours: [purplePath1]
}
var redPinkPath4 = {
    occupied: false,
    x: 451,
    y: 236,
    neighbours: [newport]
}
var redPinkPath3 = {
    occupied: false,
    x: 460,
    y: 255,
    neighbours: [redPinkPath4]
}
var redPinkPath2 = {
    occupied: false,
    x: 517,
    y: 262,
    neighbours: [redPinkPath3]
}
var redPinkPath1 = {
    occupied: false,
    x: 568,
    y: 277,
    neighbours: [redPinkPath2]
}
var redPath2 = {
    occupied: false,
    x: 572,
    y: 315,
    neighbours: [purpleRedPath1, redPinkPath1]
}
var redPath1 = {
    occupied: false,
    x: 596,
    y: 325,
    neighbours: [redPath2]
}
var redMine = {
    occupied: false,
    x: 634,
    y: 340,
    neighbours: [redPath1]
}
var pinkLongPath7 = {
    occupied: false,
    x: 451,
    y: 213,
    neighbours: [newport]
}
var pinkLongPath6 = {
    occupied: false,
    x: 479,
    y: 218,
    neighbours: [pinkLongPath7]
}
var pinkLongPath5 = {
    occupied: false,
    x: 503,
    y: 221,
    neighbours: [pinkLongPath6]
}
var pinkLongPath4 = {
    occupied: false,
    x: 541,
    y: 228,
    neighbours: [pinkLongPath5]
}
var pinkLongPath3 = {
    occupied: false,
    x: 561,
    y: 233,
    neighbours: [pinkLongPath4]
}
var pinkLongPath2 = {
    occupied: false,
    x: 561,
    y: 233,
    neighbours: [pinkLongPath3]
}
var pinkLongPath1 = {
    occupied: false,
    x: 593,
    y: 242,
    neighbours: [pinkLongPath2]
}
var pinkPath2 = {
    occupied: false,
    x: 600,
    y: 274,
    neighbours: [redPinkPath1, pinkLongPath1]
}
var pinkPath1 = {
    occupied: false,
    x: 619,
    y: 280,
    neighbours: [pinkPath2]
}
var pinkMine = {
    occupied: false,
    x: 657,
    y: 292,
    neighbours: [pinkPath1]
}