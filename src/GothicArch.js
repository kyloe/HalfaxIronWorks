// FullFrameSet.js
// library.js contains some convenience functions like 'isNull':
// This source is now managed under GIT

include("scripts/library.js");
include("scripts/WidgetFactory.js");	
include("scripts/File/SaveAs/SaveAs.js");

include("scripts/File/SaveAs/SaveAs.js");


//
// Create main object 
//

function GothicArch() {
}

//
// Read widget to get object from which we can extract parameters
//


GothicArch.init = function(formWidget) {
    

    if (!isNull(formWidget)) {
        this.widgets = getWidgets(formWidget);
    }    
    
};



//
// Set requested sizes (default sizes are suitable for ICON generation
//

GothicArch.setValues = function() {

    this.customerName = this.widgets["CustomerName"].text;
    this.finishedWidth = parseFloat(this.widgets["FinishedWidth"].text, 10);
    this.finishedHeight = parseFloat(this.widgets["FinishedHeight"].text, 10);
    this.cutoutHeight = parseFloat(this.widgets["CutoutHeight"].text, 10);
    this.cutoutWidth = parseFloat(this.widgets["CutoutWidth"].text, 10);

    this.frameARelativeWidth = parseFloat(this.widgets["FrameARelativeWidth"].text, 10);
    this.frameARelativeHeight = parseFloat(this.widgets["FrameARelativeHeight"].text, 10);
    this.frameABarWidth = parseFloat(this.widgets["FrameABarWidth"].text, 10);
    this.frameABarHeight = parseFloat(this.widgets["FrameABarHeight"].text, 10);
    this.frameAPlasticHoleSpacing = parseFloat(this.widgets["FrameAPlasticHoleSpacing"].text, 10);

    this.handleRampHoleHeight = parseFloat(this.widgets["HandleRampHoleHeight"].text, 10);
    this.handleRampHoleWidth = parseFloat(this.widgets["HandleRampHoleWidth"].text, 10);
    this.handleRampHoleCentres = parseFloat(this.widgets["HandleRampHoleCentres"].text, 10);
    this.handleRampHoleInset = parseFloat(this.widgets["HandleRampHoleInset"].text, 10);



    this.frameCRelativeWidth = parseFloat(this.widgets["FrameCRelativeWidth"].text, 10);
    this.frameCRelativeHeight = parseFloat(this.widgets["FrameCRelativeHeight"].text, 10);
    this.frameCBarWidth = parseFloat(this.widgets["FrameCBarWidth"].text, 10);
    this.frameCBarHeight = parseFloat(this.widgets["FrameCBarHeight"].text, 10);

    this.frameCHingeHoleWidth = parseFloat(this.widgets["FrameCHingeHoleWidth"].text, 10);
    this.frameCHingeHoleHeight = parseFloat(this.widgets["FrameCHingeHoleHeight"].text, 10);
    this.frameCHingeHoleCentreW = parseFloat(this.widgets["FrameCHingeHoleCentreW"].text, 10);
    this.frameCHingeHoleCentreH = parseFloat(this.widgets["FrameCHingeHoleCentreH"].text, 10);



    this.holeDiameter = parseFloat(this.widgets["HoleDiameter"].text, 10);
 	this.plasticHoleDiameter = parseFloat(this.widgets["PlasticHoleDiameter"].text, 10);
    this.bendReliefDiameter = parseFloat(this.widgets["BendReliefDiameter"].text, 10);
    this.bendReliefSlotWidth = parseFloat(this.widgets["BendReliefSlotWidth"].text, 10);
    this.bendReliefSlotLength = parseFloat(this.widgets["BendReliefSlotLength"].text, 10);

    this.lugWidth = parseFloat(this.widgets["LugWidth"].text, 10);
    this.lugHoleOffset = parseFloat(this.widgets["LugHoleOffset"].text, 10);
    this.lugHoleDiameter = parseFloat(this.widgets["LugHoleDiameter"].text, 10);
    this.mountingLugInset = parseFloat(this.widgets["MountingLugInset"].text, 10);
    this.mountingLugMinSpacing = parseFloat(this.widgets["MountingLugMinSpacing"].text, 10);
    this.mountingLugMaxSpacing = parseFloat(this.widgets["MountingLugMaxSpacing"].text, 10);

    this.sidebarWidth = parseFloat(this.widgets["SidebarWidth"].text, 10);
    this.sidebarRelativeHeight = parseFloat(this.widgets["SidebarRelativeHeight"].text, 10);
    this.sidebarSealHoleSpacing = parseFloat(this.widgets["SidebarSealHoleSpacing"].text, 10);
    this.sidebarSealHoleDiameter = parseFloat(this.widgets["SidebarSealHoleDiameter"].text, 10);

    this.weldLugWidth = parseFloat(this.widgets["WeldLugWidth"].text, 10);
    this.weldLugDepth = parseFloat(this.widgets["WeldLugDepth"].text, 10);
    this.weldLugInset = parseFloat(this.widgets["WeldLugInset"].text, 10);
    this.weldLugMinSpacing = parseFloat(this.widgets["WeldLugMinSpacing"].text, 10);
    this.weldLugMaxSpacing = parseFloat(this.widgets["WeldLugMaxSpacing"].text, 10);
    this.weldLugHoleWidth = parseFloat(this.widgets["WeldLugHoleWidth"].text, 10);
    this.weldLugHoleClearance = parseFloat(this.widgets["WeldLugHoleClearance"].text, 10);

    this.topbarBarWidth = parseFloat(this.widgets["TopBarWidth"].text, 10);
    this.topbarRelativeWidth = parseFloat(this.widgets["TopBarRelativeWidth"].text, 10);
    this.handleRampHolePosition = parseFloat(this.widgets["HandleRampHolePosition"].text, 10);
    this.includeRampHandle = this.widgets["IncludeRampHandle"].checked;

	this.setDerivedValues();

};

//
// Set default sizes (default sizes are suitable for ICON generation
//

GothicArch.setDefaults = function() {

    this.finishedWidth = 50;
    this.finishedHeight = 50;
    this.cutoutWidth = 5;
    this.cutoutHeight = 5;
    this.frameABarWidth = 3;
    this.frameABarHeight = 3;
    this.frameARelativeHeight = 3;
    this.frameARelativeWidth = 3;
    this.frameCBarWidth = 3;
    this.frameCBarHeight = 3;
    this.frameCRelativeHeight = 3;
    this.frameCRelativeWidth = 3;

    this.frameCHingeHoleWidth = 1;
    this.frameCHingeHoleHeight = 1;
    this.frameCHingeHoleCentreW = 1;
    this.frameCHingeHoleCentreH = 1;


    this.holeDiameter = 1;
    this.plasticHoleDiameter = 1;
    this.handleRampHoleHeight = 1;
    this.handleRampHoleWidth = 1;
    this.handleRampHoleCentres = 1;
    this.handleRampHoleInset = 1;


    this.bendReliefDiameter = 5;
    this.bendReliefSlotWidth = 5;
    this.bendReliefSlotLength = 20;
    this.lugWidth = 0.5
    this.lugHoleOffset = 0.3;
    this.lugHoleDiameter = 0.1;
    this.sidebarWidth = .1;
    this.sidebarRelativeHeight = .1;
    this.weldLugWidth = .1;
    this.weldLugDepth = .1;
    this.mountingLugInset = .1;
    this.weldLugInset = .1;
    this.weldLugMinSpacing = .1;
    this.weldLugMaxSpacing = .1;
    this.mountingLugMinSpacing = .1;
    this.mountingLugMaxSpacing = .1;
    this.weldLugHoleWidth = .1;
    this.weldLugHoleClearance = .1;
	this.topbarWidth = .1;
	this.topbarRelativeWidth = .1;
	this.frameAPlasticHoleSpacing = 1;
	this.sidebarSealHoleSpacing = 3;
 
	this.setDerivedValues();

};

GothicArch.setDerivedValues = function (){

    this.frameAWidth = this.finishedWidth+this.frameARelativeWidth;
    this.frameAHeight = this.finishedHeight+this.frameARelativeHeight;
    this.frameARoot = new RVector(0,(this.finishedHeight-this.frameARelativeHeight)/2);

    this.frameCWidth = this.finishedWidth+this.frameCRelativeWidth;
    this.frameCHeight = this.finishedHeight+this.frameCRelativeHeight;
    this.frameCRoot = new RVector(-1.2*this.finishedWidth,(this.finishedHeight-this.frameCRelativeHeight)/2);
	
    this.sidebarHeight = this.finishedHeight+this.sidebarRelativeHeight;
    this.sidebarRoot = new RVector(-1.5*this.finishedWidth,(this.finishedHeight-this.sidebarRelativeHeight)/2);

    this.topbarRoot = new RVector(this.frameCRoot.getX()+(this.frameCWidth-this.topbarWidth)/2,this.frameCHeight*1.6);
	


    this.topbarWidth = this.finishedWidth+this.topbarRelativeWidth;
    this.bottombarRoot = new RVector(this.frameCRoot.getX()+(this.frameCWidth-this.topbarWidth)/2,this.frameCHeight*0.2	);

};
//
// Main function to generate the frames
//

GothicArch.generate = function(documentInterface, file) {

    this.setValues();
    return this.create(documentInterface);
};

//
// Function to generate the frames icon
//


GothicArch.generatePreview = function(documentInterface, iconSize) {
    this.setDefaults();
    return this.createIcon(documentInterface);

};


//
// Plot each of main elements and autosave the file
//

GothicArch.create = function(documentInterface) {
        
var addLayerOperation = new RAddObjectsOperation(false);
        
var addOperation = new RAddObjectsOperation(false);

var layer = new RLayer(documentInterface.getDocument(), "Laser Cutting",false,false,
                        documentInterface.getCurrentColor(),
                        documentInterface.getCurrentLinetypeId(),
                        documentInterface.getCurrentLineweight() );
                        
addLayerOperation.addObject(layer);

var layer2 = new RLayer(documentInterface.getDocument(), "Dimensions",false,false,
                        documentInterface.getCurrentColor(),
                        documentInterface.getCurrentLinetypeId(),
                        documentInterface.getCurrentLineweight() );
                        
addLayerOperation.addObject(layer2);

var layer3 = new RLayer(documentInterface.getDocument(), "Labels",false,false,
                        documentInterface.getCurrentColor(),
                        documentInterface.getCurrentLinetypeId(),
                        documentInterface.getCurrentLineweight() );
                        
addLayerOperation.addObject(layer3);

var layer4 = new RLayer(documentInterface.getDocument(), "Etching",false,false,
                        documentInterface.getCurrentColor(),
                        documentInterface.getCurrentLinetypeId(),
                        documentInterface.getCurrentLineweight() );
                        
addLayerOperation.addObject(layer4);


addLayerOperation.apply(documentInterface.getDocument());

documentInterface.setCurrentLayer("Laser Cutting");	
	
    this.createFrameA(documentInterface, addOperation);
// 	this.createFrameC(documentInterface, addOperation);
//	this.createSidebar(documentInterface, addOperation);
//	this.createTopbar(documentInterface, addOperation);
//   this.createBottombar(documentInterface, addOperation);
    this.commentBox(documentInterface, addOperation);
    
//    var saveAsAction = new SaveAs();
//    saveAsAction.save(this.customerName+"_W_"+this.finishedWidth+"_x_H_"+this.finishedHeight+".dxf","R27",false);    

    return addOperation;
};


GothicArch.createIcon = function(documentInterface) {
    	
	var addOperation = new RAddObjectsOperation(false);    
           
    this.createRectangle(documentInterface, addOperation,new RVector(0,0),10,12);
    this.createRectangle(documentInterface, addOperation,new RVector(1,1),8,10);
	this.createText(documentInterface, addOperation,new RVector(0,0),"HX");
	this.createText(documentInterface, addOperation,new RVector(3,7),"09");
	
	return addOperation;
};

//********************************************************************************************************************
//
//  Comments box
//
//********************************************************************************************************************


GothicArch.commentBox = function(documentInterface, addOperation) {

    documentInterface.setCurrentLayer("Labels"); 

    this.createRectangle(documentInterface, addOperation,new RVector(0,0),120,40);
    this.createText(documentInterface, addOperation,new RVector(5,30),this.customerName);
    this.createText(documentInterface, addOperation,new RVector(5,20),"Dimensions (WxH)");
    this.createText(documentInterface, addOperation,new RVector(5,10),this.finishedWidth+"x"+this.finishedHeight);
    

    return addOperation;
};


//********************************************************************************************************************
//
//   Frame A
//
//********************************************************************************************************************

GothicArch.createFrameA = function(documentInterface, addOperation) {
	this.createFrameAOutline(documentInterface, addOperation);
	this.createFrameAInner(documentInterface, addOperation);	
	this.drillFrameAHoles(documentInterface, addOperation);
	this.drillPlasticHoles(documentInterface, addOperation);

    if (this.includeRampHandle)
        {
        this.drillFrameAHandleRampHolesVariablePosition(documentInterface, addOperation,this.handleRampHolePosition);
	    }

	return addOperation;
};


GothicArch.createFrameAOutline = function(documentInterface, addOperation) {
	
	var width 			= this.frameAWidth;
	var height 			= this.frameAHeight;
	var cutoutWidth 	= this.cutoutWidth;
	var cutoutHeight 	= this.cutoutHeight;
	
    var va = new Array(
            this.frameARoot.operator_add(new RVector(cutoutWidth-this.bendReliefSlotWidth,cutoutHeight)),
            this.frameARoot.operator_add(new RVector(0, cutoutHeight)),
            this.frameARoot.operator_add(new RVector(0, height-cutoutHeight)),
            this.frameARoot.operator_add(new RVector(cutoutWidth-this.bendReliefSlotWidth, height-cutoutHeight))
   );

	this.drawPolyLine(documentInterface, addOperation, va);

    var va2 = new Array(
            this.frameARoot.operator_add(new RVector(cutoutWidth, height-cutoutHeight)),
            this.frameARoot.operator_add(new RVector(cutoutWidth, height)),
            this.frameARoot.operator_add(new RVector(width-cutoutWidth,height)),
            this.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight))
     );

	this.drawPolyLine(documentInterface, addOperation, va2);

    var va3 = new Array(
           this.frameARoot.operator_add(new RVector(width-cutoutWidth+this.bendReliefSlotWidth,height-cutoutHeight)),
            this.frameARoot.operator_add(new RVector(width,height-cutoutHeight)),
            this.frameARoot.operator_add(new RVector(width,cutoutHeight)),
            this.frameARoot.operator_add(new RVector(width-cutoutWidth+this.bendReliefSlotWidth,cutoutHeight))
    );

	this.drawPolyLine(documentInterface, addOperation, va3);

    var va4 = new Array(
            this.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),
            this.frameARoot.operator_add(new RVector(width-cutoutWidth,0)),
            this.frameARoot.operator_add(new RVector(cutoutWidth,0)),
            this.frameARoot.operator_add(new RVector(cutoutWidth,cutoutHeight))
    );

	this.drawPolyLine(documentInterface, addOperation, va4);

	// Now insert the bend reliefs
	
	this.createVBendRelief(documentInterface, addOperation,this.frameARoot.operator_add(new RVector(cutoutWidth-this.bendReliefSlotWidth,cutoutHeight)),1,1);
	this.createVBendRelief(documentInterface, addOperation,this.frameARoot.operator_add(new RVector(cutoutWidth-this.bendReliefSlotWidth, height-cutoutHeight)),-1,1);
	this.createVBendRelief(documentInterface, addOperation,this.frameARoot.operator_add(new RVector(width-cutoutWidth,height-cutoutHeight)),-1,-1);
	this.createVBendRelief(documentInterface, addOperation,this.frameARoot.operator_add(new RVector(width-cutoutWidth,cutoutHeight)),1,-1);

};


GothicArch.createFrameAInner = function(documentInterface, addOperation) {
	
	var width 			= this.frameAWidth-2*this.frameABarWidth;
	var height 			= this.frameAHeight-2*this.frameABarHeight;
	var widthOffset     = this.frameABarWidth;
	var heightOffset    = this.frameABarHeight;
	
	
    this.createRectangle(documentInterface, addOperation,this.frameARoot.operator_add(new RVector(widthOffset,heightOffset)),width,height);

};

GothicArch.drillFrameAHoles = function(documentInterface, addOperation) {
	
	this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+11,this.frameAHeight-5.5)), this.holeDiameter);
	this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+26,this.frameAHeight-11.5)), this.holeDiameter);
	this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+41,this.frameAHeight-5.5)), this.holeDiameter);

	this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+11,5.5)), this.holeDiameter);
	this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+26,11.5)), this.holeDiameter);
	this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+41,5.5)), this.holeDiameter);

};

// Drill v holes 

GothicArch.drillPlasticHoles = function(documentInterface, addOperation) {

	var length = this.frameAHeight-2*(this.frameABarHeight+3);
		
	// var s = Math.ceil(length/this.frameAPlasticHoleSpacing);
	var s = this.calcHoleCount(length,this.frameAPlasticHoleSpacing,3);
	spacing = length/(s-1);

	var v = this.createHole(documentInterface, 
							addOperation, 
							this.frameARoot.operator_add(new RVector(5,this.frameABarHeight+3)), 
							this.plasticHoleDiameter);

	var v2 = this.createHole(documentInterface, 
							addOperation, 
							this.frameARoot.operator_add(new RVector(this.frameAWidth-5,this.frameABarHeight+3)), 
							this.plasticHoleDiameter);
	s--;
	
	for (var i = 1; i <= s; i++) {
		v = this.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								this.plasticHoleDiameter);
		v2 = this.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								this.plasticHoleDiameter);
	}
	
	
	//this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+11,this.frameAHeight-5.5)), 99);

// 

	var width = this.frameAWidth-(this.frameABarWidth+38)-(this.frameABarWidth+3) ;
		
	//s = Math.ceil(width/this.frameAPlasticHoleSpacing);
	s = this.calcHoleCount(width,this.frameAPlasticHoleSpacing,3);
	spacing = width/(s-1);

	var v3 = this.createHole(documentInterface, 
							addOperation, 
							this.frameARoot.operator_add(new RVector(this.frameABarWidth+38,5)), 
							this.plasticHoleDiameter);

	var v4 = this.createHole(documentInterface, 
							addOperation, 
							this.frameARoot.operator_add(new RVector(this.frameABarWidth+38,this.frameAHeight-5)), 
							this.plasticHoleDiameter);

	s--;
	
	for (var i = 1; i <= s; i++) {
		v3 = this.createHole(documentInterface, 
								addOperation, 
								v3.operator_add(new RVector(spacing,0)), 
								this.plasticHoleDiameter);
		v4 = this.createHole(documentInterface, 
								addOperation, 
								v4.operator_add(new RVector(spacing,0)), 
								this.plasticHoleDiameter);
	}
	
	
	//this.createHole(documentInterface, addOperation, this.frameARoot.operator_add(new RVector(this.cutoutWidth+11,this.frameAHeight-5.5)), 99);




};


GothicArch.drillFrameAHandleRampHoles = function(documentInterface, addOperation) {
	
	
    this.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	this.frameARoot.operator_add(
    		new RVector(	this.frameAWidth - this.frameABarWidth+this.handleRampHoleInset,
    						this.frameAHeight/2-this.handleRampHoleCentres/2-this.handleRampHoleHeight/2-this.weldLugHoleClearance)),
    
    	this.handleRampHoleWidth+2*this.weldLugHoleClearance,
    	this.handleRampHoleHeight+2*this.weldLugHoleClearance);
    
    
    this.createRectangle(
    	documentInterface, 
    	addOperation,
    	this.frameARoot.operator_add(
    		new RVector(	this.frameAWidth - this.frameABarWidth+this.handleRampHoleInset,
    						this.frameAHeight/2+this.handleRampHoleCentres/2-this.handleRampHoleHeight/2-this.weldLugHoleClearance)),
    	this.handleRampHoleWidth+2*this.weldLugHoleClearance,
    	this.handleRampHoleHeight+2*this.weldLugHoleClearance);
    


};

GothicArch.drillFrameAHandleRampHolesVariablePosition = function(documentInterface, addOperation, fraction) {
	
	
    this.createRectangle
    	(
    	documentInterface, 
    	addOperation,
    
    	this.frameARoot.operator_add(
    		new RVector(	this.frameAWidth - this.frameABarWidth+this.handleRampHoleInset,
    						((this.frameAHeight-24)*fraction)+12-this.handleRampHoleCentres/2-this.handleRampHoleHeight/2-this.weldLugHoleClearance)),
    
    	this.handleRampHoleWidth+2*this.weldLugHoleClearance,
    	this.handleRampHoleHeight+2*this.weldLugHoleClearance);
    
    
    this.createRectangle(
    	documentInterface, 
    	addOperation,
    	this.frameARoot.operator_add(
    		new RVector(	this.frameAWidth - this.frameABarWidth+this.handleRampHoleInset,
    						((this.frameAHeight-24)*fraction)+12+this.handleRampHoleCentres/2-this.handleRampHoleHeight/2-this.weldLugHoleClearance)),
    	this.handleRampHoleWidth+2*this.weldLugHoleClearance,
    	this.handleRampHoleHeight+2*this.weldLugHoleClearance);
    


};



//********************************************************************************************************************
//
// Frame C
//
//********************************************************************************************************************


GothicArch.createFrameC = function(documentInterface, addOperation) {
	this.createFrameCOutline(documentInterface, addOperation);
	this.drillFrameCHoles(documentInterface, addOperation);
	this.createFrameCHingeHoles(documentInterface, addOperation);
};

GothicArch.createFrameCOutline = function(documentInterface, addOperation) {
	
	var width 			= this.frameCWidth;
	var height 			= this.frameCHeight;
	
	this.createRectangle(documentInterface, addOperation,this.frameCRoot,width,height);
	this.createRectangle(documentInterface, addOperation,
								 this.frameCRoot.operator_add(new RVector(this.frameCBarWidth,this.frameCBarHeight)),
								 width-2*this.frameCBarWidth,
								 height-2*this.frameCBarHeight);
	
};


// Create hinge holes

GothicArch.createFrameCHingeHoles = function(documentInterface, addOperation) {

    this.createRectangle(
    	documentInterface, 
    	addOperation,
    	this.frameCRoot.operator_add(
    		new RVector(this.frameCHingeHoleCentreW-this.frameCHingeHoleWidth/2-this.weldLugHoleClearance,
    						this.frameCHingeHoleCentreH-this.frameCHingeHoleHeight/2-this.weldLugHoleClearance)),
    	this.frameCHingeHoleWidth+2*this.weldLugHoleClearance,
    	this.frameCHingeHoleHeight+2*this.weldLugHoleClearance);
    	
      this.createRectangle(
    	documentInterface, 
    	addOperation,
    	this.frameCRoot.operator_add(
    		new RVector(this.frameCHingeHoleCentreW-this.frameCHingeHoleWidth/2-this.weldLugHoleClearance,
    						this.frameCHeight-this.frameCHingeHoleCentreH-this.frameCHingeHoleHeight/2-this.weldLugHoleClearance)),
    	this.frameCHingeHoleWidth+2*this.weldLugHoleClearance,
    	this.frameCHingeHoleHeight+2*this.weldLugHoleClearance);
    	
    	
  
};

GothicArch.drillFrameCHoles = function(documentInterface, addOperation) {
	
	//var count = this.calculateSpacing(50,100,this.frameCWidth-this.frameCBarWidth);
	//var spacing = (this.frameCWidth-this.frameCBarWidth)/count;
	
	//this.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*this.frameCWidth+this.frameCBarWidth/2,this.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//this.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*this.frameCWidth+this.frameCBarWidth/2,this.frameCHeight-this.frameCBarHeight/2), 20, 10, 6, new RVector(80,0));	
	//this.createRectangleArray(documentInterface, addOperation, new RVector(-1.5*this.frameCWidth+this.frameCBarWidth/2,this.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	//this.createRectangleArray(documentInterface, addOperation, new RVector(-0.5*this.frameCWidth-this.frameCBarWidth/2,this.frameCBarHeight/2+87), 10, 20, 9, new RVector(0,87));	
	
	};

//********************************************************************************************************************
//
// Sidebars
//
//********************************************************************************************************************

GothicArch.createSidebar = function(documentInterface, addOperation) {
	var v;
	
	sidebarHeight = this.sidebarHeight;
	
	v = this.line(documentInterface, addOperation,this.sidebarRoot,this.sidebarRoot.operator_add(new RVector(-1*this.sidebarWidth,0)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,this.mountingLugInset)));
	v = this.createLuggedLine(documentInterface, addOperation,v,sidebarHeight-2*this.mountingLugInset,this.mountingLugMinSpacing,2,Math.PI/2);
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,this.mountingLugInset)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(this.sidebarWidth,0)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-this.weldLugInset)));	

	    this.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		this.frameCRoot.getX()+this.frameCBarWidth/2+this.weldLugHoleWidth/2+this.weldLugHoleClearance,
	    		v.getY()+this.weldLugHoleClearance),
	    	sidebarHeight-2*this.weldLugInset,
	    	this.weldLugMinSpacing,this.weldLugMaxSpacing,
	    	3*Math.PI/2);

	    this.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		this.frameCRoot.getX()+this.frameCWidth-this.frameCBarWidth/2+this.weldLugHoleWidth/2+this.weldLugHoleClearance	,
	    		v.getY()+this.weldLugHoleClearance),
	    	sidebarHeight-2*this.weldLugInset,
	    	this.weldLugMinSpacing,this.weldLugMaxSpacing,
	    	3*Math.PI/2);

	v = this.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*this.weldLugInset,this.weldLugMinSpacing,this.weldLugMaxSpacing,3*Math.PI/2);


	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-this.weldLugInset)));	 

	// Make a clone of the bar a bit to the left

	var newRoot = this.sidebarRoot.operator_add(new RVector(-4*this.sidebarWidth,0));

	v = this.line(documentInterface, addOperation,newRoot,newRoot.operator_add(new RVector(-1*this.sidebarWidth,0)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,this.mountingLugInset)));
	v = this.createLuggedLine(documentInterface, addOperation,v,sidebarHeight-2*this.mountingLugInset,this.mountingLugMinSpacing,2,Math.PI/2);
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,this.mountingLugInset)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(this.sidebarWidth,0)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-this.weldLugInset)));	
	v = this.createTabbedLine(documentInterface, addOperation,v,sidebarHeight-2*this.weldLugInset,this.weldLugMinSpacing,this.weldLugMaxSpacing,3*Math.PI/2);
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-this.weldLugInset)));	


// Create seal holes -4*this

	var length = this.sidebarHeight-2*20;
		
	// var s = Math.ceil(length/this.sidebarSealHoleSpacing);
	
	var s = this.calcHoleCount(length,this.sidebarSealHoleSpacing,3);
	
	
	spacing = length/(s-1);

	var v = this.createHole(documentInterface, 
							addOperation, 
							this.sidebarRoot.operator_add(new RVector(-this.sidebarWidth/2,20)), 
							this.sidebarSealHoleDiameter);

	var v2 = this.createHole(documentInterface, 
							addOperation, 
							this.sidebarRoot.operator_add(new RVector( -4*this.sidebarWidth-this.sidebarWidth/2,20)), 
							this.sidebarSealHoleDiameter);

	s--; // to allow for one we just did
	
	for (var i = 1; i <= s; i++) {
		v = this.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(0,spacing)), 
								this.sidebarSealHoleDiameter);
		v2 = this.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(0,spacing)), 
								this.sidebarSealHoleDiameter);
	}





};

//********************************************************************************************************************
//
// Top bar	
//
//********************************************************************************************************************

GothicArch.createTopbar = function(documentInterface, addOperation) {

	var v;
	v = this.line(documentInterface, addOperation,this.topbarRoot,this.topbarRoot.operator_add(new RVector(0,this.topbarBarWidth)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(this.topbarWidth,0)));
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-this.topbarBarWidth)));

	    this.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		v.getX()+this.weldLugHoleClearance,
	    		this.frameCRoot.getY()+this.frameCBarWidth/2+this.weldLugHoleWidth/2+this.weldLugHoleClearance),
	    	this.topbarWidth,
	    	this.weldLugMinSpacing,this.weldLugMaxSpacing,
	    	Math.PI);

	    this.createHoleLine(documentInterface, addOperation,
	    	new RVector(
	    		v.getX()+this.weldLugHoleClearance,
	    		this.frameCRoot.getY()+this.frameCHeight - this.frameCBarWidth/2+this.weldLugHoleWidth/2+this.weldLugHoleClearance),
	    	this.topbarWidth,
	    	this.weldLugMinSpacing,this.weldLugMaxSpacing,
	    	Math.PI);


	v = this.createTabbedLine(documentInterface, addOperation,v,this.topbarWidth,this.weldLugMinSpacing,this.weldLugMaxSpacing,Math.PI);

// Create holes to match bottom lugged line

	var inset = this.mountingLugInset;
	
	var	imaginaryP = this.topbarRoot.operator_add(new RVector(0,this.sidebarWidth));
	
	if (this.topbarWidth<(2*this.mountingLugInset+this.lugWidth))
		{
		inset = (this.topbarWidth - this.lugWidth)/2;
		}

	this.createUnLuggedLine(documentInterface, addOperation,imaginaryP.operator_add(new RVector(inset,0)),this.topbarWidth-2*inset,this.mountingLugMinSpacing,1,0);


// Create seal holes -4*this

	var width = this.topbarWidth-2*20;
		
	//var s = Math.ceil(width/this.sidebarSealHoleSpacing);
	
	var s = this.calcHoleCount(width,this.sidebarSealHoleSpacing,3);
	
	spacing = width/(s-1);

	var v = this.createHole(documentInterface, 
							addOperation, 
							this.topbarRoot.operator_add(new RVector(20,15/2)), 
							this.sidebarSealHoleDiameter);

	var v2 = this.createHole(documentInterface, 
							addOperation, 
							this.bottombarRoot.operator_add(new RVector(20,15/2)), 
							this.sidebarSealHoleDiameter);

	s--; // to allow for the one we just made
	
	
	for (var i = 1; i <= s; i++) {
		v = this.createHole(documentInterface, 
								addOperation, 
								v.operator_add(new RVector(spacing,0)), 
								this.sidebarSealHoleDiameter);
		v2 = this.createHole(documentInterface, 
								addOperation, 
								v2.operator_add(new RVector(spacing,0)), 
								this.sidebarSealHoleDiameter);
	}	
};

//********************************************************************************************************************
//
// Bottom bar	
//
//********************************************************************************************************************

GothicArch.createBottombar = function(documentInterface, addOperation) {

	var v;

	v = this.line(documentInterface, addOperation,this.bottombarRoot,this.bottombarRoot.operator_add(new RVector(0,this.sidebarWidth)));
	
	var inset = this.mountingLugInset;

	
	if (this.topbarWidth<(2*this.mountingLugInset+this.lugWidth))
		{
		inset = (this.topbarWidth - this.lugWidth)/2;
		}
	
	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));
	
	v = this.createLuggedLine(documentInterface, addOperation,v,this.topbarWidth-2*inset,this.mountingLugMinSpacing,1,0);

	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(inset,0)));


	v = this.line(documentInterface, addOperation,v,v.operator_add(new RVector(0,-this.sidebarWidth)));
	v = this.createTabbedLine(documentInterface, addOperation,v,this.topbarWidth,this.weldLugMinSpacing,this.weldLugMaxSpacing,Math.PI);
	
};




//********************************************************************************************************************
//
// Utilities
//
//********************************************************************************************************************

//********************************************************************************************************************
// Plot Text
//********************************************************************************************************************

GothicArch.createText = function(documentInterface, addOperation, pos,text ) {
        var textData = new RTextData();
        textData.setText(text);
        textData.setTextHeight(4);
        textData.setTextWidth(2);
        textData.setPosition(pos);
        textData.move(pos);
        
        var textEntity = new RTextEntity(documentInterface.getDocument(), textData);
        addOperation.addObject(textEntity);
};

GothicArch.drawPolyLine = function(documentInterface, addOperation, vectors) {

    for ( var i = 0; i < vectors.length-1; i++) {
        var v1 = vectors[i];
        var v2 = vectors[(i + 1)];
        var lineData = new RLineData(v1, v2);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
    	}
};



GothicArch.createHole = function(documentInterface, addOperation, pos, diameter) {

	var circleData = new RCircleData(pos,diameter/2);
	var circle = new RCircleEntity(documentInterface.getDocument(), circleData);
    addOperation.addObject(circle);
    return pos;
};


GothicArch.createBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= this.bendReliefDiameter;
    var slotWidth = this.bendReliefSlotWidth;
    var slotLength 	= this.bendReliefSlotLength;
    
    
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

GothicArch.createVBendRelief = function(documentInterface, addOperation, pos, vorientation,horientation) {
    
    var diameter 	= this.bendReliefDiameter;
    var slotWidth = this.bendReliefSlotWidth;
    var slotLength 	= this.bendReliefSlotLength;
    
    
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



GothicArch.createXBendRelief = function(documentInterface, addOperation, pos, orientation) {
    
    
    var diameter 	= this.bendReliefDiameter;
    var slotWidth = this.bendReliefSlotWidth;
    var slotLength 	= this.bendReliefSlotLength;
    
    
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


GothicArch.createRectangle = function(documentInterface, addOperation, pos, x, y) {
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
        
        line.setLayerId(documentInterface.getDocument().getLayerId("WindowLayer"));
        
        addOperation.addObject(line, false);
    }
    
    return v2;
};


GothicArch.line = function(documentInterface, addOperation, start,end ) {
        var lineData = new RLineData(start,end);
        var line = new RLineEntity(documentInterface.getDocument(), lineData);
        addOperation.addObject(line);
        return end;
};

GothicArch.createSquare = function(documentInterface, addOperation, pos,x) {
	this.createSquare(documentInterface, addOperation, pos,x,x);
};

GothicArch.createRectangleArray = function(documentInterface, addOperation, pos, width, height, count, offset) {
	var tPos = pos;
	for (var i=0;i < count; i++) {
		this.createRectangle(documentInterface, addOperation, tPos, width, height);
		tPos = tPos.operator_add(offset);
	};

};

GothicArch.calcHoleCount = function(length, minSpacing,minLugs) {
	return this.calcLugCount(length, minSpacing,minLugs);
};

GothicArch.calcLugCount = function(length, minSpacing,minLugs) {

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

GothicArch.calculateSpacing = function(minSpacing,maxSpacing,length) {
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

GothicArch.createMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset
	var v1 = new RVector(0,0);
	var v2 = new RVector(this.lugWidth/4,this.lugHoleOffset*1.155);
	var v3 = new RVector(3*this.lugWidth/4,this.lugHoleOffset*1.155);
	var v4 = new RVector(this.lugWidth,0);
	var v5 = new RVector(this.lugHoleOffset,this.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(this.lugWidth/2,0));
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
    
 	this.createHole(documentInterface, addOperation, v5, this.lugHoleDiameter);
 
    var arc = RArc.createFrom2PBulge( v2, v3, -0.89 );
	var keyHoleData = new RArcData(arc);
	var keyHole = new RArcEntity(documentInterface.getDocument(), keyHoleData);

    addOperation.addObject(keyHole);
    
	return v4; // start point for next object
};

GothicArch.createInvisibleMountingLug = function (documentInterface, addOperation, pos, angle) {

	// Y height is 15.5% more than hole centre
	// lugWidth, lugHoleDiameter, lugHoleOffset

	var v1 = new RVector(0,0);
	var v4 = new RVector(this.lugWidth,0);
	var v5 = new RVector(this.lugHoleOffset,this.lugHoleOffset);
	
	//var root = pos.operator_add(new RVector(this.lugWidth/2,0));
	var root = pos;
	
	v1 = v1.operator_add(root);
	v4 = v4.operator_add(root);
	v5 = v5.operator_add(root);
	
	//No point rotating v1 round itself
	v5 = v5.rotate(angle,v1);	
	
 	this.createHole(documentInterface, addOperation, v5, this.lugHoleDiameter);
 	return v4;
};


GothicArch.createLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line

	
	var lugCount = this.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
	
	
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-this.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		var lugStart 		= this.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset));
		var lastLineStart	= this.createMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= this.line(documentInterface, addOperation, lastLineStart, lastLineStart.operator_add(joinerOffset));
		
	} else {

		var l = (length-this.lugWidth)/(lugCount-1)-this.lugWidth;
		
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
		var lineStart = this.createMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = this.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
			lineStart = this.createMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	

		
		lastPoint = lineStart;
	}

		
	return lastPoint;	
};


GothicArch.createUnLuggedLine  = function (documentInterface, addOperation, pos, length, minSpacing, minObjects, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	var lugCount = this.calcLugCount(length,minSpacing,minObjects);
	
	var joinerOffset;
	var lastPoint;
		
	if (lugCount == 1) {
	
		// Special case - centre the lug
		var l = length/2-this.lugWidth/2

		if (orientation == 0) { // if the orientation East/West {
			joinerOffset = new RVector(l,0);
		} else if (orientation == Math.PI/2) {
			joinerOffset = new RVector(0,l);
		} else if (orientation == Math.PI) {
			joinerOffset = new RVector(-l,0);
		} else {
			joinerOffset = new RVector(0,-l);
		}

		//var lugStart 		= this.line(documentInterface, addOperation, pos, pos.operator_add(joinerOffset)); // QQQ is this a bug??
		var lugStart 		= pos.operator_add(joinerOffset); 
		var lastLineStart	= this.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);
		
		lastPoint 		= lastLineStart.operator_add(joinerOffset);
		
	} else {
		
		var l = (length-this.lugWidth)/(lugCount-1)-this.lugWidth;
		
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
		var lineStart = this.createInvisibleMountingLug(documentInterface, addOperation, pos, orientation);
		
		for (var i=0;i<lugCount-1;i++) {
			// plot lugs and joining lines
			lugStart = lineStart.operator_add(joinerOffset); 
			lineStart = this.createInvisibleMountingLug(documentInterface, addOperation, lugStart, orientation);		
		}	
		
		lastPoint = lineStart;
	}
		
	return lastPoint;	
};


GothicArch.createTabbedLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	// var count = this.calculateSpacing(minSpacing,maxSpacing,length);
	var count = this.calcLugCount(length,minSpacing,3);
	var joinerOffset;
	var lastPoint;
		
	var l = (length-this.weldLugWidth)/count-this.weldLugWidth;
	
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
	var lineStart = this.createWeldLug(documentInterface, addOperation, pos, orientation);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = this.line(documentInterface, addOperation, lineStart,lineStart.operator_add(joinerOffset)); 
		lineStart = this.createWeldLug(documentInterface, addOperation, lugStart, orientation);			
	}	
			
	return lineStart;	
};

GothicArch.createHoleLine  = function (documentInterface, addOperation, pos, length, minSpacing, maxSpacing, orientation) {
	
	// Math.PI/2 = Lugs West
	// Math.PI = Lugs South
	// 3*Math.PI/2 = Lugs East
	// 0 = Lugs North
	
	// Calculate the number of lugs
	
	// based on orientation - work out what the far end of the line is
	
	// For each lug
	// plot lug and if not last lug - join with a line
	
	
	
	// var count = this.calculateSpacing(minSpacing,maxSpacing,length);
	var count = this.calcLugCount(length,minSpacing,3);
	var joinerOffset;
		
	var l = (length-this.weldLugWidth)/count;
	
	var x,y;
	
	if (orientation == 0) { // if the orientation East/West {
		joinerOffset = new RVector(l,0);
		x = this.weldLugWidth+2*this.weldLugHoleClearance;
		y = this.weldLugHoleWidth+2*this.weldLugHoleClearance;
	} else if (orientation == Math.PI/2) {
		joinerOffset = new RVector(0,l);
		x = this.weldLugHoleWidth+2*this.weldLugHoleClearance;
		y = this.weldLugWidth+2*this.weldLugHoleClearance;
	} else if (orientation == Math.PI) {
		joinerOffset = new RVector(-l,0);
		x = -1*(this.weldLugWidth+2*this.weldLugHoleClearance);
		y = -1*(this.weldLugHoleWidth+2*this.weldLugHoleClearance);
	} else {
		joinerOffset = new RVector(0,-l); // Tested OK
		x = -(this.weldLugHoleWidth+2*this.weldLugHoleClearance);
		y = -(this.weldLugWidth+2*this.weldLugHoleClearance);
	}
	
	// create lug one
	var lugStart;
	var lineStart = this.createRectangle(documentInterface, addOperation, pos, x, y);
	
	for (var i=0;i<count;i++) {
		// plot lugs and joining lines
		lugStart = lineStart.operator_add(joinerOffset); 
		lineStart = this.createRectangle(documentInterface, addOperation, lugStart, x, y);			
	}	
			
};


GothicArch.createWeldLug  = function (documentInterface, addOperation, pos, orientation) {
	
	v2 = pos.operator_add(new RVector(0,this.weldLugDepth));
	v3 = v2.operator_add(new RVector(this.weldLugWidth,0));
	v4 = v3.operator_add(new RVector(0,-this.weldLugDepth));
	
	v2 = v2.rotate(orientation,pos);
	v3 = v3.rotate(orientation,pos);
	v4 = v4.rotate(orientation,pos);
	
	this.line(documentInterface, addOperation,pos,v2);
	this.line(documentInterface, addOperation,v2,v3);
	this.line(documentInterface, addOperation,v3,v4);
	
	return v4;	
};
