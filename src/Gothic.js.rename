
// Gothic.js

// library.js contains some convenience functions like 'isNull':
// This source is now managed under GIT
// This program creates laser cutting layout for gothic windows

include("scripts/library.js");
include("scripts/WidgetFactory.js");
include("./primitives.js");

//
// Create main object
// 

var ui;

function Gothic()
	{
	};

// ********************************************************************************************************************
//
// Top level creation
//
// ********************************************************************************************************************

Gothic.init = function(formWidget)
	{

	//
	// Read widget to get object from which we can extract parameters
	//

	if (!isNull(formWidget))
		{
		this.widgets = getWidgets(formWidget);
		}
	
	// this is done simply to aid readability of the code and to make 
	// some utils available in other areas till I get the scoping fixed
	
	ui = this; 
	this.versionNumber = "09";
	this.twoLetterCode = "GW";
	
	};

Gothic.generate = function(di, file)

//
// Main function to generate the frames
//

	{

	this.setValues();
	return this.create(di);
	};

Gothic.generatePreview = function(di, iconSize)
	{
	//
	// Function to generate the frames icon
	//

	return this.createIcon(di);

	};

Gothic.create = function(di)
	{

	// First create all the required layers

	var layers = ["Laser Cutting", "Text", "Etching", "Dimensions"];
	this.createLayers(di, layers);

//	var blocks = ["Masons Opening", "Frame A", "Frame C", "Arch Piece",
//			"Full Side Bar", "Split Side Bar"];
//	this.createBlocks(di, blocks);

	// Then add the items to each layer
	// empty layers will not be displayed
	// As the copy process in QCAD ignores them

	var ao = new RAddObjectsOperation(false);

	// Create a reference point which all others will be spaced from

	this.root = new RVector(0, 0);
	maxWidth = this.getFloat("MasonsOpeningWidth");
	//
	// This is where the actual creation stuff is done
	// 

	di.setCurrentLayer("Laser Cutting");

	var glassTemplate = new GothicOutline(
			this.getFloat("MasonsOpeningWidth"),
			this.getFloat("MasonsOpeningHeight"),
			this.getFloat("Radius"),
			this.getFloat("Allowance")+this.getFloat("FrameCRelativeWidth")/2+this.getFloat("FrameCBarWidth")-this.getFloat("GlassOverlap"),
			offset(this.root,maxWidth, -1));
	glassTemplate.render(di,ao);
	
	this.createMasonsOpening(di, ao, this.root);
	// this.createFrameC(di, ao,
	// this.root.operator_add(new
	// RVector(this.getFloat("MasonsOpeningWidth")+100,0)));
	this.createFrameA(di, ao, offset(this.root,
			maxWidth, 1));

	this.createFrameC(di, ao, offset(this.root,
			maxWidth, 2));

	this.createCappedArch(di, ao, offset(this.root,
			maxWidth, 3));

	this.createFullSideBar(di, ao, offset(this.root,
			maxWidth, 4));

	this.createSplitSideBar(di, ao, offset(this.root,
			maxWidth, 5));

	this.createBottomBar(di, ao, offset(this.root,
			maxWidth, 6));

	this.createSimpleBars(di, ao, offset(this.root,
			maxWidth, 7));

	ao.apply(di.getDocument());

	// and add some labels

	di.setCurrentLayer("Text");

	var txt = new Text("Glass Template",offset(this.root, maxWidth, -1),8,4,0,"Text");
	txt.render(di,ao);

	var txt = new Text("Glass Template DO NOT CUT",offset(this.root, maxWidth, -1).operator_add(new RVector(maxWidth*0.3,200))
			,20,10,Math.PI/2,"Laser Cutting");
	txt.render(di,ao);

	
	var txt = new Text("Masons opening as measured",offset(this.root, maxWidth, 0),8,4,0,"Text");
	txt.render(di,ao);
	
	txt = new Text("Frame A",offset(this.root, maxWidth, 1),8,4,0,"Text");
	txt.render(di,ao);
	
	txt = new Text("Frame C",offset(this.root, maxWidth, 2),8,4,0,"Text");
	txt.render(di,ao);
	
	txt = new Text("Capped Arch",offset(this.root, maxWidth, 3),8,4,0,"Text");
	txt.render(di,ao);
	
	txt = new Text("Full Sidebar",offset(this.root, maxWidth, 4),8,4,0,"Text");
	txt.render(di,ao);
	
	txt = new Text("Split Sidebar",offset(this.root, maxWidth, 5),8,4,0,"Text");
	txt.render(di,ao);
	
	txt = new Text("Bottom Bar",offset(this.root, maxWidth, 6),8,4,0,"Text");
	txt.render(di,ao);
	
	txt = new Text("Simple Bars",offset(this.root, maxWidth, 7),8,4,0,"Text");
	txt.render(di,ao);

	txt = new Text("Hole centre spacing on arc "+this.holeArc.getLinearSpacing(),
			offset(this.root, maxWidth, 3).operator_add(new RVector(0,1000)),8,4,0,"Text");
	txt.render(di,ao);
	
	// and add some Etchings


	// Frame A

	txt = new Text("JOB Ref: "+ui.getText("CustomerName"),
			offset(this.root, maxWidth, 1).operator_add(new RVector(100,20)),8,4,0,"Etching");
	txt.render(di,ao);
//
//	
//	createText(di, ao, offset(this.root, maxWidth, 1).operator_add(new RVector(100,20)),
//			"JOB Ref: "+ui.getText("CustomerName"));

	// Frame C
	
	txt = new Text("JOB Ref: "+ui.getText("CustomerName"),
			offset(this.root, maxWidth, 2).operator_add(
					new RVector(100,ui.getFloat("FrameCRelativeWidth")+7)),6,3,0,"Etching");
	txt.render(di,ao);
	
	// Capped arch

	txt = new Text("JOB Ref: "+ui.getText("CustomerName"),
			offset(this.root, maxWidth, 3).operator_add(
					new RVector(-10,10)),4,2,0.95*Math.PI/2,"Etching");
	txt.render(di,ao);

	//Full side bar
	

	txt = new Text(ui.getText("CustomerName"),
			offset(this.root, maxWidth, 4).operator_add(
					new RVector(-10,-10+ui.getFloat("FrameCBarWidth")/2)),2,1,Math.PI/2,"Etching");
	txt.render(di,ao);
	//	Split side bars	
	
	txt = new Text(ui.getText("CustomerName"),
			offset(this.root, maxWidth, 5).operator_add(
					new RVector(-10,15+ui.getFloat("FrameCBarWidth")/2)),2,1,Math.PI/2,"Etching");
	txt.render(di,ao);

	txt = new Text(ui.getText("CustomerName"),
			offset(this.root, maxWidth, 5).operator_add(
					new RVector(-10,ui.hingeAssembly.getBottomHingeCentre().getY()+ui.getFloat("HingeHoleClearance")+15)),2,1,Math.PI/2,"Etching");
	txt.render(di,ao);

	txt = new Text(ui.getText("CustomerName"),
			offset(this.root, maxWidth, 5).operator_add(
					new RVector(-10,ui.hingeAssembly.getMiddleHingeCentre().getY()+ui.getFloat("HingeHoleClearance")+15)),2,1,Math.PI/2,"Etching");
	txt.render(di,ao);

	txt = new Text(ui.getText("CustomerName"),
			offset(this.root, maxWidth, 5).operator_add(
					new RVector(-10,ui.hingeAssembly.getTopHingeCentre().getY()+ui.getFloat("HingeHoleClearance")+15)),2,1,Math.PI/2,"Etching");
	txt.render(di,ao);

	// Bottom Bar

	txt = new Text(ui.getText("CustomerName"),
			offset(this.root, maxWidth, 6).operator_add(
					new RVector(-10,-10+ui.getFloat("FrameCBarWidth")/2)),2,1,Math.PI/2,"Etching");
	txt.render(di,ao);

	// Simple Bars

	txt = new Text("JOB Ref: "+ui.getText("CustomerName"),
			offset(this.root, maxWidth, 7).operator_add(
					new RVector(10,15+ui.getFloat("FrameCBarWidth")/2)),3,1.5,Math.PI/2,"Etching");
	txt.render(di,ao);

	txt = new Text("JOB Ref: "+ui.getText("CustomerName"),
			offset(this.root, maxWidth, 7).operator_add(
					new RVector(40,15+ui.getFloat("FrameCBarWidth")/2)),3,1.5,Math.PI/2,"Etching");
	txt.render(di,ao);

	txt = new Text("JOB Ref: "+ui.getText("CustomerName"),
			offset(this.root, maxWidth, 7).operator_add(
					new RVector(70,15+ui.getFloat("FrameCBarWidth")/2)),3,1.5,Math.PI/2,"Etching");
	txt.render(di,ao);

	txt = new Text("JOB Ref: "+ui.getText("CustomerName"),
			offset(this.root, maxWidth, 7).operator_add(
					new RVector(100,15+ui.getFloat("FrameCBarWidth")/2)),3,1.5,Math.PI/2,"Etching");
	txt.render(di,ao);

	
	//
	// Return the ao to the library insert wrapper
	// so it will be copied to the main document
	//

	return ao;

	};

Gothic.createFrameA = function(di, ao, pos)
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

	// Create the two parts of the top arch
	// inner part is a full Gothic opening
	
	createGothicArchRel(di, ao, pos, radius, width,
			height, this.getFloat("ArchBarWidth") + allowance);

	createGothicArchRel(di, ao, pos, radius, width,
			height, allowance, topOnly);

	// Caculate a few reference points
	
	var spring = getGothicSpring(radius, width, height);
	
	var frameARoot = pos.operator_add(new RVector(-allowance, -allowance));

	// Draw the outer complex lines
	
	this.createFrameAOutline(di, ao, frameARoot,
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
	bottomBarHoles.render(di, ao);

	var leftBarHoles = new HoleArray();

	var lhstartPos = frameARoot.operator_add(new RVector(this
			.getFloat("PlasticHoleMargin"), this.getFloat("CutoutHeight")
			+ this.getFloat("PlasticHoleInset")));

	var lhendPos = frameARoot.operator_add(new RVector(this
			.getFloat("PlasticHoleMargin"), spring + allowance
			- this.getFloat("PlasticHoleInset")));

	leftBarHoles.autospace(lhstartPos, lhendPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	leftBarHoles.render(di, ao);

	
	var rightBarHoles = new HoleArray();

	var rhstartPos = frameARoot.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("PlasticHoleMargin"), this.getFloat("CutoutHeight")
			+ this.getFloat("PlasticHoleInset")));

	var rhendPos = frameARoot.operator_add(
			new RVector(
					width + 2 * allowance - this.getFloat("PlasticHoleMargin"), 
					this.hingeAssembly.bottomHingeCentre.getY()-this.getFloat("PlasticHoleInset")
					)
			);

	rightBarHoles.autospace(rhstartPos, rhendPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	rightBarHoles.render(di, ao);

	
	
	if (ui.widgets["ThirdHinge"].checked)
		{
		// Need 4 runs of holes

		rhstartPos = frameARoot.operator_add(new RVector(width + 2 * allowance
				- this.getFloat("PlasticHoleMargin"), this.hingeAssembly.bottomHingeCentre.getY()+this.getFloat("HingeHoleClearance")+this.getFloat("PlasticHoleInset")));

		rhendPos = frameARoot.operator_add(new RVector(width + 2 * allowance
				- this.getFloat("PlasticHoleMargin"), this.hingeAssembly.middleHingeCentre.getY()-this.getFloat("PlasticHoleInset")));

		rightBarHoles.autospace(rhstartPos, rhendPos, this
				.getFloat("PlasticHoleDiameter"), 100);
		rightBarHoles.render(di, ao);

		
		
		rhstartPos = frameARoot.operator_add(new RVector(width + 2 * allowance
				- this.getFloat("PlasticHoleMargin"), this.hingeAssembly.middleHingeCentre.getY()+this.getFloat("HingeHoleClearance")+this.getFloat("PlasticHoleInset")));

		rhendPos = frameARoot.operator_add(new RVector(width + 2 * allowance
				- this.getFloat("PlasticHoleMargin"), this.hingeAssembly.topHingeCentre.getY()-this.getFloat("PlasticHoleInset")));

		rightBarHoles.autospace(rhstartPos, rhendPos, this
				.getFloat("PlasticHoleDiameter"), 100);
		rightBarHoles.render(di, ao);

		
		}
	else
		{
		// Need three runs of holes
		var rightBarHoles = new HoleArray();

		rhstartPos = frameARoot.operator_add(new RVector(width + 2 * allowance
				- this.getFloat("PlasticHoleMargin"), this.hingeAssembly.bottomHingeCentre.getY()+this.getFloat("HingeHoleClearance")+this.getFloat("PlasticHoleInset")));

		rhendPos = frameARoot.operator_add(new RVector(width + 2 * allowance
				- this.getFloat("PlasticHoleMargin"), this.hingeAssembly.topHingeCentre.getY()-this.getFloat("PlasticHoleInset")));

		rightBarHoles.autospace(rhstartPos, rhendPos, this
				.getFloat("PlasticHoleDiameter"), 100);
		rightBarHoles.render(di, ao);
		
		}
	
	
	rhstartPos = frameARoot.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("PlasticHoleMargin"), this.hingeAssembly.topHingeCentre.getY()+this.getFloat("HingeHoleClearance")+this.getFloat("PlasticHoleInset")));

	rhendPos = frameARoot.operator_add(new RVector(width + 2 * allowance
			- this.getFloat("PlasticHoleMargin"), spring + allowance
			- this.getFloat("PlasticHoleInset")));

	rightBarHoles.autospace(rhstartPos, rhendPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	rightBarHoles.render(di, ao);
	
	};

// This bit is quite complex - pulled out into its own methid just to maike it a bit more tractable to understand	
	
Gothic.createFrameAOutline = function(di, ao, pos, width,
		spring)
	{
	var height = this.getFloat("MasonsOpeningHeight")
			- this.getFloat("FrameARelativeHeight");
	var cutoutWidth = this.getFloat("CutoutWidth");
	var cutoutHeight = this.getFloat("CutoutHeight");
	var bendReliefSlotWidth = this.getFloat("BendReliefSlotWidth");
	var allowance = this.getFloat("FrameARelativeWidth") / 2;

//	// Hinge parameters
//
//	var h_length = this.getFloat("HingeMountLength");
//	var h_width = this.getFloat("HingeMountWidth");
//	var r = this.getFloat("HingeMountRadius");
//	var d = this.getFloat("HingeMountHoleDia");
	
	// spring needs to be OUTER SPRING
	var leftHand = new Array(
	pos.operator_add(
			new RVector(cutoutWidth - bendReliefSlotWidth,
			cutoutHeight)), 
	pos.operator_add(
			new RVector(0, cutoutHeight)), 
	pos.operator_add(
			new RVector(0, spring
					- this.getFloat("BendSlotHeight"))), 
	pos.operator_add(new RVector(this.getFloat("FrameABarWidth")
					- this.getFloat("ArchBarWidth")
					+ this.getFloat("BendSlotWidth"), spring
					- this.getFloat("BendSlotHeight"))), 
	pos.operator_add(new RVector(this.getFloat("FrameABarWidth")
					- this.getFloat("ArchBarWidth")
					+ this.getFloat("BendSlotWidth"), spring)), 
	pos.operator_add(new RVector(this.getFloat("FrameABarWidth")
					- this.getFloat("ArchBarWidth"), spring))

	);

	createPolyLine(di, ao, leftHand);

	var topRight = new Array(pos.operator_add(new RVector(width + 2 * allowance
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

	createPolyLine(di, ao, topRight);

	// Build hinge assembly
	
	this.hingeAssembly = new HingeAssembly(new RVector(0,0),new RVector(0,spring-this.getFloat("BendSlotHeight")-cutoutHeight));
	this.hingeAssembly.renderTabs(di, ao,pos.operator_add(new RVector(width+ 2 * allowance, cutoutHeight)));

		
	var bottomRight = new Array(pos.operator_add(new RVector(width + 2 * allowance,
			cutoutHeight)), pos.operator_add(new RVector(width + 2 * allowance
			- cutoutWidth + bendReliefSlotWidth, cutoutHeight)));

	createPolyLine(di, ao, bottomRight);

	var bottom = new Array(pos.operator_add(new RVector(width + 2 * allowance
			- cutoutWidth, cutoutHeight)), pos.operator_add(new RVector(width
			+ 2 * allowance - cutoutWidth, 0)), pos.operator_add(new RVector(
			cutoutWidth, 0)), pos.operator_add(new RVector(cutoutWidth,
			cutoutHeight)));
	
	createPolyLine(di, ao, bottom);

	// Now insert the bend reliefs

	var diameter = this.getFloat("BendReliefDiameter");
	var slotWidth = this.getFloat("BendReliefSlotWidth");
	var slotLength = this.getFloat("BendReliefSlotLength");

	createVBendRelief(di, ao, pos
			.operator_add(new RVector(cutoutWidth - bendReliefSlotWidth,
					cutoutHeight)), 1, 1, diameter, slotWidth, slotLength);
		
	createVBendRelief(di, ao, pos
			.operator_add(new RVector(width + 2 * allowance - cutoutWidth,
					cutoutHeight)), 1, -1, diameter, slotWidth, slotLength);


	// Create hinge assembly and stash so we can refer to it in Frame C
	

	
	};

Gothic.createFrameC = function(di, ao, pos)
	{
	// ********************************************************************************************************************
	//
	// 'Frame C' - cut and holed frame with no bends
	//
	// ********************************************************************************************************************

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
	
	createGothicArchRel(di, ao, pos, radius, width,
			height, allowance);

//rad = radius-(allowance + this.getFloat("FrameCBarWidth"));
//print("Outer arc frame c radius "+rad);


	createGothicArchRel(di, ao, pos, radius, width,
			height, allowance + this.getFloat("FrameCBarWidth"));
//special case so have to set up inset ourselves
	var weldTabBarHeight = getGothicSpring(radius, width, height) - allowance
			- this.getFloat("FrameCBarWidth") / 2
			- this.getFloat("WeldLugHoleWidth") / 2
			- this.getFloat("WeldLugHoleClearance")
			- (this.getFloat("WeldLugInset") - this.getFloat("WeldLugHoleClearance")*2)
			- (this.getFloat("WeldLugInset")- this.getFloat("WeldLugHoleClearance"));

	
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
   
	// Left hand tab holes
	
	var holesBarL = new WeldTabHoleLine(startPos,endPos,true,true);
	holesBarL.render(di, ao);

	
	// Right hand tab holes		

	var insetStartHole = true;
	var insetEndHole = false;

	startPos = pos.operator_add(
			new RVector(
					width 
						- allowance
						- this.getFloat("FrameCBarWidth")/2, 
					allowance
						+ this.getFloat("FrameCBarWidth") / 2
						+ this.getFloat("WeldLugHoleWidth") / 2
					)
				);
	
	endPos = startPos.operator_add(new RVector(
									0,		
									this.getFloat("HingeInset")+1
									-this.getFloat("HingeHoleClearance")
									-this.getFloat("FrameCBarWidth")/2
									-this.getFloat("WeldLugHoleWidth")/2
									));
	
	//print ("Length of holes "+startPos.getDistanceTo2d(endPos));
	
	this.holesBarRBottom = new WeldTabHoleLine(startPos,endPos,insetStartHole,insetEndHole);
	this.holesBarRBottom.render(di, ao);

	if (ui.widgets["ThirdHinge"].checked)
		{
		insetStartHole = false;
		insetEndHole = false;

		
		startPos = endPos.operator_add(
				new RVector(0,this.getFloat("HingeHoleClearance")*2)
					);
		
		endPos = startPos.operator_add(new RVector(
										0,		
										this.hingeAssembly.getMiddleHingeCentre().getY()
										-this.getFloat("HingeInset")
										-2*this.getFloat("HingeHoleClearance")
										));
			

		this.holesBarRLower = new WeldTabHoleLine(startPos,endPos,insetStartHole,insetEndHole);
		this.holesBarRLower.render(di, ao);
		

		insetStartHole = false;
		insetEndHole = false;

		
		startPos = endPos.operator_add(
				new RVector(0,this.getFloat("HingeHoleClearance")*2)
					);
		
		endPos = startPos.operator_add(new RVector(
										0,		
										this.hingeAssembly.getMiddleHingeCentre().getY()
										-this.getFloat("HingeInset")
										-2*this.getFloat("HingeHoleClearance")
										));
			
		this.holesBarRUpper = new WeldTabHoleLine(startPos,endPos,insetStartHole,insetEndHole);
		this.holesBarRUpper.render(di, ao);
		}
	else
	{
	insetStartHole = false;
	insetEndHole = false;

	
	startPos = endPos.operator_add(
			new RVector(0,this.getFloat("HingeHoleClearance")*2)
				);
	
	endPos = startPos.operator_add(new RVector(
									0,		
									2*(this.hingeAssembly.getMiddleHingeCentre().getY()
									-this.getFloat("HingeInset")
									-this.getFloat("HingeHoleClearance"))
									));
		

	this.holesBarRUpper = new WeldTabHoleLine(startPos,endPos,insetStartHole,insetEndHole);
	this.holesBarRUpper.render(di, ao);

	}
	

	
	insetStartHole = false;
	insetEndHole = true;

	
	startPos = endPos.operator_add(
			new RVector(0,this.getFloat("HingeHoleClearance")*2)
				);
	
	endPos = startPos.operator_add(new RVector(
									0,		
									this.getFloat("HingeInset")
									-this.getFloat("HingeHoleClearance")
									+1
									));
		
	this.holesBarRTop = new WeldTabHoleLine(startPos,endPos,insetStartHole,insetEndHole);
	this.holesBarRTop.render(di, ao);
	
	


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
			Math.PI/18
			);
	
	arc.render(di, ao);
	
	
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
			Math.PI/18
			);
	arc2.setReverse(true);
	arc2.render(di, ao);
	
	// stash the arc so we can retrieve its parameters for the side bars
	
	this.holeArc = arc;
		
// Bottom tab holes
	
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
//	this.createWeldTabHoleLine(di, ao, startPos,
//			w_tab_width, this.getFloat("FrameCBarWidth"), EAST, insetStartHole,
//			insetEndHole);

	var holesBarB = new WeldTabHoleLine(startPos,endPos,insetStartHole, insetEndHole);
	holesBarB.render(di, ao);

	
// Hinge mount holes

	this.hingeAssembly.renderHoles(di, ao,pos.operator_add(new RVector(width-allowance,allowance+1)));
	


	}

Gothic.createCappedArch = function(di, ao, pos)

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
	createCappedGothicArch(di, ao, pos, radius-allowance, width
			- 2 * allowance, 20);

	this.addDimensions(di, ao, pos
			.operator_add(new RVector(0, 0)), pos.operator_add(new RVector(
			width - 2 * allowance, 0)), pos.operator_add(new RVector(0, -50)));

	}

Gothic.createFullSideBar = function(di, ao, pos)
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

	var lugCountOption = ui.getCombo("LeftBarLugs");
	
	createSidebar(di, ao, pos, sidebarHeight, sidebarWidth, mountingLugInset,
			mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
			weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
			lugHoleOffset, insetStartTab, insetEndTab,suppressTop,mirror,lugCountOption);
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

Gothic.createSplitSideBar = function(di, ao, pos)
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

	var insetStartTab = true;
	var insetEndTab = false;
	var suppressTop = false;
	var mirror = true;
	var length = ui.getFloat("HingeInset")-ui.getFloat("HingeHoleClearance") - this.getFloat("FrameCBarWidth") / 2 - this.getFloat("WeldLugHoleWidth") / 2;

	var root = new RVector(pos.getX(),this.holesBarRBottom.getStartPos().getY());
	
	var lugOption = ui.getCombo("RightBar4Lugs");
	
	createSidebar(di, ao, root ,this.holesBarRBottom.getLength(), sidebarWidth, mountingLugInset,
			mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
			weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
			lugHoleOffset, insetStartTab, insetEndTab,suppressTop,mirror,lugOption);

	
	if(ui.widgets["ThirdHinge"].checked)
		{
		insetStartTab = false;
		insetEndTab = false;

		
		createSidebar(di, ao, new RVector(pos.getX(),this.holesBarRLower.getStartPos().getY()), this.holesBarRLower.getLength(),sidebarWidth, mountingLugInset,
				mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
				weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
				lugHoleOffset, insetStartTab, insetEndTab,suppressTop,mirror,ui.getCombo("RightBar3Lugs"));

		insetStartTab = false;
		insetEndTab = false;

		createSidebar(di, ao, new RVector(pos.getX(),this.holesBarRUpper.getStartPos().getY()),this.holesBarRUpper.getLength(), 
				sidebarWidth, mountingLugInset, mountingLugMinSpacing,
				weldLugInset, weldLugWidth, weldLugDepth, weldLugMinSpacing,
				weldLugMaxSpacing, lugHoleDiameter, lugWidth, lugHoleOffset,
				insetStartTab, insetEndTab,suppressTop,mirror,ui.getCombo("RightBar2Lugs"));

				
		}
	else
		{
//		insetStartTab = false;
//		insetEndTab = false;
//
//		
//		createSidebar(di, ao, new RVector(pos.getX(),this.holesBarRLower.getStartPos().getY()), this.holesBarRLower.getLength(),sidebarWidth, mountingLugInset,
//				mountingLugMinSpacing, weldLugInset, weldLugWidth, weldLugDepth,
//				weldLugMinSpacing, weldLugMaxSpacing, lugHoleDiameter, lugWidth,
//				lugHoleOffset, insetStartTab, insetEndTab,suppressTop,mirror,ui.getCombo("RightBar3Lugs"));

		insetStartTab = false;
		insetEndTab = false;

		createSidebar(di, ao, new RVector(pos.getX(),this.holesBarRUpper.getStartPos().getY()),this.holesBarRUpper.getLength(), 
				sidebarWidth, mountingLugInset, mountingLugMinSpacing,
				weldLugInset, weldLugWidth, weldLugDepth, weldLugMinSpacing,
				weldLugMaxSpacing, lugHoleDiameter, lugWidth, lugHoleOffset,
				insetStartTab, insetEndTab,suppressTop,mirror,ui.getCombo("RightBar2Lugs"));

		

		}
	
	
	
	insetStartTab = false;
	insetEndTab = true;
	suppressTop = true;
 
	createSidebar(di, ao, new RVector(pos.getX(),this.holesBarRTop.getStartPos().getY()),this.holesBarRTop.getLength(), sidebarWidth, mountingLugInset, mountingLugMinSpacing,
			weldLugInset, weldLugWidth, weldLugDepth, weldLugMinSpacing,
			weldLugMaxSpacing, lugHoleDiameter, lugWidth, lugHoleOffset,
			insetStartTab, insetEndTab,suppressTop,mirror,ui.getCombo("RightBar1Lugs"));

	var holeArcRadius = radius-allowance-this.getFloat("FrameCBarWidth") / 2;
	var barWidth=this.getFloat("TopBarWidth");
	var holeSpaceAngle=2*Math.PI/36; // Ten degrees of arc
	var holeArcWidth=width-2*allowance-this.getFloat("FrameCBarWidth");
	
	createArcBar(di, ao, root.operator_add(new RVector(0, sidebarHeight)),holeArcWidth,holeArcRadius,barWidth,holeSpaceAngle, weldLugWidth, weldLugDepth,sidebarWidth);
	
// Add some plastic holes
	
	var BarHoles = new HoleArray();

	var StartPos = pos.operator_add(new RVector(-barWidth+this.getFloat("HoledBarMargin"),sidebarHeight+this.getFloat("HoledBarBottomInset")));
	var EndPos = pos.operator_add(new RVector(-barWidth+this.getFloat("HoledBarMargin"),sidebarHeight+getGothicArchLength(holeArcRadius,holeArcWidth)-this.getFloat("HoledBarTopInset")));


	BarHoles.autospace(StartPos,EndPos, this
			.getFloat("PlasticHoleDiameter"), 100);
	BarHoles.render(di,ao);

// And some dimensions
	
	this.addDimensions(di, ao, root, root.operator_add(new RVector(0,
			sidebarHeight+getGothicArchLength(holeArcRadius,holeArcWidth))), pos.operator_add(new RVector(-40,
			sidebarHeight / 2)));
	}

Gothic.createBottomBar = function(di, ao, pos)
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
			lugHoleOffset, insetStartTab, insetEndTab,false,true,ui.getCombo("BottomBarLugs"));

	this.addDimensions(di, ao, pos, pos.operator_add(new RVector(0,
			sidebarHeight)), pos.operator_add(new RVector(-40,
			sidebarHeight / 2)));
	}

Gothic.createSimpleBars = function(di, ao, pos)
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

Gothic.createMasonsOpening = function(di, ao, pos)

// ********************************************************************************************************************
//
// Masons Opening
//
// ********************************************************************************************************************

	{
	block = new RBlock(di.getDocument(), "Masons Opening", pos);

	di.setCurrentBlock("Masons Opening");

	this.createMasonsOpeningOutline(di, ao, pos);
	this.createMasonsOpeningArch(di, ao, pos);
	ao.apply(di.getDocument());
	di.setCurrentBlock("");

	this.createMasonsOpeningDimensions(di, ao, pos);
	};

Gothic.createMasonsOpeningArch = function(di, ao, pos)
	{
	var radius = this.getFloat("Radius");
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight")

	createGothicArchRel(di, ao, pos, radius, width,
			height, 0);
	}

Gothic.createMasonsOpeningOutline = function(di, ao, pos)
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

	createPolyLine(di, ao, outerLines);
	};

Gothic.createMasonsOpeningDimensions = function(di, ao,
		pos)
	{
	var width = this.getFloat("MasonsOpeningWidth");
	var height = this.getFloat("MasonsOpeningHeight")

	this.addDimensions(di, ao, pos
			.operator_add(new RVector(width / 2, 0)), pos
			.operator_add(new RVector(width / 2, height)), pos
			.operator_add(new RVector(-25, height / 2)));

	this.addDimensions(di, ao, pos, pos
			.operator_add(new RVector(width, 0)), pos.operator_add(new RVector(
			0, -50)));

	}

// ********************************************************************************************************************
//
// Support functions
//
// ********************************************************************************************************************


Gothic.createWeldTabHoleLine = function(di, ao, pos,
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

	createWeldTabHoleLine(di, ao, pos, length, width,
			minSpacing, maxSpacing, orientation, weldLugWidth,
			weldLugHoleWidth, weldLugHoleClearance, weldLugInset,
			insetStartHole, insetEndHole);

	}

Gothic.createIcon = function(di)
	{

	var ao = new RAddObjectsOperation(false);

	createRectangle(di, ao, new RVector(0, 0), 10, 12);
	createRectangle(di, ao, new RVector(1, 1), 8, 10);

	txt = new Text(this.twoLetterCode,new RVector(3, 10),3,1.5,0,"Text");
	txt.render(di,ao);
	txt = new Text(this.versionNumber,new RVector(3, 6),3,1.5,0,"Text");
	txt.render(di,ao);
	
//	createText(di, ao, new RVector(0, 0), "GW");
//	createText(di, ao, new RVector(3, 7), "03");

	return ao;
	};

Gothic.createLayers = function(di, layers)

//
// createLayers: adds a number of layers from an array of text labels
//
	{

	var addLayerOperation = new RAddObjectsOperation(false);

	for (i = 0; i < layers.length; i++)
		{
		addLayerOperation
				.addObject(new RLayer(di.getDocument(),
						layers[i], false, false, di
								.getCurrentColor(), di
								.getCurrentLinetypeId(), RLineweight.Weight005));
		}

	addLayerOperation.apply(di.getDocument());

	};

Gothic.createBlocks = function(di, blocks)

//
// createLayers: adds a number of layers from an array of text labels
//
	{

	var addBlockOperation = new RAddObjectsOperation(false);

	for (i = 0; i < blocks.length; i++)
		{
		addBlockOperation.addObject(new RBlock(di.getDocument(),
				blocks[i], new RVector(0, 0)));
		}

	addBlockOperation.apply(di.getDocument());

	};

Gothic.addDimensions = function(di, ao, p1, p2, pDim)
// Add dimension lines, from p1 to p2 with dimensions at pDim
	{
	// Stash teh layer we're using presently
	currentLayerId = di.getDocument().getCurrentLayerId();

	ao.apply(di.getDocument());
	// Change to dimensions layer
	di.getDocument().setCurrentLayer("Dimensions");

	var dim = new RDimAlignedData();

	dim.setExtensionPoint1(p1);
	dim.setExtensionPoint2(p2);
	dim.setDefinitionPoint(pDim);

	var dimEnt = new RDimAlignedEntity(di.getDocument(), dim);

	ao.addObject(dimEnt, false);
	ao.apply(di.getDocument());

	// Back to our previous layer
	di.getDocument().setCurrentLayer(currentLayerId);
	}

Gothic.getText = function(label)
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

Gothic.getCombo = function(label)
	{
		
	if (this.widgets[label])
		{
		return this.widgets[label].currentText;
		}
	else
		{
		return label.concat(": not defined");
		}

	}


Gothic.getFloat = function(label)
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

Gothic.getBoolean = function(label)
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

Gothic.setValues = function()
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
//	this.mountingLugMaxSpacing = parseFloat(
//			this.widgets["MountingLugMaxSpacing"].text, 10);

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

Gothic.setDerivedValues = function()
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
