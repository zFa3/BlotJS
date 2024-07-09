/*
@title: 
@author: Jayden W
@snapshot: snapshot1.png
*/


// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 160;

// x and y value for the bottom left corner of the card
const startingCorner = 29
const rad = 6

// width of the card
// measured in millimeters
const cardWidth = 43
// height of the card
const cardHeight = 59

// set dimensions
setDocDimensions(width, height);
// just push all polylines to this list
const finalLines = [];

const bladeLen = 2.9 / 10 // measured in cm
const hiltLength = 1.1 / 10 // measured in cm


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



const sword = [
    // create the blade
    [startingCorner + 2.25 * rad, startingCorner + 3 * rad + bladeLen * cardHeight],
    [startingCorner + 2.25 * rad, startingCorner + 3 * rad],
    [startingCorner + 2 * rad, startingCorner + 2 * rad],
    [startingCorner + 1.75 * rad, startingCorner + 3 * rad],
    [startingCorner + 1.75 * rad, startingCorner + 3 * rad + bladeLen * cardHeight],
]

const hilt = [
    // create the hilt
    [startingCorner + 1.5 * rad, startingCorner + 3 * rad + bladeLen * cardHeight],
    [startingCorner + 2.5 * rad, startingCorner + 3 * rad + bladeLen * cardHeight],
    [startingCorner + 2.5 * rad, startingCorner + 3 * rad + (bladeLen + 0.02) * cardHeight],
    [startingCorner + 2.15 * rad, startingCorner + 3 * rad + (bladeLen + 0.02) * cardHeight],
    [startingCorner + 2.15 * rad, startingCorner + 3 * rad + (bladeLen + hiltLength) * cardHeight],
    [startingCorner + 1.85 * rad, startingCorner + 3 * rad + (bladeLen + hiltLength) * cardHeight],
    [startingCorner + 1.85 * rad, startingCorner + 3 * rad + (bladeLen + 0.02) * cardHeight],
    [startingCorner + 1.5 * rad, startingCorner + 3 * rad + (bladeLen + 0.02) * cardHeight],
    [startingCorner + 1.5 * rad, startingCorner + 3 * rad + bladeLen * cardHeight],
]

finalLines.push(sword, hilt)

/////////////////////////////////////////////////////////
//               Create the Outer Lines                //
/////////////////////////////////////////////////////////

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
// Push all the lines onto the finalLines stack
finalLines.push(line1, line2, line3, line4)


/////////////////////////////////////////////////////////
//               Create the Inner Lines                //
/////////////////////////////////////////////////////////

const poly1 = [
    [startingCorner + rad, startingCorner + rad],
    [startingCorner + cardWidth, startingCorner + rad]
]

const poly2 = [
    [startingCorner + rad, startingCorner + rad + cardHeight],
    [startingCorner + cardWidth, startingCorner + rad + cardHeight]
]

const poly3 = [
    [startingCorner + rad, startingCorner + rad],
    [startingCorner + rad, startingCorner + cardHeight + rad]
]

const poly4 = [
    [startingCorner + cardWidth, startingCorner + rad],
    [startingCorner + cardWidth, startingCorner + rad + cardHeight]
]

// add the polyline to the final lines
// create the card edges
// Push all the lines onto the finalLines stack
finalLines.push(poly1, poly2, poly3, poly4)

const curve1 = [
    [startingCorner + rad, startingCorner],
    [startingCorner, startingCorner],
    [startingCorner, startingCorner + rad],
]

const curve2 = [
    [startingCorner + cardWidth, startingCorner],
    [startingCorner + cardWidth + rad, startingCorner],
    [startingCorner + cardWidth + rad, startingCorner + rad]
]

const curve3 = [
    [startingCorner, startingCorner + rad + cardHeight],
    [startingCorner, startingCorner + 2 * rad + cardHeight],
    [startingCorner + rad, startingCorner + 2 * rad + cardHeight],
]

const curve4 = [
    [startingCorner + cardWidth, startingCorner + 2 * rad + cardHeight],
    [startingCorner + rad + cardWidth, startingCorner + 2 * rad + cardHeight],
    [startingCorner + rad + cardWidth, startingCorner + rad + cardHeight],
]

// Push all the lines onto the finalLines stack
finalLines.push(bt.nurbs(curve1), bt.nurbs(curve2), bt.nurbs(curve3), bt.nurbs(curve4))

// draw first set
drawLines(finalLines);

// rotate lines using the toolkit
bt.rotate(finalLines, 180);

// draw flipped, 
drawLines(finalLines);
