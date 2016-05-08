// Min.js
// library.js contains some convenience functions like 'isNull':
// This source is now managed under GIT

include("scripts/library.js");
include("scripts/WidgetFactory.js");
include("./primitives.js");

//
// Create main object
//

var ui;

function Min()
	{
	};

// ********************************************************************************************************************
//
// Top level creation
//
// ********************************************************************************************************************

Min.init = function(formWidget)
	{

	//
	// Read widget to get object from which we can extract parameters
	//

	if (!isNull(formWidget))
		{
		this.widgets = getWidgets(formWidget);
		}
	
	ui = this;
	
	};

Min.generate = function(documentInterface, file)

//
// Main function to generate the frames
//

	{

	this.setValues();
	return this.create(documentInterface);
	};

Min.generatePreview = function(documentInterface, iconSize)
	{
	//
	// Function to generate the frames icon
	//

	return this.createIcon(documentInterface);

	};

Min.create = function(documentInterface)
	{

	// First create all the required layers

	var layers = ["Laser Cutting", "Text", "Etching", "Dimensions"];
	this.createLayers(documentInterface, layers);

	var blocks = ["Masons Opening", "Frame A", "Frame C", "Arch Piece",
			"Full Side Bar", "Split Side Bar"];
	this.createBlocks(documentInterface, blocks);

	// Then add the items to each layer
	// empty layers will not be displayed
	// As the copy process in QCAD ignores them

	var addOperation = new RAddObjectsOperation(false);

	// Create a reference point which all others will be spaced from

	this.root = new RVector(0, 0);
	maxWidth = this.getFloat("MasonsOpeningWidth");
	//
	// This is where the actual creation stuff is done
	// 

	documentInterface.setCurrentLayer("Laser Cutting");

	this.createMasonsOpening(documentInterface, addOperation, this.root);
	// this.createFrameC(documentInterface, addOperation,
	// this.root.operator_add(new
	// RVector(this.getFloat("MasonsOpeningWidth")+100,0)));
	this.createFrameA(documentInterface, addOperation, offset(this.root,
			maxWidth, 1));

	this.createFrameC(documentInterface, addOperation, offset(this.root,
			maxWidth, 2));

	this.createCappedArch(documentInterface, addOperation, offset(this.root,
			maxWidth, 3));

	this.createFullSideBar(documentInterface, addOperation, offset(this.root,
			maxWidth, 4));

	this.createSplitSideBar(documentInterface, addOperation, offset(this.root,
			maxWidth, 5));

	this.createBottomBar(documentInterface, addOperation, offset(this.root,
			maxWidth, 6));

	this.createSimpleBars(documentInterface, addOperation, offset(this.root,
			maxWidth, 7));

	addOperation.apply(documentInterface.getDocument());

	// and add some labels

	documentInterface.setCurrentLayer("Text");

	createText(documentInterface, addOperation, offset(this.root, maxWidth, 0),
			"Masons opening as measured");
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 1),
			"Frame A");
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 2),
			"Frame C");
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 3),
			"Capped Arch");
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 4),
			"Full Side Bar");
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 5),
			"Split Side Bar");
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 6),
			"Bottom Bar");
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 7),
			"Simple Bars");
	
	createText(documentInterface, addOperation, offset(this.root, maxWidth, 3).operator_add(new RVector(0,1000)),
	"Hole centre spacing on arc "+this.holeArc.getLinearSpacing());



	addOperation.apply(documentInterface.getDocument());

	// and add some Etchings

	documentInterface.setCurrentLayer("Etching");

	createText(documentInterface, addOperation, this.root
			.operator_add(new RVector(10, -20)),
			"PART & CUSTOMER DETAILS - to be etched");

	addOperation.apply(documentInterface.getDocument());

	//
	// Return the addOperation to the library insert wrapper
	// so it will be copied to the main document
	//

	return addOperation;

	};

Min.createFrameA = function(documentInterface, addOperation, pos)
// ********************************************************************************************************************
//
// 'Frame A' - cut and holed frame with no bends
//
// ********************************************************************************************************************
	{
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight");
	var allowance = this.getFloat("FrameARelativeWidth") / 2;

	var topOnly = true;

	createGothicArchRel(documentInterface, addOperation, pos, radius, width,
			height, this.getFloat("ArchBarWidth") + allowance);
	// TODO: Work out why 20 - needs to be derived from UI
	createGothicArchRel(documentInterface, addOperation, pos, radius, width,
			height, allowance, topOnly);
	// createGothicArchRel(documentInterface,
	// addOperation,pos,radius,width,height,allowance+this.getFloat("FrameCBarWidth"));
	var spring = getGothicSpring(radius, width, height);
	// this.createFrameAOutline(documentInterface,
	// addOperation,pos.operator_add(new RVector(-9.5,0)),width+19,spring);
	// debugger;
	var frameARoot = pos.operator_add(new RVector(-allowance, -allowance));

	this.createFrameAOutline(documentInterface, addOperation, frameARoot,
			width, spring + allowance);

	// Create Plastic holes as hole arrays

	var bottomBarHoles = new HoleArray();

	var startPos = frameARoot.operator_add(new RVector(this
			.getFloat("CutoutWidth")
			+ this.getFloat("PlasticHoleInset"), this
			.getFloat("PlasticHoleMargin")));

	var endPos = frameARoot.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("CutoutWidth") - this.getFloat("PlasticHoleInset"),
			this.getFloat("PlasticHoleMargin")));

	bottomBarHoles.autospace(startPos, endPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	bottomBarHoles.render(documentInterface, addOperation)

	var leftBarHoles = new HoleArray();

	var lhstartPos = frameARoot.operator_add(new RVector(this
			.getFloat("PlasticHoleMargin"), this.getFloat("CutoutHeight")
			+ this.getFloat("PlasticHoleInset")));

	var lhendPos = frameARoot.operator_add(new RVector(this
			.getFloat("PlasticHoleMargin"), spring + allowance
			- this.getFloat("PlasticHoleInset")));

	leftBarHoles.autospace(lhstartPos, lhendPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	leftBarHoles.render(documentInterface, addOperation);

	var rightBarHoles = new HoleArray();

	var rhstartPos = frameARoot.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("PlasticHoleMargin"), this.getFloat("CutoutHeight")
			+ this.getFloat("PlasticHoleInset")));

	var rhendPos = frameARoot.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("PlasticHoleMargin"), spring + allowance
			- this.getFloat("PlasticHoleInset")));

	rightBarHoles.autospace(rhstartPos, rhendPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	rightBarHoles.render(documentInterface, addOperation);

	};

Min.createFrameAOutline = function(documentInterface, addOperation, pos, width,
		spring)
	{
	var height = this.getFloat("MasonsOpeningHeight")
			- this.getFloat("FrameARelativeHeight");
	var cutoutWidth = this.getFloat("CutoutWidth");
	var cutoutHeight = this.getFloat("CutoutHeight");
	var bendReliefSlotWidth = this.getFloat("BendReliefSlotWidth");
	var allowance = this.getFloat("FrameARelativeWidth") / 2;

	// Hinge parameters

	var h_length = this.getFloat("HingeMountLength");
	var h_width = this.getFloat("HingeMountWidth");
	var r = this.getFloat("HingeMountRadius");
	var d = this.getFloat("HingeMountHoleDia");
	// spring needs to be OUTER SPRING
	var va = new Array(

	pos.operator_add(new RVector(cutoutWidth - bendReliefSlotWidth,
			cutoutHeight)), pos.operator_add(new RVector(0, cutoutHeight)), pos
			.operator_add(new RVector(0, spring
					- this.getFloat("BendSlotHeight"))), pos
			.operator_add(new RVector(this.getFloat("FrameABarWidth")
					- this.getFloat("ArchBarWidth")
					+ this.getFloat("BendSlotWidth"), spring
					- this.getFloat("BendSlotHeight"))), pos
			.operator_add(new RVector(this.getFloat("FrameABarWidth")
					- this.getFloat("ArchBarWidth")
					+ this.getFloat("BendSlotWidth"), spring)), pos
			.operator_add(new RVector(this.getFloat("FrameABarWidth")
					- this.getFloat("ArchBarWidth"), spring))

	);

	createPolyLine(documentInterface, addOperation, va);

	// var va2 = new Array(
	// pos.operator_add(new RVector(cutoutWidth, height-cutoutHeight)),
	// pos.operator_add(new RVector(cutoutWidth, height)),
	// pos.operator_add(new RVector(width-cutoutWidth,height)),
	// pos.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight))
	// );
	//
	// createPolyLine(documentInterface, addOperation, va2);

	var va3 = new Array(pos.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("FrameABarWidth") + this.getFloat("ArchBarWidth"),
			spring)), pos.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("FrameABarWidth") + this.getFloat("ArchBarWidth")
			- this.getFloat("BendSlotWidth"), spring)), pos
			.operator_add(new RVector(width + 2 * allowance
					- this.getFloat("FrameABarWidth")
					+ this.getFloat("ArchBarWidth")
					- this.getFloat("BendSlotWidth"), spring
					- this.getFloat("BendSlotHeight"))), pos
			.operator_add(new RVector(width + 2 * allowance, spring
					- this.getFloat("BendSlotHeight"))));

	createPolyLine(documentInterface, addOperation, va3);

	createGothicHinge(documentInterface, addOperation, pos
			.operator_add(new RVector(width + 2 * allowance, spring - 75)),
			h_length, h_width, r, d);
	createGothicHinge(documentInterface, addOperation, pos
			.operator_add(new RVector(width + 2 * allowance, spring / 2
					- h_length / 2 - r)), h_length, h_width, r, d);
	createGothicHinge(documentInterface, addOperation, pos
			.operator_add(new RVector(width + 2 * allowance, 75)), h_length,
			h_width, r, d);

	line(documentInterface, addOperation, pos.operator_add(new RVector(width
			+ 2 * allowance, spring - this.getFloat("BendSlotHeight"))), pos
			.operator_add(new RVector(width + 2 * allowance, spring
					- this.getFloat("BendSlotHeight") - 75 + h_length + 2 * r)));

	line(documentInterface, addOperation, pos.operator_add(new RVector(width
			+ 2 * allowance, spring / 2 + h_length / 2 + r)), pos
			.operator_add(new RVector(width + 2 * allowance, spring
					- this.getFloat("BendSlotHeight") - 75)));

	line(documentInterface, addOperation, pos.operator_add(new RVector(width
			+ 2 * allowance, 75 + h_length + 2 * r)), pos
			.operator_add(new RVector(width + 2 * allowance, spring / 2
					- h_length / 2 - r)));

	line(documentInterface, addOperation, pos.operator_add(new RVector(width
			+ 2 * allowance, cutoutHeight)), pos.operator_add(new RVector(width
			+ 2 * allowance, 75)));

	var va4 = new Array(pos.operator_add(new RVector(width + 2 * allowance,
			cutoutHeight)), pos.operator_add(new RVector(width + 2 * allowance
			- cutoutWidth + bendReliefSlotWidth, cutoutHeight)));

	createPolyLine(documentInterface, addOperation, va4);

	var va5 = new Array(pos.operator_add(new RVector(width + 2 * allowance
			- cutoutWidth, cutoutHeight)), pos.operator_add(new RVector(width
			+ 2 * allowance - cutoutWidth, 0)), pos.operator_add(new RVector(
			cutoutWidth, 0)), pos.operator_add(new RVector(cutoutWidth,
			cutoutHeight)));
	createPolyLine(documentInterface, addOperation, va5);

	// Now insert the bend reliefs

	var diameter = this.getFloat("BendReliefDiameter");
	var slotWidth = this.getFloat("BendReliefSlotWidth");
	var slotLength = this.getFloat("BendReliefSlotLength");

	createVBendRelief(documentInterface, addOperation, pos
			.operator_add(new RVector(cutoutWidth - bendReliefSlotWidth,
					cutoutHeight)), 1, 1, diameter, slotWidth, slotLength);
	// createVBendRelief(documentInterface, addOperation,pos.operator_add(new
	// RVector(cutoutWidth-bendReliefSlotWidth, height-cutoutHeight)),-1,1,
	// diameter, slotWidth, slotLength);
	// createVBendRelief(documentInterface, addOperation,pos.operator_add(new
	// RVector(width-cutoutWidth,height-cutoutHeight)),-1,-1, diameter,
	// slotWidth, slotLength);
	createVBendRelief(documentInterface, addOperation, pos
			.operator_add(new RVector(width + 2 * allowance - cutoutWidth,
					cutoutHeight)), 1, -1, diameter, slotWidth, slotLength);

	};

Min.createFrameC = function(documentInterface, addOperation, pos)
// ********************************************************************************************************************
//
// 'Frame C' - cut and holed frame with no bends
//
// ********************************************************************************************************************
	{
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight");
	var allowance = this.getFloat("FrameCRelativeWidth") / 2
			+ this.getFloat("Allowance"); // 6+2.5
	var sidebarHeight = getGothicSpring(radius, width, height) - allowance
			- this.getFloat("FrameCBarWidth") / 2
			- this.getFloat("WeldLugHoleWidth") / 2;
	var rad = radius-allowance;
	
//print("Outer arc frame c radius "+rad)
	
	createGothicArchRel(documentInterface, addOperation, pos, radius, width,
			height, allowance);

//rad = radius-(allowance + this.getFloat("FrameCBarWidth"));
//print("Outer arc frame c radius "+rad);


	createGothicArchRel(documentInterface, addOperation, pos, radius, width,
			height, allowance + this.getFloat("FrameCBarWidth"));
//special case so have to set up inset ourselves
	var weldTabBarHeight = getGothicSpring(radius, width, height) - allowance
			- this.getFloat("FrameCBarWidth") / 2
			- this.getFloat("WeldLugHoleWidth") / 2
			- this.getFloat("WeldLugHoleClearance")
			- (this.getFloat("WeldLugInset") - this.getFloat("WeldLugHoleClearance")*2)
			- (this.getFloat("WeldLugInset")- this.getFloat("WeldLugHoleClearance"));

	// var weldTabPos = pos.operator_add(
	// new
	// RVector(allowance+this.getFloat("FrameCBarWidth")/2-this.getFloat("WeldLugHoleWidth")/2-this.getFloat("WeldLugHoleClearance")/2,
	// allowance+this.getFloat("WeldLugInset")));

	
//	var tabLine = new WeldTabbedLine(new RVector(50,50),new RVector(50,550), false,false);
//	tabLine.render(documentInterface, addOperation);
//	
//	var holesBarL = new WeldTabHoleLine(new RVector(60,50),new RVector(60,550),false,false);
//	holesBarL.render(documentInterface, addOperation);
//
//
//	var tabLine = new WeldTabbedLine(new RVector(100,50),new RVector(100,550), true,true);
//	tabLine.render(documentInterface, addOperation);
//	
//	var holesBarL = new WeldTabHoleLine(new RVector(110,50),new RVector(110,550),true,true);
//	holesBarL.render(documentInterface, addOperation);
//
//
//	var tabLine = new WeldTabbedLine(new RVector(150,50),new RVector(150,550), false,true);
//	tabLine.render(documentInterface, addOperation);
//	
//	var holesBarL = new WeldTabHoleLine(new RVector(160,50),new RVector(160,550),false,true);
//	holesBarL.render(documentInterface, addOperation);

	
	var startPos = pos.operator_add(
			new RVector(
					allowance + this.getFloat("FrameCBarWidth") / 2 , 
					allowance + this.getFloat("FrameCBarWidth") / 2 + this.getFloat("WeldLugHoleWidth") / 2 + this.getFloat("WeldLugHoleClearance") 
			)
	);
	
	var endPos = pos.operator_add(
		   new RVector(
				   allowance + this.getFloat("FrameCBarWidth") / 2 ,
				   getGothicSpring(radius, width, height) 
			) 
	);
   
	var tabLine = new WeldTabbedLine(startPos,endPos, true,true);
	tabLine.render(documentInterface, addOperation);
	
	var holesBarL = new WeldTabHoleLine(startPos,endPos,true,true);
	holesBarL.render(documentInterface, addOperation);

	
			
	
//	var insetStartHole = false;
//	var insetEndHole = false;
//
//	this.createWeldTabHoleLine(documentInterface, addOperation, 
//			pos.operator_add(
//					new RVector(allowance, 
//							allowance + this.getFloat("FrameCBarWidth") / 2 
//							+ this.getFloat("WeldLugHoleWidth") / 2 
//							+ (this.getFloat("WeldLugInset") - this.getFloat("WeldLugHoleClearance")*2)
//					)
//			),
//			weldTabBarHeight, this.getFloat("FrameCBarWidth"), NORTH,
//			insetStartHole, insetEndHole);

	// this.createWeldTabHoleLine(documentInterface,
	// addOperation,
	// pos.operator_add(new RVector(width - allowance -
	// this.getFloat("FrameCBarWidth"),
	// allowance+this.getFloat("FrameCBarWidth")/2+this.getFloat("WeldLugHoleWidth")/2)),
	// weldTabBarHeight,
	// this.getFloat("FrameCBarWidth"),
	// NORTH);

	var insetStartHole = false;
	var insetEndHole = false;

	this.createWeldTabHoleLine(documentInterface, addOperation, pos
			.operator_add(new RVector(width - allowance
					- this.getFloat("FrameCBarWidth"), allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2
					+ (this.getFloat("WeldLugInset") - 2*this.getFloat("WeldLugHoleClearance"))
					)), 75- (this.getFloat("WeldLugInset") - this.getFloat("WeldLugHoleClearance")*2), this
			.getFloat("FrameCBarWidth"), NORTH, insetStartHole, insetEndHole);

	insetStartHole = false;
	insetEndHole = false;

	this.createWeldTabHoleLine(documentInterface, addOperation, pos
			.operator_add(new RVector(width - allowance
					- this.getFloat("FrameCBarWidth"), allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2 + 107)),
			(sidebarHeight - 246) / 2, this.getFloat("FrameCBarWidth"), NORTH,
			insetStartHole, insetEndHole);

	insetStartHole = false;
	insetEndHole = false;

	this.createWeldTabHoleLine(documentInterface, addOperation, pos
			.operator_add(new RVector(width - allowance
					- this.getFloat("FrameCBarWidth"), allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2 + 139
					+ (sidebarHeight - 246) / 2)), (sidebarHeight - 246) / 2,
			this.getFloat("FrameCBarWidth"), NORTH, insetStartHole,
			insetEndHole);

	insetStartHole = false;
	insetEndHole = true;

	this.createWeldTabHoleLine(documentInterface, addOperation, pos
			.operator_add(new RVector(width - allowance
					- this.getFloat("FrameCBarWidth"), allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2 + sidebarHeight
					- 75)), 75, this.getFloat("FrameCBarWidth"), NORTH,
			insetStartHole, insetEndHole);

	// Create arc of weld tab holes

	var arc = new WeldTabHoleArc(
			pos.operator_add(new RVector(
					width-radius,
					getGothicSpring(radius, width, height)
					)
			
			),
			radius-allowance-this.getFloat("FrameCBarWidth")/2,
			0,
			getGothicAngle(radius-allowance,width-2*allowance),
			true,
			true,
			Math.PI/36
			);
	
	arc.render(documentInterface, addOperation);
	
	
	var arc2 = new WeldTabHoleArc(
			pos.operator_add(new RVector(
					radius,
					getGothicSpring(radius, width, height)
					)
			
			),
			radius-allowance-this.getFloat("FrameCBarWidth")/2,
			Math.PI,
			Math.PI-getGothicAngle(radius-allowance,width-2*allowance),
			true,
			true,
			Math.PI/36
			);
	arc2.setReverse(true);
	arc2.render(documentInterface, addOperation);
	
	// stash the arc so we can retrieve its parameters for the side bars
	
	this.holeArc = arc;
	
	// var t_allowance = this.getFloat("TopBarRelativeWidth") / 2 +
	// this.getFloat("Allowance"); // 6+2.5
	// var sidebarHeight = this.getFloat("MasonsOpeningWidth") - 2 *
	// t_allowance;
//
//	var offset = this.getFloat("Allowance")
//			+ this.getFloat("FrameCRelativeWidth") / 2
//			+ this.getFloat("FrameCBarWidth") / 2
//			- this.getFloat("WeldLugHoleWidth") / 2;
//	var w_tab_width = width - 2 * offset;
//
	startPos = pos.operator_add(new RVector(
			this.getFloat("Allowance")
			+ this.getFloat("FrameCRelativeWidth") / 2
			+ this.getFloat("FrameCBarWidth") / 2
			- this.getFloat("WeldLugHoleWidth")/2,
			
			this.getFloat("Allowance")
			+ this.getFloat("FrameCRelativeWidth") / 2
			+ this.getFloat("FrameCBarWidth") / 2

			));
			
	endPos = pos.operator_add(new RVector(
			width
			- this.getFloat("Allowance")
			- this.getFloat("FrameCRelativeWidth") / 2
			- this.getFloat("FrameCBarWidth") / 2
			+ this.getFloat("WeldLugHoleWidth")/2,

			this.getFloat("Allowance")
			+ this.getFloat("FrameCRelativeWidth") / 2
			+ this.getFloat("FrameCBarWidth") / 2));

	
	var insetStartHole = false;
	var insetEndHole = false;
//
//	this.createWeldTabHoleLine(documentInterface, addOperation, startPos,
//			w_tab_width, this.getFloat("FrameCBarWidth"), EAST, insetStartHole,
//			insetEndHole);

	var holesBarB = new WeldTabHoleLine(startPos,endPos,insetStartHole, insetEndHole);
	holesBarB.render(documentInterface, addOperation);
	
	
	
	// Bottom Hinge mount holes

	createHole(documentInterface, addOperation, pos.operator_add(new RVector(
			width - allowance - this.getFloat("FrameCBarWidth") + 13, allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ 82.5)),
			5.5);

	createHole(documentInterface, addOperation,
			pos
					.operator_add(new RVector(width - allowance
							- this.getFloat("FrameCBarWidth") + 13, allowance
							+ this.getFloat("FrameCBarWidth") / 2
							+ 82.5+17)), 5.5);

	// Bottom Hinge mount holes

	createHole(documentInterface, addOperation, pos.operator_add(new RVector(
			width - allowance - this.getFloat("FrameCBarWidth") + 13, allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2 + sidebarHeight / 2
					- 17 / 2)), 5.5);
	createHole(documentInterface, addOperation, pos.operator_add(new RVector(
			width - allowance - this.getFloat("FrameCBarWidth") + 13, allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2 + sidebarHeight / 2
					+ 17 / 2)), 5.5);

	// Top holes

	createHole(documentInterface, addOperation, pos.operator_add(new RVector(
			width - allowance - this.getFloat("FrameCBarWidth") + 13, allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2 + sidebarHeight
					- 82.5)), 5.5);

	createHole(documentInterface, addOperation, pos.operator_add(new RVector(
			width - allowance - this.getFloat("FrameCBarWidth") + 13, allowance
					+ this.getFloat("FrameCBarWidth") / 2
					+ this.getFloat("WeldLugHoleWidth") / 2 + sidebarHeight
					- 82.5	 - 17)), 5.5);

	}

Min.createCappedArch = function(documentInterface, addOperation, pos)

// ********************************************************************************************************************
//
// Capped arc
//
// ********************************************************************************************************************

	{
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var allowance = this.getFloat("FrameCRelativeWidth") / 2
			+ this.getFloat("Allowance")+this.getFloat("FrameCBarWidth"); // TODO - work out why this is
	// 10
	createCappedGothicArch(documentInterface, addOperation, pos, radius-allowance, width
			- 2 * allowance, 20);

	this.addDimensions(documentInterface, addOperation, pos
			.operator_add(new RVector(0, 0)), pos.operator_add(new RVector(
			width - 2 * allowance, 0)), pos.operator_add(new RVector(0, -50)));

	}

Min.createFullSideBar = function(di, ao, pos)
// ********************************************************************************************************************
//
// Full side bar
//
// ********************************************************************************************************************
	{
	// Calculate height same as hole calc in Frame C
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight");
	var allowance = this.getFloat("FrameCRelativeWidth") / 2
			+ this.getFloat("Allowance"); // 6+2.5
	var sidebarHeight = getGothicSpring(radius, width, height) - allowance
			- this.getFloat("FrameCBarWidth") / 2
			- this.getFloat("WeldLugHoleWidth") / 2
			-this.getFloat("WeldLugHoleClearance");

	var sidebarWidth = this.getFloat("SidebarWidth");
	// Pick up params before calling generic routine
	var mountingLugInset = this.getFloat("MountingLugInset");
	var mountingLugMinSpacing = this.getFloat("MountingLugMinSpacing");
	var weldLugInset = this.getFloat("WeldLugInset");
	var weldLugMinSpacing = this.getFloat("WeldLugMinSpacing");
	var weldLugMaxSpacing = this.getFloat("WeldLugMaxSpacing");
	var weldLugWidth = this.getFloat("WeldLugWidth");
	var weldLugDepth = this.getFloat("WeldLugDepth");
	var lugHoleDiameter = this.getFloat("LugHoleDiameter");
	var lugWidth = this.getFloat("LugWidth");
	var lugHoleOffset = this.getFloat("LugHoleOffset");

	var insetStartTab = true;
	var insetEndTab = true;
	var suppressTop = true;
	var mirror = true;
	createSidebar(di, ao, pos, sidebarHeight, sidebarWidth, mountingLugInset,
			mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
			weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
			lugHoleOffset, insetStartTab, insetEndTab,suppressTop,mirror);
	var holeArcRadius = radius-allowance-this.getFloat("FrameCBarWidth") / 2;
	var barWidth=this.getFloat("TopBarWidth");
	var holeSpaceAngle=this.holeArc.getAngularSpacing(); // Ten degrees of arc
	var holeArcWidth=width-2*allowance-this.getFloat("FrameCBarWidth");
	
	createArcBar(di, ao, pos.operator_add(new RVector(0, sidebarHeight)),holeArcWidth,holeArcRadius,barWidth,holeSpaceAngle, weldLugWidth, weldLugDepth,sidebarWidth);
	
	// Add some plastic holes
	
	var BarHoles = new HoleArray();

	var StartPos = pos.operator_add(new RVector(-barWidth+this.getFloat("HoledBarMargin"),sidebarHeight+this.getFloat("HoledBarBottomInset")));
	var EndPos = pos.operator_add(new RVector(-barWidth+this.getFloat("HoledBarMargin"),sidebarHeight+getGothicArchLength(holeArcRadius,holeArcWidth)-this.getFloat("HoledBarTopInset")));


	BarHoles.autospace(StartPos,EndPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	BarHoles.render(di,ao);
	

	
	// Add dimensions
	
	
	
	this.addDimensions(di, ao, pos, pos.operator_add(new RVector(0,
			sidebarHeight+getGothicArchLength(holeArcRadius,holeArcWidth))), pos.operator_add(new RVector(-40,
			sidebarHeight / 2)));
	};

Min.createSplitSideBar = function(di, ao, pos)
// ********************************************************************************************************************
//
// Split side bar
//
// ********************************************************************************************************************
	{
	// Calculate height same as hole calc in Frame C
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight");
	
	var allowance = this.getFloat("FrameCRelativeWidth") / 2
			+ this.getFloat("Allowance"); // 6+2.5
	var sidebarHeight = getGothicSpring(radius, width, height) - allowance
			- this.getFloat("FrameCBarWidth") / 2
			- this.getFloat("WeldLugHoleWidth") / 2;

	var sidebarWidth = this.getFloat("SidebarWidth");
	// Pick up params before calling generic routine
	var mountingLugInset = this.getFloat("MountingLugInset");
	var mountingLugMinSpacing = this.getFloat("MountingLugMinSpacing");
	var weldLugInset = this.getFloat("WeldLugInset");
	var weldLugMinSpacing = this.getFloat("WeldLugMinSpacing");
	var weldLugMaxSpacing = this.getFloat("WeldLugMaxSpacing");
	var weldLugWidth = this.getFloat("WeldLugWidth");
	var weldLugDepth = this.getFloat("WeldLugDepth");
	var lugHoleDiameter = this.getFloat("LugHoleDiameter");
	var lugWidth = this.getFloat("LugWidth");
	var lugHoleOffset = this.getFloat("LugHoleOffset");

	var insetStartTab = false;
	var insetEndTab = true;
	var suppressTop = false;
	var mirror = true;
	
	createSidebar(di, ao, pos, 75, sidebarWidth, mountingLugInset,
			mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
			weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
			lugHoleOffset, insetStartTab, insetEndTab,suppressTop,mirror);

	insetStartTab = false;
	insetEndTab = false;

	createSidebar(di, ao, pos.operator_add(new RVector(0, 107)),
			(sidebarHeight - 246) / 2, sidebarWidth, mountingLugInset,
			mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
			weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
			lugHoleOffset, insetStartTab, insetEndTab,suppressTop,mirror);
	insetStartTab = false;
	insetEndTab = false;

	createSidebar(di, ao, pos.operator_add(new RVector(0,
			139 + (sidebarHeight - 246) / 2)), (sidebarHeight - 246) / 2,
			sidebarWidth, mountingLugInset, mountingLugMinSpacing,
			weldLugInset, weldLugWidth, weldLugDepth, weldLugMinSpacing,
			weldLugMaxSpacing, lugHoleDiameter, lugWidth, lugHoleOffset,
			insetStartTab, insetEndTab,suppressTop,mirror);

	insetStartTab = true;
	insetEndTab = false;
	suppressTop = true;
	
	createSidebar(di, ao, pos.operator_add(new RVector(0, sidebarHeight - 75)),
			75, sidebarWidth, mountingLugInset, mountingLugMinSpacing,
			weldLugInset, weldLugWidth, weldLugDepth, weldLugMinSpacing,
			weldLugMaxSpacing, lugHoleDiameter, lugWidth, lugHoleOffset,
			insetStartTab, insetEndTab,suppressTop,mirror);

	var holeArcRadius = radius-allowance-this.getFloat("FrameCBarWidth") / 2;
	var barWidth=this.getFloat("TopBarWidth");
	var holeSpaceAngle=2*Math.PI/36; // Ten degrees of arc
	var holeArcWidth=width-2*allowance-this.getFloat("FrameCBarWidth");
	
	createArcBar(di, ao, pos.operator_add(new RVector(0, sidebarHeight)),holeArcWidth,holeArcRadius,barWidth,holeSpaceAngle, weldLugWidth, weldLugDepth,sidebarWidth);
	
// Add some plastic holes
	
	var BarHoles = new HoleArray();

	var StartPos = pos.operator_add(new RVector(-barWidth+this.getFloat("HoledBarMargin"),sidebarHeight+this.getFloat("HoledBarBottomInset")));
	var EndPos = pos.operator_add(new RVector(-barWidth+this.getFloat("HoledBarMargin"),sidebarHeight+getGothicArchLength(holeArcRadius,holeArcWidth)-this.getFloat("HoledBarTopInset")));


	BarHoles.autospace(StartPos,EndPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	BarHoles.render(di,ao);

// And some dimensions
	
	this.addDimensions(di, ao, pos, pos.operator_add(new RVector(0,
			sidebarHeight+getGothicArchLength(holeArcRadius,holeArcWidth))), pos.operator_add(new RVector(-40,
			sidebarHeight / 2)));
	}

Min.createBottomBar = function(di, ao, pos)
// ********************************************************************************************************************
//
// Bottom bar
//
// ********************************************************************************************************************
	{
	// Calculate height same as hole calc in Frame C
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight");
	var allowance = this.getFloat("TopBarRelativeWidth") / 2
			+ this.getFloat("Allowance"); // 6+2.5
	var sidebarHeight = this.getFloat("MasonsOpeningWidth") - 2 * allowance;

	var sidebarWidth = this.getFloat("SidebarWidth");
	// Pick up params before calling generic routine
	var mountingLugInset = this.getFloat("MountingLugInset");
	var mountingLugMinSpacing = this.getFloat("MountingLugMinSpacing");
	var weldLugInset = 0;
	var weldLugMinSpacing = this.getFloat("WeldLugMinSpacing");
	var weldLugMaxSpacing = this.getFloat("WeldLugMaxSpacing");
	var weldLugWidth = this.getFloat("WeldLugWidth");
	var weldLugDepth = this.getFloat("WeldLugDepth");
	var lugHoleDiameter = this.getFloat("LugHoleDiameter");
	var lugWidth = this.getFloat("LugWidth");
	var lugHoleOffset = this.getFloat("LugHoleOffset");

	var insetStartTab = false;
	var insetEndTab = false;

	createSidebar(di, ao, pos, sidebarHeight, sidebarWidth, mountingLugInset,
			mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
			weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
			lugHoleOffset, insetStartTab, insetEndTab,false,true);

	this.addDimensions(di, ao, pos, pos.operator_add(new RVector(0,
			sidebarHeight)), pos.operator_add(new RVector(-40,
			sidebarHeight / 2)));
	}

Min.createSimpleBars = function(di, ao, pos)
// ********************************************************************************************************************
//
// Simple bars
//
// ********************************************************************************************************************
	{
	
	var allowance_17 = this.getFloat("FrameCRelativeWidth") + this.getFloat("Allowance") + this.getFloat("FrameCBarWidth"); // TODO - work out why this is
	// 17mm bar fits outer arc of capped arch

	var radius_17 = this.getFloat("Radius")-allowance_17+this.getFloat("CappedArchBarWidth");
	var width_17 = this.getFloat("MasonsOpeningWidth")-2*allowance_17+this.getFloat("CappedArchBarWidth");

	
	createRectangle(di, ao, pos, this.getFloat("SimpleBarWidth"),getGothicArchLength(radius_17,width_17) );
	createRectangle(di, ao, pos.operator_add(new RVector(30, 0)), this.getFloat("SimpleBarWidth"),getGothicArchLength(radius_17,width_17) );
	
	// 22mm bar fits ouer arc of frame A
	var allowance_22 = this.getFloat("Allowance")-this.getFloat("FrameARelativeWidth") + this.getFloat("FrameABarWidth") - this.getFloat("ArchBarWidth"); // TODO - work out why this is
	var radius_22 = this.getFloat("Radius")-allowance_22;
	var width_22 = this.getFloat("MasonsOpeningWidth")-2*allowance_22;	
	
	createRectangle(di, ao, pos.operator_add(new RVector(60, 0)), this.getFloat("HoledSimpleBarWidth"),getGothicArchLength(radius_22,width_22));
	createRectangle(di, ao, pos.operator_add(new RVector(90, 0)), this.getFloat("HoledSimpleBarWidth"),getGothicArchLength(radius_22,width_22));
	
	// Add holes to this one
	
	var firstBarHoles = new HoleArray();

	var firstStartPos = pos.operator_add(new RVector(60+this.getFloat("HoledBarMargin"),this.getFloat("HoledBarBottomInset")));
	var firstEndPos = pos.operator_add(new RVector(60+this.getFloat("HoledBarMargin"),getGothicArchLength(radius_22,width_22)-this.getFloat("HoledBarTopInset")));


	firstBarHoles.autospace(firstStartPos,firstEndPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	firstBarHoles.render(di,ao);


	var secondBarHoles = new HoleArray();

	var secondStartPos = pos.operator_add(new RVector(90+this.getFloat("HoledBarMargin"),this.getFloat("HoledBarBottomInset")));
	var secondEndPos = pos.operator_add(new RVector(90+this.getFloat("HoledBarMargin"),getGothicArchLength(radius_22,width_22)-this.getFloat("HoledBarTopInset")));


	secondBarHoles.autospace(secondStartPos,secondEndPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	secondBarHoles.render(di,ao);


	
	// Dimensions
	
	this.addDimensions(di, ao, 	pos, 
			pos.operator_add(new RVector(0, getGothicArchLength(radius_17,width_17))), 
			pos.operator_add(new RVector(-25,getGothicArchLength(radius_17,width_17)/2))
			);

	this.addDimensions(di, ao, 	pos.operator_add(new RVector(112,0)), 
			pos.operator_add(new RVector(112, getGothicArchLength(radius_22,width_22))), 
			pos.operator_add(new RVector(137,getGothicArchLength(radius_22,width_22)/2))
			);

	};

Min.createMasonsOpening = function(documentInterface, addOperation, pos)

// ********************************************************************************************************************
//
// Masons Opening
//
// ********************************************************************************************************************

	{
	block = new RBlock(documentInterface.getDocument(), "Masons Opening", pos);

	documentInterface.setCurrentBlock("Masons Opening");

	this.createMasonsOpeningOutline(documentInterface, addOperation, pos);
	this.createMasonsOpeningArch(documentInterface, addOperation, pos);
	addOperation.apply(documentInterface.getDocument());
	documentInterface.setCurrentBlock("");

	this.createMasonsOpeningDimensions(documentInterface, addOperation, pos);
	};

Min.createMasonsOpeningArch = function(documentInterface, addOperation, pos)
	{
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight")

	createGothicArchRel(documentInterface, addOperation, pos, radius, width,
			height, 0);
	}

Min.createMasonsOpeningOutline = function(documentInterface, addOperation, pos)
	{
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight")

	var outerLines = [
			pos.operator_add(new RVector(0, getGothicSpring(radius, width,
					height))),
			pos,
			pos.operator_add(new RVector(width, 0)),
			pos.operator_add(new RVector(width, getGothicSpring(radius, width,
					height)))];

	createPolyLine(documentInterface, addOperation, outerLines);
	};

Min.createMasonsOpeningDimensions = function(documentInterface, addOperation,
		pos)
	{
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight")

	this.addDimensions(documentInterface, addOperation, pos
			.operator_add(new RVector(width / 2, 0)), pos
			.operator_add(new RVector(width / 2, height)), pos
			.operator_add(new RVector(-25, height / 2)));

	this.addDimensions(documentInterface, addOperation, pos, pos
			.operator_add(new RVector(width, 0)), pos.operator_add(new RVector(
			0, -50)));

	}

// ********************************************************************************************************************
//
// Support functions
//
// ********************************************************************************************************************


Min.createWeldTabHoleLine = function(documentInterface, addOperation, pos,
		length, width, orientation, insetStartHole, insetEndHole)
	{
	// Convenience wrapper to save getting the standard dims every time
	// pos is bottom left corner of bar
	// 
	var minSpacing = this.getFloat("WeldLugMinSpacing");
	var maxSpacing = this.getFloat("WeldLugMaxSpacing");

	var weldLugWidth = this.getFloat("WeldLugWidth");
	var weldLugHoleWidth = this.getFloat("WeldLugHoleWidth");
	var weldLugHoleClearance = this.getFloat("WeldLugHoleClearance");
	var weldLugInset = this.getFloat("WeldLugInset");

	createWeldTabHoleLine(documentInterface, addOperation, pos, length, width,
			minSpacing, maxSpacing, orientation, weldLugWidth,
			weldLugHoleWidth, weldLugHoleClearance, weldLugInset,
			insetStartHole, insetEndHole);

	}

// Min.drillPlasticHoles = function(documentInterface, addOperation,pos,spring)
// {
//
// var length = spring-2*this.getfloat("FrameABarWidth");
//	
// var s = this.calcHoleCount(length,FullFrameSet.frameAPlasticHoleSpacing,3);
// spacing = length/(s-1);
//
// var v = FullFrameSet.createHole(documentInterface,
// addOperation,
// FullFrameSet.frameARoot.operator_add(new
// RVector(5,FullFrameSet.frameABarHeight+3)),
// FullFrameSet.plasticHoleDiameter);
//
// var v2 = FullFrameSet.createHole(documentInterface,
// addOperation,
// FullFrameSet.frameARoot.operator_add(new
// RVector(FullFrameSet.frameAWidth-5,FullFrameSet.frameABarHeight+3)),
// FullFrameSet.plasticHoleDiameter);
// s--;
//
// for (var i = 1; i <= s; i++) {
// v = FullFrameSet.createHole(documentInterface,
// addOperation,
// v.operator_add(new RVector(0,spacing)),
// FullFrameSet.plasticHoleDiameter);
// v2 = FullFrameSet.createHole(documentInterface,
// addOperation,
// v2.operator_add(new RVector(0,spacing)),
// FullFrameSet.plasticHoleDiameter);
// }
//

// FullFrameSet.createHole(documentInterface, addOperation,
// FullFrameSet.frameARoot.operator_add(new
// RVector(FullFrameSet.cutoutWidth+11,FullFrameSet.frameAHeight-5.5)), 99);
//
// var width =
// FullFrameSet.frameAWidth-(FullFrameSet.frameABarWidth+38)-(FullFrameSet.frameABarWidth+3)
// ;
//	
// //s = Math.ceil(width/FullFrameSet.frameAPlasticHoleSpacing);
// s =
// FullFrameSet.calcHoleCount(width,FullFrameSet.frameAPlasticHoleSpacing,3);
// spacing = width/(s-1);
//
// var v3 = FullFrameSet.createHole(documentInterface,
// addOperation,
// FullFrameSet.frameARoot.operator_add(new
// RVector(FullFrameSet.frameABarWidth+38,5)),
// FullFrameSet.plasticHoleDiameter);
//
// var v4 = FullFrameSet.createHole(documentInterface,
// addOperation,
// FullFrameSet.frameARoot.operator_add(new
// RVector(FullFrameSet.frameABarWidth+38,FullFrameSet.frameAHeight-5)),
// FullFrameSet.plasticHoleDiameter);
//
// s--;
//
// for (var i = 1; i <= s; i++) {
// v3 = FullFrameSet.createHole(documentInterface,
// addOperation,
// v3.operator_add(new RVector(spacing,0)),
// FullFrameSet.plasticHoleDiameter);
// v4 = FullFrameSet.createHole(documentInterface,
// addOperation,
// v4.operator_add(new RVector(spacing,0)),
// FullFrameSet.plasticHoleDiameter);
// }
//
//
// //FullFrameSet.createHole(documentInterface, addOperation,
// FullFrameSet.frameARoot.operator_add(new
// RVector(FullFrameSet.cutoutWidth+11,FullFrameSet.frameAHeight-5.5)), 99);
//
//
//
//
// };

Min.createIcon = function(documentInterface)
	{

	var addOperation = new RAddObjectsOperation(false);

	createRectangle(documentInterface, addOperation, new RVector(0, 0), 10, 12);
	createRectangle(documentInterface, addOperation, new RVector(1, 1), 8, 10);

	createText(documentInterface, addOperation, new RVector(0, 0), "MN");
	createText(documentInterface, addOperation, new RVector(3, 7), "00");

	return addOperation;
	};

Min.createLayers = function(documentInterface, layers)

//
// createLayers: adds a number of layers from an array of text labels
//
	{

	var addLayerOperation = new RAddObjectsOperation(false);

	for (i = 0; i < layers.length; i++)
		{
		addLayerOperation
				.addObject(new RLayer(documentInterface.getDocument(),
						layers[i], false, false, documentInterface
								.getCurrentColor(), documentInterface
								.getCurrentLinetypeId(), RLineweight.Weight005));
		}

	addLayerOperation.apply(documentInterface.getDocument());

	};

Min.createBlocks = function(documentInterface, blocks)

//
// createLayers: adds a number of layers from an array of text labels
//
	{

	var addBlockOperation = new RAddObjectsOperation(false);

	for (i = 0; i < blocks.length; i++)
		{
		addBlockOperation.addObject(new RBlock(documentInterface.getDocument(),
				blocks[i], new RVector(0, 0)));
		}

	addBlockOperation.apply(documentInterface.getDocument());

	};

Min.addDimensions = function(documentInterface, addOperation, p1, p2, pDim)
// Add dimension lines, from p1 to p2 with dimensions at pDim
	{
	// Stash teh layer we're using presently
	currentLayerId = documentInterface.getDocument().getCurrentLayerId();

	addOperation.apply(documentInterface.getDocument());
	// Change to dimensions layer
	documentInterface.getDocument().setCurrentLayer("Dimensions");

	var dim = new RDimAlignedData();

	dim.setExtensionPoint1(p1);
	dim.setExtensionPoint2(p2);
	dim.setDefinitionPoint(pDim);

	var dimEnt = new RDimAlignedEntity(documentInterface.getDocument(), dim);

	addOperation.addObject(dimEnt, false);
	addOperation.apply(documentInterface.getDocument());

	// Back to our previous layer
	documentInterface.getDocument().setCurrentLayer(currentLayerId);
	}

Min.getText = function(label)
	{
	if (this.hasOwnProperty(label))
		{
		return this[label];
		}
	else if (this.widgets[label])
		{
		return this.widgets[label].text;
		}
	else
		{
		return label.concat(": not defined");
		}

	}

Min.getFloat = function(label)
	{

	if (this.hasOwnProperty(label))
		{
		return this[label];
		}
	else if (this.widgets[label]) // / This test is not working
		{
		return parseFloat(this.widgets[label].text);
		}
	else
		{
		print("Error getting " + label);
		return label.concat(": not defined");
		}
	}

Min.getBoolean = function(label)
	{
	if (this.hasOwnProperty(label))
		{
		return this[label];
		}
	else if (this.widgets[label])
		{
		return this.widgets[label].checked;
		}
	else
		{
		return label.concat(": not defined");
		}
	}

Min.setValues = function()
	{

	//
	// Set requested sizes (default sizes are suitable for ICON generation
	//

	this.customerName = this.widgets["CustomerName"].text;
	this.MasonsOpeningWidth = parseFloat(
			this.widgets["MasonsOpeningWidth"].text, 10);
	this.MasonsOpeningHeight = parseFloat(
			this.widgets["MasonsOpeningHeight"].text, 10);
	this.cutoutHeight = parseFloat(this.widgets["CutoutHeight"].text, 10);
	this.cutoutWidth = parseFloat(this.widgets["CutoutWidth"].text, 10);

	this.frameARelativeWidth = parseFloat(
			this.widgets["FrameARelativeWidth"].text, 10);
	this.frameARelativeHeight = parseFloat(
			this.widgets["FrameARelativeHeight"].text, 10);
	this.frameABarWidth = parseFloat(this.widgets["FrameABarWidth"].text, 10);
	this.frameABarHeight = parseFloat(this.widgets["FrameABarHeight"].text, 10);
	this.frameAPlasticHoleSpacing = parseFloat(
			this.widgets["FrameAPlasticHoleSpacing"].text, 10);

	this.frameCRelativeWidth = parseFloat(
			this.widgets["FrameCRelativeWidth"].text, 10);
	this.frameCRelativeHeight = parseFloat(
			this.widgets["FrameCRelativeHeight"].text, 10);
	this.frameCBarWidth = parseFloat(this.widgets["FrameCBarWidth"].text, 10);
	this.frameCBarHeight = parseFloat(this.widgets["FrameCBarHeight"].text, 10);

	this.frameCHingeHoleWidth = parseFloat(
			this.widgets["FrameCHingeHoleWidth"].text, 10);
	this.frameCHingeHoleHeight = parseFloat(
			this.widgets["FrameCHingeHoleHeight"].text, 10);
	this.frameCHingeHoleCentreW = parseFloat(
			this.widgets["FrameCHingeHoleCentreW"].text, 10);
	this.frameCHingeHoleCentreH = parseFloat(
			this.widgets["FrameCHingeHoleCentreH"].text, 10);

	this.holeDiameter = parseFloat(this.widgets["HoleDiameter"].text, 10);
	this.plasticHoleDiameter = parseFloat(
			this.widgets["PlasticHoleDiameter"].text, 10);
	this.bendReliefDiameter = parseFloat(
			this.widgets["BendReliefDiameter"].text, 10);
	this.bendReliefSlotWidth = parseFloat(
			this.widgets["BendReliefSlotWidth"].text, 10);
	this.bendReliefSlotLength = parseFloat(
			this.widgets["BendReliefSlotLength"].text, 10);

	this.lugWidth = parseFloat(this.widgets["LugWidth"].text, 10);
	this.lugHoleOffset = parseFloat(this.widgets["LugHoleOffset"].text, 10);
	this.lugHoleDiameter = parseFloat(this.widgets["LugHoleDiameter"].text, 10);
	this.mountingLugInset = parseFloat(this.widgets["MountingLugInset"].text,
			10);
	this.mountingLugMinSpacing = parseFloat(
			this.widgets["MountingLugMinSpacing"].text, 10);
	this.mountingLugMaxSpacing = parseFloat(
			this.widgets["MountingLugMaxSpacing"].text, 10);

	this.sidebarWidth = parseFloat(this.widgets["SidebarWidth"].text, 10);
	this.sidebarRelativeHeight = parseFloat(
			this.widgets["SidebarRelativeHeight"].text, 10);
	this.sidebarSealHoleSpacing = parseFloat(
			this.widgets["SidebarSealHoleSpacing"].text, 10);
	this.sidebarSealHoleDiameter = parseFloat(
			this.widgets["SidebarSealHoleDiameter"].text, 10);

	this.weldLugWidth = parseFloat(this.widgets["WeldLugWidth"].text, 10);
	this.weldLugDepth = parseFloat(this.widgets["WeldLugDepth"].text, 10);
	this.weldLugInset = parseFloat(this.widgets["WeldLugInset"].text, 10);
	this.weldLugMinSpacing = parseFloat(this.widgets["WeldLugMinSpacing"].text,
			10);
	this.weldLugMaxSpacing = parseFloat(this.widgets["WeldLugMaxSpacing"].text,
			10);
	this.weldLugHoleWidth = parseFloat(this.widgets["WeldLugHoleWidth"].text,
			10);
	this.weldLugHoleClearance = parseFloat(
			this.widgets["WeldLugHoleClearance"].text, 10);

	this.topbarBarWidth = parseFloat(this.widgets["TopBarWidth"].text, 10);
	this.topbarRelativeWidth = parseFloat(
			this.widgets["TopBarRelativeWidth"].text, 10);

	this.setDerivedValues();

	};

Min.setDerivedValues = function()
	{

	//
	// Set up a few derived fvalues that will be used repeatedly
	//
	this.frameAWidth = this.MasonsOpeningWidth + this.frameARelativeWidth;
	this.frameAHeight = this.MasonsOpeningHeight + this.frameARelativeHeight;
	this.frameARoot = new RVector(0,
			(this.MasonsOpeningHeight - this.frameARelativeHeight) / 2);

	// this.frameCWidth = this.finishedWidth+this.frameCRelativeWidth;
	// this.frameCHeight = this.finishedHeight+this.frameCRelativeHeight;

	this.frameCWidth = this.getFloat("MasonsOpeningWidth")
			+ this.getFloat("FrameCRelativeWidth");
	this.frameCHeight = this.getFloat("MasonsOpeningHeight")
			+ this.getFloat("FrameCRelativeHeight");

	this.frameCRoot = new RVector(-1.2 * this.MasonsOpeningWidth,
			(this.MasonsOpeningHeight - this.frameCRelativeHeight) / 2);

	this.sidebarHeight = this.MasonsOpeningHeight + this.sidebarRelativeHeight;
	this.sidebarRoot = new RVector(-1.5 * this.MasonsOpeningWidth,
			(this.MasonsOpeningHeight - this.sidebarRelativeHeight) / 2);

	this.topbarRoot = new RVector(this.frameCRoot.getX()
			+ (this.frameCWidth - this.topbarWidth) / 2,
			this.frameCHeight * 1.6);

	this.topbarWidth = this.MasonsOpeningWidth + this.topbarRelativeWidth;
	this.bottombarRoot = new RVector(this.frameCRoot.getX()
			+ (this.frameCWidth - this.topbarWidth) / 2,
			this.frameCHeight * 0.2);

	};
