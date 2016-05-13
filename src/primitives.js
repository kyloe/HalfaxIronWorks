// Only objects here from now on

// Math.PI/2 = Lugs West
// Math.PI = Lugs South
// 3*Math.PI/2 = Lugs East
// 0 = Lugs North

var EAST = 0;
var SOUTH = 3 * Math.PI / 2;
var NORTH = Math.PI / 2;
var WEST = Math.PI;

function createLuggedLine(di, ao, pos, length,
		minSpacing, minObjects, orientation, lugHoleDiameter, lugWidth,
		lugHoleOffset)
	{

	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North

	// Calculate the number of lugs

	// based on orientation - work out what the far end of the line is

	// For each lug
	// plot lug and if not last lug - join with a line

	var lugCount = calcWeldTabCount(length, minSpacing, minObjects);

	var joinerOffset;
	var lastPoint;

	if (lugCount == 1)
		{

		// Special case - centre the lug
		var l = length / 2 - lugWidth / 2;

		if (orientation == EAST)
			{ // if the orientation East/West {
			joinerOffset = new RVector(l, 0);
			}
		else if (orientation == NORTH)
			{
			joinerOffset = new RVector(0, l);
			}
		else if (orientation == WEST)
			{
			joinerOffset = new RVector(-l, 0);
			}
		else
			// SOUTH
			{
			joinerOffset = new RVector(0, -l);
			}

		var lugStart = line(di, ao, pos, pos
				.operator_add(joinerOffset));

		var lastLineStart = createMountingLug(di, ao,
				lugStart, orientation, lugHoleDiameter, lugWidth, lugHoleOffset);

		lastPoint = line(di, ao, lastLineStart,
				lastLineStart.operator_add(joinerOffset));

		}
	else
		{

		var l = (length - lugWidth) / (lugCount - 1) - lugWidth;

		if (orientation == EAST)
			{ // if the orientation East/West {
			joinerOffset = new RVector(l, 0);
			}
		else if (orientation == NORTH)
			{
			joinerOffset = new RVector(0, l);
			}
		else if (orientation == WEST)
			{
			joinerOffset = new RVector(-l, 0);
			}
		else
			// SOUTH
			{
			joinerOffset = new RVector(0, -l);
			}

		// create lug one
		var lugStart;
		var lineStart = createMountingLug(di, ao, pos,
				orientation, lugHoleDiameter, lugWidth, lugHoleOffset);

		for (var i = 0; i < lugCount - 1; i++)
			{
			// plot lugs and joining lines
			lugStart = line(di, ao, lineStart,
					lineStart.operator_add(joinerOffset));
			lineStart = createMountingLug(di, ao,
					lugStart, orientation, lugHoleDiameter, lugWidth,
					lugHoleOffset);
			}

		lastPoint = lineStart;
		}

	return lastPoint;
	}

function createSidebar(di, ao, pos, sidebarHeight, sidebarWidth,
		mountingLugInset, mountingLugMinSpacing, weldLugInset, weldLugWidth,
		weldLugDepth, weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter,
		lugWidth, lugHoleOffset, insetStartTab, insetEndTab, suppressTop,
		mirror)
	{
	// ********************************************************************************************************************
	//
	// Sidebars
	//
	// ********************************************************************************************************************

	var v;
	if (suppressTop === 'undefined')
		{
		suppressTop = false;
		}

	v = line(di, ao, pos, pos.operator_add(new RVector(-1 * sidebarWidth, 0)));
	v = line(di, ao, v, v.operator_add(new RVector(0, mountingLugInset)));
	v = createLuggedLine(di, ao, v, sidebarHeight - 2 * mountingLugInset,
			mountingLugMinSpacing, 1, NORTH, lugHoleDiameter, lugWidth,
			lugHoleOffset);
	v = line(di, ao, v, v.operator_add(new RVector(0, mountingLugInset)));
	if (!suppressTop)
		{
		v = line(di, ao, v, v.operator_add(new RVector(sidebarWidth, 0)));
		}
	else
		{
		v = v.operator_add(new RVector(sidebarWidth, 0));
		}

	var tabLength = sidebarHeight;

	var endPos = v;

	var startPos = v.operator_add(new RVector(0, -sidebarHeight));

	var tabLine = new WeldTabbedLine(startPos, endPos, insetStartTab,
			insetEndTab);
	tabLine.setMirror(mirror);
	tabLine.render(di, ao);

	//	
	// v = createTabbedLine(di, ao, v, tabLength, weldLugMinSpacing,
	// weldLugMaxSpacing, SOUTH, weldLugWidth, weldLugDepth);

	if (insetEndTab)
		{
		v = line(di, ao, v, v.operator_add(new RVector(0, -weldLugInset)));
		}
	}


function createMountingLug(di, ao, pos, angle,
		lugHoleDiameter, lugWidth, lugHoleOffset)
	{
	// Creates one mounting lug, slope sided tab with round end and concentric
	// hole
	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset
	var v1 = new RVector(0, 0);
	var v2 = new RVector(lugWidth / 4, lugHoleOffset * 1.155);
	var v3 = new RVector(3 * lugWidth / 4, lugHoleOffset * 1.155);
	var v4 = new RVector(lugWidth, 0);
	var v5 = new RVector(lugHoleOffset, lugHoleOffset);

	// var root = pos.operator_add(new RVector(FullFrameSet.lugWidth/2,0));
	var root = pos;

	v1 = v1.operator_add(root);
	v2 = v2.operator_add(root);
	v3 = v3.operator_add(root);
	v4 = v4.operator_add(root);
	v5 = v5.operator_add(root);

	// No point rotating v1 round itself
	v2 = v2.rotate(angle, v1);
	v3 = v3.rotate(angle, v1);
	v4 = v4.rotate(angle, v1);
	v5 = v5.rotate(angle, v1);

	var lineData = new RLineData(v1, v2);
	var line = new RLineEntity(di.getDocument(), lineData);
	ao.addObject(line, false);

	var lineData2 = new RLineData(v3, v4);
	var line2 = new RLineEntity(di.getDocument(), lineData2);
	ao.addObject(line2, false);

	createHole(di, ao, v5, lugHoleDiameter);

	var arc = RArc.createFrom2PBulge(v2, v3, -0.89);
	var arcData = new RArcData(arc);
	var arcEnt = new RArcEntity(di.getDocument(), arcData);

	ao.addObject(arcEnt, false);

	return v4; // start point for next object

	}

function createPolyLine(di, ao, vectors)
	{
	//
	// Given an array of vectors ... join the dots (do not close the shape)
	//
	for (var i = 0; i < vectors.length - 1; i++)
		{
		var v1 = vectors[i];
		var v2 = vectors[(i + 1)];
		var lineData = new RLineData(v1, v2);
		var line = new RLineEntity(di.getDocument(), lineData);
		ao.addObject(line, false);
		}
	}

function calcWeldTabCount(length, minSpacing, minLugs)
	{
	//
	// Work out how many wel tabs to place on a bar
	//
	var segCount = (length - (length % minSpacing)) / minSpacing;
	var lugCount = segCount + 1;

	if (lugCount < minLugs)
		{
		return minLugs;
		}
	else
		{
		return lugCount;
		}

	}

function createTabbedLine(di, ao, pos, length,
		minSpacing, maxSpacing, orientation, weldLugWidth, weldLugDepth)
	{
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North

	// Calculate the number of lugs

	// based on orientation - work out what the far end of the line is

	// For each lug
	// plot lug and if not last lug - join with a line

	// var count = FullFrameSet.calculateSpacing(minSpacing,maxSpacing,length);
	var count = calcWeldTabCount(length, minSpacing, 1);

	var joinerOffset;
	var lastPoint;

	var l = (length - weldLugWidth) / count - weldLugWidth;

	if (orientation == 0)
		{ // if the orientation East/West {
		joinerOffset = new RVector(l, 0);
		}
	else if (orientation == Math.PI / 2)
		{
		joinerOffset = new RVector(0, l);
		}
	else if (orientation == Math.PI)
		{
		joinerOffset = new RVector(-l, 0);
		}
	else
		{
		joinerOffset = new RVector(0, -l);
		}

	// create lug one
	var lugStart;
	var lineStart = createWeldLug(di, ao, pos,
			weldLugWidth, weldLugDepth, orientation);

	for (var i = 0; i < count; i++)
		{
		// plot lugs and joining lines
		lugStart = line(di, ao, lineStart, lineStart
				.operator_add(joinerOffset));
		lineStart = createWeldLug(di, ao, lugStart,
				weldLugWidth, weldLugDepth, orientation);
		}

	return lineStart;
	}

function createWeldLug(di, ao, pos, weldLugWidth,
		weldLugDepth, orientation)
	{
	v2 = pos.operator_add(new RVector(0, weldLugDepth));
	v3 = v2.operator_add(new RVector(weldLugWidth, 0));
	v4 = v3.operator_add(new RVector(0, -weldLugDepth));

	v2 = v2.rotate(orientation, pos);
	v3 = v3.rotate(orientation, pos);
	v4 = v4.rotate(orientation, pos);

	line(di, ao, pos, v2);
	line(di, ao, v2, v3);
	line(di, ao, v3, v4);

	return v4;
	}

function createWeldTabHoleLine(di, ao, pos, barLength,
		barWidth, minSpacing, maxSpacing, orientation, weldLugWidth,
		weldLugHoleWidth, weldLugHoleClearance, weldLugInset, insetStartHole,
		insetEndHole)
	{

	// Calculate the number of lug
	// based on orientation - work out what the far end of the line is
	// For each lug
	// plot lug and if not last lug - join with a line

	// var length = barLength + 2 * weldLugHoleClearance;

	var length = barLength;

	if (insetStartHole)
		{
		length = length - weldLugInset;
		}
	if (insetEndHole)
		{
		length = length - weldLugInset;
		}

	var count = calcWeldTabCount(length, minSpacing, 1);

	var joinerOffset;

	var l = (length - weldLugWidth - 2 * weldLugHoleClearance) / count;

	var x, y;
	var startPos;

	var t_weldLugInset = 0;
	if (insetStartHole)
		{
		t_weldLugInset = weldLugInset;

		}

	if (orientation == EAST)
		{ // if the orientation East/West {

		startPos = pos.operator_add(new RVector(t_weldLugInset
				- weldLugHoleClearance, barWidth / 2 - weldLugHoleWidth / 2
				- weldLugHoleClearance));
		joinerOffset = new RVector(l, 0);
		x = weldLugWidth + 2 * weldLugHoleClearance;
		y = weldLugHoleWidth + 2 * weldLugHoleClearance;
		}
	else if (orientation == NORTH)
		{

		startPos = pos.operator_add(new RVector(barWidth / 2 - weldLugHoleWidth
				/ 2 - weldLugHoleClearance, t_weldLugInset
				+ weldLugHoleClearance));

		joinerOffset = new RVector(0, l);
		x = weldLugHoleWidth + 2 * weldLugHoleClearance;
		y = weldLugWidth + 2 * weldLugHoleClearance;
		}
	else if (orientation == WEST)
		{
		startPos = pos.operator_add(new RVector(-t_weldLugInset
				- weldLugHoleClearance, barWidth / 2 - weldLugHoleWidth / 2
				- weldLugHoleClearance));
		joinerOffset = new RVector(-l, 0);
		x = -1 * (weldLugWidth + 2 * weldLugHoleClearance);
		y = -1 * (weldLugHoleWidth + 2 * weldLugHoleClearance);
		}
	else
		{
		startPos = pos.operator_add(new RVector(barWidth / 2 - weldLugHoleWidth
				/ 2 - weldLugHoleClearance, -t_weldLugInset
				- weldLugHoleClearance));
		joinerOffset = new RVector(0, -l); // Tested OK
		x = -(weldLugHoleWidth + 2 * weldLugHoleClearance);
		y = -(weldLugWidth + 2 * weldLugHoleClearance);
		}

	// create lug one
	var lugStart;
	var lineStart = createRectangle(di, ao, startPos,
			x, y);

	for (var i = 0; i < count; i++)
		{
		// plot lugs and joining lines
		lugStart = lineStart.operator_add(joinerOffset);
		lineStart = createRectangle(di, ao, lugStart,
				x, y);
		}

	}

function createRectangleArray(di, ao, pos, width,
		height, count, offset)
	{
	//
	// Create an array of rectangles based on a count and offset var tPos = pos;
	//
	for (var i = 0; i < count; i++)
		{
		FullFrameSet.createRectangle(di, ao, tPos,
				width, height);
		tPos = tPos.operator_add(offset);
		};

	}

function createRectangle(di, ao, pos, x, y)
	{
	//
	// createRectangle: creates a simple rectangle based on width & height
	//
	var va = new Array(new RVector(0, 0), new RVector(0, y), new RVector(x, y),
			new RVector(x, 0));

	for (var i = 0; i < va.length; ++i)
		{
		var v1 = va[i].operator_add(pos);
		var v2 = va[(i + 1) % va.length].operator_add(pos);
		var lineData = new RLineData(v1, v2);
		var line = new RLineEntity(di.getDocument(), lineData);

		ao.addObject(line, false);
		}

	return v2;
	}

function line(di, ao, start, end)
	{
	var lineData = new RLineData(start, end);
	var line = new RLineEntity(di.getDocument(), lineData);
	ao.addObject(line, false);
	return end;
	}

function createHole(di, ao, pos, diameter)
	{
	//
	// createHole: creates a simple hole based on pos and diameter
	//

	var circleData = new RCircleData(pos, diameter / 2);
	var circle = new RCircleEntity(di.getDocument(), circleData);
	ao.addObject(circle, false);
	return pos;
	}

function createVBendRelief(di, ao, pos, vorientation,
		horientation, diameter, slotWidth, slotLength)
	{

	// First make two lines, pos is bottom left for keyhole pointing left bottom
	// right for other
	var v2 = pos.operator_add(new RVector(0, slotLength * vorientation));
	var v3 = pos.operator_add(new RVector(slotWidth, 0));
	var v4 = pos
			.operator_add(new RVector(slotWidth, slotLength * vorientation));

	var lineData;
	if (horientation == 1)
		{
		lineData = new RLineData(pos, v2);
		}
	else
		{
		lineData = new RLineData(pos, v2.operator_add(new RVector(0,
				vorientation * -1 * diameter / 2)));
		}
	var line = new RLineEntity(di.getDocument(), lineData);

	var lineData2;
	if (horientation == 1)
		{
		lineData2 = new RLineData(v3, v4.operator_add(new RVector(0,
				vorientation * -1 * diameter / 2)));
		}
	else
		{
		lineData2 = new RLineData(v3, v4);
		}
	var line2 = new RLineEntity(di.getDocument(), lineData2);

	ao.addObject(line, false);
	ao.addObject(line2, false);

	// var arc = RArc.createFrom3Points( v2, pos.operator_add(new
	// RVector(slotWidth/2,vorientation*(slotLength+diameter))),v4 );

	if (horientation == 1)
		{
		var arc = RArc.createFrom3Points(v4.operator_add(new RVector(0,
				vorientation * -1 * diameter / 2)), v4
				.operator_add(new RVector(0, vorientation * diameter / 2)), v2);
		}
	else
		{
		var arc = RArc.createFrom3Points(v2.operator_add(new RVector(0,
				vorientation * -1 * diameter / 2)), v2
				.operator_add(new RVector(0, vorientation * diameter / 2)), v4);
		}

	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(di.getDocument(), keyHoleData);

	ao.addObject(keyHole, false);

	}

// function createText(di, ao, pos, text)
// {
// //
// // createText: creates a text label at the specified position
// // width and height are fixed for an Icon
// var textData = new RTextData();
// textData.setText(text);
// textData.setTextHeight(4);
// textData.setTextWidth(2);
// textData.setPosition(pos);
// textData.move(pos);
//
// var textEntity = new RTextEntity(di.getDocument(), textData);
// ao.addObject(textEntity, false);
// }

function createGothicArchRel(di, ao, pos, radius,
		width, height, allowance, topOnly)
	{
	//
	// Given a masons opening will draw a full arch opening with the required
	// 'allowance' all
	// around
	//
	if (typeof topOnly === 'undefined')
		{
		topOnly = false;
		}

	var newPos = pos.operator_add(new RVector(allowance, allowance));
	var newWidth = width - allowance * 2;
	var newRadius = radius - allowance;
	// newHeight= (spring-allowance)+height of arc newRadius, newWidth
	var newHeight = (getGothicSpring(radius, width, height) - allowance)
			+ getGothicApex(newRadius, newWidth);

	createGothicArch(di, ao, newPos, newRadius,
			newWidth, newHeight, topOnly);
	}

function createCappedGothicArch(di, ao, pos, radius,
		width, barWidth)
	{

	// create capped arc - specify outer width and bar 'width' along with other
	// params
	// Create two arcs

	createGothicArchTop(di, ao, pos, radius, width,
			getGothicApex(radius, width));

	createGothicArchTop(di, ao, pos
			.operator_add(new RVector(-barWidth, 0)), radius + barWidth, width
			+ 2 * barWidth, getGothicApex(radius + barWidth, width + 2
			* barWidth));
	// join the bases

	var lineData = new RLineData(pos, pos
			.operator_add(new RVector(-barWidth, 0)));
	var line = new RLineEntity(di.getDocument(), lineData);
	ao.addObject(line, false);

	var lineData2 = new RLineData(pos.operator_add(new RVector(width, 0)), pos
			.operator_add(new RVector(width + barWidth, 0)));
	var line2 = new RLineEntity(di.getDocument(), lineData2);
	ao.addObject(line2, false);
	}

function createGothicArch(di, ao, pos, radius, width,
		height, topOnly)
	{
	// creates the arc-ed top for a gothic arch. Root (pos) is bottom left
	// corner of
	// the masons opening
	// 
	if (typeof topOnly === 'undefined')
		{
		topOnly = false;
		}

	createGothicArchTop(di, ao, pos, radius, width,
			height)

	if (!topOnly)
		{
		var outerLines = [
				pos.operator_add(new RVector(0, getGothicSpring(radius, width,
						height))),
				pos,
				pos.operator_add(new RVector(width, 0)),
				pos.operator_add(new RVector(width, getGothicSpring(radius,
						width, height)))];

		createPolyLine(di, ao, outerLines);

		}

	// print ("Arch root "+pos.operator_add(new RVector(-radius,0)).getX()+"
	// "+pos.operator_add(new RVector(-radius,0)).getY());

	return ao;

	}

function createGothicArchTop(di, ao, pos, radius,
		width, height)
	{
	var arc = new RArc(pos.operator_add(new RVector(radius, getGothicSpring(
			radius, width, height))), // Center
	radius, // Radius
	Math.PI, // Start angle
	Math.PI - getGothicAngle(radius, width), // End angle
	true // Reversed
	);

	// createHole(di, ao, arc.getCenter(), 5);

	var arcData = new RArcData(arc);
	var arcEntity = new RArcEntity(di.getDocument(), arcData);

	ao.addObject(arcEntity, false);

	var arc2 = new RArc(pos.operator_add(new RVector(width - radius,
			getGothicSpring(radius, width, height))), // Center
	radius, // Radius
	0, // Start angle
	getGothicAngle(radius, width), // End angle
	false // Reversed
	);
	// createHole(di, ao, arc2.getCenter(), 5);

	var arcData2 = new RArcData(arc2);
	var arcEntity2 = new RArcEntity(di.getDocument(), arcData2);

	ao.addObject(arcEntity2, false);
	}

function createArcBar(di, ao, pos, holeArcWidth, holeArcRadius, barWidth,
		holeSpaceAngle, weldLugWidth, weldLugDepth, sidebarWidth)
	{

	// get length of arc
	var length = getGothicArchLength(holeArcRadius, holeArcWidth)
	// get spacing for angle on that length
	var spacing = getArcLength(holeArcRadius, holeSpaceAngle);
	// plot tabs
	// createTabbedLine(di, ao, pos.operator_add(new RVector(0, length)),
	// length,
	// spacing, spacing, SOUTH, weldLugWidth, weldLugDepth);
	
	// Quick change to add a radius in
	var corner = line(di, ao, pos.operator_add(new RVector(-sidebarWidth, 0)), pos
			.operator_add(new RVector(-barWidth+3, 0)));
	var centre = corner.operator_add(new RVector(0,3));
	arc(di, ao, centre, 3, SOUTH, WEST, true);
	corner = corner.operator_add(new RVector(-3,3));
	corner = line(di, ao, corner, corner.operator_add(new RVector(0, length)));
	corner = line(di, ao, corner, corner.operator_add(new RVector(barWidth, 0)));

	// Alternative method for drawing tabs

	//

	var tabLine = new WeldTabbedLine(pos, pos.operator_add(new RVector(0,
			length)), false, false);
	tabLine.setSpacing(ui.holeArc.getLinearSpacing());
	tabLine.setMirror(true);
	tabLine.render(di, ao);

	// cap it
	// and back home
	// then add holes
	}

function getGothicArchLength(radius, width)
	{
	// Gets distance along arch from spring to apex (i.e one side)
	var arc = new RArc(new RVector(0, 0), // Center
	radius, // Radius
	0, // Start angle
	getGothicAngle(radius, width), // End angle
	false // Reversed
	);
	return arc.getLength();
	}

function getArcLength(radius, angle)
	{
	// Gets distance along arch from spring to apex (i.e one side)
	var arc = new RArc(new RVector(0, 0), // Center
	radius, // Radius
	0, // Start angle
	angle, // End angle
	false // Reversed
	);
	return arc.getLength();
	}

function getGothicAngle(radius, width)
	{

	// Calculate the angle subtended for a specific width/radius
	return Math.acos((radius - width / 2) / radius);
	}

function getGothicSpring(radius, width, height)
	{
	// given that angle - calculate the spring height
	return height - radius * Math.sin(getGothicAngle(radius, width));
	}

function getGothicApex(radius, width)
	{
	// given that angle - calculate the Apex height (distance from spring to
	// apex)
	return radius * Math.sin(getGothicAngle(radius, width));
	}

function createGothicHinge(di, ao, pos, length, width, r, d)
	{

	// Outline
	arc(di, ao, pos.operator_add(new RVector(r, 0)), r, WEST, NORTH, true);
	line(di, ao, pos.operator_add(new RVector(r, r)), pos
			.operator_add(new RVector(width - r, r)));
	arc(di, ao, pos.operator_add(new RVector(width - r, 2 * r)), r, SOUTH,
			EAST, false);
	line(di, ao, pos.operator_add(new RVector(width, 2 * r)), pos
			.operator_add(new RVector(width, length)));
	arc(di, ao, pos.operator_add(new RVector(width - r, length)), r, EAST,
			NORTH, false);
	line(di, ao, pos.operator_add(new RVector(width - r, length + r)), pos
			.operator_add(new RVector(r, length + r)));
	arc(di, ao, pos.operator_add(new RVector(r, length + 2 * r)), r, SOUTH,
			WEST, true);
	// Holes
	createHole(di, ao, pos.operator_add(new RVector(10, 6.5 + r)), d);
	createHole(di, ao, pos.operator_add(new RVector(-2, length / 2 + r)), d);
	createHole(di, ao, pos.operator_add(new RVector(10, length + r - 6.5)), d);

	return pos.operator_add(new RVector(0, length + 2 * r));
	}

function arc(di, ao, pos, radius, start, end, reverse)
	{
	var arcData = new RArcData(pos, radius, start, end, reverse);
	var arcEnt = new RArcEntity(di.getDocument(), arcData);
	ao.addObject(arcEnt, false);

	}

function offset(vector, dist, n)
	{
	// Given a vector, offsets it by n * max width to right for plopping onto
	// screen
	return vector.operator_add(new RVector(n * (dist + 50), 0));
	};



// Class definitions - this is how this sh*t sould be done - just converting as
// I go
//
function GothicOutline(width,height,radius,allowance,startPos)
	{	
	this.create(width,height,radius,allowance,startPos);
	}

GothicOutline.prototype.create = function(width,height,radius,allowance,startPos)
	{

	this.radius = radius-allowance;	
	this.width = width - allowance * 2;
	this.height = (getGothicSpring(radius, width, height) - allowance) + getGothicApex(this.radius, this.width);
	this.allowance =  allowance;
	this.startPos = startPos.operator_add(new RVector(allowance, allowance));
	this.angle = 0;

	
	// Now need to do some preparatory geometry
	debugger;
	this.arcLeft = new RArc(this.startPos.operator_add(
						new RVector(
								this.radius, 
								getGothicSpring(
								this.radius, this.width, this.height))), // Center
						this.radius, // Radius
						Math.PI, // Start angle
						Math.PI - getGothicAngle(this.radius, this.width), // End
																			// angle
						true // Reversed
						);
	
	this.arcRight =  new RArc
						(
								this.startPos.operator_add
									(
											new RVector
												(
												this.width-this.radius	,
												getGothicSpring(this.radius, this.width, this.height)
												)
									), // Center
								this.radius, // Radius
								0, // Start angle
								getGothicAngle(this.radius, this.width), // End angle
								false // Reversed
						);
	
	}



GothicOutline.prototype.rotate = function(angle)
	{
	this.angle = angle; 
	}

GothicOutline.prototype.render = function(di, ao)
{
this.renderRel(di, ao, new RVector(0, 0));
}

GothicOutline.prototype.renderRel = function(di, ao, root)
{
this.renderRelRot(di, ao, 0, root);
}

GothicOutline.prototype.renderRelRot = function(di, ao, angle, root)
{

var arcData;
var arcEntity;

arcData = new RArcData(this.arcLeft);
arcEntity = new RArcEntity(di.getDocument(), arcData);
ao.addObject(arcEntity, false);

arcData = new RArcData(this.arcRight);
arcEntity = new RArcEntity(di.getDocument(), arcData);
ao.addObject(arcEntity, false);


line(di,ao,this.startPos.operator_add(
			new RVector(0, getGothicSpring(
					this.radius, this.width,this.height))),
			this.startPos);

line(di,ao,this.startPos,this.startPos.operator_add(new RVector(this.width, 0)));


line(di,ao,this.startPos.operator_add(new RVector(this.width, 0)),
		this.startPos.operator_add(new RVector(this.width, getGothicSpring(this.radius,
				this.width, this.height)))
		);

}



// Class Text
// A block of text placed on a layer at a pos, size and angle

function Text(text,startPos,height,width,angle,layer)
	{
	if (layer === "undefined")
		{
		layer = "Text";
		}
	this.create(text,startPos,height,width,angle,layer)
	};

Text.prototype.create = function(text,startPos,height,width,angle,layer)
	{
	this.text = text;
	this.startPos = startPos;
	this.height =  height;
	this.width = width;
	this.angle = angle;
	this.layer = layer;	
	}

Text.prototype.rotate = function(angle)
	{
	this.angle = angle; 
	}

Text.prototype.render = function(di, ao)
{
this.renderRel(di, ao, new RVector(0, 0));
}

Text.prototype.renderRel = function(di, ao, root)
{
this.renderRelRot(di, ao, 0, root);
}

Text.prototype.renderRelRot = function(di, ao, angle, root)
{

var currentLayerId = di.getDocument().getCurrentLayerId();
di.setCurrentLayer(this.layer);
var textData = new RTextData();
textData.setText(this.text);
textData.setTextHeight(this.height);
textData.setTextWidth(this.width);
textData.setAngle(this.angle);
textData.setPosition(this.startPos.operator_add(root));
textData.move(this.startPos.operator_add(root));


var textEntity = new RTextEntity(di.getDocument(), textData);
ao.addObject(textEntity,false);
ao.apply(di.getDocument());
di.getDocument().setCurrentLayer(currentLayerId);
}



// Class Lug
// by default root pos is bottom left of lug assuming drawn
// with basline on x axis and lug hole uppermost
// if centred, pos in center of baseline. not CofG

function Lug(startPos)
{
this.create(startPos);
};

Lug.prototype.create = function(startPos)
{
this.startPos = startPos;
this.rotate = 0;
this.centred = false;
this.mirror = false;
}

Lug.prototype.setCentred = function(centred)
{
// Local rotate
this.centred = centred;
}

Lug.prototype.setRotate = function(rotate)
{
// Local rotate
this.rotate = rotate;
}

Lug.prototype.render = function(di, ao)
{
this.renderRel(di, ao, new RVector(0, 0));
}

Lug.prototype.renderRel = function(di, ao, root)
{
this.renderRelRot(di, ao, 0, root);
}

Lug.prototype.renderRelRot = function(di, ao, angle, root)
{

this.endPos = this.startPos.operator_add(new RVector(ui.getFloat("LugWidth"),0));
this.holeCentre = this.startPos.operator_add(new RVector(ui.getFloat("LugWidth")/2,ui.getFloat("LugHoleOffset")));


var hyp = Math.sqrt(200);
var ang = Math.asin(6/hyp);
var theta = ang+Math.PI/4;
var r = Math.sqrt(200-36);

var tanLeft = RVector.createPolar(r,theta).operator_add(this.startPos);
var tanRight = RVector.createPolar(r,Math.PI-theta).operator_add(this.endPos);

line(di,ao,this.startPos,tanLeft);
line(di,ao,this.endPos,tanRight);

var arc = RArc.createFrom3Points(tanLeft,this.startPos.operator_add(new RVector(10,16)),tanRight);
var arcData = new RArcData(arc);
var arcEnt = new RArcEntity(di.getDocument(), arcData);
ao.addObject(arcEnt, false);
createHole(di,ao,this.startPos.operator_add(new RVector(10,10)),4.2);


return this.endPos;
}


// Class Line
//

function Line(startPos, endPos)
	{
	this.create(startPos, endPos);
	};

Line.prototype.create = function(startPos, endPos)
	{
	this.startPos = startPos;
	this.endPos = endPos;
	}

Line.prototype.rotate = function(angle)
	{
	this.angle = angle;
	}
Line.prototype.getEnd = function()
	{
	return this.endPos;
	}

Line.prototype.render = function(di, ao)
	{
	this.renderRel(di, ao, new RVector(0, 0));
	}

Line.prototype.renderRel = function(di, ao, root)
	{
	this.renderRelRot(di, ao, 0, root);
	}

Line.prototype.renderRelRot = function(di, ao, angle, root)
	{
	var lineData = new RLineData(this.startPos.operator_add(root).rotate(angle,
			root), this.endPos.operator_add(root).rotate(angle, root));
	var line = new RLineEntity(di.getDocument(), lineData);
	ao.addObject(line, false);
	return this.endPos;
	}

// Class: Group
// A group of renderable objects, when an object is added to a group, its pos is
// deemd relative to the groups pos
// which has a position
//

function Group(pos)
	{
	this.create(pos);
	this.items = [];
	};

Group.prototype.create = function(pos)
	{
	this.pos = pos;
	this.angle = 0;
	};

Group.prototype.add = function(object)
	{
	this.items.push(object);
	}

Group.prototype.render = function(di, ao)
	{
	for (var i = 0; i < this.items.length; i++)
		{
		this.items[i].renderRelRot(di, ao, this.angle, this.pos);
		}
	}

Group.prototype.rotate = function(angle)
	{
	this.angle = angle;
	}

//
// Class: Rectangle
//

function Rectangle(pos, x, y)
	{
	this.create(pos, x, y);
	};

Rectangle.prototype.create = function(pos, x, y)
	{
	//
	// createRectangle: creates a simple rectangle based on width & height
	// 'pos' is the bottom left corner of the rectangle
	//

	this.x = x;
	this.y = y;
	this.pos = pos;
	this.angle = 0;
	this.centred = false;
	};

Rectangle.prototype.getCenter = function()
	{
	// return this.pos.operator_add(new RVector(this.x/2,this.y/2));
	if (this.centred)
		{
		return new RVector(0, 0);
		}
	else
		{
		return new RVector(this.x / 2, this.y / 2);
		}

	};

Rectangle.prototype.centre = function(centre)
	{

	this.centred = centre;
	};

Rectangle.prototype.rotate = function(angle)
	{

	this.angle = angle;
	};

Rectangle.prototype.render = function(di, ao)
	{
	this.renderRel(di, ao, new RVector(0, 0));
	};

Rectangle.prototype.renderRel = function(di, ao, root)
	{
	this.renderRelRot(di, ao, 0, root);
	}

Rectangle.prototype.renderRelRot = function(di, ao, angle, root)
	{

	if (this.centred)
		{
		var va = new Array(new RVector(-this.x / 2, -this.y / 2), new RVector(
				-this.x / 2, this.y / 2), new RVector(this.x / 2, this.y / 2),
				new RVector(this.x / 2, -this.y / 2));

		}
	else
		{
		var va = new Array(new RVector(0, 0), new RVector(0, this.y),
				new RVector(this.x, this.y), new RVector(this.x, 0));

		}

	var center = this.getCenter();

	if (!(this.angle === 'undefined'))
		{
		// rotate each point around root;
		for (var i = 0; i < va.length; ++i)
			{
			va[i] = va[i].rotate(this.angle, center);
			}
		}

	var offset = this.pos.operator_add(root);

	for (var i = 0; i < va.length; ++i)
		{
		var v1 = va[i].operator_add(offset).rotate(angle, root);
		var v2 = va[(i + 1) % va.length].operator_add(offset).rotate(angle,
				root);
		var lineData = new RLineData(v1, v2);
		var line = new RLineEntity(di.getDocument(), lineData);

		ao.addObject(line, false);
		}
	return v2;
	};

//
// Class: WeldTabHole
//

function WeldTabHole(pos, width, height, clearance)
	{
	this.create(pos, width, height, clearance);
	};

WeldTabHole.prototype.create = function(pos, width, height, clearance)
	{
	this.pos = pos;
	this.width = width;
	this.height = height;
	this.clearance = clearance;
	this.angle = 0;
	};

WeldTabHole.prototype.rotate = function(angle)
	{
	this.angle = angle;
	};

WeldTabHole.prototype.render = function(di, ao)
	{
	this.renderRel(di, ao, new RVector(0, 0));
	};

WeldTabHole.prototype.renderRel = function(di, ao, root)
	{
	this.renderRelRot(di, ao, 0, root);
	}

WeldTabHole.prototype.renderRelRot = function(di, ao, angle, root)
	{
	var rectangle = new Rectangle(this.pos, this.width + 2 * this.clearance,
			this.height + 2 * this.clearance);

	rectangle.centre(true);

	if (!(this.angle === 'undefined'))
		{
		rectangle.rotate(this.angle);
		}

	rectangle.renderRelRot(di, ao, angle, root);
	};

//
// Class: Weld Tabbed Line
//

function WeldTabbedLine(startPos, endPos, insetStart, insetEnd)
	{
	this.create(startPos, endPos, insetStart, insetEnd);
	};

WeldTabbedLine.prototype.create = function(startPos, endPos, insetStart,
		insetEnd)
	{
	//
	// createRectangle: creates a simple rectangle based on width & height
	// 'pos' is the bottom left corner of the rectangle
	//

	this.startPos = startPos;
	this.endPos = endPos;
	this.insetStart = insetStart;
	this.insetEnd = insetEnd;
	this.spacing = 0;
	this.mirror = false;
	};

WeldTabbedLine.prototype.setSpacing = function(spacing)
	{
	this.spacing = spacing; // center to center
	}

WeldTabbedLine.prototype.setMirror = function(mirror)
	{
	this.mirror = mirror; // center to center
	}

WeldTabbedLine.prototype.render = function(di, ao)
	{

	var weldLugInset = ui.getFloat("WeldLugInset");
	var weldLugMinSpacing = ui.getFloat("WeldLugMinSpacing");
	var weldLugMaxSpacing = ui.getFloat("WeldLugMaxSpacing");
	var weldLugWidth = ui.getFloat("WeldLugWidth");
	var weldLugDepth = ui.getFloat("WeldLugDepth");

	// determine spacing centre to centre

	var total_len = this.startPos.getDistanceTo2d(this.endPos);
	if (this.insetStart)
		{
		total_len = total_len - weldLugInset;
		}

	if (this.insetEnd)
		{
		total_len = total_len - weldLugInset;
		}

	total_len = total_len - ui.getFloat("WeldLugWidth"); // so we dont run
	// off the end

	if (this.spacing == 0)
		{
		// Calculate spacing

		this.tabCount = calcWeldTabCount(total_len, weldLugMinSpacing, 2); // at
		// least
		// 2 lugs
		this.spacing = total_len / (this.tabCount - 1);
		}
	else
		{
		this.tabCount = ((total_len - total_len % this.spacing) / this.spacing) + 1;
		}

	// assemble a string of items by default running west to east, teeth down,

	tabbedLine = new Group(this.startPos);

	var zero = new RVector(0, 0);
	var depth = ui.getFloat("WeldLugDepth");
	if (this.mirror)
		{
		depth = -depth;
		}
	// Inset
	var l = new Line(zero, zero);

	if (this.insetStart)
		{
		l = new Line(zero, zero.operator_add(new RVector(ui
				.getFloat("WeldLugInset")
				- ui.getFloat("WeldLugWidth") / 2, 0)))
		tabbedLine.add(l);
		}

	// Tab 1
	l = new Line(l.getEnd(), l.getEnd().operator_add(new RVector(0, depth)));
	tabbedLine.add(l);
	l = new Line(l.getEnd(), l.getEnd().operator_add(
			new RVector(ui.getFloat("WeldLugWidth"), 0)));
	tabbedLine.add(l);
	l = new Line(l.getEnd(), l.getEnd().operator_add(new RVector(0, -depth)));
	tabbedLine.add(l);

	for (var i = 0; i < this.tabCount - 1; i++)
		{
		// Joiner
		l = new Line(l.getEnd(), l.getEnd().operator_add(
				new RVector(this.spacing - ui.getFloat("WeldLugWidth"), 0)));
		tabbedLine.add(l);
		// Tab
		l = new Line(l.getEnd(), l.getEnd().operator_add(new RVector(0, depth)));
		tabbedLine.add(l);
		l = new Line(l.getEnd(), l.getEnd().operator_add(
				new RVector(ui.getFloat("WeldLugWidth"), 0)));
		tabbedLine.add(l);
		l = new Line(l.getEnd(), l.getEnd()
				.operator_add(new RVector(0, -depth)));
		tabbedLine.add(l);
		}

	// Inset
	// l = new Line(l.getEnd(),l.getEnd().operator_add(new
	// RVector(ui.getFloat("WeldLugInset")-ui.getFloat("WeldLugWidth")/2,0)));
	l = new Line(l.getEnd(), new RVector(this.startPos
			.getDistanceTo2d(this.endPos), 0));
	tabbedLine.add(l);

	tabbedLine.rotate(this.startPos.getAngleTo(this.endPos));

	tabbedLine.render(di, ao);

	// them flip and rotate as required.
	// makes for much simpler maths :)

	// plot optional inset

	}

//
// Class: WeldTabHoleArc
//
// Start is the edge of the first hole.
// i.e. when the cleranc is added, line length will grow by 2*clearance
// all spacing is centre to centre

function WeldTabHoleLine(startPos, endPos, insetStart, insetEnd)
	{
	this.create(startPos, endPos, insetStart, insetEnd);
	};

WeldTabHoleLine.prototype.create = function(startPos, endPos, insetStart,
		insetEnd)
	{
	this.startPos = startPos;
	this.endPos = endPos;
	this.insetStart = insetStart;
	this.insetEnd = insetEnd;
	this.angle = 0;
	this.spacing = 0;
	};

WeldTabHoleLine.prototype.setSpacing = function(spacing)
	{
	this.spacing = spacing;
	}

WeldTabHoleLine.prototype.getSpacing = function()
	{
	return this.spacing;
	}

WeldTabHoleLine.prototype.render = function(di, ao)
	{
	var weldLugInset = ui.getFloat("WeldLugInset");
	var weldLugMinSpacing = ui.getFloat("WeldLugMinSpacing");
	var weldLugWidth = ui.getFloat("WeldLugWidth");
	var weldLugHoleWidth = ui.getFloat("WeldLugHoleWidth");
	var weldLugHoleClearance = ui.getFloat("WeldLugHoleClearance");

	// determine spacing centre to centre

	var total_len = this.startPos.getDistanceTo2d(this.endPos);

	total_len = total_len - ui.getFloat("WeldLugWidth"); // so we dont run

	if (this.insetStart)
		{
		total_len = total_len - weldLugInset;
		}
	else
		{

		}

	if (this.insetEnd)
		{
		total_len = total_len - weldLugInset;
		}

	if (this.spacing == 0)
		{
		// Calculate spacing
		this.tabCount = calcWeldTabCount(total_len, weldLugMinSpacing, 2);
		this.spacing = total_len / (this.tabCount - 1);
		}
	else
		{
		this.tabCount = ((total_len - total_len % this.spacing) / this.spacing) + 1;
		}

	// assemble a string of items by default running west to east

	holedLine = new Group(this.startPos);

	var holePos = new RVector(0, 0);

	if (this.insetStart)
		{
		holePos = holePos.operator_add(new RVector(weldLugInset, 0));
		}
	else
		{
		holePos = holePos.operator_add(new RVector(weldLugWidth / 2, 0)); 
		}

	// Hole 1
	hole = new WeldTabHole(holePos, weldLugWidth, weldLugHoleWidth,
			weldLugHoleClearance);
	holedLine.add(hole);
	holePos = holePos.operator_add(new RVector(this.spacing, 0));

	for (var i = 0; i < this.tabCount - 1; i++)
		{

		hole = new WeldTabHole(holePos, weldLugWidth, weldLugHoleWidth,
				weldLugHoleClearance);
		holedLine.add(hole);
		holePos = holePos.operator_add(new RVector(this.spacing, 0));
		}

	holedLine.rotate(this.startPos.getAngleTo(this.endPos));

	holedLine.render(di, ao);

	// them flip and rotate as required.
	// makes for much simpler maths :)

	// plot optional inset

	};

WeldTabHoleLine.prototype.getLinearSpacing = function()
	{
	return this.getSpacing();
	}

WeldTabHoleLine.prototype.getStartPos = function()
{
return this.startPos;
}
WeldTabHoleLine.prototype.getLength = function()
{
return this.startPos.getDistanceTo2d(this.endPos);
}


//
// Class: WeldTabHoleArc
//

function WeldTabHoleArc(pos, radius, startAngle, endAngle, insetStart,
		insetEnd, angularSpacing)
	{
	this.create(pos, radius, startAngle, endAngle, insetStart, insetEnd,
			angularSpacing);
	};

WeldTabHoleArc.prototype.create = function(pos, radius, startAngle, endAngle,
		insetStart, insetEnd, angularSpacing)
	{
	this.pos = pos;
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.insetStart = insetStart;
	this.insetEnd = insetEnd;
	this.angularSpacing = angularSpacing;
	this.reverse = false;
	};

WeldTabHoleArc.prototype.render = function(di, ao)
	{

	// inset is currently ignored
	// however need to rotote the whole shbang so that the edge of the first
	// hole is flush with the spring ... minus clerance
	// i.e. rotate by angle of 5.5/2 mm on arc

	// Circle = Math.PI*2*radius
	// angle = Math.PI*2*len/(Math.PI*2*radius)
	// angle = len/radius + ui.getFloat("WeldLugWidth")
	// this.radius

	var ang = ui.getFloat("WeldLugWidth") / (2 * this.radius);

	if (this.reverse)
		{
		for (var angle = this.startAngle - ang; angle > this.endAngle - ang; angle -= this.angularSpacing)
			{
			var w = new WeldTabHole(this.pos.operator_add(RVector.createPolar(
					this.radius, angle)), ui.getFloat("WeldLugHoleWidth"), ui
					.getFloat("WeldLugWidth"), ui
					.getFloat("WeldLugHoleClearance"));

			// var r = new
			// Rectangle(this.pos.operator_add(RVector.createPolar(this.radius,angle)),ui.getFloat("WeldLugWidth"),ui.getFloat("WeldLugHoleWidth")
			// );
			w.rotate(angle);
			w.render(di, ao);

			}
		}
	else
		{

		for (var angle = this.startAngle + ang; angle < this.endAngle + ang; angle += this.angularSpacing)
			{
			var w = new WeldTabHole(this.pos.operator_add(RVector.createPolar(
					this.radius, angle)), ui.getFloat("WeldLugHoleWidth"), ui
					.getFloat("WeldLugWidth"), ui
					.getFloat("WeldLugHoleClearance"));

			// var r = new
			// Rectangle(this.pos.operator_add(RVector.createPolar(this.radius,angle)),ui.getFloat("WeldLugWidth"),ui.getFloat("WeldLugHoleWidth")
			// );
			w.rotate(angle);
			w.render(di, ao);

			}
		}
	};

WeldTabHoleArc.prototype.getAngularSpacing = function()
	{
	return this.angularSpacing;
	}

WeldTabHoleArc.prototype.setReverse = function(reverse)
	{
	this.reverse = reverse;
	}

WeldTabHoleArc.prototype.getLinearSpacing = function()
	{

	var arc = new RArc(this.pos, this.radius, 0, this.angularSpacing, false);
	return arc.getLength();
	}

//
// CLASS: Hole array
//

function HoleArray(pos, size, count, offset)
	{
	if (!(offset === 'undefined'))
		{
		this.create(pos, size, count, offset);
		}
	};

HoleArray.prototype.create = function(pos, size, count, offset)
	{
	// pos - start position
	// size - diameter
	// count - how many
	// offset - vector for the 'step' to the next hole

	this.size = size;
	this.pos = pos;
	this.count = count;
	this.offset = offset;
	}

HoleArray.prototype.interpolate = function(startPos, endPos, size, count)
	{
	// startPos - center of first hole
	// endPos - center of last hole
	// count - how many

	this.size = size;
	this.pos = startPos;
	this.count = count;

	var xOffset = (endPos.getX() - startPos.getX()) / (count - 1);
	var yOffset = (endPos.getY() - startPos.getY()) / (count - 1);

	this.offset = new RVector(xOffset, yOffset);
	}

HoleArray.prototype.autospace = function(startPos, endPos, size, approxSpacing)
	{
	// startPos - center of first hole
	// endPos - center of last hole
	// count - how many

	this.size = size;
	this.pos = startPos;

	var xOffset = endPos.getX() - startPos.getX();
	var yOffset = endPos.getY() - startPos.getY();

	var l = startPos.getDistanceTo2d(endPos);

	this.count = (l - (l % approxSpacing)) / approxSpacing + 1;

	this.offset = new RVector(xOffset / (this.count - 1), yOffset
			/ (this.count - 1));

	}

HoleArray.prototype.render = function(di, ao)
	{

	var currentPos = new RVector(this.pos.getX(), this.pos.getY());
	for (var i = 0; i < this.count; i++)
		{
		createHole(di, ao, currentPos, this.size);
		currentPos = currentPos.operator_add(this.offset);
		}

	};

function HingeAssembly(startPos, endPos, hingeCount)
	{
	this.create(startPos, endPos, hingeCount);
	};

HingeAssembly.prototype.create = function(startPos, endPos, hingeCount)
	{
	this.startPos = startPos;
	this.endPos = endPos;
	this.hingeCount = hingeCount;
	};

HingeAssembly.prototype.build = function()
	{
	var inset = ui.getFloat("HingeInset");
	this.topHingeCentre = this.endPos.operator_add(new RVector(0, -inset));
	this.middleHingeCentre = this.startPos.operator_add(new RVector(0,
			this.startPos.getDistanceTo2d(this.endPos)/2));

	this.bottomHingeCentre = this.startPos.operator_add(new RVector(0, inset));

	};

// Hinge centres are relative to root of hinge assembly

HingeAssembly.prototype.getTopHingeCentre= function()
	{
	return this.topHingeCentre;
	}


HingeAssembly.prototype.getMiddleHingeCentre= function()
	{
	return this.middleHingeCentre;
	}

HingeAssembly.prototype.getBottomHingeCentre= function()
	{
	return this.bottomHingeCentre;
	}


HingeAssembly.prototype.getTopHingeTop= function()
	{
	return this.startPos.operator_add(this.topHingeCentre.operator_add(new RVector(0, ui.getFloat("HingeMountLength")
			/ 2 + ui.getFloat("HingeMountRadius"))));
	}

HingeAssembly.prototype.getTopHingeBottom = function()
	{
	return this.startPos.operator_add(this.topHingeCentre.operator_add(new RVector(0, -ui.getFloat("HingeMountLength")
			/ 2 - ui.getFloat("HingeMountRadius"))));
	}

HingeAssembly.prototype.getMiddleHingeTop = function()
	{
	return this.startPos.operator_add(this.middleHingeCentre.operator_add(new RVector(0, ui
			.getFloat("HingeMountLength")
			/ 2 + ui.getFloat("HingeMountRadius"))));
	}

HingeAssembly.prototype.getMiddleHingeBottom = function()
	{
	return this.startPos.operator_add(this.middleHingeCentre.operator_add(new RVector(0, -ui
			.getFloat("HingeMountLength")
			/ 2 - ui.getFloat("HingeMountRadius"))));
	}

HingeAssembly.prototype.getBottomHingeTop = function()
	{
	return this.startPos.operator_add(this.bottomHingeCentre.operator_add(new RVector(0, ui
			.getFloat("HingeMountLength")
			/ 2 + ui.getFloat("HingeMountRadius"))));
	}

HingeAssembly.prototype.getBottomHingeBottom = function()
	{
	return this.startPos.operator_add(this.bottomHingeCentre.operator_add(new RVector(0, -ui
			.getFloat("HingeMountLength")
			/ 2 - ui.getFloat("HingeMountRadius"))));
	}

HingeAssembly.prototype.renderTabs = function(di, ao, pos)
{
this.build();
this.renderTab(di, ao, pos.operator_add(this.topHingeCentre));
if (ui.widgets["ThirdHinge"].checked)
	{
	this.renderTab(di, ao, pos.operator_add(this.middleHingeCentre));
	}
this.renderTab(di, ao, pos.operator_add(this.bottomHingeCentre));
// Joining lines
line(di, ao, pos.operator_add(this.getTopHingeTop()), pos
		.operator_add(this.endPos));
if (ui.widgets["ThirdHinge"].checked)
	{

	line(di, ao, pos.operator_add(this.getTopHingeBottom()), pos
			.operator_add(this.getMiddleHingeTop()));
	line(di, ao, pos.operator_add(this.getBottomHingeTop()), pos
			.operator_add(this.getMiddleHingeBottom()));
	}
else
	{
	line(di, ao, pos.operator_add(this.getTopHingeBottom()), pos
			.operator_add(this.getBottomHingeTop()));
	}
line(di, ao, pos.operator_add(this.getBottomHingeBottom()), pos
		.operator_add(this.startPos));
};
	
HingeAssembly.prototype.renderTab = function(di, ao, centre)
	{

	var length = ui.getFloat("HingeMountLength");
	var width = ui.getFloat("HingeMountWidth");
	var r = ui.getFloat("HingeMountRadius");
	var d = ui.getFloat("HingeMountHoleDia");
	var pos = centre.operator_add(new RVector(0, -(length / 2 + r)));

	arc(di, ao, pos.operator_add(new RVector(r, 0)), r, WEST, NORTH, true);
	line(di, ao, pos.operator_add(new RVector(r, r)), pos
			.operator_add(new RVector(width - r, r)));
	arc(di, ao, pos.operator_add(new RVector(width - r, 2 * r)), r, SOUTH,
			EAST, false);
	line(di, ao, pos.operator_add(new RVector(width, 2 * r)), pos
			.operator_add(new RVector(width, length)));
	arc(di, ao, pos.operator_add(new RVector(width - r, length)), r, EAST,
			NORTH, false);
	line(di, ao, pos.operator_add(new RVector(width - r, length + r)), pos
			.operator_add(new RVector(r, length + r)));
	arc(di, ao, pos.operator_add(new RVector(r, length + 2 * r)), r, SOUTH,
			WEST, true);
	
	
	// Holes
	createHole(di, ao, pos.operator_add(new RVector(10, 6.5 + r)), d);
	createHole(di, ao, pos.operator_add(new RVector(-2, length / 2 + r)), d);
	createHole(di, ao, pos.operator_add(new RVector(10, length + r - 6.5)), d);
	return pos.operator_add(new RVector(0, length + 2 * r));
	}

HingeAssembly.prototype.renderHoles = function(di, ao, pos)
	{
	this.build();
	this.renderHole(di, ao, pos.operator_add(this.topHingeCentre));
	if (ui.widgets["ThirdHinge"].checked)
		{

		this.renderHole(di, ao, pos.operator_add(this.middleHingeCentre));
		}
	this.renderHole(di, ao, pos.operator_add(this.bottomHingeCentre));
	}

HingeAssembly.prototype.renderHole = function(di, ao, pos)
	{

	var length = ui.getFloat("HingeMountLength");
	var width = ui.getFloat("HingeMountWidth");
	var r = ui.getFloat("HingeMountRadius");
	var d = ui.getFloat("HingeMountHoleDia");

	createHole(di, ao, pos.operator_add(new RVector(-17, 17 / 2)), d);

	createHole(di, ao, pos.operator_add(new RVector(-17, -17 / 2)), d);

	return pos.operator_add(new RVector(0, length + 2 * r));
	}


