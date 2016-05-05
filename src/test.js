// Math.PI/2 = Lugs West
// Math.PI = Lugs South
// 3*Math.PI/2 = Lugs East
// 0 = Lugs North

var EAST = 0;
var SOUTH = 3 * Math.PI / 2;
var NORTH = Math.PI / 2;
var WEST = Math.PI;

function createLuggedLine(documentInterface, addOperation, pos, length,
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
		var l = length / 2 - FullFrameSet.lugWidth / 2;

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

		var lugStart = line(documentInterface, addOperation, pos, pos
				.operator_add(joinerOffset));

		var lastLineStart = calcWeldTabCount(documentInterface, addOperation,
				lugStart, orientation);

		lastPoint = line(documentInterface, addOperation, lastLineStart,
				lastLineStart.operator_add(joinerOffset));

		}
	else
		{

		var l = (length - lugWidth) / (lugCount - 1) - lugWidth;

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
		var lineStart = createMountingLug(documentInterface, addOperation, pos,
				orientation, lugHoleDiameter, lugWidth, lugHoleOffset);

		for (var i = 0; i < lugCount - 1; i++)
			{
			// plot lugs and joining lines
			lugStart = line(documentInterface, addOperation, lineStart,
					lineStart.operator_add(joinerOffset));
			lineStart = createMountingLug(documentInterface, addOperation,
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
		lugWidth, lugHoleOffset)
	{
	// ********************************************************************************************************************
	//
	// Sidebars
	//
	// ********************************************************************************************************************

	var v;

	v = line(di, ao, pos, pos.operator_add(new RVector(-1 * sidebarWidth, 0)));
	v = line(di, ao, v, v.operator_add(new RVector(0, mountingLugInset)));
	v = createLuggedLine(di, ao, v, sidebarHeight - 2 * mountingLugInset,
			mountingLugMinSpacing, 2, NORTH, lugHoleDiameter, lugWidth,
			lugHoleOffset);
	v = line(di, ao, v, v.operator_add(new RVector(0, mountingLugInset)));
	v = line(di, ao, v, v.operator_add(new RVector(sidebarWidth, 0)));
	v = line(di, ao, v, v.operator_add(new RVector(0, -weldLugInset)));

	v = createTabbedLine(di, ao, v, sidebarHeight - 2 * weldLugInset,
			weldLugMinSpacing, weldLugMaxSpacing, SOUTH, weldLugWidth,
			weldLugDepth);

	v = line(di, ao, v, v.operator_add(new RVector(0, -weldLugInset)));

	}

function createMountingLug(documentInterface, addOperation, pos, angle,
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
	var line = new RLineEntity(documentInterface.getDocument(), lineData);
	addOperation.addObject(line);

	var lineData2 = new RLineData(v3, v4);
	var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);
	addOperation.addObject(line2);

	createHole(documentInterface, addOperation, v5, lugHoleDiameter);

	var arc = RArc.createFrom2PBulge(v2, v3, -0.89);
	var arcData = new RArcData(arc);
	var arcEnt = new RArcEntity(documentInterface.getDocument(), arcData);

	addOperation.addObject(arcEnt);

	return v4; // start point for next object

	}

function createPolyLine(documentInterface, addOperation, vectors)
	{
	//
	// Given an array of vectors ... join the dots (do not close the shape)
	//
	for (var i = 0; i < vectors.length - 1; i++)
		{
		var v1 = vectors[i];
		var v2 = vectors[(i + 1)];
		var lineData = new RLineData(v1, v2);
		var line = new RLineEntity(documentInterface.getDocument(), lineData);
		addOperation.addObject(line, false);
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

function createTabbedLine(documentInterface, addOperation, pos, length,
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
	var count = calcWeldTabCount(length, minSpacing, 3);
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
	var lineStart = createWeldLug(documentInterface, addOperation, pos,
			weldLugWidth, weldLugDepth, orientation);

	for (var i = 0; i < count; i++)
		{
		// plot lugs and joining lines
		lugStart = line(documentInterface, addOperation, lineStart, lineStart
				.operator_add(joinerOffset));
		lineStart = createWeldLug(documentInterface, addOperation, lugStart,
				weldLugWidth, weldLugDepth, orientation);
		}

	return lineStart;
	}

function createWeldLug(documentInterface, addOperation, pos, weldLugWidth,
		weldLugDepth, orientation)
	{
	v2 = pos.operator_add(new RVector(0, weldLugDepth));
	v3 = v2.operator_add(new RVector(weldLugWidth, 0));
	v4 = v3.operator_add(new RVector(0, -weldLugDepth));

	v2 = v2.rotate(orientation, pos);
	v3 = v3.rotate(orientation, pos);
	v4 = v4.rotate(orientation, pos);

	line(documentInterface, addOperation, pos, v2);
	line(documentInterface, addOperation, v2, v3);
	line(documentInterface, addOperation, v3, v4);

	return v4;
	}

function createWeldTabHoleLine(documentInterface, addOperation, pos, barLength,
		barWidth, minSpacing, maxSpacing, orientation, weldLugWidth,
		weldLugHoleWidth, weldLugHoleClearance, weldLugInset)
	{

	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North

	// Calculate the number of lug
	// based on orientation - work out what the far end of the line is
	// For each lug
	// plot lug and if not last lug - join with a line

	var length = barLength - 2 * weldLugInset + 2 * weldLugHoleClearance;

	var count = calcWeldTabCount(length, minSpacing, 3);
	var joinerOffset;

	var l = (length - weldLugWidth - 2 * weldLugHoleClearance) / count;

	var x, y;
	var startPos;

	if (orientation == EAST)
		{ // if the orientation East/West {
		startPos = pos.operator_add(new RVector(weldLugInset
				- weldLugHoleClearance, barWidth / 2 - weldLugHoleWidth / 2
				- weldLugHoleClearance));
		joinerOffset = new RVector(l, 0);
		x = weldLugWidth + 2 * weldLugHoleClearance;
		y = weldLugHoleWidth + 2 * weldLugHoleClearance;
		}
	else if (orientation == NORTH)
		{
		startPos = pos
				.operator_add(new RVector(barWidth / 2 - weldLugHoleWidth / 2
						- weldLugHoleClearance, weldLugInset
						+ weldLugHoleClearance));
		joinerOffset = new RVector(0, l);
		x = weldLugHoleWidth + 2 * weldLugHoleClearance;
		y = weldLugWidth + 2 * weldLugHoleClearance;
		}
	else if (orientation == WEST)
		{
		startPos = pos.operator_add(new RVector(-weldLugInset
				- weldLugHoleClearance, barWidth / 2 - weldLugHoleWidth / 2
				- weldLugHoleClearance));
		joinerOffset = new RVector(-l, 0);
		x = -1 * (weldLugWidth + 2 * weldLugHoleClearance);
		y = -1 * (weldLugHoleWidth + 2 * weldLugHoleClearance);
		}
	else
		{
		startPos = pos.operator_add(new RVector(barWidth / 2 - weldLugHoleWidth
				/ 2 - weldLugHoleClearance, -weldLugInset
				- weldLugHoleClearance));
		joinerOffset = new RVector(0, -l); // Tested OK
		x = -(weldLugHoleWidth + 2 * weldLugHoleClearance);
		y = -(weldLugWidth + 2 * weldLugHoleClearance);
		}

	// create lug one
	var lugStart;
	var lineStart = createRectangle(documentInterface, addOperation, startPos,
			x, y);

	for (var i = 0; i < count; i++)
		{
		// plot lugs and joining lines
		lugStart = lineStart.operator_add(joinerOffset);
		lineStart = createRectangle(documentInterface, addOperation, lugStart,
				x, y);
		}

	}		


function createRectangleArray(documentInterface, addOperation, pos, width,
		height, count, offset)
	{
	//
	// Create an array of rectangles based on a count and offset var tPos = pos;
	//
	for (var i = 0; i < count; i++)
		{
		FullFrameSet.createRectangle(documentInterface, addOperation, tPos,
				width, height);
		tPos = tPos.operator_add(offset);
		};

	}

function createRectangle(documentInterface, addOperation, pos, x, y)
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
		var line = new RLineEntity(documentInterface.getDocument(), lineData);

		addOperation.addObject(line, false);
		}

	return v2;
	}

function line(documentInterface, addOperation, start, end)
	{
	var lineData = new RLineData(start, end);
	var line = new RLineEntity(documentInterface.getDocument(), lineData);
	addOperation.addObject(line);
	return end;
	}

function createHole(documentInterface, addOperation, pos, diameter)
	{
	//
	// createHole: creates a simple hole based on pos and diameter
	//

	var circleData = new RCircleData(pos, diameter / 2);
	var circle = new RCircleEntity(documentInterface.getDocument(), circleData);
	addOperation.addObject(circle, false);
	return pos;
	}

function createVBendRelief(documentInterface, addOperation, pos, vorientation,
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
	var line = new RLineEntity(documentInterface.getDocument(), lineData);

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
	var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);

	addOperation.addObject(line);
	addOperation.addObject(line2);

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
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

	addOperation.addObject(keyHole);

	}

function createText(documentInterface, addOperation, pos, text)
	{
	//
	// createText: creates a text label at the specified position
	// width and height are fixed for an Icon
	// var textData = new RTextData();
	textData.setText(text);
	textData.setTextHeight(4);
	textData.setTextWidth(2);
	textData.setPosition(pos);
	textData.move(pos);

	var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
	addOperation.addObject(textEntity, false);
	}

function createGothicArchRel(documentInterface, addOperation, pos, radius,
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

	createGothicArch(documentInterface, addOperation, newPos, newRadius,
			newWidth, newHeight, topOnly);
	}

function createCappedGothicArch(documentInterface, addOperation, pos, radius,
		width, barWidth)
	{

	// create capped arc - specify outer width and bar 'width' along with other
	// params
	// Create two arcs
	createGothicArchTop(documentInterface, addOperation, pos, radius, width,
			getGothicApex(radius, width));
	createGothicArchTop(documentInterface, addOperation, pos
			.operator_add(new RVector(barWidth, 0)), radius - barWidth, width
			- 2 * barWidth, getGothicApex(radius - barWidth, width - 2
			* barWidth));
	// join the bases
	var lineData = new RLineData(pos, pos
			.operator_add(new RVector(barWidth, 0)));
	var line = new RLineEntity(documentInterface.getDocument(), lineData);
	addOperation.addObject(line, false);

	var lineData2 = new RLineData(pos.operator_add(new RVector(width, 0)), pos
			.operator_add(new RVector(width - barWidth, 0)));
	var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);
	addOperation.addObject(line2, false);
	}

function createGothicArch(documentInterface, addOperation, pos, radius, width,
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

	createGothicArchTop(documentInterface, addOperation, pos, radius, width,
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

		createPolyLine(documentInterface, addOperation, outerLines);

		}

	return addOperation;

	}

function createGothicArchTop(documentInterface, addOperation, pos, radius,
		width, height)
	{
	var arc = new RArc(pos.operator_add(new RVector(radius, getGothicSpring(
			radius, width, height))), // Center
	radius, // Radius
	Math.PI, // Start angle
	Math.PI - getGothicAngle(radius, width), // End angle
	true // Reversed
	);

	var arcData = new RArcData(arc);
	var arcEntity = new RArcEntity(documentInterface.getDocument(), arcData);

	addOperation.addObject(arcEntity, false);

	var arc2 = new RArc(pos.operator_add(new RVector(width - radius,
			getGothicSpring(radius, width, height))), // Center
	radius, // Radius
	0, // Start angle
	getGothicAngle(radius, width), // End angle
	false // Reversed
	);

	var arcData2 = new RArcData(arc2);
	var arcEntity2 = new RArcEntity(documentInterface.getDocument(), arcData2);

	addOperation.addObject(arcEntity2, false);
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

function offset(vector, dist, n)
	{
	// Given a vector, offsets it by n * max width to right for plopping onto
	// screen
	return vector.operator_add(new RVector(n * (dist + 50), 0));
	}
