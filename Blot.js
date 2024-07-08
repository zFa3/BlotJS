// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create a polyline
const polyline = [
  [0, 0],
  [width * 0.25, height * 0.25]
];

// add the polyline to the final lines
finalLines.push(polyline);

// transform lines using the toolkit
// bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
