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
const startingCorner = 25
const rad = 5
// the ratio between the height and the width
// of normal playing cards approximates the golden ratio
const phi = 1.6180339887

// width of the card
// measured in millimeters
const cardWidth = 64
// height of the card
const cardHeight = Number(cardWidth * phi)

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

// add the polyline to the final lines
finalLines.push(line1);
finalLines.push(line2);
//finalLines.push(line3);
//finalLines.push(line4);

// transform lines using the toolkit
// bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
