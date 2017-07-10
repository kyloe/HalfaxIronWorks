// SteeliteSlimUniversal.js
// library.js contains some convenience functions like 'isNull':
// This source is now managed under GIT

include("scripts/library.js");
include("scripts/WidgetFactory.js");	
include("scripts/File/SaveAs/SaveAs.js");
include("./primitives.js")

//
// Create main object 
//

function SteeliteSlimUniversal() {
}

//
// Read widget to get object from which we can extract parameters
//


SteeliteSlimUniversal.init = function(formWidget) {
    if (!isNull(formWidget)) {
        SteeliteSlimUniversal.widgets = getWidgets(formWidget);
    }
        
    this.twoLetterCode = "SU";
	this.versionNumber = "02";

};



//
// Set requested sizes (default sizes are suitable for ICON generation
//
// FRAME A  = NOTCHED FRAME
// FRAME C = FLAT FRAME
//

SteeliteSlimUniversal.setValues = function() {


    SteeliteSlimUniversal.customerName = SteeliteSlimUniversal.widgets["CustomerName"].text;
    SteeliteSlimUniversal.finishedWidth = parseFloat(SteeliteSlimUniversal.widgets["FinishedWidth"].text, 10);
    SteeliteSlimUniversal.finishedHeight = parseFloat(SteeliteSlimUniversal.widgets["FinishedHeight"].text, 10);
    SteeliteSlimUniversal.cutoutHeight = parseFloat(SteeliteSlimUniversal.widgets["CutoutHeight"].text, 10);
    SteeliteSlimUniversal.cutoutWidth = parseFloat(SteeliteSlimUniversal.widgets["CutoutWidth"].text, 10);

    SteeliteSlimUniversal.frameARelativeWidth = parseFloat(SteeliteSlimUniversal.widgets["FrameARelativeWidth"].text, 10);
    SteeliteSlimUniversal.frameARelativeHeight = parseFloat(SteeliteSlimUniversal.widgets["FrameARelativeHeight"].text, 10);
    SteeliteSlimUniversal.frameABarWidth = parseFloat(SteeliteSlimUniversal.widgets["FrameABarWidth"].text, 10);
    SteeliteSlimUniversal.frameABarHeight = parseFloat(SteeliteSlimUniversal.widgets["FrameABarHeight"].text, 10);
    SteeliteSlimUniversal.frameAPlasticHoleSpacing = parseFloat(SteeliteSlimUniversal.widgets["FrameAPlasticHoleSpacing"].text, 10);

    SteeliteSlimUniversal.handleRampHoleHeight = parseFloat(SteeliteSlimUniversal.widgets["HandleRampHoleHeight"].text, 10);
    SteeliteSlimUniversal.handleRampHoleWidth = parseFloat(SteeliteSlimUniversal.widgets["HandleRampHoleWidth"].text, 10);
    SteeliteSlimUniversal.handleRampHoleCentres = parseFloat(SteeliteSlimUniversal.widgets["HandleRampHoleCentres"].text, 10);
    SteeliteSlimUniversal.handleRampHoleInset = parseFloat(SteeliteSlimUniversal.widgets["HandleRampHoleInset"].text, 10);



    SteeliteSlimUniversal.frameCRelativeWidth = parseFloat(SteeliteSlimUniversal.widgets["FrameCRelativeWidth"].text, 10);
    SteeliteSlimUniversal.frameCRelativeHeight = parseFloat(SteeliteSlimUniversal.widgets["FrameCRelativeHeight"].text, 10);
    SteeliteSlimUniversal.frameCBarWidth = parseFloat(SteeliteSlimUniversal.widgets["FrameCBarWidth"].text, 10);
    SteeliteSlimUniversal.frameCBarHeight = parseFloat(SteeliteSlimUniversal.widgets["FrameCBarHeight"].text, 10);

    SteeliteSlimUniversal.frameCHingeHoleWidth = parseFloat(SteeliteSlimUniversal.widgets["FrameCHingeHoleWidth"].text, 10);
    SteeliteSlimUniversal.frameCHingeHoleHeight = parseFloat(SteeliteSlimUniversal.widgets["FrameCHingeHoleHeight"].text, 10);
    SteeliteSlimUniversal.frameCHingeHoleCentreW = parseFloat(SteeliteSlimUniversal.widgets["FrameCHingeHoleCentreW"].text, 10);
    SteeliteSlimUniversal.frameCHingeHoleCentreH = parseFloat(SteeliteSlimUniversal.widgets["FrameCHingeHoleCentreH"].text, 10);
    SteeliteSlimUniversal.flatFrameWeldHolePosition = parseFloat(SteeliteSlimUniversal.widgets["FlatFrameWeldHolePosition"].text, 10);



    SteeliteSlimUniversal.holeDiameter = parseFloat(SteeliteSlimUniversal.widgets["HoleDiameter"].text, 10);
 	SteeliteSlimUniversal.plasticHoleDiameter = parseFloat(SteeliteSlimUniversal.widgets["PlasticHoleDiameter"].text, 10);
    SteeliteSlimUniversal.bendReliefDiameter = parseFloat(SteeliteSlimUniversal.widgets["BendReliefDiameter"].text, 10);
    SteeliteSlimUniversal.bendReliefSlotWidth = parseFloat(SteeliteSlimUniversal.widgets["BendReliefSlotWidth"].text, 10);
    SteeliteSlimUniversal.bendReliefSlotLength = parseFloat(SteeliteSlimUniversal.widgets["BendReliefSlotLength"].text, 10);

    SteeliteSlimUniversal.lugWidth = parseFloat(SteeliteSlimUniversal.widgets["LugWidth"].text, 10);
    SteeliteSlimUniversal.lugHoleOffset = parseFloat(SteeliteSlimUniversal.widgets["LugHoleOffset"].text, 10);
    SteeliteSlimUniversal.lugHoleDiameter = parseFloat(SteeliteSlimUniversal.widgets["LugHoleDiameter"].text, 10);
    SteeliteSlimUniversal.mountingLugInset = parseFloat(SteeliteSlimUniversal.widgets["MountingLugInset"].text, 10);
    SteeliteSlimUniversal.mountingLugMinSpacing = parseFloat(SteeliteSlimUniversal.widgets["MountingLugMinSpacing"].text, 10);
    SteeliteSlimUniversal.mountingLugMaxSpacing = parseFloat(SteeliteSlimUniversal.widgets["MountingLugMaxSpacing"].text, 10);

    SteeliteSlimUniversal.sidebarWidth = parseFloat(SteeliteSlimUniversal.widgets["SidebarWidth"].text, 10);
    SteeliteSlimUniversal.sidebarRelativeHeight = parseFloat(SteeliteSlimUniversal.widgets["SidebarRelativeHeight"].text, 10);
    SteeliteSlimUniversal.sidebarSealHoleSpacing = parseFloat(SteeliteSlimUniversal.widgets["SidebarSealHoleSpacing"].text, 10);
    SteeliteSlimUniversal.sidebarSealHoleDiameter = parseFloat(SteeliteSlimUniversal.widgets["SidebarSealHoleDiameter"].text, 10);

    SteeliteSlimUniversal.weldLugWidth = parseFloat(SteeliteSlimUniversal.widgets["WeldLugWidth"].text, 10);
    SteeliteSlimUniversal.weldLugDepth = parseFloat(SteeliteSlimUniversal.widgets["WeldLugDepth"].text, 10);
    SteeliteSlimUniversal.weldLugInset = parseFloat(SteeliteSlimUniversal.widgets["WeldLugInset"].text, 10);
    SteeliteSlimUniversal.weldLugMinSpacing = parseFloat(SteeliteSlimUniversal.widgets["WeldLugMinSpacing"].text, 10);
    SteeliteSlimUniversal.weldLugMaxSpacing = parseFloat(SteeliteSlimUniversal.widgets["WeldLugMaxSpacing"].text, 10);
    SteeliteSlimUniversal.weldLugHoleWidth = parseFloat(SteeliteSlimUniversal.widgets["WeldLugHoleWidth"].text, 10);
    SteeliteSlimUniversal.weldLugHoleClearance = parseFloat(SteeliteSlimUniversal.widgets["WeldLugHoleClearance"].text, 10);

    SteeliteSlimUniversal.topbarBarWidth = parseFloat(SteeliteSlimUniversal.widgets["TopBarWidth"].text, 10);
    SteeliteSlimUniversal.topbarRelativeWidth = parseFloat(SteeliteSlimUniversal.widgets["TopBarRelativeWidth"].text, 10);
    SteeliteSlimUniversal.handleRampHolePosition = parseFloat(SteeliteSlimUniversal.widgets["HandleRampHolePosition"].text, 10);
    SteeliteSlimUniversal.includeRampHandle = SteeliteSlimUniversal.widgets["IncludeRampHandle"].checked;
    SteeliteSlimUniversal.topOpener = SteeliteSlimUniversal.widgets["TopOpener"].checked;

    if (SteeliteSlimUniversal.topOpener)
    	{
    	// Transpose W & H as quick and dirty fix
        SteeliteSlimUniversal.finishedWidth =  parseFloat(SteeliteSlimUniversal.widgets["FinishedHeight"].text, 10);
        SteeliteSlimUniversal.finishedHeight =parseFloat(SteeliteSlimUniversal.widgets["FinishedWidth"].text, 10);
    	}
    
    
	SteeliteSlimUniversal.setDerivedValues();

};

//
// Set default sizes (default sizes are suitable for ICON generation
//

SteeliteSlimUniversal.setDefaults = function() {

    SteeliteSlimUniversal.finishedWidth = 50;
    SteeliteSlimUniversal.finishedHeight = 50;
    SteeliteSlimUniversal.cutoutWidth = 5;
    SteeliteSlimUniversal.cutoutHeight = 5;
    SteeliteSlimUniversal.frameABarWidth = 3;
    SteeliteSlimUniversal.frameABarHeight = 3;
    SteeliteSlimUniversal.frameARelativeHeight = 3;
    SteeliteSlimUniversal.frameARelativeWidth = 3;
    SteeliteSlimUniversal.frameCBarWidth = 3;
    SteeliteSlimUniversal.frameCBarHeight = 3;
    SteeliteSlimUniversal.frameCRelativeHeight = 3;
    SteeliteSlimUniversal.frameCRelativeWidth = 3;

    SteeliteSlimUniversal.frameCHingeHoleWidth = 1;
    SteeliteSlimUniversal.frameCHingeHoleHeight = 1;
    SteeliteSlimUniversal.frameCHingeHoleCentreW = 1;
    SteeliteSlimUniversal.frameCHingeHoleCentreH = 1;


    SteeliteSlimUniversal.holeDiameter = 1;
    SteeliteSlimUniversal.plasticHoleDiameter = 1;
    SteeliteSlimUniversal.handleRampHoleHeight = 1;
    SteeliteSlimUniversal.handleRampHoleWidth = 1;
    SteeliteSlimUniversal.handleRampHoleCentres = 1;
    SteeliteSlimUniversal.handleRampHoleInset = 1;


    SteeliteSlimUniversal.bendReliefDiameter = 5;
    SteeliteSlimUniversal.bendReliefSlotWidth = 5;
    SteeliteSlimUniversal.bendReliefSlotLength = 20;
    SteeliteSlimUniversal.lugWidth = 0.5
    SteeliteSlimUniversal.lugHoleOffset = 0.3;
    SteeliteSlimUniversal.lugHoleDiameter = 0.1;
    SteeliteSlimUniversal.sidebarWidth = .1;
    SteeliteSlimUniversal.sidebarRelativeHeight = .1;
    SteeliteSlimUniversal.weldLugWidth = .1;
    SteeliteSlimUniversal.weldLugDepth = .1;
    SteeliteSlimUniversal.mountingLugInset = .1;
    SteeliteSlimUniversal.weldLugInset = .1;
    SteeliteSlimUniversal.weldLugMinSpacing = .1;
    SteeliteSlimUniversal.weldLugMaxSpacing = .1;
    SteeliteSlimUniversal.mountingLugMinSpacing = .1;
    SteeliteSlimUniversal.mountingLugMaxSpacing = .1;
    SteeliteSlimUniversal.weldLugHoleWidth = .1;
    SteeliteSlimUniversal.weldLugHoleClearance = .1;
	SteeliteSlimUniversal.topbarWidth = .1;
	SteeliteSlimUniversal.topbarRelativeWidth = .1;
	SteeliteSlimUniversal.frameAPlasticHoleSpacing = 1;
	SteeliteSlimUniversal.sidebarSealHoleSpacing = 3;	
 
	SteeliteSlimUniversal.setDerivedValues();

};

SteeliteSlimUniversal.setDerivedValues = function (){

    SteeliteSlimUniversal.frameAWidth = SteeliteSlimUniversal.finishedWidth+SteeliteSlimUniversal.frameARelativeWidth;
    SteeliteSlimUniversal.frameAHeight = SteeliteSlimUniversal.finishedHeight+SteeliteSlimUniversal.frameARelativeHeight;
    SteeliteSlimUniversal.frameARoot = new RVector(0,(SteeliteSlimUniversal.finishedHeight-SteeliteSlimUniversal.frameARelativeHeight)/2);

    SteeliteSlimUniversal.frameCWidth = SteeliteSlimUniversal.finishedWidth+SteeliteSlimUniversal.frameCRelativeWidth;
    SteeliteSlimUniversal.frameCHeight = SteeliteSlimUniversal.finishedHeight+SteeliteSlimUniversal.frameCRelativeHeight;
    SteeliteSlimUniversal.frameCRoot = new RVector(-1.2*SteeliteSlimUniversal.finishedWidth,(SteeliteSlimUniversal.finishedHeight-SteeliteSlimUniversal.frameCRelativeHeight)/2);
	
    SteeliteSlimUniversal.sidebarHeight = SteeliteSlimUniversal.finishedHeight+SteeliteSlimUniversal.sidebarRelativeHeight;
    SteeliteSlimUniversal.sidebarRoot = new RVector(-1.5*SteeliteSlimUniversal.finishedWidth,(SteeliteSlimUniversal.finishedHeight-SteeliteSlimUniversal.sidebarRelativeHeight)/2);

    SteeliteSlimUniversal.topbarRoot = new RVector(SteeliteSlimUniversal.frameCRoot.getX()+(SteeliteSlimUniversal.frameCWidth-SteeliteSlimUniversal.topbarWidth)/2,SteeliteSlimUniversal.frameCHeight*1.6);
	


    SteeliteSlimUniversal.topbarWidth = SteeliteSlimUniversal.finishedWidth+SteeliteSlimUniversal.topbarRelativeWidth;
    SteeliteSlimUniversal.bottombarRoot = new RVector(SteeliteSlimUniversal.frameCRoot.getX()+(SteeliteSlimUniversal.frameCWidth-SteeliteSlimUniversal.topbarWidth)/2,SteeliteSlimUniversal.frameCHeight*0.2	);

};
//
// Main function to generate the frames
//

SteeliteSlimUniversal.generate = function(documentInterface, file) {
    SteeliteSlimUniversal.setValues();
    return SteeliteSlimUniversal.create(documentInterface);
};

//
// Function to generate the frames icon
//


SteeliteSlimUniversal.generatePreview = function(documentInterface, iconSize) {
    SteeliteSlimUniversal.setDefaults();
    return SteeliteSlimUniversal.createIcon(documentInterface);

};


//
// Plot each of main elements
//

SteeliteSlimUniversal.create = function(documentInterface) {
    	
	var addOperation = new RAddObjectsOperation(false);
    	SteeliteSlimUniversal.createFrameA(documentInterface, addOperation);
 	SteeliteSlimUniversal.createFrameC(documentInterface, addOperation);
	SteeliteSlimUniversal.createSidebar(documentInterface, addOperation);


		SteeliteSlimUniversal.createTopbar(documentInterface, addOperation);		
    
	SteeliteSlimUniversal.createBottombar(documentInterface, addOperation);
// debugger;
    SteeliteSlimUniversal.commentBox(documentInterface, addOperation);
    
    //var saveAsAction = new SaveAs();

    //saveAsAction.save("../DXF_WINDOW_DRAWINGS/"+SteeliteSlimUniversal.customerName+"_W_"+SteeliteSlimUniversal.finishedWidth+"_x_H_"+SteeliteSlimUniversal.finishedHeight+".dxf","R27",false);    

    //documentInterface.getDocument().setFileName();    
    
    
    return addOperation;
};


SteeliteSlimUniversal.createIcon = function(di) {

	var ao = new RAddObjectsOperation(false);

	createRectangle(di, ao, new RVector(0, 0), 10, 12);
	createRectangle(di, ao, new RVector(1, 1), 8, 10);

	txt = new Text(this.twoLetterCode, new RVector(3, 10), 3, 1.5, 0, "Text");
	txt.render(di, ao);
	txt = new Text(this.versionNumber, new RVector(3, 6), 3, 1.5, 0, "Text");
	txt.render(di, ao);

	// createText(di, ao, new RVector(0, 0), "GW");
	// createText(di, ao, new RVector(3, 7), "03");

	return ao;
	};


//********************************************************************************************************************
//
//  Comments box
//
//********************************************************************************************************************


SteeliteSlimUniversal.commentBox = function(documentInterface, addOperation) {

    this.createRectangle(documentInterface, addOperation,new RVector(0,0),600,120);
    this.createBigText(documentInterface, addOperation,new RVector(5,100),SteeliteSlimUniversal.customerName);
	if (SteeliteSlimUniversal.topOpener)
		{
	    this.createBigText(documentInterface, addOperation,new RVector(5,75),"Steelite Slim Universal (Top Opener)");			
	    this.createBigText(documentInterface, addOperation,new RVector(5,50),"Dimensions (WxH)");
	    this.createBigText(documentInterface, addOperation,new RVector(5,25),SteeliteSlimUniversal.finishedHeight+"x"+SteeliteSlimUniversal.finishedWidth);
		}
	else
		{
	    this.createBigText(documentInterface, addOperation,new RVector(5,75),"Steelite Slim Universal");			
	    this.createBigText(documentInterface, addOperation,new RVector(5,50),"Dimensions (WxH)");
	    this.createBigText(documentInterface, addOperation,new RVector(5,25),SteeliteSlimUniversal.finishedWidth+"x"+SteeliteSlimUniversal.finishedHeight);		
		}
    

    return addOperation;
};

//********************************************************************************************************************
//
//   Frame A
//
//********************************************************************************************************************

SteeliteSlimUniversal.createFrameA = function(documentInterface, addOperation) {
	this.createFrameAOutline(documentInterface, addOperation);
	this.createFrameAInner(documentInterface, addOperation);	
	this.drillFrameAHoles(documentInterface, addOperation);
	this.drillPlasticHoles(documentInterface, addOperation);

    if (this.includeRampHandle && !SteeliteSlimUniversal.topOpener)
        {
        SteeliteSlimUniversal.drillFrameAHandleRampHolesVariablePosition(documentInterface, addOperation,SteeliteSlimUniversal.handleRampHolePosition);
	    }
	// SteeliteSlimUniversal.drillFrameAHandleRampHoles(documentInterface, addOperation);
	return addOperation;
};


SteeliteSlimUniversal.createFrameAOutline = function(documentInterface, addOperation) {
	
	var width 			= SteeliteSlimUniversal.frameAWidth;
	var height 			= SteeliteSlimUniversal.frameAHeight;
	var cutoutWidth 	= SteeliteSlimUniversal.cutoutWidth;
	var cutoutHeight 	= SteeliteSlimUniversal.cutoutHeight;
	
    var va = new Array(
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth-SteeliteSlimUniversal.bendReliefSlotWidth,cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(0, cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(0, height-cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth-SteeliteSlimUniversal.bendReliefSlotWidth, height-cutoutHeight))
   );

	SteeliteSlimUniversal.drawPolyLine(documentInterface, addOperation, va);

    var va2 = new Array(
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth, height-cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth, height)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth,height)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight))
     );

	SteeliteSlimUniversal.drawPolyLine(documentInterface, addOperation, va2);

    var va3 = new Array(
           SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth+SteeliteSlimUniversal.bendReliefSlotWidth,height-cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width,height-cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width,cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth+SteeliteSlimUniversal.bendReliefSlotWidth,cutoutHeight))
    );

	SteeliteSlimUniversal.drawPolyLine(documentInterface, addOperation, va3);

    var va4 = new Array(
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth,0)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth,0)),
            SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth,cutoutHeight))
    );

	SteeliteSlimUniversal.drawPolyLine(documentInterface, addOperation, va4);

	// Now insert the bend reliefs
	
	SteeliteSlimUniversal.createVBendRelief(documentInterface, addOperation,SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth-SteeliteSlimUniversal.bendReliefSlotWidth,cutoutHeight)),1,1);
	SteeliteSlimUniversal.createVBendRelief(documentInterface, addOperation,SteeliteSlimUniversal.frameARoot.operator_add(new RVector(cutoutWidth-SteeliteSlimUniversal.bendReliefSlotWidth, height-cutoutHeight)),-1,1);
	SteeliteSlimUniversal.createVBendRelief(documentInterface, addOperation,SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight)),-1,-1);
	SteeliteSlimUniversal.createVBendRelief(documentInterface, addOperation,SteeliteSlimUniversal.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),1,-1);

};


SteeliteSlimUniversal.createFrameAInner = function(documentInterface, addOperation) {
	
	var width 			= SteeliteSlimUniversal.frameAWidth-2*SteeliteSlimUniversal.frameABarWidth;
	var height 			= SteeliteSlimUniversal.frameAHeight-2*SteeliteSlimUniversal.frameABarHeight;
	var widthOffset     = SteeliteSlimUniversal.frameABarWidth;
	var heightOffset    = SteeliteSlimUniversal.frameABarHeight;
	
	
    SteeliteSlimUniversal.createRectangle(documentInterface, addOperation,SteeliteSlimUniversal.frameARoot.operator_add(new RVector(widthOffset,heightOffset)),width,height);

};

SteeliteSlimUniversal.drillFrameAHoles = function(documentInterface, addOperation) {
	
	SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+11,SteeliteSlimUniversal.frameAHeight-5.5)), SteeliteSlimUniversal.holeDiameter);
	SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+26,SteeliteSlimUniversal.frameAHeight-11.5)), SteeliteSlimUniversal.holeDiameter);
	SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+41,SteeliteSlimUniversal.frameAHeight-5.5)), SteeliteSlimUniversal.holeDiameter);

	SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+11,5.5)), SteeliteSlimUniversal.holeDiameter);
	SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+26,11.5)), SteeliteSlimUniversal.holeDiameter);
	SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+41,5.5)), SteeliteSlimUniversal.holeDiameter);

};

// Drill v holes 

SteeliteSlimUniversal.drillPlasticHoles = function(documentInterface, addOperation) {

	var length = SteeliteSlimUniversal.frameAHeight-2*(SteeliteSlimUniversal.frameABarHeight+3);
		
	// var s = Math.ceil(length/SteeliteSlimUniversal.frameAPlasticHoleSpacing);
	var s = SteeliteSlimUniversal.calcHoleCount(length,SteeliteSlimUniversal.frameAPlasticHoleSpacing,3);
	spacing = length/(s-1);

	var v = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.frameARoot.operator_add(new RVector(5,SteeliteSlimUniversal.frameABarHeight+3)), 
							SteeliteSlimUniversal.plasticHoleDiameter);

	var v2 = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.frameAWidth-5,SteeliteSlimUniversal.frameABarHeight+3)), 
							SteeliteSlimUniversal.plasticHoleDiameter);
	s--;
	
	for (var i = 1; i <= s; i++) {
		v = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								SteeliteSlimUniversal.plasticHoleDiameter);
		v2 = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								SteeliteSlimUniversal.plasticHoleDiameter);
	}
	
	
	//SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+11,SteeliteSlimUniversal.frameAHeight-5.5)), 99);

// 

	var width = SteeliteSlimUniversal.frameAWidth-(SteeliteSlimUniversal.frameABarWidth+38)-(SteeliteSlimUniversal.frameABarWidth+3) ;
		
	//s = Math.ceil(width/SteeliteSlimUniversal.frameAPlasticHoleSpacing);
	s = SteeliteSlimUniversal.calcHoleCount(width,SteeliteSlimUniversal.frameAPlasticHoleSpacing,3);
	spacing = width/(s-1);

	var v3 = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.frameABarWidth+38,5)), 
							SteeliteSlimUniversal.plasticHoleDiameter);

	var v4 = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.frameABarWidth+38,SteeliteSlimUniversal.frameAHeight-5)), 
							SteeliteSlimUniversal.plasticHoleDiameter);

	s--;
	
	for (var i = 1; i <= s; i++) {
		v3 = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v3.operator_add(new RVector(spacing,0)), 
								SteeliteSlimUniversal.plasticHoleDiameter);
		v4 = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v4.operator_add(new RVector(spacing,0)), 
								SteeliteSlimUniversal.plasticHoleDiameter);
	}
	
	
	//SteeliteSlimUniversal.createHole(documentInterface, addOperation, SteeliteSlimUniversal.frameARoot.operator_add(new RVector(SteeliteSlimUniversal.cutoutWidth+11,SteeliteSlimUniversal.frameAHeight-5.5)), 99);




};


SteeliteSlimUniversal.drillFrameAHandleRampHoles = function(documentInterface, addOperation) {
	
	
    SteeliteSlimUniversal.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	SteeliteSlimUniversal.frameARoot.operator_add(
    		new RVector(	SteeliteSlimUniversal.frameAWidth - SteeliteSlimUniversal.frameABarWidth+SteeliteSlimUniversal.handleRampHoleInset,
    						SteeliteSlimUniversal.frameAHeight/2-SteeliteSlimUniversal.handleRampHoleCentres/2-SteeliteSlimUniversal.handleRampHoleHeight/2-SteeliteSlimUniversal.weldLugHoleClearance)),
    
    	SteeliteSlimUniversal.handleRampHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance,
    	SteeliteSlimUniversal.handleRampHoleHeight+2*SteeliteSlimUniversal.weldLugHoleClearance);
    
    
    SteeliteSlimUniversal.createRectangle(
    	documentInterface, 
    	addOperation,
    	SteeliteSlimUniversal.frameARoot.operator_add(
    		new RVector(	SteeliteSlimUniversal.frameAWidth - SteeliteSlimUniversal.frameABarWidth+SteeliteSlimUniversal.handleRampHoleInset,
    						SteeliteSlimUniversal.frameAHeight/2+SteeliteSlimUniversal.handleRampHoleCentres/2-SteeliteSlimUniversal.handleRampHoleHeight/2-SteeliteSlimUniversal.weldLugHoleClearance)),
    	SteeliteSlimUniversal.handleRampHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance,
    	SteeliteSlimUniversal.handleRampHoleHeight+2*SteeliteSlimUniversal.weldLugHoleClearance);
    


};

SteeliteSlimUniversal.drillFrameAHandleRampHolesVariablePosition = function(documentInterface, addOperation, fraction) {
	
	
    SteeliteSlimUniversal.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	SteeliteSlimUniversal.frameARoot.operator_add(
    		new RVector(	SteeliteSlimUniversal.frameAWidth - SteeliteSlimUniversal.frameABarWidth+SteeliteSlimUniversal.handleRampHoleInset,
    						((SteeliteSlimUniversal.frameAHeight-24)*fraction)+12-SteeliteSlimUniversal.handleRampHoleCentres/2-SteeliteSlimUniversal.handleRampHoleHeight/2-SteeliteSlimUniversal.weldLugHoleClearance)),
    
    	SteeliteSlimUniversal.handleRampHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance,
    	SteeliteSlimUniversal.handleRampHoleHeight+2*SteeliteSlimUniversal.weldLugHoleClearance);
    
    
    SteeliteSlimUniversal.createRectangle(
    	documentInterface, 
    	addOperation,
    	SteeliteSlimUniversal.frameARoot.operator_add(
    		new RVector(	SteeliteSlimUniversal.frameAWidth - SteeliteSlimUniversal.frameABarWidth+SteeliteSlimUniversal.handleRampHoleInset,
    						((SteeliteSlimUniversal.frameAHeight-24)*fraction)+12+SteeliteSlimUniversal.handleRampHoleCentres/2-SteeliteSlimUniversal.handleRampHoleHeight/2-SteeliteSlimUniversal.weldLugHoleClearance)),
    	SteeliteSlimUniversal.handleRampHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance,
    	SteeliteSlimUniversal.handleRampHoleHeight+2*SteeliteSlimUniversal.weldLugHoleClearance);
    


};



//********************************************************************************************************************
//
// Frame C
//
//********************************************************************************************************************


SteeliteSlimUniversal.createFrameC = function(documentInterface, addOperation) {
	SteeliteSlimUniversal.createFrameCOutline(documentInterface, addOperation);
	SteeliteSlimUniversal.drillFrameCHoles(documentInterface, addOperation);
	SteeliteSlimUniversal.createFrameCHingeHoles(documentInterface, addOperation);
};

SteeliteSlimUniversal.createFrameCOutline = function(documentInterface, addOperation) {
	
	var width 			= SteeliteSlimUniversal.frameCWidth;
	var height 			= SteeliteSlimUniversal.frameCHeight;
	
	SteeliteSlimUniversal.createRectangle(documentInterface, addOperation,SteeliteSlimUniversal.frameCRoot,width,height);
	SteeliteSlimUniversal.createRectangle(documentInterface, addOperation,
								 SteeliteSlimUniversal.frameCRoot.operator_add(new RVector(SteeliteSlimUniversal.frameCBarWidth,SteeliteSlimUniversal.frameCBarHeight)),
								 width-2*SteeliteSlimUniversal.frameCBarWidth,
								 height-2*SteeliteSlimUniversal.frameCBarHeight);
	
};


// Create hinge holes

SteeliteSlimUniversal.createFrameCHingeHoles = function(documentInterface, addOperation) {

    SteeliteSlimUniversal.createRectangle(
    	documentInterface, 
    	addOperation,
    	SteeliteSlimUniversal.frameCRoot.operator_add(
    		new RVector(SteeliteSlimUniversal.frameCHingeHoleCentreW-SteeliteSlimUniversal.frameCHingeHoleWidth/2-SteeliteSlimUniversal.weldLugHoleClearance,
    						SteeliteSlimUniversal.frameCHingeHoleCentreH-SteeliteSlimUniversal.frameCHingeHoleHeight/2-SteeliteSlimUniversal.weldLugHoleClearance)),
    	SteeliteSlimUniversal.frameCHingeHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance,
    	SteeliteSlimUniversal.frameCHingeHoleHeight+2*SteeliteSlimUniversal.weldLugHoleClearance);
    	
      SteeliteSlimUniversal.createRectangle(
    	documentInterface, 
    	addOperation,
    	SteeliteSlimUniversal.frameCRoot.operator_add(
    		new RVector(SteeliteSlimUniversal.frameCHingeHoleCentreW-SteeliteSlimUniversal.frameCHingeHoleWidth/2-SteeliteSlimUniversal.weldLugHoleClearance,
    						SteeliteSlimUniversal.frameCHeight-SteeliteSlimUniversal.frameCHingeHoleCentreH-SteeliteSlimUniversal.frameCHingeHoleHeight/2-SteeliteSlimUniversal.weldLugHoleClearance)),
    	SteeliteSlimUniversal.frameCHingeHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance,
    	SteeliteSlimUniversal.frameCHingeHoleHeight+2*SteeliteSlimUniversal.weldLugHoleClearance);
    	
    	
  
};

SteeliteSlimUniversal.drillFrameCHoles = function(documentInterface, addOperation) {
	
	//var count = SteeliteSlimUniversal.calculateSpacing(50,100,SteeliteSlimUniversal.frameCWidth-SteeliteSlimUniversal.frameCBarWidth);
	//var spacing = (SteeliteSlimUniversal.frameCWidth-SteeliteSlimUniversal.frameCBarWidth)/count;
	
	//SteeliteSlimUniversal.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*SteeliteSlimUniversal.frameCWidth+SteeliteSlimUniversal.frameCBarWidth/2,SteeliteSlimUniversal.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//SteeliteSlimUniversal.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*SteeliteSlimUniversal.frameCWidth+SteeliteSlimUniversal.frameCBarWidth/2,SteeliteSlimUniversal.frameCHeight-SteeliteSlimUniversal.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//SteeliteSlimUniversal.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*SteeliteSlimUniversal.frameCWidth+SteeliteSlimUniversal.frameCBarWidth/2,SteeliteSlimUniversal.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	//SteeliteSlimUniversal.createRectangleArray(documentInterface, addOperation, new RVector(-0.5*SteeliteSlimUniversal.frameCWidth-SteeliteSlimUniversal.frameCBarWidth/2,SteeliteSlimUniversal.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	
	};

//********************************************************************************************************************
//
// Sidebars
//
//********************************************************************************************************************

SteeliteSlimUniversal.createSidebar = function(documentInterface, addOperation) {
	var v;
	
	sidebarHeight = SteeliteSlimUniversal.sidebarHeight;
	
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,SteeliteSlimUniversal.sidebarRoot,SteeliteSlimUniversal.sidebarRoot.operator_add(new RVector(-1*(SteeliteSlimUniversal.sidebarWidth-14),0)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(-14,14)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,sidebarHeight-34)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(SteeliteSlimUniversal.sidebarWidth-14,0)));
	
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.weldLugInset+6)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

	    SteeliteSlimUniversal.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		SteeliteSlimUniversal.frameCRoot.getX()+SteeliteSlimUniversal.flatFrameWeldHolePosition+SteeliteSlimUniversal.weldLugHoleWidth/2+SteeliteSlimUniversal.weldLugHoleClearance,
	    		v.getY()+SteeliteSlimUniversal.weldLugHoleClearance),
	    	sidebarHeight-2*SteeliteSlimUniversal.weldLugInset,
	    	SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,
	    	3*Math.PI/2);

	    SteeliteSlimUniversal.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		SteeliteSlimUniversal.frameCRoot.getX()+SteeliteSlimUniversal.frameCWidth-SteeliteSlimUniversal.flatFrameWeldHolePosition+SteeliteSlimUniversal.weldLugHoleWidth/2+SteeliteSlimUniversal.weldLugHoleClearance	,
	    		v.getY()+SteeliteSlimUniversal.weldLugHoleClearance),
	    	sidebarHeight-2*SteeliteSlimUniversal.weldLugInset,
	    	SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,
	    	3*Math.PI/2);

	v = SteeliteSlimUniversal.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*SteeliteSlimUniversal.weldLugInset,SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,3*Math.PI/2);


	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.weldLugInset+6)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

	// Make a clone of the bar a bit to the left

	 //~ if (!SteeliteSlimUniversal.topOpener)
        //~ {

        var newRoot = SteeliteSlimUniversal.sidebarRoot.operator_add(new RVector(-4*SteeliteSlimUniversal.sidebarWidth,0));

        v = SteeliteSlimUniversal.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*(SteeliteSlimUniversal.sidebarWidth-14),0)));
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(-14,14)));
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,sidebarHeight-34)));
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(SteeliteSlimUniversal.sidebarWidth-14,0)));

        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.weldLugInset+6)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

        v = SteeliteSlimUniversal.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*SteeliteSlimUniversal.weldLugInset,SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,3*Math.PI/2);

        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.weldLugInset+6)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
        v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

        //~ }
	 //~ else
		 //~ {
		 //~ // make top style bar
//~ 
		//~ var newRoot = SteeliteSlimUniversal.sidebarRoot.operator_add(new RVector(-4*(SteeliteSlimUniversal.sidebarWidth),0));
//~ 
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*SteeliteSlimUniversal.topbarBarWidth,0)));
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,sidebarHeight)));
		    //~ SteeliteSlimUniversal.createUnLuggedLine(documentInterface, addOperation,newRoot.operator_add(new RVector(-1*(SteeliteSlimUniversal.sidebarWidth-14),SteeliteSlimUniversal.mountingLugInset)),sidebarHeight-2*SteeliteSlimUniversal.mountingLugInset,SteeliteSlimUniversal.mountingLugMinSpacing,2,Math.PI/2);
		    //~ 
		//~ //v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,SteeliteSlimUniversal.mountingLugInset)));
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(SteeliteSlimUniversal.topbarBarWidth,0)));
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.weldLugInset)));
			//~ 
		//~ v = SteeliteSlimUniversal.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*SteeliteSlimUniversal.weldLugInset,SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,3*Math.PI/2);
//~ 
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.weldLugInset+6)));	 
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
		//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
		 //~ }
	 
// Create seal holes -4*SteeliteSlimUniversal

	var length = SteeliteSlimUniversal.sidebarHeight-2*20;
		
	// var s = Math.ceil(length/SteeliteSlimUniversal.sidebarSealHoleSpacing);
	
	var s = SteeliteSlimUniversal.calcHoleCount(length,SteeliteSlimUniversal.sidebarSealHoleSpacing,3);
	
	
	spacing = length/(s-1);

	var v = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.sidebarRoot.operator_add(new RVector(-7.5,20)), 
							SteeliteSlimUniversal.sidebarSealHoleDiameter);
	
	var v2 = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.sidebarRoot.operator_add(new RVector( -4*SteeliteSlimUniversal.sidebarWidth-7.5,20)), 
							SteeliteSlimUniversal.sidebarSealHoleDiameter);
	    	
	s--; // to allow for one we just did
	
	for (var i = 1; i <= s; i++) {
		v = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								SteeliteSlimUniversal.sidebarSealHoleDiameter);
		v2 = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								SteeliteSlimUniversal.sidebarSealHoleDiameter);
		    }





};

//********************************************************************************************************************
//
// Top bar	
//
//********************************************************************************************************************

SteeliteSlimUniversal.createTopbar = function(documentInterface, addOperation) {


var x = SteeliteSlimUniversal.topbarRoot.operator_add(new RVector(0,SteeliteSlimUniversal.topbarBarWidth));
x = x.operator_add(new RVector(SteeliteSlimUniversal.topbarWidth,0));
x = x.operator_add(new RVector(0,-SteeliteSlimUniversal.topbarBarWidth));

	// check positioning of these lines of holes with Steven

    SteeliteSlimUniversal.createHoleLine(documentInterface, addOperation,
    	new RVector(
    		x.getX()+SteeliteSlimUniversal.weldLugHoleClearance,
    		SteeliteSlimUniversal.frameCRoot.getY()+SteeliteSlimUniversal.flatFrameWeldHolePosition+SteeliteSlimUniversal.weldLugHoleWidth/2+SteeliteSlimUniversal.weldLugHoleClearance),
    	SteeliteSlimUniversal.topbarWidth,
    	SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,
    	Math.PI);

    SteeliteSlimUniversal.createHoleLine(documentInterface, addOperation,
    	new RVector(
    		x.getX()+SteeliteSlimUniversal.weldLugHoleClearance,
    		SteeliteSlimUniversal.frameCRoot.getY()+SteeliteSlimUniversal.frameCHeight - SteeliteSlimUniversal.flatFrameWeldHolePosition+SteeliteSlimUniversal.weldLugHoleWidth/2+SteeliteSlimUniversal.weldLugHoleClearance),
    	SteeliteSlimUniversal.topbarWidth,
    	SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,
    	Math.PI);

    

    //~ if (!SteeliteSlimUniversal.topOpener)
    	//~ {

		var v;
		v = SteeliteSlimUniversal.line(documentInterface, addOperation,SteeliteSlimUniversal.topbarRoot,SteeliteSlimUniversal.topbarRoot.operator_add(new RVector(0,SteeliteSlimUniversal.topbarBarWidth-14)));
		v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
		v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(SteeliteSlimUniversal.topbarWidth-28,0)));
		v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,-14)));
		v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.topbarBarWidth+14)));
		v = SteeliteSlimUniversal.createTabbedLine(documentInterface, addOperation,v,SteeliteSlimUniversal.topbarWidth,SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,Math.PI);

		// Create holes to match bottom lugged line

		var inset = SteeliteSlimUniversal.mountingLugInset;
		
		var	imaginaryP = SteeliteSlimUniversal.topbarRoot.operator_add(new RVector(0,SteeliteSlimUniversal.sidebarWidth));
		
		if (SteeliteSlimUniversal.topbarWidth<(2*SteeliteSlimUniversal.mountingLugInset+SteeliteSlimUniversal.lugWidth))
			{
			inset = (SteeliteSlimUniversal.topbarWidth - SteeliteSlimUniversal.lugWidth)/2;
			}

		//SteeliteSlimUniversal.createUnLuggedLine(documentInterface, addOperation,imaginaryP.operator_add(new RVector(inset,0)),SteeliteSlimUniversal.topbarWidth-2*inset,SteeliteSlimUniversal.mountingLugMinSpacing,1,0);

    	//~ }

	// Create seal holes -4*SteeliteSlimUniversal

	var width = SteeliteSlimUniversal.topbarWidth-2*20;
		
	//var s = Math.ceil(width/SteeliteSlimUniversal.sidebarSealHoleSpacing);
	
	var s = SteeliteSlimUniversal.calcHoleCount(width,SteeliteSlimUniversal.sidebarSealHoleSpacing,3);
	
	spacing = width/(s-1);

    //~ if (!SteeliteSlimUniversal.topOpener)
    	//~ {
		var v = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.topbarRoot.operator_add(new RVector(20,15/2)), 
							SteeliteSlimUniversal.sidebarSealHoleDiameter);
    	//~ }
    //~ else
    	//~ {
    	//~ 
    	//~ var v = SteeliteSlimUniversal.createHole(documentInterface, 
				//~ addOperation, 
				//~ SteeliteSlimUniversal.bottombarRoot.operator_add(new RVector(20,15/2-50)), 
				//~ SteeliteSlimUniversal.sidebarSealHoleDiameter);
    	//~ }
    
	var v2 = SteeliteSlimUniversal.createHole(documentInterface, 
							addOperation, 
							SteeliteSlimUniversal.bottombarRoot.operator_add(new RVector(20,15/2)), 
							SteeliteSlimUniversal.sidebarSealHoleDiameter);

	s--; // to allow for the one we just made
	
	
	for (var i = 1; i <= s; i++) {
    //~ if (!SteeliteSlimUniversal.topOpener)
    	//~ {
	v = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(spacing,0)), 
								SteeliteSlimUniversal.sidebarSealHoleDiameter);
    	//~ }
    //~ else
    	//~ {
    	//~ v = SteeliteSlimUniversal.createHole(documentInterface, 
				//~ addOperation, 
				//~ v.operator_add(new RVector(spacing,0)), 
				//~ SteeliteSlimUniversal.sidebarSealHoleDiameter);
    	//~ 
    	//~ }
	v2 = SteeliteSlimUniversal.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(spacing,0)), 
								SteeliteSlimUniversal.sidebarSealHoleDiameter);
	}	
    	
};

//********************************************************************************************************************
//
// Bottom bar	
//
//********************************************************************************************************************

SteeliteSlimUniversal.createBottombar = function(documentInterface, addOperation) {

	var v;

	v = SteeliteSlimUniversal.line(documentInterface, addOperation,SteeliteSlimUniversal.bottombarRoot,SteeliteSlimUniversal.bottombarRoot.operator_add(new RVector(0,SteeliteSlimUniversal.topbarBarWidth-14)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(SteeliteSlimUniversal.topbarWidth-28,0)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,-14)));
	v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.topbarBarWidth+14)));
	v = SteeliteSlimUniversal.createTabbedLine(documentInterface, addOperation,v,SteeliteSlimUniversal.topbarWidth,SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,Math.PI);

	  //~ if (SteeliteSlimUniversal.topOpener)
	    	//~ {
//~ 
	    	//~ var second_root = SteeliteSlimUniversal.bottombarRoot.operator_add(new RVector(0,-50));
//~ 
	    	//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,second_root,second_root.operator_add(new RVector(0,SteeliteSlimUniversal.sidebarWidth)));
	    	//~ 
	    	//~ if (SteeliteSlimUniversal.topbarWidth<(2*SteeliteSlimUniversal.mountingLugInset+SteeliteSlimUniversal.lugWidth))
	    		//~ {
	    		//~ inset = (SteeliteSlimUniversal.topbarWidth - SteeliteSlimUniversal.lugWidth)/2;
	    		//~ }
	    	//~ 
	    	//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));
	    	//~ 
	    	//~ v = SteeliteSlimUniversal.createLuggedLine(documentInterface, addOperation,v,SteeliteSlimUniversal.topbarWidth-2*inset,SteeliteSlimUniversal.mountingLugMinSpacing,1,0);
//~ 
	    	//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));
//~ 
//~ 
	    	//~ v = SteeliteSlimUniversal.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-SteeliteSlimUniversal.sidebarWidth)));
	    	//~ v = SteeliteSlimUniversal.createTabbedLine(documentInterface, addOperation,v,SteeliteSlimUniversal.topbarWidth,
	    			//~ SteeliteSlimUniversal.weldLugMinSpacing,SteeliteSlimUniversal.weldLugMaxSpacing,Math.PI);
//~ 
	    	//~ 
	    	//~ 
	    	//~ }
	//~ 
	
};




//********************************************************************************************************************
//
// Utilities
//
//********************************************************************************************************************

//********************************************************************************************************************
// Plot Text
//********************************************************************************************************************

SteeliteSlimUniversal.createText = function(documentInterface, addOperation, pos,text ) {
        var textData = new RTextData();
        textData.setText(text);
        textData.setTextHeight(4);
        textData.setTextWidth(2);
        textData.setPosition(pos);
        textData.move(pos);
        
        var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
        addOperation.addObject(textEntity);
};

SteeliteSlimUniversal.createBigText = function(documentInterface, addOperation, pos,text ) {
    var textData = new RTextData();
    textData.setText(text);
    textData.setTextHeight(20);
    textData.setTextWidth(10);
    textData.setPosition(pos);
    textData.move(pos);
    
    var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
    addOperation.addObject(textEntity);
};




SteeliteSlimUniversal.drawPolyLine = function(documentInterface, addOperation, vectors) {

    for ( var i = 0; i < vectors.length-1; i++) {
        var v1 = vectors[i];
        var v2 = vectors[(i + 1)];
        var lineData = new RLineData(v1, v2);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
    	}
};



SteeliteSlimUniversal.createHole = function(documentInterface, addOperation, pos, diameter) {

	var circleData = new RCircleData(pos,diameter/2);
	var circle = new RCircleEntity(documentInterface.getDocument(), circleData);
    addOperation.addObject(circle);
    return pos;
};


SteeliteSlimUniversal.createBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= SteeliteSlimUniversal.bendReliefDiameter;
    var slotWidth = SteeliteSlimUniversal.bendReliefSlotWidth;
    var slotLength 	= SteeliteSlimUniversal.bendReliefSlotLength;
    
    
    // First make two lines, pos is bottom left for keyhole pointing left bottom right for other
    var v2 = pos.operator_add(new RVector(slotLength*orientation,0)); 
    var v3 = pos.operator_add(new RVector(0,slotWidth));
    var v4 = pos.operator_add(new RVector(slotLength*orientation,slotWidth));
    
    var lineData = new RLineData(pos, v2);
    var line = new RLineEntity(documentInterface.getDocument(), lineData);
    var lineData2 = new RLineData(v3,v4);
    var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);
    
    addOperation.addObject(line);
    addOperation.addObject(line2);    
    
    // var arc = RArc.createFrom3Points( v2, pos.operator_add(new RVector(orientation*(slotLength+diameter),slotWidth/2)),v4 ); 
    var arc = RArc.createFrom3Points( v2, v3,v4 );
	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
    };

SteeliteSlimUniversal.createVBendRelief = function(documentInterface, addOperation, pos, vorientation,horientation) {
    
    var diameter 	= SteeliteSlimUniversal.bendReliefDiameter;
    var slotWidth = SteeliteSlimUniversal.bendReliefSlotWidth;
    var slotLength 	= SteeliteSlimUniversal.bendReliefSlotLength;
    
    
    // First make two lines, pos is bottom left for keyhole pointing left bottom right for other
    var v2 = pos.operator_add(new RVector(0,slotLength*vorientation)); 
    var v3 = pos.operator_add(new RVector(slotWidth,0));
    var v4 = pos.operator_add(new RVector(slotWidth,slotLength*vorientation));
    
    var lineData;
    if (horientation == 1) 
    	{
	    lineData = new RLineData(pos, v2);
    	}
    else
    	{
    	lineData = new RLineData(pos,v2.operator_add(new RVector(0,vorientation*-1*diameter/2)));
    	}
    var line = new RLineEntity(documentInterface.getDocument(), lineData);
    
    var lineData2;
    if (horientation == 1) 
    	{
    	lineData2 = new RLineData(v3,v4.operator_add(new RVector(0,vorientation*-1*diameter/2)));
    	}
    else
    	{
    	lineData2 = new RLineData(v3,v4);
    	}
    var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);
    
    addOperation.addObject(line);
    addOperation.addObject(line2);    
    
    // var arc = RArc.createFrom3Points( v2, pos.operator_add(new RVector(slotWidth/2,vorientation*(slotLength+diameter))),v4 ); 

	if (horientation == 1)
		{
    	var arc = RArc.createFrom3Points( v4.operator_add(new RVector(0,vorientation*-1*diameter/2)), v4.operator_add(new RVector(0,vorientation*diameter/2)),v2); 
		}
	else
		{
    	var arc = RArc.createFrom3Points( v2.operator_add(new RVector(0,vorientation*-1*diameter/2)), v2.operator_add(new RVector(0,vorientation*diameter/2)),v4); 
		}

	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
    };



SteeliteSlimUniversal.createXBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= SteeliteSlimUniversal.bendReliefDiameter;
    var slotWidth = SteeliteSlimUniversal.bendReliefSlotWidth;
    var slotLength 	= SteeliteSlimUniversal.bendReliefSlotLength;
    
    
    // First make two lines, pos is bottom left for keyhole pointing left bottom right for other
    var v2 = pos.operator_add(new RVector(0,slotLength*orientation)); 
    var v3 = pos.operator_add(new RVector(slotWidth,0));
    var v4 = pos.operator_add(new RVector(slotWidth,slotLength*orientation));
    
    var lineData = new RLineData(pos, v2);
    var line = new RLineEntity(documentInterface.getDocument(), lineData);
    var lineData2 = new RLineData(v3,v4);
    var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);
    
    addOperation.addObject(line);
    addOperation.addObject(line2);    
    
    // var arc = RArc.createFrom3Points( v2, pos.operator_add(new RVector(slotWidth/2,orientation*(slotLength+diameter))),v4 ); 
    var arc = RArc.createFrom3Points( v2, pos.operator_add(new RVector(slotWidth,orientation*(slotLength+diameter))),v4 ); 
	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
    };


SteeliteSlimUniversal.createRectangle = function(documentInterface, addOperation, pos, x, y) {
    var va = new Array(
            new RVector(0, 0),
            new RVector(0, y),
            new RVector(x, y),
            new RVector(x, 0)
    );

    for ( var i = 0; i < va.length; ++i) {
        var v1 = va[i].operator_add(pos);
        var v2 = va[(i + 1) % va.length].operator_add(pos);
        var lineData = new RLineData(v1, v2);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
    }
    
    return v2;
};


SteeliteSlimUniversal.line = function(documentInterface, addOperation, start,end ) {
        var lineData = new RLineData(start,end);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
        return end;
};

SteeliteSlimUniversal.createSquare = function(documentInterface, addOperation, pos,x) {
	SteeliteSlimUniversal.createSquare(documentInterface, addOperation, pos,x,x);
};

SteeliteSlimUniversal.createRectangleArray = function(documentInterface, addOperation, pos, width, height, count, offset) {
	var tPos = pos;
	for (var i=0;i < count; i++) {
		SteeliteSlimUniversal.createRectangle(documentInterface, addOperation, tPos, width, height);
		tPos = tPos.operator_add(offset);
	};

};

SteeliteSlimUniversal.calcHoleCount = function(length, minSpacing,minLugs) {
	return SteeliteSlimUniversal.calcLugCount(length, minSpacing,minLugs);
};

SteeliteSlimUniversal.calcLugCount = function(length, minSpacing,minLugs) {

	var segCount = (length - (length % minSpacing))/minSpacing;
    var lugCount = segCount+1;

    if (lugCount < minLugs)
    	{
		return minLugs;
    	}
    else
    	{
	   	return lugCount;
    	}

};

SteeliteSlimUniversal.calculateSpacing = function(minSpacing,maxSpacing,length) {
	var i;
		
	if (length < minSpacing) { return 1; }

//	for (i=1;i<100;i++) {
//		if (length/i > minSpacing && length/i < maxSpacing) {
//			break;
//		}
//	}
//	if (i > 98) {print ("Error: Could not find a solution to the spacing");};


	return (length - (length % minSpacing))/minSpacing;

};

SteeliteSlimUniversal.createMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset
	var v1 = new RVector(0,0);
	var v2 = new RVector(SteeliteSlimUniversal.lugWidth/4,SteeliteSlimUniversal.lugHoleOffset*1.155);
	var v3 = new RVector(3*SteeliteSlimUniversal.lugWidth/4,SteeliteSlimUniversal.lugHoleOffset*1.155);
	var v4 = new RVector(SteeliteSlimUniversal.lugWidth,0);
	var v5 = new RVector(SteeliteSlimUniversal.lugHoleOffset,SteeliteSlimUniversal.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(SteeliteSlimUniversal.lugWidth/2,0));
	var root = pos;
	
	v1 = v1.operator_add(root);
	v2 = v2.operator_add(root);
	v3 = v3.operator_add(root);
	v4 = v4.operator_add(root);
	v5 = v5.operator_add(root);
	
	//No point rotating v1 round itself
    v2 = v2.rotate(angle,v1);	
	v3 = v3.rotate(angle,v1);	
	v4 = v4.rotate(angle,v1);	
	v5 = v5.rotate(angle,v1);	
	
	var lineData = new RLineData(v1, v2);
    var line = new RLineEntity(documentInterface.getDocument(), lineData);
    addOperation.addObject(line);

	var lineData2 = new RLineData(v3, v4);
    var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);
    addOperation.addObject(line2);
    
 	SteeliteSlimUniversal.createHole(documentInterface, addOperation, v5, SteeliteSlimUniversal.lugHoleDiameter);
 
    var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
	return v4; // start point for next object
};


SteeliteSlimUniversal.createInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

// Y height is 15.5% more than hole centre
// lugWidth, lugHoleDiameter, lugHoleOffset
var v1 = new RVector(0,0);
var v2 = new RVector(SteeliteSlimUniversal.lugWidth/4,SteeliteSlimUniversal.lugHoleOffset*1.155);
var v3 = new RVector(3*SteeliteSlimUniversal.lugWidth/4,SteeliteSlimUniversal.lugHoleOffset*1.155);
var v4 = new RVector(SteeliteSlimUniversal.lugWidth,0);
var v5 = new RVector(SteeliteSlimUniversal.lugHoleOffset,SteeliteSlimUniversal.lugHoleOffset);

//var root = pos.operator_add(new RVector(SteeliteSlimUniversal.lugWidth/2,0));
var root = pos;

v1 = v1.operator_add(root);
v2 = v2.operator_add(root);
v3 = v3.operator_add(root);
v4 = v4.operator_add(root);
v5 = v5.operator_add(root);

//No point rotating v1 round itself
v2 = v2.rotate(angle,v1);	
v3 = v3.rotate(angle,v1);	
v4 = v4.rotate(angle,v1);	
v5 = v5.rotate(angle,v1);	

//var lineData = new RLineData(v1, v2);
//var line = new RLineEntity(documentInterface.getDocument(), lineData);
//addOperation.addObject(line);
//
//var lineData2 = new RLineData(v3, v4);
//var line2 = new RLineEntity(documentInterface.getDocument(), lineData2);
//addOperation.addObject(line2);

	SteeliteSlimUniversal.createHole(documentInterface, addOperation, v5, SteeliteSlimUniversal.lugHoleDiameter);

//var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
//var keyHoleData = new RArcData(arc);
//var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);
//
//addOperation.addObject(keyHole);

return v4; // start point for next object
};

SteeliteSlimUniversal.oldcreateInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset

	var v1 = new RVector(0,0);
	var v4 = new RVector(SteeliteSlimUniversal.lugWidth,0);
	var v5 = new RVector(SteeliteSlimUniversal.lugHoleOffset,SteeliteSlimUniversal.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(SteeliteSlimUniversal.lugWidth/2,0));
	var root = pos;
	
	v1 = v1.operator_add(root);
	v4 = v4.operator_add(root);
	v5 = v5.operator_add(root);
	
	//No point rotating v1 round itself
	v5 = v5.rotate(angle,v1);	
	
 	SteeliteSlimUniversal.createHole(documentInterface, addOperation, v5, SteeliteSlimUniversal.lugHoleDiameter);
 	return v4;
};


SteeliteSlimUniversal.createLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line

	
	var lugCount = SteeliteSlimUniversal.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
	
	
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-SteeliteSlimUniversal.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		var lugStart 		= SteeliteSlimUniversal.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset));
		var lastLineStart	= SteeliteSlimUniversal.createMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= SteeliteSlimUniversal.line(documentInterface, addOperation, lastLineStart, lastLineStart.operator_add(joinerOffset));
		
	} else {

		var l = (length-SteeliteSlimUniversal.lugWidth)/(lugCount-1)-SteeliteSlimUniversal.lugWidth;
		
		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}
		
		// create lug one
		var lugStart;
		var lineStart = SteeliteSlimUniversal.createMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = SteeliteSlimUniversal.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
			lineStart = SteeliteSlimUniversal.createMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	

		
		lastPoint = lineStart;
	}

		
	return lastPoint;	
};


SteeliteSlimUniversal.createUnLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	var lugCount = SteeliteSlimUniversal.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
		
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-SteeliteSlimUniversal.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		//var lugStart 		= SteeliteSlimUniversal.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset)); // QQQ is this a bug??
		var lugStart 		= pos.operator_add(joinerOffset); 
		var lastLineStart	= SteeliteSlimUniversal.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= lastLineStart.operator_add(joinerOffset);
		
	} else {
		
		var l = (length-SteeliteSlimUniversal.lugWidth)/(lugCount-1)-SteeliteSlimUniversal.lugWidth;
		
		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}
		
		// create lug one
		var lugStart;
		var lineStart = SteeliteSlimUniversal.createInvisibleMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = lineStart.operator_add(joinerOffset); 
			lineStart = SteeliteSlimUniversal.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	
		
		lastPoint = lineStart;
	}
		
	return lastPoint;	
};


SteeliteSlimUniversal.createTabbedLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	// var count = SteeliteSlimUniversal.calculateSpacing(minSpacing,maxSpacing,length);
	var count = SteeliteSlimUniversal.calcLugCount(length,minSpacing,3);
	var joinerOffset;
	var lastPoint;
		
	var l = (length-SteeliteSlimUniversal.weldLugWidth)/count-SteeliteSlimUniversal.weldLugWidth;
	var stepsize = 3;
	step_l = l -2*stepsize;
		
	if (orientation == 0) { // if the orientation East/West {
		joinerOffset = new RVector(l,0);		
		step_1 = new RVector(stepsize,0);
		step_2 = new RVector(0,-stepsize);
		joiner = new RVector(step_l,0);
		step_3 = new RVector(0,stepsize);
		step_4 = new RVector(stepsize,0);
	} else if (orientation == Math.PI/2) {
		joinerOffset = new RVector(0,l);
		step_1 = new RVector(0,stepsize);
		step_2 = new RVector(stepsize,0);
		joiner = new RVector(0,step_l);
		step_3 = new RVector(-stepsize,0);
		step_4 = new RVector(0,-stepsize);
	} else if (orientation == Math.PI) {
		joinerOffset = new RVector(-l,0);
		step_1 = new RVector(-stepsize,0);
		step_2 = new RVector(0,stepsize);
		joiner = new RVector(-step_l,0);
		step_3 = new RVector(0,-stepsize);
		step_4 = new RVector(-stepsize,0);
	} else {
		joinerOffset = new RVector(0,-l);
		step_1 = new RVector(0,-stepsize);
		step_2 = new RVector(-stepsize,0);
		joiner = new RVector(0,-step_l);
		step_3 = new RVector(stepsize,0);
		step_4 = new RVector(0,-stepsize);
	}
	
	// create lug one
	var lugStart;
	var lineStart = SteeliteSlimUniversal.createWeldLug(documentInterface, addOperation, pos, orientation);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lineStart = SteeliteSlimUniversal.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_1)); 
		lineStart = SteeliteSlimUniversal.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_2)); 
		lineStart = SteeliteSlimUniversal.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joiner)); 
		lineStart = SteeliteSlimUniversal.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_3)); 
		lugStart = SteeliteSlimUniversal.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_4)); 
		
		lineStart = SteeliteSlimUniversal.createWeldLug(documentInterface, addOperation, lugStart, orientation);			
	}	
			
	return lineStart;	
};

SteeliteSlimUniversal.createHoleLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	
	
	// var count = SteeliteSlimUniversal.calculateSpacing(minSpacing,maxSpacing,length);
	var count = SteeliteSlimUniversal.calcLugCount(length,minSpacing,3);
	var joinerOffset;
		
	var l = (length-SteeliteSlimUniversal.weldLugWidth)/count;
	
	var x,y;
	
	if (orientation == 0) { // if the orientation East/West {
		joinerOffset = new RVector(l,0);
		x = SteeliteSlimUniversal.weldLugWidth+2*SteeliteSlimUniversal.weldLugHoleClearance;
		y = SteeliteSlimUniversal.weldLugHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance;
	} else if (orientation == Math.PI/2) {
		joinerOffset = new RVector(0,l);
		x = SteeliteSlimUniversal.weldLugHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance;
		y = SteeliteSlimUniversal.weldLugWidth+2*SteeliteSlimUniversal.weldLugHoleClearance;
	} else if (orientation == Math.PI) {
		joinerOffset = new RVector(-l,0);
		x = -1*(SteeliteSlimUniversal.weldLugWidth+2*SteeliteSlimUniversal.weldLugHoleClearance);
		y = -1*(SteeliteSlimUniversal.weldLugHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance);
	} else {
		joinerOffset = new RVector(0,-l); // Tested OK
		x = -(SteeliteSlimUniversal.weldLugHoleWidth+2*SteeliteSlimUniversal.weldLugHoleClearance);
		y = -(SteeliteSlimUniversal.weldLugWidth+2*SteeliteSlimUniversal.weldLugHoleClearance);
	}
	
	// create lug one
	var lugStart;
	var lineStart = SteeliteSlimUniversal.createRectangle(documentInterface, addOperation, pos, x, y);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = lineStart.operator_add(joinerOffset); 
		lineStart = SteeliteSlimUniversal.createRectangle(documentInterface, addOperation, lugStart, x, y);			
	}	
			
};


SteeliteSlimUniversal.createWeldLug  = function (documentInterface, addOperation, pos, orientation) {
	
	v2 = pos.operator_add(new RVector(0,SteeliteSlimUniversal.weldLugDepth));
	v3 = v2.operator_add(new RVector(SteeliteSlimUniversal.weldLugWidth,0));
	v4 = v3.operator_add(new RVector(0,-SteeliteSlimUniversal.weldLugDepth));
	
	v2 = v2.rotate(orientation,pos);
	v3 = v3.rotate(orientation,pos);
	v4 = v4.rotate(orientation,pos);
	
	SteeliteSlimUniversal.line(documentInterface, addOperation,pos,v2);
	SteeliteSlimUniversal.line(documentInterface, addOperation,v2,v3);
	SteeliteSlimUniversal.line(documentInterface, addOperation,v3,v4);
	
	return v4;	
};
