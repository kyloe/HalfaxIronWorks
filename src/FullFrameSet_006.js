// FullFrameSet_006.js
// library.js contains some convenience functions like 'isNull':
// This source is now managed under GIT

include("scripts/library.js");
include("scripts/WidgetFactory.js");	


//
// Create main object 
//

function FullFrameSet_006() {
}

//
// Read widget to get object from which we can extract parameters
//


FullFrameSet_006.init = function(formWidget) {
    if (!isNull(formWidget)) {
        FullFrameSet_006.widgets = getWidgets(formWidget);
    }    
    
};



//
// Set requested sizes (default sizes are suitable for ICON generation
//

FullFrameSet_006.setValues = function() {

    FullFrameSet_006.finishedWidth = parseFloat(FullFrameSet_006.widgets["FinishedWidth"].text, 10);
    FullFrameSet_006.finishedHeight = parseFloat(FullFrameSet_006.widgets["FinishedHeight"].text, 10);
    FullFrameSet_006.cutoutHeight = parseFloat(FullFrameSet_006.widgets["CutoutHeight"].text, 10);
    FullFrameSet_006.cutoutWidth = parseFloat(FullFrameSet_006.widgets["CutoutWidth"].text, 10);

    FullFrameSet_006.frameARelativeWidth = parseFloat(FullFrameSet_006.widgets["FrameARelativeWidth"].text, 10);
    FullFrameSet_006.frameARelativeHeight = parseFloat(FullFrameSet_006.widgets["FrameARelativeHeight"].text, 10);
    FullFrameSet_006.frameABarWidth = parseFloat(FullFrameSet_006.widgets["FrameABarWidth"].text, 10);
    FullFrameSet_006.frameABarHeight = parseFloat(FullFrameSet_006.widgets["FrameABarHeight"].text, 10);
    FullFrameSet_006.frameAPlasticHoleSpacing = parseFloat(FullFrameSet_006.widgets["FrameAPlasticHoleSpacing"].text, 10);

    FullFrameSet_006.handleRampHoleHeight = parseFloat(FullFrameSet_006.widgets["HandleRampHoleHeight"].text, 10);
    FullFrameSet_006.handleRampHoleWidth = parseFloat(FullFrameSet_006.widgets["HandleRampHoleWidth"].text, 10);
    FullFrameSet_006.handleRampHoleCentres = parseFloat(FullFrameSet_006.widgets["HandleRampHoleCentres"].text, 10);
    FullFrameSet_006.handleRampHoleInset = parseFloat(FullFrameSet_006.widgets["HandleRampHoleInset"].text, 10);



    FullFrameSet_006.frameCRelativeWidth = parseFloat(FullFrameSet_006.widgets["FrameCRelativeWidth"].text, 10);
    FullFrameSet_006.frameCRelativeHeight = parseFloat(FullFrameSet_006.widgets["FrameCRelativeHeight"].text, 10);
    FullFrameSet_006.frameCBarWidth = parseFloat(FullFrameSet_006.widgets["FrameCBarWidth"].text, 10);
    FullFrameSet_006.frameCBarHeight = parseFloat(FullFrameSet_006.widgets["FrameCBarHeight"].text, 10);

    FullFrameSet_006.frameCHingeHoleWidth = parseFloat(FullFrameSet_006.widgets["FrameCHingeHoleWidth"].text, 10);
    FullFrameSet_006.frameCHingeHoleHeight = parseFloat(FullFrameSet_006.widgets["FrameCHingeHoleHeight"].text, 10);
    FullFrameSet_006.frameCHingeHoleCentreW = parseFloat(FullFrameSet_006.widgets["FrameCHingeHoleCentreW"].text, 10);
    FullFrameSet_006.frameCHingeHoleCentreH = parseFloat(FullFrameSet_006.widgets["FrameCHingeHoleCentreH"].text, 10);



    FullFrameSet_006.holeDiameter = parseFloat(FullFrameSet_006.widgets["HoleDiameter"].text, 10);
 	FullFrameSet_006.plasticHoleDiameter = parseFloat(FullFrameSet_006.widgets["PlasticHoleDiameter"].text, 10);
    FullFrameSet_006.bendReliefDiameter = parseFloat(FullFrameSet_006.widgets["BendReliefDiameter"].text, 10);
    FullFrameSet_006.bendReliefSlotWidth = parseFloat(FullFrameSet_006.widgets["BendReliefSlotWidth"].text, 10);
    FullFrameSet_006.bendReliefSlotLength = parseFloat(FullFrameSet_006.widgets["BendReliefSlotLength"].text, 10);

    FullFrameSet_006.lugWidth = parseFloat(FullFrameSet_006.widgets["LugWidth"].text, 10);
    FullFrameSet_006.lugHoleOffset = parseFloat(FullFrameSet_006.widgets["LugHoleOffset"].text, 10);
    FullFrameSet_006.lugHoleDiameter = parseFloat(FullFrameSet_006.widgets["LugHoleDiameter"].text, 10);
    FullFrameSet_006.mountingLugInset = parseFloat(FullFrameSet_006.widgets["MountingLugInset"].text, 10);
    FullFrameSet_006.mountingLugMinSpacing = parseFloat(FullFrameSet_006.widgets["MountingLugMinSpacing"].text, 10);
    FullFrameSet_006.mountingLugMaxSpacing = parseFloat(FullFrameSet_006.widgets["MountingLugMaxSpacing"].text, 10);

    FullFrameSet_006.sidebarWidth = parseFloat(FullFrameSet_006.widgets["SidebarWidth"].text, 10);
    FullFrameSet_006.sidebarRelativeHeight = parseFloat(FullFrameSet_006.widgets["SidebarRelativeHeight"].text, 10);
    FullFrameSet_006.sidebarSealHoleSpacing = parseFloat(FullFrameSet_006.widgets["SidebarSealHoleSpacing"].text, 10);
    FullFrameSet_006.sidebarSealHoleDiameter = parseFloat(FullFrameSet_006.widgets["SidebarSealHoleDiameter"].text, 10);

    FullFrameSet_006.weldLugWidth = parseFloat(FullFrameSet_006.widgets["WeldLugWidth"].text, 10);
    FullFrameSet_006.weldLugDepth = parseFloat(FullFrameSet_006.widgets["WeldLugDepth"].text, 10);
    FullFrameSet_006.weldLugInset = parseFloat(FullFrameSet_006.widgets["WeldLugInset"].text, 10);
    FullFrameSet_006.weldLugMinSpacing = parseFloat(FullFrameSet_006.widgets["WeldLugMinSpacing"].text, 10);
    FullFrameSet_006.weldLugMaxSpacing = parseFloat(FullFrameSet_006.widgets["WeldLugMaxSpacing"].text, 10);
    FullFrameSet_006.weldLugHoleWidth = parseFloat(FullFrameSet_006.widgets["WeldLugHoleWidth"].text, 10);
    FullFrameSet_006.weldLugHoleClearance = parseFloat(FullFrameSet_006.widgets["WeldLugHoleClearance"].text, 10);

    FullFrameSet_006.topbarBarWidth = parseFloat(FullFrameSet_006.widgets["TopBarWidth"].text, 10);
    FullFrameSet_006.topbarRelativeWidth = parseFloat(FullFrameSet_006.widgets["TopBarRelativeWidth"].text, 10);


	FullFrameSet_006.setDerivedValues();

};

//
// Set default sizes (default sizes are suitable for ICON generation
//

FullFrameSet_006.setDefaults = function() {

    FullFrameSet_006.finishedWidth = 50;
    FullFrameSet_006.finishedHeight = 50;
    FullFrameSet_006.cutoutWidth = 5;
    FullFrameSet_006.cutoutHeight = 5;
    FullFrameSet_006.frameABarWidth = 3;
    FullFrameSet_006.frameABarHeight = 3;
    FullFrameSet_006.frameARelativeHeight = 3;
    FullFrameSet_006.frameARelativeWidth = 3;
    FullFrameSet_006.frameCBarWidth = 3;
    FullFrameSet_006.frameCBarHeight = 3;
    FullFrameSet_006.frameCRelativeHeight = 3;
    FullFrameSet_006.frameCRelativeWidth = 3;

    FullFrameSet_006.frameCHingeHoleWidth = 1;
    FullFrameSet_006.frameCHingeHoleHeight = 1;
    FullFrameSet_006.frameCHingeHoleCentreW = 1;
    FullFrameSet_006.frameCHingeHoleCentreH = 1;


    FullFrameSet_006.holeDiameter = 1;
    FullFrameSet_006.plasticHoleDiameter = 1;
    FullFrameSet_006.handleRampHoleHeight = 1;
    FullFrameSet_006.handleRampHoleWidth = 1;
    FullFrameSet_006.handleRampHoleCentres = 1;
    FullFrameSet_006.handleRampHoleInset = 1;


    FullFrameSet_006.bendReliefDiameter = 5;
    FullFrameSet_006.bendReliefSlotWidth = 5;
    FullFrameSet_006.bendReliefSlotLength = 20;
    FullFrameSet_006.lugWidth = 0.5
    FullFrameSet_006.lugHoleOffset = 0.3;
    FullFrameSet_006.lugHoleDiameter = 0.1;
    FullFrameSet_006.sidebarWidth = .1;
    FullFrameSet_006.sidebarRelativeHeight = .1;
    FullFrameSet_006.weldLugWidth = .1;
    FullFrameSet_006.weldLugDepth = .1;
    FullFrameSet_006.mountingLugInset = .1;
    FullFrameSet_006.weldLugInset = .1;
    FullFrameSet_006.weldLugMinSpacing = .1;
    FullFrameSet_006.weldLugMaxSpacing = .1;
    FullFrameSet_006.mountingLugMinSpacing = .1;
    FullFrameSet_006.mountingLugMaxSpacing = .1;
    FullFrameSet_006.weldLugHoleWidth = .1;
    FullFrameSet_006.weldLugHoleClearance = .1;
	FullFrameSet_006.topbarWidth = .1;
	FullFrameSet_006.topbarRelativeWidth = .1;
	FullFrameSet_006.frameAPlasticHoleSpacing = 1;
	FullFrameSet_006.sidebarSealHoleSpacing = 3;
 
	FullFrameSet_006.setDerivedValues();

};

FullFrameSet_006.setDerivedValues = function (){

    FullFrameSet_006.frameAWidth = FullFrameSet_006.finishedWidth+FullFrameSet_006.frameARelativeWidth;
    FullFrameSet_006.frameAHeight = FullFrameSet_006.finishedHeight+FullFrameSet_006.frameARelativeHeight;
    FullFrameSet_006.frameARoot = new RVector(0,(FullFrameSet_006.finishedHeight-FullFrameSet_006.frameARelativeHeight)/2);

    FullFrameSet_006.frameCWidth = FullFrameSet_006.finishedWidth+FullFrameSet_006.frameCRelativeWidth;
    FullFrameSet_006.frameCHeight = FullFrameSet_006.finishedHeight+FullFrameSet_006.frameCRelativeHeight;
    FullFrameSet_006.frameCRoot = new RVector(-1.2*FullFrameSet_006.finishedWidth,(FullFrameSet_006.finishedHeight-FullFrameSet_006.frameCRelativeHeight)/2);
	
    FullFrameSet_006.sidebarHeight = FullFrameSet_006.finishedHeight+FullFrameSet_006.sidebarRelativeHeight;
    FullFrameSet_006.sidebarRoot = new RVector(-1.5*FullFrameSet_006.finishedWidth,(FullFrameSet_006.finishedHeight-FullFrameSet_006.sidebarRelativeHeight)/2);

    FullFrameSet_006.topbarRoot = new RVector(FullFrameSet_006.frameCRoot.getX()+(FullFrameSet_006.frameCWidth-FullFrameSet_006.topbarWidth)/2,FullFrameSet_006.frameCHeight*1.6);
	


    FullFrameSet_006.topbarWidth = FullFrameSet_006.finishedWidth+FullFrameSet_006.topbarRelativeWidth;
    FullFrameSet_006.bottombarRoot = new RVector(FullFrameSet_006.frameCRoot.getX()+(FullFrameSet_006.frameCWidth-FullFrameSet_006.topbarWidth)/2,FullFrameSet_006.frameCHeight*0.2	);

};
//
// Main function to generate the frames
//

FullFrameSet_006.generate = function(documentInterface, file) {
    FullFrameSet_006.setValues();
    return FullFrameSet_006.create(documentInterface);
};

//
// Function to generate the frames icon
//


FullFrameSet_006.generatePreview = function(documentInterface, iconSize) {
    FullFrameSet_006.setDefaults();
    return FullFrameSet_006.createIcon(documentInterface);

};


//
// Plot each of main elements
//

FullFrameSet_006.create = function(documentInterface) {
    	
	var addOperation = new RAddObjectsOperation(false);
    	FullFrameSet_006.createFrameA(documentInterface, addOperation);
 	FullFrameSet_006.createFrameC(documentInterface, addOperation);
	FullFrameSet_006.createSidebar(documentInterface, addOperation);
	FullFrameSet_006.createTopbar(documentInterface, addOperation);
    	FullFrameSet_006.createBottombar(documentInterface, addOperation);
    return addOperation;
};


FullFrameSet_006.createIcon = function(documentInterface) {
    	
	var addOperation = new RAddObjectsOperation(false);    
           
    this.createRectangle(documentInterface, addOperation,new RVector(0,0),10,12);
    this.createRectangle(documentInterface, addOperation,new RVector(1,1),8,10);
	this.createText(documentInterface, addOperation,new RVector(10,10),"HX");
	
	return addOperation;
};


//********************************************************************************************************************
//
//   Frame A
//
//********************************************************************************************************************

FullFrameSet_006.createFrameA = function(documentInterface, addOperation) {
	FullFrameSet_006.createFrameAOutline(documentInterface, addOperation);
	FullFrameSet_006.createFrameAInner(documentInterface, addOperation);	
	FullFrameSet_006.drillFrameAHoles(documentInterface, addOperation);
	FullFrameSet_006.drillPlasticHoles(documentInterface, addOperation);
	FullFrameSet_006.drillFrameAHandleRampHoles(documentInterface, addOperation);
	return addOperation;
};


FullFrameSet_006.createFrameAOutline = function(documentInterface, addOperation) {
	
	var width 			= FullFrameSet_006.frameAWidth;
	var height 			= FullFrameSet_006.frameAHeight;
	var cutoutWidth 	= FullFrameSet_006.cutoutWidth;
	var cutoutHeight 	= FullFrameSet_006.cutoutHeight;
	
    var va = new Array(
            FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet_006.bendReliefSlotWidth,cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(0, cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(0, height-cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet_006.bendReliefSlotWidth, height-cutoutHeight))
   );

	FullFrameSet_006.drawPolyLine(documentInterface, addOperation, va);

    var va2 = new Array(
            FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth, height-cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth, height)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth,height)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight))
     );

	FullFrameSet_006.drawPolyLine(documentInterface, addOperation, va2);

    var va3 = new Array(
           FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth+FullFrameSet_006.bendReliefSlotWidth,height-cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(width,height-cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(width,cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth+FullFrameSet_006.bendReliefSlotWidth,cutoutHeight))
    );

	FullFrameSet_006.drawPolyLine(documentInterface, addOperation, va3);

    var va4 = new Array(
            FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth,0)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth,0)),
            FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth,cutoutHeight))
    );

	FullFrameSet_006.drawPolyLine(documentInterface, addOperation, va4);

	// Now insert the bend reliefs
	
	FullFrameSet_006.createVBendRelief(documentInterface, addOperation,FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet_006.bendReliefSlotWidth,cutoutHeight)),1,1);
	FullFrameSet_006.createVBendRelief(documentInterface, addOperation,FullFrameSet_006.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet_006.bendReliefSlotWidth, height-cutoutHeight)),-1,1);
	FullFrameSet_006.createVBendRelief(documentInterface, addOperation,FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight)),-1,-1);
	FullFrameSet_006.createVBendRelief(documentInterface, addOperation,FullFrameSet_006.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),1,-1);

};


FullFrameSet_006.createFrameAInner = function(documentInterface, addOperation) {
	
	var width 			= FullFrameSet_006.frameAWidth-2*FullFrameSet_006.frameABarWidth;
	var height 			= FullFrameSet_006.frameAHeight-2*FullFrameSet_006.frameABarHeight;
	var widthOffset     = FullFrameSet_006.frameABarWidth;
	var heightOffset    = FullFrameSet_006.frameABarHeight;
	
	
    FullFrameSet_006.createRectangle(documentInterface, addOperation,FullFrameSet_006.frameARoot.operator_add(new RVector(widthOffset,heightOffset)),width,height);

};

FullFrameSet_006.drillFrameAHoles = function(documentInterface, addOperation) {
	
	FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+11,FullFrameSet_006.frameAHeight-5.5)), FullFrameSet_006.holeDiameter);
	FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+26,FullFrameSet_006.frameAHeight-11.5)), FullFrameSet_006.holeDiameter);
	FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+41,FullFrameSet_006.frameAHeight-5.5)), FullFrameSet_006.holeDiameter);

	FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+11,5.5)), FullFrameSet_006.holeDiameter);
	FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+26,11.5)), FullFrameSet_006.holeDiameter);
	FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+41,5.5)), FullFrameSet_006.holeDiameter);

};

// Drill v holes 

FullFrameSet_006.drillPlasticHoles = function(documentInterface, addOperation) {

	var length = FullFrameSet_006.frameAHeight-2*(FullFrameSet_006.frameABarHeight+3);
		
	// var s = Math.ceil(length/FullFrameSet_006.frameAPlasticHoleSpacing);
	var s = FullFrameSet_006.calcHoleCount(length,FullFrameSet_006.frameAPlasticHoleSpacing,3);
	spacing = length/(s-1);

	var v = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.frameARoot.operator_add(new RVector(5,FullFrameSet_006.frameABarHeight+3)), 
							FullFrameSet_006.plasticHoleDiameter);

	var v2 = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.frameAWidth-5,FullFrameSet_006.frameABarHeight+3)), 
							FullFrameSet_006.plasticHoleDiameter);
	s--;
	
	for (var i = 1; i <= s; i++) {
		v = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								FullFrameSet_006.plasticHoleDiameter);
		v2 = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								FullFrameSet_006.plasticHoleDiameter);
	}
	
	
	//FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+11,FullFrameSet_006.frameAHeight-5.5)), 99);

// 

	var width = FullFrameSet_006.frameAWidth-(FullFrameSet_006.frameABarWidth+38)-(FullFrameSet_006.frameABarWidth+3) ;
		
	//s = Math.ceil(width/FullFrameSet_006.frameAPlasticHoleSpacing);
	s = FullFrameSet_006.calcHoleCount(width,FullFrameSet_006.frameAPlasticHoleSpacing,3);
	spacing = width/(s-1);

	var v3 = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.frameABarWidth+38,5)), 
							FullFrameSet_006.plasticHoleDiameter);

	var v4 = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.frameABarWidth+38,FullFrameSet_006.frameAHeight-5)), 
							FullFrameSet_006.plasticHoleDiameter);

	s--;
	
	for (var i = 1; i <= s; i++) {
		v3 = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v3.operator_add(new RVector(spacing,0)), 
								FullFrameSet_006.plasticHoleDiameter);
		v4 = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v4.operator_add(new RVector(spacing,0)), 
								FullFrameSet_006.plasticHoleDiameter);
	}
	
	
	//FullFrameSet_006.createHole(documentInterface, addOperation, FullFrameSet_006.frameARoot.operator_add(new RVector(FullFrameSet_006.cutoutWidth+11,FullFrameSet_006.frameAHeight-5.5)), 99);




};


FullFrameSet_006.drillFrameAHandleRampHoles = function(documentInterface, addOperation) {
	
	
    FullFrameSet_006.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	FullFrameSet_006.frameARoot.operator_add(
    		new RVector(	FullFrameSet_006.frameAWidth - FullFrameSet_006.frameABarWidth+FullFrameSet_006.handleRampHoleInset,
    						FullFrameSet_006.frameAHeight/2-FullFrameSet_006.handleRampHoleCentres/2-FullFrameSet_006.handleRampHoleHeight/2-FullFrameSet_006.weldLugHoleClearance)),
    
    	FullFrameSet_006.handleRampHoleWidth+2*FullFrameSet_006.weldLugHoleClearance,
    	FullFrameSet_006.handleRampHoleHeight+2*FullFrameSet_006.weldLugHoleClearance);
    
    
    FullFrameSet_006.createRectangle(
    	documentInterface, 
    	addOperation,
    	FullFrameSet_006.frameARoot.operator_add(
    		new RVector(	FullFrameSet_006.frameAWidth - FullFrameSet_006.frameABarWidth+FullFrameSet_006.handleRampHoleInset,
    						FullFrameSet_006.frameAHeight/2+FullFrameSet_006.handleRampHoleCentres/2-FullFrameSet_006.handleRampHoleHeight/2-FullFrameSet_006.weldLugHoleClearance)),
    	FullFrameSet_006.handleRampHoleWidth+2*FullFrameSet_006.weldLugHoleClearance,
    	FullFrameSet_006.handleRampHoleHeight+2*FullFrameSet_006.weldLugHoleClearance);
    


};


//********************************************************************************************************************
//
// Frame C
//
//********************************************************************************************************************


FullFrameSet_006.createFrameC = function(documentInterface, addOperation) {
	FullFrameSet_006.createFrameCOutline(documentInterface, addOperation);
	FullFrameSet_006.drillFrameCHoles(documentInterface, addOperation);
	FullFrameSet_006.createFrameCHingeHoles(documentInterface, addOperation);
};

FullFrameSet_006.createFrameCOutline = function(documentInterface, addOperation) {
	
	var width 			= FullFrameSet_006.frameCWidth;
	var height 			= FullFrameSet_006.frameCHeight;
	
	FullFrameSet_006.createRectangle(documentInterface, addOperation,FullFrameSet_006.frameCRoot,width,height);
	FullFrameSet_006.createRectangle(documentInterface, addOperation,
								 FullFrameSet_006.frameCRoot.operator_add(new RVector(FullFrameSet_006.frameCBarWidth,FullFrameSet_006.frameCBarHeight)),
								 width-2*FullFrameSet_006.frameCBarWidth,
								 height-2*FullFrameSet_006.frameCBarHeight);
	
};


// Create hinge holes

FullFrameSet_006.createFrameCHingeHoles = function(documentInterface, addOperation) {

    FullFrameSet_006.createRectangle(
    	documentInterface, 
    	addOperation,
    	FullFrameSet_006.frameCRoot.operator_add(
    		new RVector(FullFrameSet_006.frameCHingeHoleCentreW-FullFrameSet_006.frameCHingeHoleWidth/2-FullFrameSet_006.weldLugHoleClearance,
    						FullFrameSet_006.frameCHingeHoleCentreH-FullFrameSet_006.frameCHingeHoleHeight/2-FullFrameSet_006.weldLugHoleClearance)),
    	FullFrameSet_006.frameCHingeHoleWidth+2*FullFrameSet_006.weldLugHoleClearance,
    	FullFrameSet_006.frameCHingeHoleHeight+2*FullFrameSet_006.weldLugHoleClearance);
    	
      FullFrameSet_006.createRectangle(
    	documentInterface, 
    	addOperation,
    	FullFrameSet_006.frameCRoot.operator_add(
    		new RVector(FullFrameSet_006.frameCHingeHoleCentreW-FullFrameSet_006.frameCHingeHoleWidth/2-FullFrameSet_006.weldLugHoleClearance,
    						FullFrameSet_006.frameCHeight-FullFrameSet_006.frameCHingeHoleCentreH-FullFrameSet_006.frameCHingeHoleHeight/2-FullFrameSet_006.weldLugHoleClearance)),
    	FullFrameSet_006.frameCHingeHoleWidth+2*FullFrameSet_006.weldLugHoleClearance,
    	FullFrameSet_006.frameCHingeHoleHeight+2*FullFrameSet_006.weldLugHoleClearance);
    	
    	
  
};

FullFrameSet_006.drillFrameCHoles = function(documentInterface, addOperation) {
	
	//var count = FullFrameSet_006.calculateSpacing(50,100,FullFrameSet_006.frameCWidth-FullFrameSet_006.frameCBarWidth);
	//var spacing = (FullFrameSet_006.frameCWidth-FullFrameSet_006.frameCBarWidth)/count;
	
	//FullFrameSet_006.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FullFrameSet_006.frameCWidth+FullFrameSet_006.frameCBarWidth/2,FullFrameSet_006.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//FullFrameSet_006.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FullFrameSet_006.frameCWidth+FullFrameSet_006.frameCBarWidth/2,FullFrameSet_006.frameCHeight-FullFrameSet_006.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//FullFrameSet_006.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FullFrameSet_006.frameCWidth+FullFrameSet_006.frameCBarWidth/2,FullFrameSet_006.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	//FullFrameSet_006.createRectangleArray(documentInterface, addOperation, new RVector(-0.5*FullFrameSet_006.frameCWidth-FullFrameSet_006.frameCBarWidth/2,FullFrameSet_006.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	
	};

//********************************************************************************************************************
//
// Sidebars
//
//********************************************************************************************************************

FullFrameSet_006.createSidebar = function(documentInterface, addOperation) {
	var v;
	
	sidebarHeight = FullFrameSet_006.sidebarHeight;
	
	v = FullFrameSet_006.line(documentInterface, addOperation,FullFrameSet_006.sidebarRoot,FullFrameSet_006.sidebarRoot.operator_add(new RVector(-1*FullFrameSet_006.sidebarWidth,0)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet_006.mountingLugInset)));
	v = FullFrameSet_006.createLuggedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet_006.mountingLugInset,FullFrameSet_006.mountingLugMinSpacing,2,Math.PI/2);
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet_006.mountingLugInset)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(FullFrameSet_006.sidebarWidth,0)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet_006.weldLugInset)));	

	    FullFrameSet_006.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		FullFrameSet_006.frameCRoot.getX()+FullFrameSet_006.frameCBarWidth/2+FullFrameSet_006.weldLugHoleWidth/2+FullFrameSet_006.weldLugHoleClearance,
	    		v.getY()+FullFrameSet_006.weldLugHoleClearance),
	    	sidebarHeight-2*FullFrameSet_006.weldLugInset,
	    	FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,
	    	3*Math.PI/2);

	    FullFrameSet_006.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		FullFrameSet_006.frameCRoot.getX()+FullFrameSet_006.frameCWidth-FullFrameSet_006.frameCBarWidth/2+FullFrameSet_006.weldLugHoleWidth/2+FullFrameSet_006.weldLugHoleClearance	,
	    		v.getY()+FullFrameSet_006.weldLugHoleClearance),
	    	sidebarHeight-2*FullFrameSet_006.weldLugInset,
	    	FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,
	    	3*Math.PI/2);

	v = FullFrameSet_006.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet_006.weldLugInset,FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,3*Math.PI/2);


	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet_006.weldLugInset)));	 

	// Make a clone of the bar a bit to the left

	var newRoot = FullFrameSet_006.sidebarRoot.operator_add(new RVector(-4*FullFrameSet_006.sidebarWidth,0));

	v = FullFrameSet_006.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*FullFrameSet_006.sidebarWidth,0)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet_006.mountingLugInset)));
	v = FullFrameSet_006.createLuggedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet_006.mountingLugInset,FullFrameSet_006.mountingLugMinSpacing,2,Math.PI/2);
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet_006.mountingLugInset)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(FullFrameSet_006.sidebarWidth,0)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet_006.weldLugInset)));	
	v = FullFrameSet_006.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet_006.weldLugInset,FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,3*Math.PI/2);
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet_006.weldLugInset)));	


// Create seal holes -4*FullFrameSet_006

	var length = FullFrameSet_006.sidebarHeight-2*20;
		
	// var s = Math.ceil(length/FullFrameSet_006.sidebarSealHoleSpacing);
	
	var s = FullFrameSet_006.calcHoleCount(length,FullFrameSet_006.sidebarSealHoleSpacing,3);
	
	
	spacing = length/(s-1);

	var v = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.sidebarRoot.operator_add(new RVector(-FullFrameSet_006.sidebarWidth/2,20)), 
							FullFrameSet_006.sidebarSealHoleDiameter);

	var v2 = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.sidebarRoot.operator_add(new RVector( -4*FullFrameSet_006.sidebarWidth-FullFrameSet_006.sidebarWidth/2,20)), 
							FullFrameSet_006.sidebarSealHoleDiameter);

	s--; // to allow for one we just did
	
	for (var i = 1; i <= s; i++) {
		v = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								FullFrameSet_006.sidebarSealHoleDiameter);
		v2 = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								FullFrameSet_006.sidebarSealHoleDiameter);
	}





};

//********************************************************************************************************************
//
// Top bar	
//
//********************************************************************************************************************

FullFrameSet_006.createTopbar = function(documentInterface, addOperation) {

	var v;
	v = FullFrameSet_006.line(documentInterface, addOperation,FullFrameSet_006.topbarRoot,FullFrameSet_006.topbarRoot.operator_add(new RVector(0,FullFrameSet_006.topbarBarWidth)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(FullFrameSet_006.topbarWidth,0)));
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet_006.topbarBarWidth)));

	    FullFrameSet_006.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		v.getX()+FullFrameSet_006.weldLugHoleClearance,
	    		FullFrameSet_006.frameCRoot.getY()+FullFrameSet_006.frameCBarWidth/2+FullFrameSet_006.weldLugHoleWidth/2+FullFrameSet_006.weldLugHoleClearance),
	    	FullFrameSet_006.topbarWidth,
	    	FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,
	    	Math.PI);

	    FullFrameSet_006.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		v.getX()+FullFrameSet_006.weldLugHoleClearance,
	    		FullFrameSet_006.frameCRoot.getY()+FullFrameSet_006.frameCHeight - FullFrameSet_006.frameCBarWidth/2+FullFrameSet_006.weldLugHoleWidth/2+FullFrameSet_006.weldLugHoleClearance),
	    	FullFrameSet_006.topbarWidth,
	    	FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,
	    	Math.PI);


	v = FullFrameSet_006.createTabbedLine(documentInterface, addOperation,v,FullFrameSet_006.topbarWidth,FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,Math.PI);

// Create holes to match bottom lugged line

	var inset = FullFrameSet_006.mountingLugInset;
	
	var	imaginaryP = FullFrameSet_006.topbarRoot.operator_add(new RVector(0,FullFrameSet_006.sidebarWidth));
	
	if (FullFrameSet_006.topbarWidth<(2*FullFrameSet_006.mountingLugInset+FullFrameSet_006.lugWidth))
		{
		inset = (FullFrameSet_006.topbarWidth - FullFrameSet_006.lugWidth)/2;
		}

	FullFrameSet_006.createUnLuggedLine(documentInterface, addOperation,imaginaryP.operator_add(new RVector(inset,0)),FullFrameSet_006.topbarWidth-2*inset,FullFrameSet_006.mountingLugMinSpacing,1,0);


// Create seal holes -4*FullFrameSet_006

	var width = FullFrameSet_006.topbarWidth-2*20;
		
	//var s = Math.ceil(width/FullFrameSet_006.sidebarSealHoleSpacing);
	
	var s = FullFrameSet_006.calcHoleCount(width,FullFrameSet_006.sidebarSealHoleSpacing,3);
	
	spacing = width/(s-1);

	var v = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.topbarRoot.operator_add(new RVector(20,15/2)), 
							FullFrameSet_006.sidebarSealHoleDiameter);

	var v2 = FullFrameSet_006.createHole(documentInterface, 
							addOperation, 
							FullFrameSet_006.bottombarRoot.operator_add(new RVector(20,15/2)), 
							FullFrameSet_006.sidebarSealHoleDiameter);

	s--; // to allow for the one we just made
	
	
	for (var i = 1; i <= s; i++) {
		v = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(spacing,0)), 
								FullFrameSet_006.sidebarSealHoleDiameter);
		v2 = FullFrameSet_006.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(spacing,0)), 
								FullFrameSet_006.sidebarSealHoleDiameter);
	}	
};

//********************************************************************************************************************
//
// Bottom bar	
//
//********************************************************************************************************************

FullFrameSet_006.createBottombar = function(documentInterface, addOperation) {

	var v;

	v = FullFrameSet_006.line(documentInterface, addOperation,FullFrameSet_006.bottombarRoot,FullFrameSet_006.bottombarRoot.operator_add(new RVector(0,FullFrameSet_006.sidebarWidth)));
	
	var inset = FullFrameSet_006.mountingLugInset;

	
	if (FullFrameSet_006.topbarWidth<(2*FullFrameSet_006.mountingLugInset+FullFrameSet_006.lugWidth))
		{
		inset = (FullFrameSet_006.topbarWidth - FullFrameSet_006.lugWidth)/2;
		}
	
	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));
	
	v = FullFrameSet_006.createLuggedLine(documentInterface, addOperation,v,FullFrameSet_006.topbarWidth-2*inset,FullFrameSet_006.mountingLugMinSpacing,1,0);

	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));


	v = FullFrameSet_006.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet_006.sidebarWidth)));
	v = FullFrameSet_006.createTabbedLine(documentInterface, addOperation,v,FullFrameSet_006.topbarWidth,FullFrameSet_006.weldLugMinSpacing,FullFrameSet_006.weldLugMaxSpacing,Math.PI);
	
};




//********************************************************************************************************************
//
// Utilities
//
//********************************************************************************************************************

//********************************************************************************************************************
// Plot Text
//********************************************************************************************************************

FullFrameSet_006.createText = function(documentInterface, addOperation, pos,text ) {
        var textData = new RTextData();
        textData.setText(text);
        textData.setTextHeight(4);
        textData.setTextWidth(2);
        textData.setPosition(pos);
        
        var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
        addOperation.addObject(textEntity);
};

FullFrameSet_006.drawPolyLine = function(documentInterface, addOperation, vectors) {

    for ( var i = 0; i < vectors.length-1; i++) {
        var v1 = vectors[i];
        var v2 = vectors[(i + 1)];
        var lineData = new RLineData(v1, v2);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
    	}
};



FullFrameSet_006.createHole = function(documentInterface, addOperation, pos, diameter) {

	var circleData = new RCircleData(pos,diameter/2);
	var circle = new RCircleEntity(documentInterface.getDocument(), circleData);
    addOperation.addObject(circle);
    return pos;
};


FullFrameSet_006.createBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= FullFrameSet_006.bendReliefDiameter;
    var slotWidth = FullFrameSet_006.bendReliefSlotWidth;
    var slotLength 	= FullFrameSet_006.bendReliefSlotLength;
    
    
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

FullFrameSet_006.createVBendRelief = function(documentInterface, addOperation, pos, vorientation,horientation) {
    
    var diameter 	= FullFrameSet_006.bendReliefDiameter;
    var slotWidth = FullFrameSet_006.bendReliefSlotWidth;
    var slotLength 	= FullFrameSet_006.bendReliefSlotLength;
    
    
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



FullFrameSet_006.createXBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= FullFrameSet_006.bendReliefDiameter;
    var slotWidth = FullFrameSet_006.bendReliefSlotWidth;
    var slotLength 	= FullFrameSet_006.bendReliefSlotLength;
    
    
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


FullFrameSet_006.createRectangle = function(documentInterface, addOperation, pos, x, y) {
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


FullFrameSet_006.line = function(documentInterface, addOperation, start,end ) {
        var lineData = new RLineData(start,end);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
        return end;
};

FullFrameSet_006.createSquare = function(documentInterface, addOperation, pos,x) {
	FullFrameSet_006.createSquare(documentInterface, addOperation, pos,x,x);
};

FullFrameSet_006.createRectangleArray = function(documentInterface, addOperation, pos, width, height, count, offset) {
	var tPos = pos;
	for (var i=0;i < count; i++) {
		FullFrameSet_006.createRectangle(documentInterface, addOperation, tPos, width, height);
		tPos = tPos.operator_add(offset);
	};

};

FullFrameSet_006.calcHoleCount = function(length, minSpacing,minLugs) {
	return FullFrameSet_006.calcLugCount(length, minSpacing,minLugs);
};

FullFrameSet_006.calcLugCount = function(length, minSpacing,minLugs) {

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

FullFrameSet_006.calculateSpacing = function(minSpacing,maxSpacing,length) {
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

FullFrameSet_006.createMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset
	var v1 = new RVector(0,0);
	var v2 = new RVector(FullFrameSet_006.lugWidth/4,FullFrameSet_006.lugHoleOffset*1.155);
	var v3 = new RVector(3*FullFrameSet_006.lugWidth/4,FullFrameSet_006.lugHoleOffset*1.155);
	var v4 = new RVector(FullFrameSet_006.lugWidth,0);
	var v5 = new RVector(FullFrameSet_006.lugHoleOffset,FullFrameSet_006.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(FullFrameSet_006.lugWidth/2,0));
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
    
 	FullFrameSet_006.createHole(documentInterface, addOperation, v5, FullFrameSet_006.lugHoleDiameter);
 
    var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
	return v4; // start point for next object
};

FullFrameSet_006.createInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset

	var v1 = new RVector(0,0);
	var v4 = new RVector(FullFrameSet_006.lugWidth,0);
	var v5 = new RVector(FullFrameSet_006.lugHoleOffset,FullFrameSet_006.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(FullFrameSet_006.lugWidth/2,0));
	var root = pos;
	
	v1 = v1.operator_add(root);
	v4 = v4.operator_add(root);
	v5 = v5.operator_add(root);
	
	//No point rotating v1 round itself
	v5 = v5.rotate(angle,v1);	
	
 	FullFrameSet_006.createHole(documentInterface, addOperation, v5, FullFrameSet_006.lugHoleDiameter);
 	return v4;
};


FullFrameSet_006.createLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line

	
	var lugCount = FullFrameSet_006.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
	
	
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-FullFrameSet_006.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		var lugStart 		= FullFrameSet_006.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset));
		var lastLineStart	= FullFrameSet_006.createMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= FullFrameSet_006.line(documentInterface, addOperation, lastLineStart, lastLineStart.operator_add(joinerOffset));
		
	} else {

		var l = (length-FullFrameSet_006.lugWidth)/(lugCount-1)-FullFrameSet_006.lugWidth;
		
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
		var lineStart = FullFrameSet_006.createMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = FullFrameSet_006.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
			lineStart = FullFrameSet_006.createMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	

		
		lastPoint = lineStart;
	}

		
	return lastPoint;	
};


FullFrameSet_006.createUnLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	var lugCount = FullFrameSet_006.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
		
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-FullFrameSet_006.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		//var lugStart 		= FullFrameSet_006.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset)); // QQQ is this a bug??
		var lugStart 		= pos.operator_add(joinerOffset); 
		var lastLineStart	= FullFrameSet_006.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= lastLineStart.operator_add(joinerOffset);
		
	} else {
		
		var l = (length-FullFrameSet_006.lugWidth)/(lugCount-1)-FullFrameSet_006.lugWidth;
		
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
		var lineStart = FullFrameSet_006.createInvisibleMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = lineStart.operator_add(joinerOffset); 
			lineStart = FullFrameSet_006.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	
		
		lastPoint = lineStart;
	}
		
	return lastPoint;	
};


FullFrameSet_006.createTabbedLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	// var count = FullFrameSet_006.calculateSpacing(minSpacing,maxSpacing,length);
	var count = FullFrameSet_006.calcLugCount(length,minSpacing,3);
	var joinerOffset;
	var lastPoint;
		
	var l = (length-FullFrameSet_006.weldLugWidth)/count-FullFrameSet_006.weldLugWidth;
	
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
	var lineStart = FullFrameSet_006.createWeldLug(documentInterface, addOperation, pos, orientation);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = FullFrameSet_006.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
		lineStart = FullFrameSet_006.createWeldLug(documentInterface, addOperation, lugStart, orientation);			
	}	
			
	return lineStart;	
};

FullFrameSet_006.createHoleLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	
	
	// var count = FullFrameSet_006.calculateSpacing(minSpacing,maxSpacing,length);
	var count = FullFrameSet_006.calcLugCount(length,minSpacing,3);
	var joinerOffset;
		
	var l = (length-FullFrameSet_006.weldLugWidth)/count;
	
	var x,y;
	
	if (orientation == 0) { // if the orientation East/West {
		joinerOffset = new RVector(l,0);
		x = FullFrameSet_006.weldLugWidth+2*FullFrameSet_006.weldLugHoleClearance;
		y = FullFrameSet_006.weldLugHoleWidth+2*FullFrameSet_006.weldLugHoleClearance;
	} else if (orientation == Math.PI/2) {
		joinerOffset = new RVector(0,l);
		x = FullFrameSet_006.weldLugHoleWidth+2*FullFrameSet_006.weldLugHoleClearance;
		y = FullFrameSet_006.weldLugWidth+2*FullFrameSet_006.weldLugHoleClearance;
	} else if (orientation == Math.PI) {
		joinerOffset = new RVector(-l,0);
		x = -1*(FullFrameSet_006.weldLugWidth+2*FullFrameSet_006.weldLugHoleClearance);
		y = -1*(FullFrameSet_006.weldLugHoleWidth+2*FullFrameSet_006.weldLugHoleClearance);
	} else {
		joinerOffset = new RVector(0,-l); // Tested OK
		x = -(FullFrameSet_006.weldLugHoleWidth+2*FullFrameSet_006.weldLugHoleClearance);
		y = -(FullFrameSet_006.weldLugWidth+2*FullFrameSet_006.weldLugHoleClearance);
	}
	
	// create lug one
	var lugStart;
	var lineStart = FullFrameSet_006.createRectangle(documentInterface, addOperation, pos, x, y);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = lineStart.operator_add(joinerOffset); 
		lineStart = FullFrameSet_006.createRectangle(documentInterface, addOperation, lugStart, x, y);			
	}	
			
};


FullFrameSet_006.createWeldLug  = function (documentInterface, addOperation, pos, orientation) {
	
	v2 = pos.operator_add(new RVector(0,FullFrameSet_006.weldLugDepth));
	v3 = v2.operator_add(new RVector(FullFrameSet_006.weldLugWidth,0));
	v4 = v3.operator_add(new RVector(0,-FullFrameSet_006.weldLugDepth));
	
	v2 = v2.rotate(orientation,pos);
	v3 = v3.rotate(orientation,pos);
	v4 = v4.rotate(orientation,pos);
	
	FullFrameSet_006.line(documentInterface, addOperation,pos,v2);
	FullFrameSet_006.line(documentInterface, addOperation,v2,v3);
	FullFrameSet_006.line(documentInterface, addOperation,v3,v4);
	
	return v4;	
};
