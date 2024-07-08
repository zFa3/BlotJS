/*
@title: 
@author: Jayden W
@snapshot: snapshot1.png
*/


// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

// x and y value for the bottom left corner of the card
const startingCorner = 15
const rad = 5

// width of the card
// measured in millimeters
const cardWidth = 43
// height of the card
const cardHeight = 59

// set dimensions
setDocDimensions(width, height);
// just push all polylines to this list
const finalLines = [];

// create a polyline
/*
const polyline = [
  [startingCorner, startingCorner],
  [startingCorner + cardWidth, startingCorner],
  [startingCorner + cardWidth, startingCorner + cardHeight],
  [startingCorner, startingCorner + cardHeight],
  [startingCorner, startingCorner],
];
*/

const line1 = [
    [startingCorner + rad, startingCorner],
    [startingCorner + cardWidth, startingCorner]
]

const line2 = [
    [startingCorner + rad, startingCorner + 2 * rad + cardHeight],
    [startingCorner + cardWidth, startingCorner + 2 * rad + cardHeight]
]

const line3 = [
    [startingCorner, startingCorner + rad],
    [startingCorner, startingCorner + rad + cardHeight]
]

const line4 = [
    [startingCorner + rad + cardWidth, startingCorner + rad],
    [startingCorner + rad + cardWidth, startingCorner + rad + cardHeight]
]

// add the polyline to the final lines
// create the card edges
finalLines.push(line1);
finalLines.push(line2);
finalLines.push(line3);
finalLines.push(line4);

// transform lines using the toolkit
// bt.rotate(finalLines, 45);

const curve1 = [
    [startingCorner + rad, startingCorner],
    [startingCorner, startingCorner],
    [startingCorner, startingCorner + rad],
]

finalLines.push(bt.nurbs(curve1))

const curve2 = [
    [startingCorner + cardWidth, startingCorner],
    [startingCorner + cardWidth + rad, startingCorner],
    [startingCorner + cardWidth + rad, startingCorner + rad]
]

finalLines.push(bt.nurbs(curve2))

const curve3 = [
    [startingCorner, startingCorner + rad + cardHeight],
    [startingCorner, startingCorner + 2 * rad + cardHeight],
    [startingCorner + rad, startingCorner + 2 * rad + cardHeight],
]

finalLines.push(bt.nurbs(curve3))

const curve4 = [
    [startingCorner + cardWidth, startingCorner + 2 * rad + cardHeight],
    [startingCorner + rad + cardWidth, startingCorner + 2 * rad + cardHeight],
    [startingCorner + rad + cardWidth, startingCorner + rad + cardHeight],
]

finalLines.push(bt.nurbs(curve4))

// draw it
drawLines(finalLines);
