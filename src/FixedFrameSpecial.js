// FixedFrameSpecial.js
// library.js contains some convenience functions like 'isNull':
// This source is now managed under GIT

include("scripts/library.js");
include("scripts/WidgetFactory.js");	
include("scripts/File/SaveAs/SaveAs.js");
include("./primitives.js")

//
// Create main object 
//

function FixedFrameSpecial() {
}

//
// Read widget to get object from which we can extract parameters
//


FixedFrameSpecial.init = function(formWidget) {
    if (!isNull(formWidget)) {
        FixedFrameSpecial.widgets = getWidgets(formWidget);
    }
        
    this.twoLetterCode = "FS";
	this.versionNumber = "01";

};



//
// Set requested sizes (default sizes are suitable for ICON generation
//
// FRAME A  = NOTCHED FRAME
// FRAME C = FLAT FRAME
//

FixedFrameSpecial.setValues = function() {


    FixedFrameSpecial.customerName = FixedFrameSpecial.widgets["CustomerName"].text;
    FixedFrameSpecial.finishedWidth = parseFloat(FixedFrameSpecial.widgets["FinishedWidth"].text, 10);
    FixedFrameSpecial.finishedHeight = parseFloat(FixedFrameSpecial.widgets["FinishedHeight"].text, 10);
    FixedFrameSpecial.cutoutHeight = parseFloat(FixedFrameSpecial.widgets["CutoutHeight"].text, 10);
    FixedFrameSpecial.cutoutWidth = parseFloat(FixedFrameSpecial.widgets["CutoutWidth"].text, 10);

    FixedFrameSpecial.frameARelativeWidth = parseFloat(FixedFrameSpecial.widgets["FrameARelativeWidth"].text, 10);
    FixedFrameSpecial.frameARelativeHeight = parseFloat(FixedFrameSpecial.widgets["FrameARelativeHeight"].text, 10);
    FixedFrameSpecial.frameABarWidth = parseFloat(FixedFrameSpecial.widgets["FrameABarWidth"].text, 10);
    FixedFrameSpecial.frameABarHeight = parseFloat(FixedFrameSpecial.widgets["FrameABarHeight"].text, 10);
    FixedFrameSpecial.frameAPlasticHoleSpacing = parseFloat(FixedFrameSpecial.widgets["FrameAPlasticHoleSpacing"].text, 10);

    FixedFrameSpecial.handleRampHoleHeight = parseFloat(FixedFrameSpecial.widgets["HandleRampHoleHeight"].text, 10);
    FixedFrameSpecial.handleRampHoleWidth = parseFloat(FixedFrameSpecial.widgets["HandleRampHoleWidth"].text, 10);
    FixedFrameSpecial.handleRampHoleCentres = parseFloat(FixedFrameSpecial.widgets["HandleRampHoleCentres"].text, 10);
    FixedFrameSpecial.handleRampHoleInset = parseFloat(FixedFrameSpecial.widgets["HandleRampHoleInset"].text, 10);



    FixedFrameSpecial.frameCRelativeWidth = parseFloat(FixedFrameSpecial.widgets["FrameCRelativeWidth"].text, 10);
    FixedFrameSpecial.frameCRelativeHeight = parseFloat(FixedFrameSpecial.widgets["FrameCRelativeHeight"].text, 10);
    FixedFrameSpecial.frameCBarWidth = parseFloat(FixedFrameSpecial.widgets["FrameCBarWidth"].text, 10);
    FixedFrameSpecial.frameCBarHeight = parseFloat(FixedFrameSpecial.widgets["FrameCBarHeight"].text, 10);

    FixedFrameSpecial.frameCHingeHoleWidth = parseFloat(FixedFrameSpecial.widgets["FrameCHingeHoleWidth"].text, 10);
    FixedFrameSpecial.frameCHingeHoleHeight = parseFloat(FixedFrameSpecial.widgets["FrameCHingeHoleHeight"].text, 10);
    FixedFrameSpecial.frameCHingeHoleCentreW = parseFloat(FixedFrameSpecial.widgets["FrameCHingeHoleCentreW"].text, 10);
    FixedFrameSpecial.frameCHingeHoleCentreH = parseFloat(FixedFrameSpecial.widgets["FrameCHingeHoleCentreH"].text, 10);
    FixedFrameSpecial.flatFrameWeldHolePosition = parseFloat(FixedFrameSpecial.widgets["FlatFrameWeldHolePosition"].text, 10);



    FixedFrameSpecial.holeDiameter = parseFloat(FixedFrameSpecial.widgets["HoleDiameter"].text, 10);
 	FixedFrameSpecial.plasticHoleDiameter = parseFloat(FixedFrameSpecial.widgets["PlasticHoleDiameter"].text, 10);
    FixedFrameSpecial.bendReliefDiameter = parseFloat(FixedFrameSpecial.widgets["BendReliefDiameter"].text, 10);
    FixedFrameSpecial.bendReliefSlotWidth = parseFloat(FixedFrameSpecial.widgets["BendReliefSlotWidth"].text, 10);
    FixedFrameSpecial.bendReliefSlotLength = parseFloat(FixedFrameSpecial.widgets["BendReliefSlotLength"].text, 10);

    FixedFrameSpecial.lugWidth = parseFloat(FixedFrameSpecial.widgets["LugWidth"].text, 10);
    FixedFrameSpecial.lugLength = parseFloat(FixedFrameSpecial.widgets["LugLength"].text, 10);
    FixedFrameSpecial.lugHoleOffset = parseFloat(FixedFrameSpecial.widgets["LugHoleOffset"].text, 10);
    FixedFrameSpecial.lugHoleDiameter = parseFloat(FixedFrameSpecial.widgets["LugHoleDiameter"].text, 10);
    FixedFrameSpecial.mountingLugInset = parseFloat(FixedFrameSpecial.widgets["MountingLugInset"].text, 10);
    FixedFrameSpecial.mountingLugMinSpacing = parseFloat(FixedFrameSpecial.widgets["MountingLugMinSpacing"].text, 10);
    FixedFrameSpecial.mountingLugMaxSpacing = parseFloat(FixedFrameSpecial.widgets["MountingLugMaxSpacing"].text, 10);

    FixedFrameSpecial.sidebarWidth = parseFloat(FixedFrameSpecial.widgets["SidebarWidth"].text, 10);
    FixedFrameSpecial.sidebarRelativeHeight = parseFloat(FixedFrameSpecial.widgets["SidebarRelativeHeight"].text, 10);
    FixedFrameSpecial.sidebarSealHoleSpacing = parseFloat(FixedFrameSpecial.widgets["SidebarSealHoleSpacing"].text, 10);
    FixedFrameSpecial.sidebarSealHoleDiameter = parseFloat(FixedFrameSpecial.widgets["SidebarSealHoleDiameter"].text, 10);

    FixedFrameSpecial.weldLugWidth = parseFloat(FixedFrameSpecial.widgets["WeldLugWidth"].text, 10);
    FixedFrameSpecial.weldLugDepth = parseFloat(FixedFrameSpecial.widgets["WeldLugDepth"].text, 10);
    FixedFrameSpecial.weldLugInset = parseFloat(FixedFrameSpecial.widgets["WeldLugInset"].text, 10);
    FixedFrameSpecial.weldLugMinSpacing = parseFloat(FixedFrameSpecial.widgets["WeldLugMinSpacing"].text, 10);
    FixedFrameSpecial.weldLugMaxSpacing = parseFloat(FixedFrameSpecial.widgets["WeldLugMaxSpacing"].text, 10);
    FixedFrameSpecial.weldLugHoleWidth = parseFloat(FixedFrameSpecial.widgets["WeldLugHoleWidth"].text, 10);
    FixedFrameSpecial.weldLugHoleClearance = parseFloat(FixedFrameSpecial.widgets["WeldLugHoleClearance"].text, 10);

    FixedFrameSpecial.tabbedBarHeight = parseFloat(FixedFrameSpecial.widgets["TabbedBarHeight"].text, 10);
    FixedFrameSpecial.tabbedBarRelativeWidth = parseFloat(FixedFrameSpecial.widgets["TabbedBarRelativeWidth"].text, 10);
    FixedFrameSpecial.tabHoleInset = parseFloat(FixedFrameSpecial.widgets["TabHoleInset"].text, 10);
    FixedFrameSpecial.simpleBarHeight = parseFloat(FixedFrameSpecial.widgets["SimpleBarHeight"].text, 10);
    FixedFrameSpecial.simpleBarRelativeWidth = parseFloat(FixedFrameSpecial.widgets["SimpleBarRelativeWidth"].text, 10);
    FixedFrameSpecial.handleRampHolePosition = parseFloat(FixedFrameSpecial.widgets["HandleRampHolePosition"].text, 10);
    FixedFrameSpecial.includeRampHandle = FixedFrameSpecial.widgets["IncludeRampHandle"].checked;
    FixedFrameSpecial.topOpener = FixedFrameSpecial.widgets["TopOpener"].checked;

    if (FixedFrameSpecial.topOpener)
    	{
    	// Transpose W & H as quick and dirty fix
        FixedFrameSpecial.finishedWidth =  parseFloat(FixedFrameSpecial.widgets["FinishedHeight"].text, 10);
        FixedFrameSpecial.finishedHeight =parseFloat(FixedFrameSpecial.widgets["FinishedWidth"].text, 10);
    	}
    
    
	FixedFrameSpecial.setDerivedValues();

};

//
// Set default sizes (default sizes are suitable for ICON generation
//

FixedFrameSpecial.setDefaults = function() {

    FixedFrameSpecial.finishedWidth = 50;
    FixedFrameSpecial.finishedHeight = 50;
    FixedFrameSpecial.cutoutWidth = 5;
    FixedFrameSpecial.cutoutHeight = 5;
    FixedFrameSpecial.frameABarWidth = 3;
    FixedFrameSpecial.frameABarHeight = 3;
    FixedFrameSpecial.frameARelativeHeight = 3;
    FixedFrameSpecial.frameARelativeWidth = 3;
    FixedFrameSpecial.frameCBarWidth = 3;
    FixedFrameSpecial.frameCBarHeight = 3;
    FixedFrameSpecial.frameCRelativeHeight = 3;
    FixedFrameSpecial.frameCRelativeWidth = 3;

    FixedFrameSpecial.frameCHingeHoleWidth = 1;
    FixedFrameSpecial.frameCHingeHoleHeight = 1;
    FixedFrameSpecial.frameCHingeHoleCentreW = 1;
    FixedFrameSpecial.frameCHingeHoleCentreH = 1;


    FixedFrameSpecial.holeDiameter = 1;
    FixedFrameSpecial.plasticHoleDiameter = 1;
    FixedFrameSpecial.handleRampHoleHeight = 1;
    FixedFrameSpecial.handleRampHoleWidth = 1;
    FixedFrameSpecial.handleRampHoleCentres = 1;
    FixedFrameSpecial.handleRampHoleInset = 1;


    FixedFrameSpecial.bendReliefDiameter = 5;
    FixedFrameSpecial.bendReliefSlotWidth = 5;
    FixedFrameSpecial.bendReliefSlotLength = 20;
    FixedFrameSpecial.lugWidth = 0.5
    FixedFrameSpecial.lugHoleOffset = 0.3;
    FixedFrameSpecial.lugHoleDiameter = 0.1;
    FixedFrameSpecial.sidebarWidth = .1;
    FixedFrameSpecial.sidebarRelativeHeight = .1;
    FixedFrameSpecial.weldLugWidth = .1;
    FixedFrameSpecial.weldLugDepth = .1;
    FixedFrameSpecial.mountingLugInset = .1;
    FixedFrameSpecial.weldLugInset = .1;
    FixedFrameSpecial.weldLugMinSpacing = .1;
    FixedFrameSpecial.weldLugMaxSpacing = .1;
    FixedFrameSpecial.mountingLugMinSpacing = .1;
    FixedFrameSpecial.mountingLugMaxSpacing = .1;
    FixedFrameSpecial.weldLugHoleWidth = .1;
    FixedFrameSpecial.weldLugHoleClearance = .1;
	FixedFrameSpecial.topbarWidth = .1;
	FixedFrameSpecial.topbarRelativeWidth = .1;
	FixedFrameSpecial.frameAPlasticHoleSpacing = 1;
	FixedFrameSpecial.sidebarSealHoleSpacing = 3;	
 
	FixedFrameSpecial.setDerivedValues();

};

FixedFrameSpecial.setDerivedValues = function (){

    FixedFrameSpecial.frameAWidth = FixedFrameSpecial.finishedWidth+FixedFrameSpecial.frameARelativeWidth;
    FixedFrameSpecial.frameAHeight = FixedFrameSpecial.finishedHeight+FixedFrameSpecial.frameARelativeHeight;
    FixedFrameSpecial.frameARoot = new RVector(0,(FixedFrameSpecial.finishedHeight-FixedFrameSpecial.frameARelativeHeight)/2);

    FixedFrameSpecial.frameCWidth = FixedFrameSpecial.finishedWidth+FixedFrameSpecial.frameCRelativeWidth;
    FixedFrameSpecial.frameCHeight = FixedFrameSpecial.finishedHeight+FixedFrameSpecial.frameCRelativeHeight;
    FixedFrameSpecial.frameCRoot = new RVector(-1.2*FixedFrameSpecial.finishedWidth,(FixedFrameSpecial.finishedHeight-FixedFrameSpecial.frameCRelativeHeight)/2);
	
    FixedFrameSpecial.sidebarHeight = FixedFrameSpecial.finishedHeight+FixedFrameSpecial.sidebarRelativeHeight;
    FixedFrameSpecial.sidebarRoot = new RVector(-1.5*FixedFrameSpecial.finishedWidth,(FixedFrameSpecial.finishedHeight-FixedFrameSpecial.sidebarRelativeHeight)/2);

    FixedFrameSpecial.tabbedBarWidth = FixedFrameSpecial.finishedWidth+FixedFrameSpecial.tabbedBarRelativeWidth;
    FixedFrameSpecial.tabbedBarRoot = new RVector(FixedFrameSpecial.frameARoot.getX()+(FixedFrameSpecial.frameAWidth-FixedFrameSpecial.tabbedBarWidth)/2,FixedFrameSpecial.frameCHeight*1.6);

    FixedFrameSpecial.simpleBarWidth = FixedFrameSpecial.finishedWidth+FixedFrameSpecial.simpleBarRelativeWidth;    
    FixedFrameSpecial.simpleBarRoot = new RVector(FixedFrameSpecial.frameARoot.getX()+(FixedFrameSpecial.frameAWidth-FixedFrameSpecial.simpleBarWidth)/2,FixedFrameSpecial.frameCHeight*0.2	);

};
//
// Main function to generate the frames
//

FixedFrameSpecial.generate = function(documentInterface, file) {
    FixedFrameSpecial.setValues();
    return FixedFrameSpecial.create(documentInterface);
};

//
// Function to generate the frames icon
//


FixedFrameSpecial.generatePreview = function(documentInterface, iconSize) {
    FixedFrameSpecial.setDefaults();
    return FixedFrameSpecial.createIcon(documentInterface);

};


//
// Plot each of main elements
//

FixedFrameSpecial.create = function(documentInterface) {
    	
	var addOperation = new RAddObjectsOperation(false);
    	
    FixedFrameSpecial.createFrameA(documentInterface, addOperation);
 
 	//FixedFrameSpecial.createFrameC(documentInterface, addOperation);
	// FixedFrameSpecial.createSidebar(documentInterface, addOperation);
    //FixedFrameSpecial.createTopbar(documentInterface, addOperation);		
 
    FixedFrameSpecial.createHorizontalBars(documentInterface, addOperation);

	//FixedFrameSpecial.createBottombar(documentInterface, addOperation);
    // debugger;
    
    FixedFrameSpecial.commentBox(documentInterface, addOperation);
    
    //var saveAsAction = new SaveAs();
    //saveAsAction.save("../DXF_WINDOW_DRAWINGS/"+FixedFrameSpecial.customerName+"_W_"+FixedFrameSpecial.finishedWidth+"_x_H_"+FixedFrameSpecial.finishedHeight+".dxf","R27",false);    
    //documentInterface.getDocument().setFileName();    
        
    return addOperation;
};


FixedFrameSpecial.createIcon = function(di)
	{

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


FixedFrameSpecial.commentBox = function(documentInterface, addOperation) {

    this.createRectangle(documentInterface, addOperation,new RVector(0,0),600,120);
    this.createBigText(documentInterface, addOperation,new RVector(5,100),FixedFrameSpecial.customerName);
	if (FixedFrameSpecial.topOpener)
		{
	    this.createBigText(documentInterface, addOperation,new RVector(5,50),"Dimensions (WxH)");
	    this.createBigText(documentInterface, addOperation,new RVector(5,25),FixedFrameSpecial.finishedHeight+"x"+FixedFrameSpecial.finishedWidth);
		}
	else
		{
	    this.createBigText(documentInterface, addOperation,new RVector(5,75),"Fixed Frame (Special)");			
	    this.createBigText(documentInterface, addOperation,new RVector(5,50),"Dimensions (WxH)");
	    this.createBigText(documentInterface, addOperation,new RVector(5,25),FixedFrameSpecial.finishedWidth+"x"+FixedFrameSpecial.finishedHeight);		
		}
    

    return addOperation;
};


//********************************************************************************************************************
//
//   Frame A
//
//********************************************************************************************************************

FixedFrameSpecial.createFrameA = function(documentInterface, addOperation) {
	FixedFrameSpecial.createFrameAOutline(documentInterface, addOperation);
	FixedFrameSpecial.createFrameAInner(documentInterface, addOperation);	
	//FixedFrameSpecial.drillFrameAHoles(documentInterface, addOperation);
	FixedFrameSpecial.drillPlasticHoles(documentInterface, addOperation);

    //if (FixedFrameSpecial.includeRampHandle && !FixedFrameSpecial.topOpener)
    //    {
    //    FixedFrameSpecial.drillFrameAHandleRampHolesVariablePosition(documentInterface, addOperation,FixedFrameSpecial.handleRampHolePosition);
	//    }
	// FixedFrameSpecial.drillFrameAHandleRampHoles(documentInterface, addOperation);
	return addOperation;
};


FixedFrameSpecial.createFrameAOutline = function(documentInterface, addOperation) {
	
	var width 			= FixedFrameSpecial.frameAWidth;
	var height 			= FixedFrameSpecial.frameAHeight;
	var cutoutWidth 	= FixedFrameSpecial.cutoutWidth;
	var cutoutHeight 	= FixedFrameSpecial.cutoutHeight;
	
    var va = new Array(
            FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth-FixedFrameSpecial.bendReliefSlotWidth,cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(0, cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(0, height-cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth-FixedFrameSpecial.bendReliefSlotWidth, height-cutoutHeight))
   );

	FixedFrameSpecial.drawPolyLine(documentInterface, addOperation, va);

    var va2 = new Array(
            FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth, height-cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth, height)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth,height)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight))
     );

	FixedFrameSpecial.drawPolyLine(documentInterface, addOperation, va2);

    var va3 = new Array(
           FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth+FixedFrameSpecial.bendReliefSlotWidth,height-cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(width,height-cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(width,cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth+FixedFrameSpecial.bendReliefSlotWidth,cutoutHeight))
    );

	FixedFrameSpecial.drawPolyLine(documentInterface, addOperation, va3);

    var va4 = new Array(
            FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth,0)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth,0)),
            FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth,cutoutHeight))
    );

	FixedFrameSpecial.drawPolyLine(documentInterface, addOperation, va4);

	// Now insert the bend reliefs
	
	FixedFrameSpecial.createVBendRelief(documentInterface, addOperation,FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth-FixedFrameSpecial.bendReliefSlotWidth,cutoutHeight)),1,1);
	FixedFrameSpecial.createVBendRelief(documentInterface, addOperation,FixedFrameSpecial.frameARoot.operator_add(new RVector(cutoutWidth-FixedFrameSpecial.bendReliefSlotWidth, height-cutoutHeight)),-1,1);
	FixedFrameSpecial.createVBendRelief(documentInterface, addOperation,FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight)),-1,-1);
	FixedFrameSpecial.createVBendRelief(documentInterface, addOperation,FixedFrameSpecial.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),1,-1);

};


FixedFrameSpecial.createFrameAInner = function(documentInterface, addOperation) {
	
	var width 			= FixedFrameSpecial.frameAWidth-2*FixedFrameSpecial.frameABarWidth;
	var height 			= FixedFrameSpecial.frameAHeight-2*FixedFrameSpecial.frameABarHeight;
	var widthOffset     = FixedFrameSpecial.frameABarWidth;
	var heightOffset    = FixedFrameSpecial.frameABarHeight;
	
	
    FixedFrameSpecial.createRectangle(documentInterface, addOperation,FixedFrameSpecial.frameARoot.operator_add(new RVector(widthOffset,heightOffset)),width,height);

};

FixedFrameSpecial.drillFrameAHoles = function(documentInterface, addOperation) {
	
	FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+11,FixedFrameSpecial.frameAHeight-5.5)), FixedFrameSpecial.holeDiameter);
	FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+26,FixedFrameSpecial.frameAHeight-11.5)), FixedFrameSpecial.holeDiameter);
	FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+41,FixedFrameSpecial.frameAHeight-5.5)), FixedFrameSpecial.holeDiameter);

	FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+11,5.5)), FixedFrameSpecial.holeDiameter);
	FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+26,11.5)), FixedFrameSpecial.holeDiameter);
	FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+41,5.5)), FixedFrameSpecial.holeDiameter);

};

// Drill v holes 

FixedFrameSpecial.drillPlasticHoles = function(documentInterface, addOperation) {

	var length = FixedFrameSpecial.frameAHeight-2*(FixedFrameSpecial.frameABarHeight+3);
		
	// var s = Math.ceil(length/FixedFrameSpecial.frameAPlasticHoleSpacing);
	var s = FixedFrameSpecial.calcHoleCount(length,FixedFrameSpecial.frameAPlasticHoleSpacing,3);
	spacing = length/(s-1);

	var v = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.frameARoot.operator_add(new RVector(17.5,FixedFrameSpecial.frameABarHeight+3)), 
							FixedFrameSpecial.plasticHoleDiameter);

	var v2 = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.frameAWidth-17.5,FixedFrameSpecial.frameABarHeight+3)), 
							FixedFrameSpecial.plasticHoleDiameter);
	s--;
	
	for (var i = 1; i <= s; i++) {
		v = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								FixedFrameSpecial.plasticHoleDiameter);
		v2 = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								FixedFrameSpecial.plasticHoleDiameter);
	}
	
	
	//FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+11,FixedFrameSpecial.frameAHeight-5.5)), 99);

// 

	var width = FixedFrameSpecial.frameAWidth-2*(FixedFrameSpecial.frameABarWidth+38) ;
		
	//s = Math.ceil(width/FixedFrameSpecial.frameAPlasticHoleSpacing);
	s = FixedFrameSpecial.calcHoleCount(width,FixedFrameSpecial.frameAPlasticHoleSpacing,3);
	spacing = width/(s-1);

	var v3 = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.frameABarWidth+38,17.5)), 
							FixedFrameSpecial.plasticHoleDiameter);

	var v4 = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.frameABarWidth+38,FixedFrameSpecial.frameAHeight-17.5)), 
							FixedFrameSpecial.plasticHoleDiameter);

	s--;
	
	for (var i = 1; i <= s; i++) {
		v3 = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v3.operator_add(new RVector(spacing,0)), 
								FixedFrameSpecial.plasticHoleDiameter);
		v4 = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v4.operator_add(new RVector(spacing,0)), 
								FixedFrameSpecial.plasticHoleDiameter);
	}
	
	
	//FixedFrameSpecial.createHole(documentInterface, addOperation, FixedFrameSpecial.frameARoot.operator_add(new RVector(FixedFrameSpecial.cutoutWidth+11,FixedFrameSpecial.frameAHeight-5.5)), 99);




};


FixedFrameSpecial.drillFrameAHandleRampHoles = function(documentInterface, addOperation) {
	
	
    FixedFrameSpecial.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	FixedFrameSpecial.frameARoot.operator_add(
    		new RVector(	FixedFrameSpecial.frameAWidth - FixedFrameSpecial.frameABarWidth+FixedFrameSpecial.handleRampHoleInset,
    						FixedFrameSpecial.frameAHeight/2-FixedFrameSpecial.handleRampHoleCentres/2-FixedFrameSpecial.handleRampHoleHeight/2-FixedFrameSpecial.weldLugHoleClearance)),
    
    	FixedFrameSpecial.handleRampHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance,
    	FixedFrameSpecial.handleRampHoleHeight+2*FixedFrameSpecial.weldLugHoleClearance);
    
    
    FixedFrameSpecial.createRectangle(
    	documentInterface, 
    	addOperation,
    	FixedFrameSpecial.frameARoot.operator_add(
    		new RVector(	FixedFrameSpecial.frameAWidth - FixedFrameSpecial.frameABarWidth+FixedFrameSpecial.handleRampHoleInset,
    						FixedFrameSpecial.frameAHeight/2+FixedFrameSpecial.handleRampHoleCentres/2-FixedFrameSpecial.handleRampHoleHeight/2-FixedFrameSpecial.weldLugHoleClearance)),
    	FixedFrameSpecial.handleRampHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance,
    	FixedFrameSpecial.handleRampHoleHeight+2*FixedFrameSpecial.weldLugHoleClearance);
    


};

FixedFrameSpecial.drillFrameAHandleRampHolesVariablePosition = function(documentInterface, addOperation, fraction) {
	
	
    FixedFrameSpecial.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	FixedFrameSpecial.frameARoot.operator_add(
    		new RVector(	FixedFrameSpecial.frameAWidth - FixedFrameSpecial.frameABarWidth+FixedFrameSpecial.handleRampHoleInset,
    						((FixedFrameSpecial.frameAHeight-24)*fraction)+12-FixedFrameSpecial.handleRampHoleCentres/2-FixedFrameSpecial.handleRampHoleHeight/2-FixedFrameSpecial.weldLugHoleClearance)),
    
    	FixedFrameSpecial.handleRampHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance,
    	FixedFrameSpecial.handleRampHoleHeight+2*FixedFrameSpecial.weldLugHoleClearance);
    
    
    FixedFrameSpecial.createRectangle(
    	documentInterface, 
    	addOperation,
    	FixedFrameSpecial.frameARoot.operator_add(
    		new RVector(	FixedFrameSpecial.frameAWidth - FixedFrameSpecial.frameABarWidth+FixedFrameSpecial.handleRampHoleInset,
    						((FixedFrameSpecial.frameAHeight-24)*fraction)+12+FixedFrameSpecial.handleRampHoleCentres/2-FixedFrameSpecial.handleRampHoleHeight/2-FixedFrameSpecial.weldLugHoleClearance)),
    	FixedFrameSpecial.handleRampHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance,
    	FixedFrameSpecial.handleRampHoleHeight+2*FixedFrameSpecial.weldLugHoleClearance);
    


};



//********************************************************************************************************************
//
// Frame C
//
//********************************************************************************************************************


FixedFrameSpecial.createFrameC = function(documentInterface, addOperation) {
	FixedFrameSpecial.createFrameCOutline(documentInterface, addOperation);
	FixedFrameSpecial.drillFrameCHoles(documentInterface, addOperation);
	FixedFrameSpecial.createFrameCHingeHoles(documentInterface, addOperation);
};

FixedFrameSpecial.createFrameCOutline = function(documentInterface, addOperation) {
	
	var width 			= FixedFrameSpecial.frameCWidth;
	var height 			= FixedFrameSpecial.frameCHeight;
	
	FixedFrameSpecial.createRectangle(documentInterface, addOperation,FixedFrameSpecial.frameCRoot,width,height);
	FixedFrameSpecial.createRectangle(documentInterface, addOperation,
								 FixedFrameSpecial.frameCRoot.operator_add(new RVector(FixedFrameSpecial.frameCBarWidth,FixedFrameSpecial.frameCBarHeight)),
								 width-2*FixedFrameSpecial.frameCBarWidth,
								 height-2*FixedFrameSpecial.frameCBarHeight);
	
};


// Create hinge holes

FixedFrameSpecial.createFrameCHingeHoles = function(documentInterface, addOperation) {

    FixedFrameSpecial.createRectangle(
    	documentInterface, 
    	addOperation,
    	FixedFrameSpecial.frameCRoot.operator_add(
    		new RVector(FixedFrameSpecial.frameCHingeHoleCentreW-FixedFrameSpecial.frameCHingeHoleWidth/2-FixedFrameSpecial.weldLugHoleClearance,
    						FixedFrameSpecial.frameCHingeHoleCentreH-FixedFrameSpecial.frameCHingeHoleHeight/2-FixedFrameSpecial.weldLugHoleClearance)),
    	FixedFrameSpecial.frameCHingeHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance,
    	FixedFrameSpecial.frameCHingeHoleHeight+2*FixedFrameSpecial.weldLugHoleClearance);
    	
      FixedFrameSpecial.createRectangle(
    	documentInterface, 
    	addOperation,
    	FixedFrameSpecial.frameCRoot.operator_add(
    		new RVector(FixedFrameSpecial.frameCHingeHoleCentreW-FixedFrameSpecial.frameCHingeHoleWidth/2-FixedFrameSpecial.weldLugHoleClearance,
    						FixedFrameSpecial.frameCHeight-FixedFrameSpecial.frameCHingeHoleCentreH-FixedFrameSpecial.frameCHingeHoleHeight/2-FixedFrameSpecial.weldLugHoleClearance)),
    	FixedFrameSpecial.frameCHingeHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance,
    	FixedFrameSpecial.frameCHingeHoleHeight+2*FixedFrameSpecial.weldLugHoleClearance);
    	
    	
  
};

FixedFrameSpecial.drillFrameCHoles = function(documentInterface, addOperation) {
	
	//var count = FixedFrameSpecial.calculateSpacing(50,100,FixedFrameSpecial.frameCWidth-FixedFrameSpecial.frameCBarWidth);
	//var spacing = (FixedFrameSpecial.frameCWidth-FixedFrameSpecial.frameCBarWidth)/count;
	
	//FixedFrameSpecial.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FixedFrameSpecial.frameCWidth+FixedFrameSpecial.frameCBarWidth/2,FixedFrameSpecial.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//FixedFrameSpecial.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FixedFrameSpecial.frameCWidth+FixedFrameSpecial.frameCBarWidth/2,FixedFrameSpecial.frameCHeight-FixedFrameSpecial.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//FixedFrameSpecial.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FixedFrameSpecial.frameCWidth+FixedFrameSpecial.frameCBarWidth/2,FixedFrameSpecial.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	//FixedFrameSpecial.createRectangleArray(documentInterface, addOperation, new RVector(-0.5*FixedFrameSpecial.frameCWidth-FixedFrameSpecial.frameCBarWidth/2,FixedFrameSpecial.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	
	};

//********************************************************************************************************************
//
// Sidebars
//
//********************************************************************************************************************

FixedFrameSpecial.createSidebar = function(documentInterface, addOperation) {
	var v;
	
	sidebarHeight = FixedFrameSpecial.sidebarHeight;
	
	v = FixedFrameSpecial.line(documentInterface, addOperation,FixedFrameSpecial.sidebarRoot,FixedFrameSpecial.sidebarRoot.operator_add(new RVector(-1*(FixedFrameSpecial.sidebarWidth-14),0)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-14,14)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,sidebarHeight-34)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(FixedFrameSpecial.sidebarWidth-14,0)));
	
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.weldLugInset+6)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

	    FixedFrameSpecial.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		FixedFrameSpecial.frameCRoot.getX()+FixedFrameSpecial.flatFrameWeldHolePosition+FixedFrameSpecial.weldLugHoleWidth/2+FixedFrameSpecial.weldLugHoleClearance,
	    		v.getY()+FixedFrameSpecial.weldLugHoleClearance),
	    	sidebarHeight-2*FixedFrameSpecial.weldLugInset,
	    	FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,
	    	3*Math.PI/2);

	    FixedFrameSpecial.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		FixedFrameSpecial.frameCRoot.getX()+FixedFrameSpecial.frameCWidth-FixedFrameSpecial.flatFrameWeldHolePosition+FixedFrameSpecial.weldLugHoleWidth/2+FixedFrameSpecial.weldLugHoleClearance	,
	    		v.getY()+FixedFrameSpecial.weldLugHoleClearance),
	    	sidebarHeight-2*FixedFrameSpecial.weldLugInset,
	    	FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,
	    	3*Math.PI/2);

	v = FixedFrameSpecial.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FixedFrameSpecial.weldLugInset,FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,3*Math.PI/2);


	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.weldLugInset+6)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

	// Make a clone of the bar a bit to the left

	 if (!FixedFrameSpecial.topOpener)
	    	{
	
	var newRoot = FixedFrameSpecial.sidebarRoot.operator_add(new RVector(-4*FixedFrameSpecial.sidebarWidth,0));

	v = FixedFrameSpecial.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*(FixedFrameSpecial.sidebarWidth-14),0)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-14,14)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,sidebarHeight-34)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,3)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(FixedFrameSpecial.sidebarWidth-14,0)));
	
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.weldLugInset+6)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

	v = FixedFrameSpecial.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FixedFrameSpecial.weldLugInset,FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,3*Math.PI/2);

	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.weldLugInset+6)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 

	    	}
	 else
		 {
		 // make top style bar

		var newRoot = FixedFrameSpecial.sidebarRoot.operator_add(new RVector(-4*(FixedFrameSpecial.sidebarWidth),0));

		v = FixedFrameSpecial.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*FixedFrameSpecial.topbarBarWidth,0)));
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,sidebarHeight)));
		    FixedFrameSpecial.createUnLuggedLine(documentInterface, addOperation,newRoot.operator_add(new RVector(-1*(FixedFrameSpecial.sidebarWidth-14),FixedFrameSpecial.mountingLugInset)),sidebarHeight-2*FixedFrameSpecial.mountingLugInset,FixedFrameSpecial.mountingLugMinSpacing,2,Math.PI/2);
		    
		//v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FixedFrameSpecial.mountingLugInset)));
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(FixedFrameSpecial.topbarBarWidth,0)));
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.weldLugInset)));
			
		v = FixedFrameSpecial.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FixedFrameSpecial.weldLugInset,FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,3*Math.PI/2);

		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-3,0)));	 
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.weldLugInset+6)));	 
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(3,0)));	 
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-3)));	 
		 }
	 
// Create seal holes -4*FixedFrameSpecial

	var length = FixedFrameSpecial.sidebarHeight-2*20;
		
	// var s = Math.ceil(length/FixedFrameSpecial.sidebarSealHoleSpacing);
	
	var s = FixedFrameSpecial.calcHoleCount(length,FixedFrameSpecial.sidebarSealHoleSpacing,3);
	
	
	spacing = length/(s-1);

	var v = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.sidebarRoot.operator_add(new RVector(-7.5,20)), 
							FixedFrameSpecial.sidebarSealHoleDiameter);
	
	var v2 = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.sidebarRoot.operator_add(new RVector( -4*FixedFrameSpecial.sidebarWidth-7.5,20)), 
							FixedFrameSpecial.sidebarSealHoleDiameter);
	    	
	s--; // to allow for one we just did
	
	for (var i = 1; i <= s; i++) {
		v = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								FixedFrameSpecial.sidebarSealHoleDiameter);
		v2 = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								FixedFrameSpecial.sidebarSealHoleDiameter);
		    }





};

FixedFrameSpecial.createHorizontalBars = function(documentInterface, addOperation) {

    // Center line (x coord) for holes and tabs
    
    x1 = FixedFrameSpecial.frameARoot.getX()+FixedFrameSpecial.tabHoleInset;
    x2 = FixedFrameSpecial.frameARoot.getX()+FixedFrameSpecial.frameAWidth-FixedFrameSpecial.tabHoleInset;
    w = FixedFrameSpecial.lugWidth;
    l = FixedFrameSpecial.lugLength;
    // First tabbed bar

    var v;

    v = FixedFrameSpecial.tabbedBarRoot;
    
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(x1-w/2,v.getY()));
    
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(v.getX(),v.getY()-l));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(v.getX()+w,v.getY()));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(v.getX(),v.getY()+l));
    
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(x2-w/2,v.getY()));
    
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(v.getX(),v.getY()-l));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(v.getX()+w,v.getY()));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(v.getX(),v.getY()+l));
    
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,new RVector(FixedFrameSpecial.tabbedBarRoot.getX()+FixedFrameSpecial.tabbedBarWidth,v.getY()));
    
    
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FixedFrameSpecial.tabbedBarHeight)));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-FixedFrameSpecial.tabbedBarWidth,0)));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.tabbedBarHeight)));
    
    // Add tabs and holes - note tabHoleInset is relative to X pos of frameARoot, and Ypos of object root 
    
    


    // Second simple bar

    v = FixedFrameSpecial.simpleBarRoot;
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(FixedFrameSpecial.simpleBarWidth,0)));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FixedFrameSpecial.simpleBarHeight)));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(-FixedFrameSpecial.simpleBarWidth,0)));
    v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.simpleBarHeight)));

    }


//********************************************************************************************************************
//
// Top bar	
//
//********************************************************************************************************************

FixedFrameSpecial.createTopbar = function(documentInterface, addOperation) {


var x = FixedFrameSpecial.topbarRoot.operator_add(new RVector(0,FixedFrameSpecial.topbarBarWidth));
x = x.operator_add(new RVector(FixedFrameSpecial.topbarWidth,0));
x = x.operator_add(new RVector(0,-FixedFrameSpecial.topbarBarWidth));

	// check positioning of these lines of holes with Steven

    FixedFrameSpecial.createHoleLine(documentInterface, addOperation,
    	new RVector(
    		x.getX()+FixedFrameSpecial.weldLugHoleClearance,
    		FixedFrameSpecial.frameCRoot.getY()+FixedFrameSpecial.flatFrameWeldHolePosition+FixedFrameSpecial.weldLugHoleWidth/2+FixedFrameSpecial.weldLugHoleClearance),
    	FixedFrameSpecial.topbarWidth,
    	FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,
    	Math.PI);

    FixedFrameSpecial.createHoleLine(documentInterface, addOperation,
    	new RVector(
    		x.getX()+FixedFrameSpecial.weldLugHoleClearance,
    		FixedFrameSpecial.frameCRoot.getY()+FixedFrameSpecial.frameCHeight - FixedFrameSpecial.flatFrameWeldHolePosition+FixedFrameSpecial.weldLugHoleWidth/2+FixedFrameSpecial.weldLugHoleClearance),
    	FixedFrameSpecial.topbarWidth,
    	FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,
    	Math.PI);

    

    if (!FixedFrameSpecial.topOpener)
    	{

		var v;
		v = FixedFrameSpecial.line(documentInterface, addOperation,FixedFrameSpecial.topbarRoot,FixedFrameSpecial.topbarRoot.operator_add(new RVector(0,FixedFrameSpecial.topbarBarWidth-14)));
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(FixedFrameSpecial.topbarWidth-28,0)));
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,-14)));
		v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.topbarBarWidth+14)));
		v = FixedFrameSpecial.createTabbedLine(documentInterface, addOperation,v,FixedFrameSpecial.topbarWidth,FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,Math.PI);

		// Create holes to match bottom lugged line

		var inset = FixedFrameSpecial.mountingLugInset;
		
		var	imaginaryP = FixedFrameSpecial.topbarRoot.operator_add(new RVector(0,FixedFrameSpecial.sidebarWidth));
		
		if (FixedFrameSpecial.topbarWidth<(2*FixedFrameSpecial.mountingLugInset+FixedFrameSpecial.lugWidth))
			{
			inset = (FixedFrameSpecial.topbarWidth - FixedFrameSpecial.lugWidth)/2;
			}

		//FixedFrameSpecial.createUnLuggedLine(documentInterface, addOperation,imaginaryP.operator_add(new RVector(inset,0)),FixedFrameSpecial.topbarWidth-2*inset,FixedFrameSpecial.mountingLugMinSpacing,1,0);

    	}

	// Create seal holes -4*FixedFrameSpecial

	var width = FixedFrameSpecial.topbarWidth-2*20;
		
	//var s = Math.ceil(width/FixedFrameSpecial.sidebarSealHoleSpacing);
	
	var s = FixedFrameSpecial.calcHoleCount(width,FixedFrameSpecial.sidebarSealHoleSpacing,3);
	
	spacing = width/(s-1);

    if (!FixedFrameSpecial.topOpener)
    	{
		var v = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.topbarRoot.operator_add(new RVector(20,15/2)), 
							FixedFrameSpecial.sidebarSealHoleDiameter);
    	}
    else
    	{
    	
    	var v = FixedFrameSpecial.createHole(documentInterface, 
				addOperation, 
				FixedFrameSpecial.bottombarRoot.operator_add(new RVector(20,15/2-50)), 
				FixedFrameSpecial.sidebarSealHoleDiameter);
    	}
    
	var v2 = FixedFrameSpecial.createHole(documentInterface, 
							addOperation, 
							FixedFrameSpecial.bottombarRoot.operator_add(new RVector(20,15/2)), 
							FixedFrameSpecial.sidebarSealHoleDiameter);

	s--; // to allow for the one we just made
	
	
	for (var i = 1; i <= s; i++) {
    if (!FixedFrameSpecial.topOpener)
    	{
	v = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(spacing,0)), 
								FixedFrameSpecial.sidebarSealHoleDiameter);
    	}
    else
    	{
    	v = FixedFrameSpecial.createHole(documentInterface, 
				addOperation, 
				v.operator_add(new RVector(spacing,0)), 
				FixedFrameSpecial.sidebarSealHoleDiameter);
    	
    	}
	v2 = FixedFrameSpecial.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(spacing,0)), 
								FixedFrameSpecial.sidebarSealHoleDiameter);
	}	
    	
};

//********************************************************************************************************************
//
// Bottom bar	
//
//********************************************************************************************************************

FixedFrameSpecial.createBottombar = function(documentInterface, addOperation) {

	var v;

	v = FixedFrameSpecial.line(documentInterface, addOperation,FixedFrameSpecial.bottombarRoot,FixedFrameSpecial.bottombarRoot.operator_add(new RVector(0,FixedFrameSpecial.topbarBarWidth-14)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,14)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(FixedFrameSpecial.topbarWidth-28,0)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(14,-14)));
	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.topbarBarWidth+14)));
	v = FixedFrameSpecial.createTabbedLine(documentInterface, addOperation,v,FixedFrameSpecial.topbarWidth,FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,Math.PI);

	  if (FixedFrameSpecial.topOpener)
	    	{

	    	var second_root = FixedFrameSpecial.bottombarRoot.operator_add(new RVector(0,-50));

	    	v = FixedFrameSpecial.line(documentInterface, addOperation,second_root,second_root.operator_add(new RVector(0,FixedFrameSpecial.sidebarWidth)));
	    	
	    	if (FixedFrameSpecial.topbarWidth<(2*FixedFrameSpecial.mountingLugInset+FixedFrameSpecial.lugWidth))
	    		{
	    		inset = (FixedFrameSpecial.topbarWidth - FixedFrameSpecial.lugWidth)/2;
	    		}
	    	
	    	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));
	    	
	    	v = FixedFrameSpecial.createLuggedLine(documentInterface, addOperation,v,FixedFrameSpecial.topbarWidth-2*inset,FixedFrameSpecial.mountingLugMinSpacing,1,0);

	    	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));


	    	v = FixedFrameSpecial.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FixedFrameSpecial.sidebarWidth)));
	    	v = FixedFrameSpecial.createTabbedLine(documentInterface, addOperation,v,FixedFrameSpecial.topbarWidth,
	    			FixedFrameSpecial.weldLugMinSpacing,FixedFrameSpecial.weldLugMaxSpacing,Math.PI);

	    	
	    	
	    	}
	
	
};




//********************************************************************************************************************
//
// Utilities
//
//********************************************************************************************************************

//********************************************************************************************************************
// Plot Text
//********************************************************************************************************************

FixedFrameSpecial.createText = function(documentInterface, addOperation, pos,text ) {
        var textData = new RTextData();
        textData.setText(text);
        textData.setTextHeight(4);
        textData.setTextWidth(2);
        textData.setPosition(pos);
        textData.move(pos);
        
        var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
        addOperation.addObject(textEntity);
};

FixedFrameSpecial.createBigText = function(documentInterface, addOperation, pos,text ) {
    var textData = new RTextData();
    textData.setText(text);
    textData.setTextHeight(20);
    textData.setTextWidth(10);
    textData.setPosition(pos);
    textData.move(pos);
    
    var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
    addOperation.addObject(textEntity);
};




FixedFrameSpecial.drawPolyLine = function(documentInterface, addOperation, vectors) {

    for ( var i = 0; i < vectors.length-1; i++) {
        var v1 = vectors[i];
        var v2 = vectors[(i + 1)];
        var lineData = new RLineData(v1, v2);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
    	}
};



FixedFrameSpecial.createHole = function(documentInterface, addOperation, pos, diameter) {

	var circleData = new RCircleData(pos,diameter/2);
	var circle = new RCircleEntity(documentInterface.getDocument(), circleData);
    addOperation.addObject(circle);
    return pos;
};


FixedFrameSpecial.createBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= FixedFrameSpecial.bendReliefDiameter;
    var slotWidth = FixedFrameSpecial.bendReliefSlotWidth;
    var slotLength 	= FixedFrameSpecial.bendReliefSlotLength;
    
    
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

FixedFrameSpecial.createVBendRelief = function(documentInterface, addOperation, pos, vorientation,horientation) {
    
    var diameter 	= FixedFrameSpecial.bendReliefDiameter;
    var slotWidth = FixedFrameSpecial.bendReliefSlotWidth;
    var slotLength 	= FixedFrameSpecial.bendReliefSlotLength;
    
    
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



FixedFrameSpecial.createXBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= FixedFrameSpecial.bendReliefDiameter;
    var slotWidth = FixedFrameSpecial.bendReliefSlotWidth;
    var slotLength 	= FixedFrameSpecial.bendReliefSlotLength;
    
    
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


FixedFrameSpecial.createRectangle = function(documentInterface, addOperation, pos, x, y) {
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


FixedFrameSpecial.line = function(documentInterface, addOperation, start,end ) {
        var lineData = new RLineData(start,end);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
        return end;
};

FixedFrameSpecial.createSquare = function(documentInterface, addOperation, pos,x) {
	FixedFrameSpecial.createSquare(documentInterface, addOperation, pos,x,x);
};

FixedFrameSpecial.createRectangleArray = function(documentInterface, addOperation, pos, width, height, count, offset) {
	var tPos = pos;
	for (var i=0;i < count; i++) {
		FixedFrameSpecial.createRectangle(documentInterface, addOperation, tPos, width, height);
		tPos = tPos.operator_add(offset);
	};

};

FixedFrameSpecial.calcHoleCount = function(length, minSpacing,minLugs) {
	return FixedFrameSpecial.calcLugCount(length, minSpacing,minLugs);
};

FixedFrameSpecial.calcLugCount = function(length, minSpacing,minLugs) {

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

FixedFrameSpecial.calculateSpacing = function(minSpacing,maxSpacing,length) {
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

FixedFrameSpecial.createMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset
	var v1 = new RVector(0,0);
	var v2 = new RVector(FixedFrameSpecial.lugWidth/4,FixedFrameSpecial.lugHoleOffset*1.155);
	var v3 = new RVector(3*FixedFrameSpecial.lugWidth/4,FixedFrameSpecial.lugHoleOffset*1.155);
	var v4 = new RVector(FixedFrameSpecial.lugWidth,0);
	var v5 = new RVector(FixedFrameSpecial.lugHoleOffset,FixedFrameSpecial.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(FixedFrameSpecial.lugWidth/2,0));
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
    
 	FixedFrameSpecial.createHole(documentInterface, addOperation, v5, FixedFrameSpecial.lugHoleDiameter);
 
    var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
	return v4; // start point for next object
};


FixedFrameSpecial.createInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

// Y height is 15.5% more than hole centre
// lugWidth, lugHoleDiameter, lugHoleOffset
var v1 = new RVector(0,0);
var v2 = new RVector(FixedFrameSpecial.lugWidth/4,FixedFrameSpecial.lugHoleOffset*1.155);
var v3 = new RVector(3*FixedFrameSpecial.lugWidth/4,FixedFrameSpecial.lugHoleOffset*1.155);
var v4 = new RVector(FixedFrameSpecial.lugWidth,0);
var v5 = new RVector(FixedFrameSpecial.lugHoleOffset,FixedFrameSpecial.lugHoleOffset);

//var root = pos.operator_add(new RVector(FixedFrameSpecial.lugWidth/2,0));
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

	FixedFrameSpecial.createHole(documentInterface, addOperation, v5, FixedFrameSpecial.lugHoleDiameter);

//var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
//var keyHoleData = new RArcData(arc);
//var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);
//
//addOperation.addObject(keyHole);

return v4; // start point for next object
};

FixedFrameSpecial.oldcreateInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset

	var v1 = new RVector(0,0);
	var v4 = new RVector(FixedFrameSpecial.lugWidth,0);
	var v5 = new RVector(FixedFrameSpecial.lugHoleOffset,FixedFrameSpecial.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(FixedFrameSpecial.lugWidth/2,0));
	var root = pos;
	
	v1 = v1.operator_add(root);
	v4 = v4.operator_add(root);
	v5 = v5.operator_add(root);
	
	//No point rotating v1 round itself
	v5 = v5.rotate(angle,v1);	
	
 	FixedFrameSpecial.createHole(documentInterface, addOperation, v5, FixedFrameSpecial.lugHoleDiameter);
 	return v4;
};


FixedFrameSpecial.createLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line

	
	var lugCount = FixedFrameSpecial.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
	
	
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-FixedFrameSpecial.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		var lugStart 		= FixedFrameSpecial.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset));
		var lastLineStart	= FixedFrameSpecial.createMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= FixedFrameSpecial.line(documentInterface, addOperation, lastLineStart, lastLineStart.operator_add(joinerOffset));
		
	} else {

		var l = (length-FixedFrameSpecial.lugWidth)/(lugCount-1)-FixedFrameSpecial.lugWidth;
		
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
		var lineStart = FixedFrameSpecial.createMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = FixedFrameSpecial.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
			lineStart = FixedFrameSpecial.createMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	

		
		lastPoint = lineStart;
	}

		
	return lastPoint;	
};


FixedFrameSpecial.createUnLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	var lugCount = FixedFrameSpecial.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
		
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-FixedFrameSpecial.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		//var lugStart 		= FixedFrameSpecial.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset)); // QQQ is this a bug??
		var lugStart 		= pos.operator_add(joinerOffset); 
		var lastLineStart	= FixedFrameSpecial.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= lastLineStart.operator_add(joinerOffset);
		
	} else {
		
		var l = (length-FixedFrameSpecial.lugWidth)/(lugCount-1)-FixedFrameSpecial.lugWidth;
		
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
		var lineStart = FixedFrameSpecial.createInvisibleMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = lineStart.operator_add(joinerOffset); 
			lineStart = FixedFrameSpecial.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	
		
		lastPoint = lineStart;
	}
		
	return lastPoint;	
};


FixedFrameSpecial.createTabbedLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	// var count = FixedFrameSpecial.calculateSpacing(minSpacing,maxSpacing,length);
	var count = FixedFrameSpecial.calcLugCount(length,minSpacing,3);
	var joinerOffset;
	var lastPoint;
		
	var l = (length-FixedFrameSpecial.weldLugWidth)/count-FixedFrameSpecial.weldLugWidth;
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
	var lineStart = FixedFrameSpecial.createWeldLug(documentInterface, addOperation, pos, orientation);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lineStart = FixedFrameSpecial.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_1)); 
		lineStart = FixedFrameSpecial.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_2)); 
		lineStart = FixedFrameSpecial.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joiner)); 
		lineStart = FixedFrameSpecial.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_3)); 
		lugStart = FixedFrameSpecial.line(documentInterface, addOperation, lineStart,lineStart.operator_add(step_4)); 
		
		lineStart = FixedFrameSpecial.createWeldLug(documentInterface, addOperation, lugStart, orientation);			
	}	
			
	return lineStart;	
};

FixedFrameSpecial.createHoleLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	
	
	// var count = FixedFrameSpecial.calculateSpacing(minSpacing,maxSpacing,length);
	var count = FixedFrameSpecial.calcLugCount(length,minSpacing,3);
	var joinerOffset;
		
	var l = (length-FixedFrameSpecial.weldLugWidth)/count;
	
	var x,y;
	
	if (orientation == 0) { // if the orientation East/West {
		joinerOffset = new RVector(l,0);
		x = FixedFrameSpecial.weldLugWidth+2*FixedFrameSpecial.weldLugHoleClearance;
		y = FixedFrameSpecial.weldLugHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance;
	} else if (orientation == Math.PI/2) {
		joinerOffset = new RVector(0,l);
		x = FixedFrameSpecial.weldLugHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance;
		y = FixedFrameSpecial.weldLugWidth+2*FixedFrameSpecial.weldLugHoleClearance;
	} else if (orientation == Math.PI) {
		joinerOffset = new RVector(-l,0);
		x = -1*(FixedFrameSpecial.weldLugWidth+2*FixedFrameSpecial.weldLugHoleClearance);
		y = -1*(FixedFrameSpecial.weldLugHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance);
	} else {
		joinerOffset = new RVector(0,-l); // Tested OK
		x = -(FixedFrameSpecial.weldLugHoleWidth+2*FixedFrameSpecial.weldLugHoleClearance);
		y = -(FixedFrameSpecial.weldLugWidth+2*FixedFrameSpecial.weldLugHoleClearance);
	}
	
	// create lug one
	var lugStart;
	var lineStart = FixedFrameSpecial.createRectangle(documentInterface, addOperation, pos, x, y);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = lineStart.operator_add(joinerOffset); 
		lineStart = FixedFrameSpecial.createRectangle(documentInterface, addOperation, lugStart, x, y);			
	}	
			
};


FixedFrameSpecial.createWeldLug  = function (documentInterface, addOperation, pos, orientation) {
	
	v2 = pos.operator_add(new RVector(0,FixedFrameSpecial.weldLugDepth));
	v3 = v2.operator_add(new RVector(FixedFrameSpecial.weldLugWidth,0));
	v4 = v3.operator_add(new RVector(0,-FixedFrameSpecial.weldLugDepth));
	
	v2 = v2.rotate(orientation,pos);
	v3 = v3.rotate(orientation,pos);
	v4 = v4.rotate(orientation,pos);
	
	FixedFrameSpecial.line(documentInterface, addOperation,pos,v2);
	FixedFrameSpecial.line(documentInterface, addOperation,v2,v3);
	FixedFrameSpecial.line(documentInterface, addOperation,v3,v4);
	
	return v4;	
};
