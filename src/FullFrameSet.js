// FullFrameSet.js
// library.js contains some convenience functions like 'isNull':
// This source is now managed under GIT

include("scripts/library.js");
include("scripts/WidgetFactory.js");	
include("scripts/File/SaveAs/SaveAs.js");


//
// Create main object 
//

function FullFrameSet() {
}

//
// Read widget to get object from which we can extract parameters
//


FullFrameSet.init = function(formWidget) {
    if (!isNull(formWidget)) {
        FullFrameSet.widgets = getWidgets(formWidget);
    }    
    
};



//
// Set requested sizes (default sizes are suitable for ICON generation
//

FullFrameSet.setValues = function() {

    FullFrameSet.customerName = FullFrameSet.widgets["CustomerName"].text;
    FullFrameSet.finishedWidth = parseFloat(FullFrameSet.widgets["FinishedWidth"].text, 10);
    FullFrameSet.finishedHeight = parseFloat(FullFrameSet.widgets["FinishedHeight"].text, 10);
    FullFrameSet.cutoutHeight = parseFloat(FullFrameSet.widgets["CutoutHeight"].text, 10);
    FullFrameSet.cutoutWidth = parseFloat(FullFrameSet.widgets["CutoutWidth"].text, 10);

    FullFrameSet.frameARelativeWidth = parseFloat(FullFrameSet.widgets["FrameARelativeWidth"].text, 10);
    FullFrameSet.frameARelativeHeight = parseFloat(FullFrameSet.widgets["FrameARelativeHeight"].text, 10);
    FullFrameSet.frameABarWidth = parseFloat(FullFrameSet.widgets["FrameABarWidth"].text, 10);
    FullFrameSet.frameABarHeight = parseFloat(FullFrameSet.widgets["FrameABarHeight"].text, 10);
    FullFrameSet.frameAPlasticHoleSpacing = parseFloat(FullFrameSet.widgets["FrameAPlasticHoleSpacing"].text, 10);

    FullFrameSet.handleRampHoleHeight = parseFloat(FullFrameSet.widgets["HandleRampHoleHeight"].text, 10);
    FullFrameSet.handleRampHoleWidth = parseFloat(FullFrameSet.widgets["HandleRampHoleWidth"].text, 10);
    FullFrameSet.handleRampHoleCentres = parseFloat(FullFrameSet.widgets["HandleRampHoleCentres"].text, 10);
    FullFrameSet.handleRampHoleInset = parseFloat(FullFrameSet.widgets["HandleRampHoleInset"].text, 10);



    FullFrameSet.frameCRelativeWidth = parseFloat(FullFrameSet.widgets["FrameCRelativeWidth"].text, 10);
    FullFrameSet.frameCRelativeHeight = parseFloat(FullFrameSet.widgets["FrameCRelativeHeight"].text, 10);
    FullFrameSet.frameCBarWidth = parseFloat(FullFrameSet.widgets["FrameCBarWidth"].text, 10);
    FullFrameSet.frameCBarHeight = parseFloat(FullFrameSet.widgets["FrameCBarHeight"].text, 10);

    FullFrameSet.frameCHingeHoleWidth = parseFloat(FullFrameSet.widgets["FrameCHingeHoleWidth"].text, 10);
    FullFrameSet.frameCHingeHoleHeight = parseFloat(FullFrameSet.widgets["FrameCHingeHoleHeight"].text, 10);
    FullFrameSet.frameCHingeHoleCentreW = parseFloat(FullFrameSet.widgets["FrameCHingeHoleCentreW"].text, 10);
    FullFrameSet.frameCHingeHoleCentreH = parseFloat(FullFrameSet.widgets["FrameCHingeHoleCentreH"].text, 10);



    FullFrameSet.holeDiameter = parseFloat(FullFrameSet.widgets["HoleDiameter"].text, 10);
 	FullFrameSet.plasticHoleDiameter = parseFloat(FullFrameSet.widgets["PlasticHoleDiameter"].text, 10);
    FullFrameSet.bendReliefDiameter = parseFloat(FullFrameSet.widgets["BendReliefDiameter"].text, 10);
    FullFrameSet.bendReliefSlotWidth = parseFloat(FullFrameSet.widgets["BendReliefSlotWidth"].text, 10);
    FullFrameSet.bendReliefSlotLength = parseFloat(FullFrameSet.widgets["BendReliefSlotLength"].text, 10);

    FullFrameSet.lugWidth = parseFloat(FullFrameSet.widgets["LugWidth"].text, 10);
    FullFrameSet.lugHoleOffset = parseFloat(FullFrameSet.widgets["LugHoleOffset"].text, 10);
    FullFrameSet.lugHoleDiameter = parseFloat(FullFrameSet.widgets["LugHoleDiameter"].text, 10);
    FullFrameSet.mountingLugInset = parseFloat(FullFrameSet.widgets["MountingLugInset"].text, 10);
    FullFrameSet.mountingLugMinSpacing = parseFloat(FullFrameSet.widgets["MountingLugMinSpacing"].text, 10);
    FullFrameSet.mountingLugMaxSpacing = parseFloat(FullFrameSet.widgets["MountingLugMaxSpacing"].text, 10);

    FullFrameSet.sidebarWidth = parseFloat(FullFrameSet.widgets["SidebarWidth"].text, 10);
    FullFrameSet.sidebarRelativeHeight = parseFloat(FullFrameSet.widgets["SidebarRelativeHeight"].text, 10);
    FullFrameSet.sidebarSealHoleSpacing = parseFloat(FullFrameSet.widgets["SidebarSealHoleSpacing"].text, 10);
    FullFrameSet.sidebarSealHoleDiameter = parseFloat(FullFrameSet.widgets["SidebarSealHoleDiameter"].text, 10);

    FullFrameSet.weldLugWidth = parseFloat(FullFrameSet.widgets["WeldLugWidth"].text, 10);
    FullFrameSet.weldLugDepth = parseFloat(FullFrameSet.widgets["WeldLugDepth"].text, 10);
    FullFrameSet.weldLugInset = parseFloat(FullFrameSet.widgets["WeldLugInset"].text, 10);
    FullFrameSet.weldLugMinSpacing = parseFloat(FullFrameSet.widgets["WeldLugMinSpacing"].text, 10);
    FullFrameSet.weldLugMaxSpacing = parseFloat(FullFrameSet.widgets["WeldLugMaxSpacing"].text, 10);
    FullFrameSet.weldLugHoleWidth = parseFloat(FullFrameSet.widgets["WeldLugHoleWidth"].text, 10);
    FullFrameSet.weldLugHoleClearance = parseFloat(FullFrameSet.widgets["WeldLugHoleClearance"].text, 10);

    FullFrameSet.topbarBarWidth = parseFloat(FullFrameSet.widgets["TopBarWidth"].text, 10);
    FullFrameSet.topbarRelativeWidth = parseFloat(FullFrameSet.widgets["TopBarRelativeWidth"].text, 10);
    FullFrameSet.handleRampHolePosition = parseFloat(FullFrameSet.widgets["HandleRampHolePosition"].text, 10);
    FullFrameSet.includeRampHandle = FullFrameSet.widgets["IncludeRampHandle"].checked;
    FullFrameSet.topOpener = FullFrameSet.widgets["TopOpener"].checked;

    if (FullFrameSet.topOpener)
    	{
    	// Transpose W & H as quick and dirty fix
        FullFrameSet.finishedWidth =  parseFloat(FullFrameSet.widgets["FinishedHeight"].text, 10);
        FullFrameSet.finishedHeight =parseFloat(FullFrameSet.widgets["FinishedWidth"].text, 10);
    	}
    
    
	FullFrameSet.setDerivedValues();

};

//
// Set default sizes (default sizes are suitable for ICON generation
//

FullFrameSet.setDefaults = function() {

    FullFrameSet.finishedWidth = 50;
    FullFrameSet.finishedHeight = 50;
    FullFrameSet.cutoutWidth = 5;
    FullFrameSet.cutoutHeight = 5;
    FullFrameSet.frameABarWidth = 3;
    FullFrameSet.frameABarHeight = 3;
    FullFrameSet.frameARelativeHeight = 3;
    FullFrameSet.frameARelativeWidth = 3;
    FullFrameSet.frameCBarWidth = 3;
    FullFrameSet.frameCBarHeight = 3;
    FullFrameSet.frameCRelativeHeight = 3;
    FullFrameSet.frameCRelativeWidth = 3;

    FullFrameSet.frameCHingeHoleWidth = 1;
    FullFrameSet.frameCHingeHoleHeight = 1;
    FullFrameSet.frameCHingeHoleCentreW = 1;
    FullFrameSet.frameCHingeHoleCentreH = 1;


    FullFrameSet.holeDiameter = 1;
    FullFrameSet.plasticHoleDiameter = 1;
    FullFrameSet.handleRampHoleHeight = 1;
    FullFrameSet.handleRampHoleWidth = 1;
    FullFrameSet.handleRampHoleCentres = 1;
    FullFrameSet.handleRampHoleInset = 1;


    FullFrameSet.bendReliefDiameter = 5;
    FullFrameSet.bendReliefSlotWidth = 5;
    FullFrameSet.bendReliefSlotLength = 20;
    FullFrameSet.lugWidth = 0.5
    FullFrameSet.lugHoleOffset = 0.3;
    FullFrameSet.lugHoleDiameter = 0.1;
    FullFrameSet.sidebarWidth = .1;
    FullFrameSet.sidebarRelativeHeight = .1;
    FullFrameSet.weldLugWidth = .1;
    FullFrameSet.weldLugDepth = .1;
    FullFrameSet.mountingLugInset = .1;
    FullFrameSet.weldLugInset = .1;
    FullFrameSet.weldLugMinSpacing = .1;
    FullFrameSet.weldLugMaxSpacing = .1;
    FullFrameSet.mountingLugMinSpacing = .1;
    FullFrameSet.mountingLugMaxSpacing = .1;
    FullFrameSet.weldLugHoleWidth = .1;
    FullFrameSet.weldLugHoleClearance = .1;
	FullFrameSet.topbarWidth = .1;
	FullFrameSet.topbarRelativeWidth = .1;
	FullFrameSet.frameAPlasticHoleSpacing = 1;
	FullFrameSet.sidebarSealHoleSpacing = 3;	
 
	FullFrameSet.setDerivedValues();

};

FullFrameSet.setDerivedValues = function (){

    FullFrameSet.frameAWidth = FullFrameSet.finishedWidth+FullFrameSet.frameARelativeWidth;
    FullFrameSet.frameAHeight = FullFrameSet.finishedHeight+FullFrameSet.frameARelativeHeight;
    FullFrameSet.frameARoot = new RVector(0,(FullFrameSet.finishedHeight-FullFrameSet.frameARelativeHeight)/2);

    FullFrameSet.frameCWidth = FullFrameSet.finishedWidth+FullFrameSet.frameCRelativeWidth;
    FullFrameSet.frameCHeight = FullFrameSet.finishedHeight+FullFrameSet.frameCRelativeHeight;
    FullFrameSet.frameCRoot = new RVector(-1.2*FullFrameSet.finishedWidth,(FullFrameSet.finishedHeight-FullFrameSet.frameCRelativeHeight)/2);
	
    FullFrameSet.sidebarHeight = FullFrameSet.finishedHeight+FullFrameSet.sidebarRelativeHeight;
    FullFrameSet.sidebarRoot = new RVector(-1.5*FullFrameSet.finishedWidth,(FullFrameSet.finishedHeight-FullFrameSet.sidebarRelativeHeight)/2);

    FullFrameSet.topbarRoot = new RVector(FullFrameSet.frameCRoot.getX()+(FullFrameSet.frameCWidth-FullFrameSet.topbarWidth)/2,FullFrameSet.frameCHeight*1.6);
	


    FullFrameSet.topbarWidth = FullFrameSet.finishedWidth+FullFrameSet.topbarRelativeWidth;
    FullFrameSet.bottombarRoot = new RVector(FullFrameSet.frameCRoot.getX()+(FullFrameSet.frameCWidth-FullFrameSet.topbarWidth)/2,FullFrameSet.frameCHeight*0.2	);

};
//
// Main function to generate the frames
//

FullFrameSet.generate = function(documentInterface, file) {
    FullFrameSet.setValues();
    return FullFrameSet.create(documentInterface);
};

//
// Function to generate the frames icon
//


FullFrameSet.generatePreview = function(documentInterface, iconSize) {
    FullFrameSet.setDefaults();
    return FullFrameSet.createIcon(documentInterface);

};


//
// Plot each of main elements
//

FullFrameSet.create = function(documentInterface) {
    	
	var addOperation = new RAddObjectsOperation(false);
    	FullFrameSet.createFrameA(documentInterface, addOperation);
 	FullFrameSet.createFrameC(documentInterface, addOperation);
	FullFrameSet.createSidebar(documentInterface, addOperation);


		FullFrameSet.createTopbar(documentInterface, addOperation);		
    
	FullFrameSet.createBottombar(documentInterface, addOperation);
// debugger;
    FullFrameSet.commentBox(documentInterface, addOperation);
    
    //var saveAsAction = new SaveAs();

    //saveAsAction.save("../DXF_WINDOW_DRAWINGS/"+FullFrameSet.customerName+"_W_"+FullFrameSet.finishedWidth+"_x_H_"+FullFrameSet.finishedHeight+".dxf","R27",false);    

    //documentInterface.getDocument().setFileName();    
    
    
    return addOperation;
};


FullFrameSet.createIcon = function(documentInterface) {
    	
	var addOperation = new RAddObjectsOperation(false);    
           
    this.createRectangle(documentInterface, addOperation,new RVector(0,0),10,12);
    this.createRectangle(documentInterface, addOperation,new RVector(1,1),8,10);
	this.createText(documentInterface, addOperation,new RVector(0,0),"HX");
	this.createText(documentInterface, addOperation,new RVector(3,7),"11");
	
	return addOperation;
};

//********************************************************************************************************************
//
//  Comments box
//
//********************************************************************************************************************


FullFrameSet.commentBox = function(documentInterface, addOperation) {

    this.createRectangle(documentInterface, addOperation,new RVector(0,0),400,80);
    this.createBigText(documentInterface, addOperation,new RVector(5,75),FullFrameSet.customerName);
	if (FullFrameSet.topOpener)
		{
	    this.createBigText(documentInterface, addOperation,new RVector(5,50),"Dimensions (WxH)");
	    this.createBigText(documentInterface, addOperation,new RVector(5,25),FullFrameSet.finishedHeight+"x"+FullFrameSet.finishedWidth);
		}
	else
		{
	    this.createBigText(documentInterface, addOperation,new RVector(5,50),"Dimensions (WxH)");
	    this.createBigText(documentInterface, addOperation,new RVector(5,25),FullFrameSet.finishedWidth+"x"+FullFrameSet.finishedHeight);		
		}
    

    return addOperation;
};


//********************************************************************************************************************
//
//   Frame A
//
//********************************************************************************************************************

FullFrameSet.createFrameA = function(documentInterface, addOperation) {
	FullFrameSet.createFrameAOutline(documentInterface, addOperation);
	FullFrameSet.createFrameAInner(documentInterface, addOperation);	
	FullFrameSet.drillFrameAHoles(documentInterface, addOperation);
	FullFrameSet.drillPlasticHoles(documentInterface, addOperation);

    if (FullFrameSet.includeRampHandle && !FullFrameSet.topOpener)
        {
        FullFrameSet.drillFrameAHandleRampHolesVariablePosition(documentInterface, addOperation,FullFrameSet.handleRampHolePosition);
	    }
	// FullFrameSet.drillFrameAHandleRampHoles(documentInterface, addOperation);
	return addOperation;
};


FullFrameSet.createFrameAOutline = function(documentInterface, addOperation) {
	
	var width 			= FullFrameSet.frameAWidth;
	var height 			= FullFrameSet.frameAHeight;
	var cutoutWidth 	= FullFrameSet.cutoutWidth;
	var cutoutHeight 	= FullFrameSet.cutoutHeight;
	
    var va = new Array(
            FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet.bendReliefSlotWidth,cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(0, cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(0, height-cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet.bendReliefSlotWidth, height-cutoutHeight))
   );

	FullFrameSet.drawPolyLine(documentInterface, addOperation, va);

    var va2 = new Array(
            FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth, height-cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth, height)),
            FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth,height)),
            FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight))
     );

	FullFrameSet.drawPolyLine(documentInterface, addOperation, va2);

    var va3 = new Array(
           FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth+FullFrameSet.bendReliefSlotWidth,height-cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(width,height-cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(width,cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth+FullFrameSet.bendReliefSlotWidth,cutoutHeight))
    );

	FullFrameSet.drawPolyLine(documentInterface, addOperation, va3);

    var va4 = new Array(
            FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),
            FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth,0)),
            FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth,0)),
            FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth,cutoutHeight))
    );

	FullFrameSet.drawPolyLine(documentInterface, addOperation, va4);

	// Now insert the bend reliefs
	
	FullFrameSet.createVBendRelief(documentInterface, addOperation,FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet.bendReliefSlotWidth,cutoutHeight)),1,1);
	FullFrameSet.createVBendRelief(documentInterface, addOperation,FullFrameSet.frameARoot.operator_add(new RVector(cutoutWidth-FullFrameSet.bendReliefSlotWidth, height-cutoutHeight)),-1,1);
	FullFrameSet.createVBendRelief(documentInterface, addOperation,FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight)),-1,-1);
	FullFrameSet.createVBendRelief(documentInterface, addOperation,FullFrameSet.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),1,-1);

};


FullFrameSet.createFrameAInner = function(documentInterface, addOperation) {
	
	var width 			= FullFrameSet.frameAWidth-2*FullFrameSet.frameABarWidth;
	var height 			= FullFrameSet.frameAHeight-2*FullFrameSet.frameABarHeight;
	var widthOffset     = FullFrameSet.frameABarWidth;
	var heightOffset    = FullFrameSet.frameABarHeight;
	
	
    FullFrameSet.createRectangle(documentInterface, addOperation,FullFrameSet.frameARoot.operator_add(new RVector(widthOffset,heightOffset)),width,height);

};

FullFrameSet.drillFrameAHoles = function(documentInterface, addOperation) {
	
	FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+11,FullFrameSet.frameAHeight-5.5)), FullFrameSet.holeDiameter);
	FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+26,FullFrameSet.frameAHeight-11.5)), FullFrameSet.holeDiameter);
	FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+41,FullFrameSet.frameAHeight-5.5)), FullFrameSet.holeDiameter);

	FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+11,5.5)), FullFrameSet.holeDiameter);
	FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+26,11.5)), FullFrameSet.holeDiameter);
	FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+41,5.5)), FullFrameSet.holeDiameter);

};

// Drill v holes 

FullFrameSet.drillPlasticHoles = function(documentInterface, addOperation) {

	var length = FullFrameSet.frameAHeight-2*(FullFrameSet.frameABarHeight+3);
		
	// var s = Math.ceil(length/FullFrameSet.frameAPlasticHoleSpacing);
	var s = FullFrameSet.calcHoleCount(length,FullFrameSet.frameAPlasticHoleSpacing,3);
	spacing = length/(s-1);

	var v = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.frameARoot.operator_add(new RVector(5,FullFrameSet.frameABarHeight+3)), 
							FullFrameSet.plasticHoleDiameter);

	var v2 = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.frameAWidth-5,FullFrameSet.frameABarHeight+3)), 
							FullFrameSet.plasticHoleDiameter);
	s--;
	
	for (var i = 1; i <= s; i++) {
		v = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								FullFrameSet.plasticHoleDiameter);
		v2 = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								FullFrameSet.plasticHoleDiameter);
	}
	
	
	//FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+11,FullFrameSet.frameAHeight-5.5)), 99);

// 

	var width = FullFrameSet.frameAWidth-(FullFrameSet.frameABarWidth+38)-(FullFrameSet.frameABarWidth+3) ;
		
	//s = Math.ceil(width/FullFrameSet.frameAPlasticHoleSpacing);
	s = FullFrameSet.calcHoleCount(width,FullFrameSet.frameAPlasticHoleSpacing,3);
	spacing = width/(s-1);

	var v3 = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.frameABarWidth+38,5)), 
							FullFrameSet.plasticHoleDiameter);

	var v4 = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.frameABarWidth+38,FullFrameSet.frameAHeight-5)), 
							FullFrameSet.plasticHoleDiameter);

	s--;
	
	for (var i = 1; i <= s; i++) {
		v3 = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v3.operator_add(new RVector(spacing,0)), 
								FullFrameSet.plasticHoleDiameter);
		v4 = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v4.operator_add(new RVector(spacing,0)), 
								FullFrameSet.plasticHoleDiameter);
	}
	
	
	//FullFrameSet.createHole(documentInterface, addOperation, FullFrameSet.frameARoot.operator_add(new RVector(FullFrameSet.cutoutWidth+11,FullFrameSet.frameAHeight-5.5)), 99);




};


FullFrameSet.drillFrameAHandleRampHoles = function(documentInterface, addOperation) {
	
	
    FullFrameSet.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	FullFrameSet.frameARoot.operator_add(
    		new RVector(	FullFrameSet.frameAWidth - FullFrameSet.frameABarWidth+FullFrameSet.handleRampHoleInset,
    						FullFrameSet.frameAHeight/2-FullFrameSet.handleRampHoleCentres/2-FullFrameSet.handleRampHoleHeight/2-FullFrameSet.weldLugHoleClearance)),
    
    	FullFrameSet.handleRampHoleWidth+2*FullFrameSet.weldLugHoleClearance,
    	FullFrameSet.handleRampHoleHeight+2*FullFrameSet.weldLugHoleClearance);
    
    
    FullFrameSet.createRectangle(
    	documentInterface, 
    	addOperation,
    	FullFrameSet.frameARoot.operator_add(
    		new RVector(	FullFrameSet.frameAWidth - FullFrameSet.frameABarWidth+FullFrameSet.handleRampHoleInset,
    						FullFrameSet.frameAHeight/2+FullFrameSet.handleRampHoleCentres/2-FullFrameSet.handleRampHoleHeight/2-FullFrameSet.weldLugHoleClearance)),
    	FullFrameSet.handleRampHoleWidth+2*FullFrameSet.weldLugHoleClearance,
    	FullFrameSet.handleRampHoleHeight+2*FullFrameSet.weldLugHoleClearance);
    


};

FullFrameSet.drillFrameAHandleRampHolesVariablePosition = function(documentInterface, addOperation, fraction) {
	
	
    FullFrameSet.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	FullFrameSet.frameARoot.operator_add(
    		new RVector(	FullFrameSet.frameAWidth - FullFrameSet.frameABarWidth+FullFrameSet.handleRampHoleInset,
    						((FullFrameSet.frameAHeight-24)*fraction)+12-FullFrameSet.handleRampHoleCentres/2-FullFrameSet.handleRampHoleHeight/2-FullFrameSet.weldLugHoleClearance)),
    
    	FullFrameSet.handleRampHoleWidth+2*FullFrameSet.weldLugHoleClearance,
    	FullFrameSet.handleRampHoleHeight+2*FullFrameSet.weldLugHoleClearance);
    
    
    FullFrameSet.createRectangle(
    	documentInterface, 
    	addOperation,
    	FullFrameSet.frameARoot.operator_add(
    		new RVector(	FullFrameSet.frameAWidth - FullFrameSet.frameABarWidth+FullFrameSet.handleRampHoleInset,
    						((FullFrameSet.frameAHeight-24)*fraction)+12+FullFrameSet.handleRampHoleCentres/2-FullFrameSet.handleRampHoleHeight/2-FullFrameSet.weldLugHoleClearance)),
    	FullFrameSet.handleRampHoleWidth+2*FullFrameSet.weldLugHoleClearance,
    	FullFrameSet.handleRampHoleHeight+2*FullFrameSet.weldLugHoleClearance);
    


};



//********************************************************************************************************************
//
// Frame C
//
//********************************************************************************************************************


FullFrameSet.createFrameC = function(documentInterface, addOperation) {
	FullFrameSet.createFrameCOutline(documentInterface, addOperation);
	FullFrameSet.drillFrameCHoles(documentInterface, addOperation);
	FullFrameSet.createFrameCHingeHoles(documentInterface, addOperation);
};

FullFrameSet.createFrameCOutline = function(documentInterface, addOperation) {
	
	var width 			= FullFrameSet.frameCWidth;
	var height 			= FullFrameSet.frameCHeight;
	
	FullFrameSet.createRectangle(documentInterface, addOperation,FullFrameSet.frameCRoot,width,height);
	FullFrameSet.createRectangle(documentInterface, addOperation,
								 FullFrameSet.frameCRoot.operator_add(new RVector(FullFrameSet.frameCBarWidth,FullFrameSet.frameCBarHeight)),
								 width-2*FullFrameSet.frameCBarWidth,
								 height-2*FullFrameSet.frameCBarHeight);
	
};


// Create hinge holes

FullFrameSet.createFrameCHingeHoles = function(documentInterface, addOperation) {

    FullFrameSet.createRectangle(
    	documentInterface, 
    	addOperation,
    	FullFrameSet.frameCRoot.operator_add(
    		new RVector(FullFrameSet.frameCHingeHoleCentreW-FullFrameSet.frameCHingeHoleWidth/2-FullFrameSet.weldLugHoleClearance,
    						FullFrameSet.frameCHingeHoleCentreH-FullFrameSet.frameCHingeHoleHeight/2-FullFrameSet.weldLugHoleClearance)),
    	FullFrameSet.frameCHingeHoleWidth+2*FullFrameSet.weldLugHoleClearance,
    	FullFrameSet.frameCHingeHoleHeight+2*FullFrameSet.weldLugHoleClearance);
    	
      FullFrameSet.createRectangle(
    	documentInterface, 
    	addOperation,
    	FullFrameSet.frameCRoot.operator_add(
    		new RVector(FullFrameSet.frameCHingeHoleCentreW-FullFrameSet.frameCHingeHoleWidth/2-FullFrameSet.weldLugHoleClearance,
    						FullFrameSet.frameCHeight-FullFrameSet.frameCHingeHoleCentreH-FullFrameSet.frameCHingeHoleHeight/2-FullFrameSet.weldLugHoleClearance)),
    	FullFrameSet.frameCHingeHoleWidth+2*FullFrameSet.weldLugHoleClearance,
    	FullFrameSet.frameCHingeHoleHeight+2*FullFrameSet.weldLugHoleClearance);
    	
    	
  
};

FullFrameSet.drillFrameCHoles = function(documentInterface, addOperation) {
	
	//var count = FullFrameSet.calculateSpacing(50,100,FullFrameSet.frameCWidth-FullFrameSet.frameCBarWidth);
	//var spacing = (FullFrameSet.frameCWidth-FullFrameSet.frameCBarWidth)/count;
	
	//FullFrameSet.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FullFrameSet.frameCWidth+FullFrameSet.frameCBarWidth/2,FullFrameSet.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//FullFrameSet.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FullFrameSet.frameCWidth+FullFrameSet.frameCBarWidth/2,FullFrameSet.frameCHeight-FullFrameSet.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//FullFrameSet.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*FullFrameSet.frameCWidth+FullFrameSet.frameCBarWidth/2,FullFrameSet.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	//FullFrameSet.createRectangleArray(documentInterface, addOperation, new RVector(-0.5*FullFrameSet.frameCWidth-FullFrameSet.frameCBarWidth/2,FullFrameSet.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	
	};

//********************************************************************************************************************
//
// Sidebars
//
//********************************************************************************************************************

FullFrameSet.createSidebar = function(documentInterface, addOperation) {
	var v;
	
	sidebarHeight = FullFrameSet.sidebarHeight;
	
	v = FullFrameSet.line(documentInterface, addOperation,FullFrameSet.sidebarRoot,FullFrameSet.sidebarRoot.operator_add(new RVector(-1*FullFrameSet.sidebarWidth,0)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet.mountingLugInset)));
	v = FullFrameSet.createLuggedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet.mountingLugInset,FullFrameSet.mountingLugMinSpacing,2,Math.PI/2);
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet.mountingLugInset)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(FullFrameSet.sidebarWidth,0)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.weldLugInset)));	

	    FullFrameSet.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		FullFrameSet.frameCRoot.getX()+FullFrameSet.frameCBarWidth/2+FullFrameSet.weldLugHoleWidth/2+FullFrameSet.weldLugHoleClearance,
	    		v.getY()+FullFrameSet.weldLugHoleClearance),
	    	sidebarHeight-2*FullFrameSet.weldLugInset,
	    	FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,
	    	3*Math.PI/2);

	    FullFrameSet.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		FullFrameSet.frameCRoot.getX()+FullFrameSet.frameCWidth-FullFrameSet.frameCBarWidth/2+FullFrameSet.weldLugHoleWidth/2+FullFrameSet.weldLugHoleClearance	,
	    		v.getY()+FullFrameSet.weldLugHoleClearance),
	    	sidebarHeight-2*FullFrameSet.weldLugInset,
	    	FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,
	    	3*Math.PI/2);

	v = FullFrameSet.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet.weldLugInset,FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,3*Math.PI/2);


	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.weldLugInset)));	 

	// Make a clone of the bar a bit to the left

	 if (!FullFrameSet.topOpener)
	    	{
	
	var newRoot = FullFrameSet.sidebarRoot.operator_add(new RVector(-4*FullFrameSet.sidebarWidth,0));

	v = FullFrameSet.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*FullFrameSet.sidebarWidth,0)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet.mountingLugInset)));
	v = FullFrameSet.createLuggedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet.mountingLugInset,FullFrameSet.mountingLugMinSpacing,2,Math.PI/2);
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet.mountingLugInset)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(FullFrameSet.sidebarWidth,0)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.weldLugInset)));	
	v = FullFrameSet.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet.weldLugInset,FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,3*Math.PI/2);
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.weldLugInset)));	

	    	}
	 else
		 {
		 // make top style bar

		var newRoot = FullFrameSet.sidebarRoot.operator_add(new RVector(-4*FullFrameSet.sidebarWidth,0));

		v = FullFrameSet.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*FullFrameSet.topbarBarWidth,0)));
		v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,sidebarHeight)));
		    FullFrameSet.createUnLuggedLine(documentInterface, addOperation,newRoot.operator_add(new RVector(-1*FullFrameSet.sidebarWidth,FullFrameSet.mountingLugInset)),sidebarHeight-2*FullFrameSet.mountingLugInset,FullFrameSet.mountingLugMinSpacing,2,Math.PI/2);
		//v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,FullFrameSet.mountingLugInset)));
		v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(FullFrameSet.topbarBarWidth,0)));
		v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.weldLugInset)));	
		v = FullFrameSet.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*FullFrameSet.weldLugInset,FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,3*Math.PI/2);
		v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.weldLugInset)));	
		 }
	 
// Create seal holes -4*FullFrameSet

	var length = FullFrameSet.sidebarHeight-2*20;
		
	// var s = Math.ceil(length/FullFrameSet.sidebarSealHoleSpacing);
	
	var s = FullFrameSet.calcHoleCount(length,FullFrameSet.sidebarSealHoleSpacing,3);
	
	
	spacing = length/(s-1);

	var v = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.sidebarRoot.operator_add(new RVector(-FullFrameSet.sidebarWidth/2,20)), 
							FullFrameSet.sidebarSealHoleDiameter);
	
	var v2 = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.sidebarRoot.operator_add(new RVector( -4*FullFrameSet.sidebarWidth-FullFrameSet.sidebarWidth/2,20)), 
							FullFrameSet.sidebarSealHoleDiameter);
	    	
	s--; // to allow for one we just did
	
	for (var i = 1; i <= s; i++) {
		v = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								FullFrameSet.sidebarSealHoleDiameter);
		v2 = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								FullFrameSet.sidebarSealHoleDiameter);
		    }





};

//********************************************************************************************************************
//
// Top bar	
//
//********************************************************************************************************************

FullFrameSet.createTopbar = function(documentInterface, addOperation) {


var x = FullFrameSet.topbarRoot.operator_add(new RVector(0,FullFrameSet.topbarBarWidth));
x = x.operator_add(new RVector(FullFrameSet.topbarWidth,0));
x = x.operator_add(new RVector(0,-FullFrameSet.topbarBarWidth));

    FullFrameSet.createHoleLine(documentInterface, addOperation,
    	new RVector(
    		x.getX()+FullFrameSet.weldLugHoleClearance,
    		FullFrameSet.frameCRoot.getY()+FullFrameSet.frameCBarWidth/2+FullFrameSet.weldLugHoleWidth/2+FullFrameSet.weldLugHoleClearance),
    	FullFrameSet.topbarWidth,
    	FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,
    	Math.PI);

    FullFrameSet.createHoleLine(documentInterface, addOperation,
    	new RVector(
    		x.getX()+FullFrameSet.weldLugHoleClearance,
    		FullFrameSet.frameCRoot.getY()+FullFrameSet.frameCHeight - FullFrameSet.frameCBarWidth/2+FullFrameSet.weldLugHoleWidth/2+FullFrameSet.weldLugHoleClearance),
    	FullFrameSet.topbarWidth,
    	FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,
    	Math.PI);

    

    if (!FullFrameSet.topOpener)
    	{

	var v;
	v = FullFrameSet.line(documentInterface, addOperation,FullFrameSet.topbarRoot,FullFrameSet.topbarRoot.operator_add(new RVector(0,FullFrameSet.topbarBarWidth)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(FullFrameSet.topbarWidth,0)));
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.topbarBarWidth)));
	v = FullFrameSet.createTabbedLine(documentInterface, addOperation,v,FullFrameSet.topbarWidth,FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,Math.PI);

// Create holes to match bottom lugged line

	var inset = FullFrameSet.mountingLugInset;
	
	var	imaginaryP = FullFrameSet.topbarRoot.operator_add(new RVector(0,FullFrameSet.sidebarWidth));
	
	if (FullFrameSet.topbarWidth<(2*FullFrameSet.mountingLugInset+FullFrameSet.lugWidth))
		{
		inset = (FullFrameSet.topbarWidth - FullFrameSet.lugWidth)/2;
		}

	FullFrameSet.createUnLuggedLine(documentInterface, addOperation,imaginaryP.operator_add(new RVector(inset,0)),FullFrameSet.topbarWidth-2*inset,FullFrameSet.mountingLugMinSpacing,1,0);

    	}

// Create seal holes -4*FullFrameSet

	var width = FullFrameSet.topbarWidth-2*20;
		
	//var s = Math.ceil(width/FullFrameSet.sidebarSealHoleSpacing);
	
	var s = FullFrameSet.calcHoleCount(width,FullFrameSet.sidebarSealHoleSpacing,3);
	
	spacing = width/(s-1);

    if (!FullFrameSet.topOpener)
    	{
	var v = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.topbarRoot.operator_add(new RVector(20,15/2)), 
							FullFrameSet.sidebarSealHoleDiameter);
    	}
    else
    	{
    	
    	var v = FullFrameSet.createHole(documentInterface, 
				addOperation, 
				FullFrameSet.bottombarRoot.operator_add(new RVector(20,15/2-50)), 
				FullFrameSet.sidebarSealHoleDiameter);
    	}
    
	var v2 = FullFrameSet.createHole(documentInterface, 
							addOperation, 
							FullFrameSet.bottombarRoot.operator_add(new RVector(20,15/2)), 
							FullFrameSet.sidebarSealHoleDiameter);

	s--; // to allow for the one we just made
	
	
	for (var i = 1; i <= s; i++) {
    if (!FullFrameSet.topOpener)
    	{
	v = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(spacing,0)), 
								FullFrameSet.sidebarSealHoleDiameter);
    	}
    else
    	{
    	v = FullFrameSet.createHole(documentInterface, 
				addOperation, 
				v.operator_add(new RVector(spacing,0)), 
				FullFrameSet.sidebarSealHoleDiameter);
    	
    	}
	v2 = FullFrameSet.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(spacing,0)), 
								FullFrameSet.sidebarSealHoleDiameter);
	}	
    	
};

//********************************************************************************************************************
//
// Bottom bar	
//
//********************************************************************************************************************

FullFrameSet.createBottombar = function(documentInterface, addOperation) {

	var v;

	v = FullFrameSet.line(documentInterface, addOperation,FullFrameSet.bottombarRoot,FullFrameSet.bottombarRoot.operator_add(new RVector(0,FullFrameSet.sidebarWidth)));
	
	var inset = FullFrameSet.mountingLugInset;

	
	if (FullFrameSet.topbarWidth<(2*FullFrameSet.mountingLugInset+FullFrameSet.lugWidth))
		{
		inset = (FullFrameSet.topbarWidth - FullFrameSet.lugWidth)/2;
		}
	
	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));
	
	v = FullFrameSet.createLuggedLine(documentInterface, addOperation,v,FullFrameSet.topbarWidth-2*inset,FullFrameSet.mountingLugMinSpacing,1,0);

	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));


	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.sidebarWidth)));
	v = FullFrameSet.createTabbedLine(documentInterface, addOperation,v,FullFrameSet.topbarWidth,
			FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,Math.PI);
	
	  if (FullFrameSet.topOpener)
	    	{

	    	var second_root = FullFrameSet.bottombarRoot.operator_add(new RVector(0,-50));

	    	v = FullFrameSet.line(documentInterface, addOperation,second_root,second_root.operator_add(new RVector(0,FullFrameSet.sidebarWidth)));
	    	
	    	if (FullFrameSet.topbarWidth<(2*FullFrameSet.mountingLugInset+FullFrameSet.lugWidth))
	    		{
	    		inset = (FullFrameSet.topbarWidth - FullFrameSet.lugWidth)/2;
	    		}
	    	
	    	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));
	    	
	    	v = FullFrameSet.createLuggedLine(documentInterface, addOperation,v,FullFrameSet.topbarWidth-2*inset,FullFrameSet.mountingLugMinSpacing,1,0);

	    	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));


	    	v = FullFrameSet.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-FullFrameSet.sidebarWidth)));
	    	v = FullFrameSet.createTabbedLine(documentInterface, addOperation,v,FullFrameSet.topbarWidth,
	    			FullFrameSet.weldLugMinSpacing,FullFrameSet.weldLugMaxSpacing,Math.PI);

	    	
	    	
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

FullFrameSet.createText = function(documentInterface, addOperation, pos,text ) {
        var textData = new RTextData();
        textData.setText(text);
        textData.setTextHeight(4);
        textData.setTextWidth(2);
        textData.setPosition(pos);
        textData.move(pos);
        
        var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
        addOperation.addObject(textEntity);
};

FullFrameSet.createBigText = function(documentInterface, addOperation, pos,text ) {
    var textData = new RTextData();
    textData.setText(text);
    textData.setTextHeight(20);
    textData.setTextWidth(10);
    textData.setPosition(pos);
    textData.move(pos);
    
    var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
    addOperation.addObject(textEntity);
};




FullFrameSet.drawPolyLine = function(documentInterface, addOperation, vectors) {

    for ( var i = 0; i < vectors.length-1; i++) {
        var v1 = vectors[i];
        var v2 = vectors[(i + 1)];
        var lineData = new RLineData(v1, v2);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
    	}
};



FullFrameSet.createHole = function(documentInterface, addOperation, pos, diameter) {

	var circleData = new RCircleData(pos,diameter/2);
	var circle = new RCircleEntity(documentInterface.getDocument(), circleData);
    addOperation.addObject(circle);
    return pos;
};


FullFrameSet.createBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= FullFrameSet.bendReliefDiameter;
    var slotWidth = FullFrameSet.bendReliefSlotWidth;
    var slotLength 	= FullFrameSet.bendReliefSlotLength;
    
    
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

FullFrameSet.createVBendRelief = function(documentInterface, addOperation, pos, vorientation,horientation) {
    
    var diameter 	= FullFrameSet.bendReliefDiameter;
    var slotWidth = FullFrameSet.bendReliefSlotWidth;
    var slotLength 	= FullFrameSet.bendReliefSlotLength;
    
    
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



FullFrameSet.createXBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= FullFrameSet.bendReliefDiameter;
    var slotWidth = FullFrameSet.bendReliefSlotWidth;
    var slotLength 	= FullFrameSet.bendReliefSlotLength;
    
    
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


FullFrameSet.createRectangle = function(documentInterface, addOperation, pos, x, y) {
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


FullFrameSet.line = function(documentInterface, addOperation, start,end ) {
        var lineData = new RLineData(start,end);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
        return end;
};

FullFrameSet.createSquare = function(documentInterface, addOperation, pos,x) {
	FullFrameSet.createSquare(documentInterface, addOperation, pos,x,x);
};

FullFrameSet.createRectangleArray = function(documentInterface, addOperation, pos, width, height, count, offset) {
	var tPos = pos;
	for (var i=0;i < count; i++) {
		FullFrameSet.createRectangle(documentInterface, addOperation, tPos, width, height);
		tPos = tPos.operator_add(offset);
	};

};

FullFrameSet.calcHoleCount = function(length, minSpacing,minLugs) {
	return FullFrameSet.calcLugCount(length, minSpacing,minLugs);
};

FullFrameSet.calcLugCount = function(length, minSpacing,minLugs) {

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

FullFrameSet.calculateSpacing = function(minSpacing,maxSpacing,length) {
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

FullFrameSet.createMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset
	var v1 = new RVector(0,0);
	var v2 = new RVector(FullFrameSet.lugWidth/4,FullFrameSet.lugHoleOffset*1.155);
	var v3 = new RVector(3*FullFrameSet.lugWidth/4,FullFrameSet.lugHoleOffset*1.155);
	var v4 = new RVector(FullFrameSet.lugWidth,0);
	var v5 = new RVector(FullFrameSet.lugHoleOffset,FullFrameSet.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(FullFrameSet.lugWidth/2,0));
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
    
 	FullFrameSet.createHole(documentInterface, addOperation, v5, FullFrameSet.lugHoleDiameter);
 
    var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
	return v4; // start point for next object
};


FullFrameSet.createInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

// Y height is 15.5% more than hole centre
// lugWidth, lugHoleDiameter, lugHoleOffset
var v1 = new RVector(0,0);
var v2 = new RVector(FullFrameSet.lugWidth/4,FullFrameSet.lugHoleOffset*1.155);
var v3 = new RVector(3*FullFrameSet.lugWidth/4,FullFrameSet.lugHoleOffset*1.155);
var v4 = new RVector(FullFrameSet.lugWidth,0);
var v5 = new RVector(FullFrameSet.lugHoleOffset,FullFrameSet.lugHoleOffset);

//var root = pos.operator_add(new RVector(FullFrameSet.lugWidth/2,0));
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

	FullFrameSet.createHole(documentInterface, addOperation, v5, FullFrameSet.lugHoleDiameter);

//var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
//var keyHoleData = new RArcData(arc);
//var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);
//
//addOperation.addObject(keyHole);

return v4; // start point for next object
};

FullFrameSet.oldcreateInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset

	var v1 = new RVector(0,0);
	var v4 = new RVector(FullFrameSet.lugWidth,0);
	var v5 = new RVector(FullFrameSet.lugHoleOffset,FullFrameSet.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(FullFrameSet.lugWidth/2,0));
	var root = pos;
	
	v1 = v1.operator_add(root);
	v4 = v4.operator_add(root);
	v5 = v5.operator_add(root);
	
	//No point rotating v1 round itself
	v5 = v5.rotate(angle,v1);	
	
 	FullFrameSet.createHole(documentInterface, addOperation, v5, FullFrameSet.lugHoleDiameter);
 	return v4;
};


FullFrameSet.createLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line

	
	var lugCount = FullFrameSet.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
	
	
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-FullFrameSet.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		var lugStart 		= FullFrameSet.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset));
		var lastLineStart	= FullFrameSet.createMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= FullFrameSet.line(documentInterface, addOperation, lastLineStart, lastLineStart.operator_add(joinerOffset));
		
	} else {

		var l = (length-FullFrameSet.lugWidth)/(lugCount-1)-FullFrameSet.lugWidth;
		
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
		var lineStart = FullFrameSet.createMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = FullFrameSet.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
			lineStart = FullFrameSet.createMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	

		
		lastPoint = lineStart;
	}

		
	return lastPoint;	
};


FullFrameSet.createUnLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	var lugCount = FullFrameSet.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
		
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-FullFrameSet.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		//var lugStart 		= FullFrameSet.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset)); // QQQ is this a bug??
		var lugStart 		= pos.operator_add(joinerOffset); 
		var lastLineStart	= FullFrameSet.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= lastLineStart.operator_add(joinerOffset);
		
	} else {
		
		var l = (length-FullFrameSet.lugWidth)/(lugCount-1)-FullFrameSet.lugWidth;
		
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
		var lineStart = FullFrameSet.createInvisibleMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = lineStart.operator_add(joinerOffset); 
			lineStart = FullFrameSet.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	
		
		lastPoint = lineStart;
	}
		
	return lastPoint;	
};


FullFrameSet.createTabbedLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	// var count = FullFrameSet.calculateSpacing(minSpacing,maxSpacing,length);
	var count = FullFrameSet.calcLugCount(length,minSpacing,3);
	var joinerOffset;
	var lastPoint;
		
	var l = (length-FullFrameSet.weldLugWidth)/count-FullFrameSet.weldLugWidth;
	
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
	var lineStart = FullFrameSet.createWeldLug(documentInterface, addOperation, pos, orientation);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = FullFrameSet.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
		lineStart = FullFrameSet.createWeldLug(documentInterface, addOperation, lugStart, orientation);			
	}	
			
	return lineStart;	
};

FullFrameSet.createHoleLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	
	
	// var count = FullFrameSet.calculateSpacing(minSpacing,maxSpacing,length);
	var count = FullFrameSet.calcLugCount(length,minSpacing,3);
	var joinerOffset;
		
	var l = (length-FullFrameSet.weldLugWidth)/count;
	
	var x,y;
	
	if (orientation == 0) { // if the orientation East/West {
		joinerOffset = new RVector(l,0);
		x = FullFrameSet.weldLugWidth+2*FullFrameSet.weldLugHoleClearance;
		y = FullFrameSet.weldLugHoleWidth+2*FullFrameSet.weldLugHoleClearance;
	} else if (orientation == Math.PI/2) {
		joinerOffset = new RVector(0,l);
		x = FullFrameSet.weldLugHoleWidth+2*FullFrameSet.weldLugHoleClearance;
		y = FullFrameSet.weldLugWidth+2*FullFrameSet.weldLugHoleClearance;
	} else if (orientation == Math.PI) {
		joinerOffset = new RVector(-l,0);
		x = -1*(FullFrameSet.weldLugWidth+2*FullFrameSet.weldLugHoleClearance);
		y = -1*(FullFrameSet.weldLugHoleWidth+2*FullFrameSet.weldLugHoleClearance);
	} else {
		joinerOffset = new RVector(0,-l); // Tested OK
		x = -(FullFrameSet.weldLugHoleWidth+2*FullFrameSet.weldLugHoleClearance);
		y = -(FullFrameSet.weldLugWidth+2*FullFrameSet.weldLugHoleClearance);
	}
	
	// create lug one
	var lugStart;
	var lineStart = FullFrameSet.createRectangle(documentInterface, addOperation, pos, x, y);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = lineStart.operator_add(joinerOffset); 
		lineStart = FullFrameSet.createRectangle(documentInterface, addOperation, lugStart, x, y);			
	}	
			
};


FullFrameSet.createWeldLug  = function (documentInterface, addOperation, pos, orientation) {
	
	v2 = pos.operator_add(new RVector(0,FullFrameSet.weldLugDepth));
	v3 = v2.operator_add(new RVector(FullFrameSet.weldLugWidth,0));
	v4 = v3.operator_add(new RVector(0,-FullFrameSet.weldLugDepth));
	
	v2 = v2.rotate(orientation,pos);
	v3 = v3.rotate(orientation,pos);
	v4 = v4.rotate(orientation,pos);
	
	FullFrameSet.line(documentInterface, addOperation,pos,v2);
	FullFrameSet.line(documentInterface, addOperation,v2,v3);
	FullFrameSet.line(documentInterface, addOperation,v3,v4);
	
	return v4;	
};
