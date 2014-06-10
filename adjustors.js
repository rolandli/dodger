



function createVariableAdjustorPlayerSize(textObject, textToDisplay, 
								numberObject, numberToDisplay,
								xCoord, yCoord, 
								leftButton, rightButton, 
								leftButtonFunc, rightButtonFunc ){
	//FallSpeed Functions
				//50,225
		//Text
	textObject = new createjs.Text("" + textToDisplay + ": ", "24px Arial", "#080");
	textObject.x = xCoord;
	textObject.y = yCoord;
		//Number
	numberObject = new createjs.Text(""+numberToDisplay, "24px Arial", "#080");
	numberObject.x = xCoord+190;
	numberObject.y = yCoord+2;	 	
	
		//LeftButton
	var FSLbackground = new createjs.Shape();
	FSLbackground.name = "FSLbackground";//(FallSpeedLeft)Background
	FSLbackground.graphics.beginFill("white").drawRoundRect(xCoord+150, yCoord-21, 25, 25, 10); 
	var FSLlabel = new createjs.Text("<", "bold 24px Arial", "#080");
	FSLlabel.name = "FSLlabel";
	FSLlabel.textAlign = "center";
	FSLlabel.textBaseline = "middle";
	FSLlabel.x = xCoord+161;
	FSLlabel.y = yCoord-8;	
	leftButton = new createjs.Container();
	leftButton.name = "button";
	leftButton.x = 10;
	leftButton.y = 22;
	leftButton.addChild(FSLbackground, FSLlabel);
	
	leftButton.onClick = leftButtonFunc;
	
		//RightButton
	var FSRbackground = new createjs.Shape();//(FallSpeedLeftRight)Background
	FSRbackground.name = "FSRbackground";
	FSRbackground.graphics.beginFill("white").drawRoundRect(xCoord+200, yCoord-21, 25, 25, 10); 
	var FSRlabel = new createjs.Text(">", "bold 24px Arial", "#080");
	FSRlabel.name = "FSRlabel";
	FSRlabel.textAlign = "center";
	FSRlabel.textBaseline = "middle";
	FSRlabel.x = xCoord+213;
	FSRlabel.y = yCoord-8;	
	rightButton = new createjs.Container();
	rightButton.name = "button";
	rightButton.x = 20;
	rightButton.y = 23;
	rightButton.addChild(FSRbackground, FSRlabel);
	rightButton.onClick = rightButtonFunc;
	
	playerSizeText = textObject;
	playerSizeNumber = numberObject;
	playerSizeButtonOne = leftButton;
	playerSizeButtonTwo = rightButton;
}



function createVariableAdjustorFallSpeed(textObject, textToDisplay, 
								numberObject, numberToDisplay,
								xCoord, yCoord, 
								leftButton, rightButton, 
								leftButtonFunc, rightButtonFunc ){
	//FallSpeed Functions
				//50,225
		//Text
	textObject = new createjs.Text("" + textToDisplay + ": ", "24px Arial", "#080");
	textObject.x = xCoord;
	textObject.y = yCoord;
		//Number
	numberObject = new createjs.Text(""+numberToDisplay, "24px Arial", "#080");
	numberObject.x = xCoord+190;
	numberObject.y = yCoord+2;	 	
	
		//LeftButton
	var FSLbackground = new createjs.Shape();
	FSLbackground.name = "FSLbackground";//(FallSpeedLeft)Background
	FSLbackground.graphics.beginFill("white").drawRoundRect(xCoord+150, yCoord-21, 25, 25, 10); 
	var FSLlabel = new createjs.Text("<", "bold 24px Arial", "#080");
	FSLlabel.name = "FSLlabel";
	FSLlabel.textAlign = "center";
	FSLlabel.textBaseline = "middle";
	FSLlabel.x = xCoord+161;
	FSLlabel.y = yCoord-8;	
	leftButton = new createjs.Container();
	leftButton.name = "button";
	leftButton.x = 10;
	leftButton.y = 22;
	leftButton.addChild(FSLbackground, FSLlabel);
	
	leftButton.onClick = leftButtonFunc;
	
		//RightButton
	var FSRbackground = new createjs.Shape();//(FallSpeedLeftRight)Background
	FSRbackground.name = "FSRbackground";
	FSRbackground.graphics.beginFill("white").drawRoundRect(xCoord+200, yCoord-21, 25, 25, 10); 
	var FSRlabel = new createjs.Text(">", "bold 24px Arial", "#080");
	FSRlabel.name = "FSRlabel";
	FSRlabel.textAlign = "center";
	FSRlabel.textBaseline = "middle";
	FSRlabel.x = xCoord+213;
	FSRlabel.y = yCoord-8;	
	rightButton = new createjs.Container();
	rightButton.name = "button";
	rightButton.x = 20;
	rightButton.y = 23;
	rightButton.addChild(FSRbackground, FSRlabel);
	rightButton.onClick = rightButtonFunc;
	
	fallSpeedText = textObject;
	fallSpeedNumber = numberObject;
	fallSpeedButtonOne = leftButton;
	fallSpeedButtonTwo = rightButton;
}


function createVariableAdjustorRiseSpeed(textObject, textToDisplay, 
								numberObject, numberToDisplay,
								xCoord, yCoord, 
								leftButton, rightButton, 
								leftButtonFunc, rightButtonFunc ){
	//FallSpeed Functions
				//50,225
		//Text
	textObject = new createjs.Text("" + textToDisplay + ": ", "24px Arial", "#080");
	textObject.x = xCoord;
	textObject.y = yCoord;
		//Number
	numberObject = new createjs.Text(""+numberToDisplay, "24px Arial", "#080");
	numberObject.x = xCoord+190;
	numberObject.y = yCoord+2;	 	
	
		//LeftButton
	var FSLbackground = new createjs.Shape();
	FSLbackground.name = "FSLbackground";//(FallSpeedLeft)Background
	FSLbackground.graphics.beginFill("white").drawRoundRect(xCoord+150, yCoord-21, 25, 25, 10); 
	var FSLlabel = new createjs.Text("<", "bold 24px Arial", "#080");
	FSLlabel.name = "FSLlabel";
	FSLlabel.textAlign = "center";
	FSLlabel.textBaseline = "middle";
	FSLlabel.x = xCoord+161;
	FSLlabel.y = yCoord-8;	
	leftButton = new createjs.Container();
	leftButton.name = "button";
	leftButton.x = 10;
	leftButton.y = 22;
	leftButton.addChild(FSLbackground, FSLlabel);
	
	leftButton.onClick = leftButtonFunc;
	
		//RightButton
	var FSRbackground = new createjs.Shape();//(FallSpeedLeftRight)Background
	FSRbackground.name = "FSRbackground";
	FSRbackground.graphics.beginFill("white").drawRoundRect(xCoord+200, yCoord-21, 25, 25, 10); 
	var FSRlabel = new createjs.Text(">", "bold 24px Arial", "#080");
	FSRlabel.name = "FSRlabel";
	FSRlabel.textAlign = "center";
	FSRlabel.textBaseline = "middle";
	FSRlabel.x = xCoord+213;
	FSRlabel.y = yCoord-8;	
	rightButton = new createjs.Container();
	rightButton.name = "button";
	rightButton.x = 20;
	rightButton.y = 23;
	rightButton.addChild(FSRbackground, FSRlabel);
	rightButton.onClick = rightButtonFunc;
	
	riseSpeedText = textObject;
	riseSpeedNumber = numberObject;
	riseSpeedButtonOne = leftButton;
	riseSpeedButtonTwo = rightButton;
}


function createVariableAdjustorSquareSize(textObject, textToDisplay, 
								numberObject, numberToDisplay,
								xCoord, yCoord, 
								leftButton, rightButton, 
								leftButtonFunc, rightButtonFunc ){
	//FallSpeed Functions
				//50,225
		//Text
	textObject = new createjs.Text("" + textToDisplay + ": ", "24px Arial", "#080");
	textObject.x = xCoord;
	textObject.y = yCoord;
		//Number
	numberObject = new createjs.Text(""+numberToDisplay, "24px Arial", "#080");
	numberObject.x = xCoord+190;
	numberObject.y = yCoord+2;	 	
	
		//LeftButton
	var FSLbackground = new createjs.Shape();
	FSLbackground.name = "FSLbackground";//(FallSpeedLeft)Background
	FSLbackground.graphics.beginFill("white").drawRoundRect(xCoord+150, yCoord-21, 25, 25, 10); 
	var FSLlabel = new createjs.Text("<", "bold 24px Arial", "#080");
	FSLlabel.name = "FSLlabel";
	FSLlabel.textAlign = "center";
	FSLlabel.textBaseline = "middle";
	FSLlabel.x = xCoord+161;
	FSLlabel.y = yCoord-8;	
	leftButton = new createjs.Container();
	leftButton.name = "button";
	leftButton.x = 10;
	leftButton.y = 22;
	leftButton.addChild(FSLbackground, FSLlabel);
	
	leftButton.onClick = leftButtonFunc;
	
		//RightButton
	var FSRbackground = new createjs.Shape();//(FallSpeedLeftRight)Background
	FSRbackground.name = "FSRbackground";
	FSRbackground.graphics.beginFill("white").drawRoundRect(xCoord+200, yCoord-21, 25, 25, 10); 
	var FSRlabel = new createjs.Text(">", "bold 24px Arial", "#080");
	FSRlabel.name = "FSRlabel";
	FSRlabel.textAlign = "center";
	FSRlabel.textBaseline = "middle";
	FSRlabel.x = xCoord+213;
	FSRlabel.y = yCoord-8;	
	rightButton = new createjs.Container();
	rightButton.name = "button";
	rightButton.x = 20;
	rightButton.y = 23;
	rightButton.addChild(FSRbackground, FSRlabel);
	rightButton.onClick = rightButtonFunc;
	
	squareSizeText = textObject;
	squareSizeNumber = numberObject;
	squareSizeButtonOne = leftButton;
	squareSizeButtonTwo = rightButton;
}



function createVariableAdjustorInvisibleTime(textObject, textToDisplay, 
								numberObject, numberToDisplay,
								xCoord, yCoord, 
								leftButton, rightButton, 
								leftButtonFunc, rightButtonFunc ){
	//FallSpeed Functions
				//50,225
		//Text
	textObject = new createjs.Text("" + textToDisplay + ": ", "24px Arial", "#080");
	textObject.x = xCoord;
	textObject.y = yCoord;
		//Number
	numberObject = new createjs.Text(""+numberToDisplay, "24px Arial", "#080");
	numberObject.x = xCoord+190;
	numberObject.y = yCoord+2;	 	
	
		//LeftButton
	var FSLbackground = new createjs.Shape();
	FSLbackground.name = "FSLbackground";//(FallSpeedLeft)Background
	FSLbackground.graphics.beginFill("white").drawRoundRect(xCoord+150, yCoord-21, 25, 25, 10); 
	var FSLlabel = new createjs.Text("<", "bold 24px Arial", "#080");
	FSLlabel.name = "FSLlabel";
	FSLlabel.textAlign = "center";
	FSLlabel.textBaseline = "middle";
	FSLlabel.x = xCoord+161;
	FSLlabel.y = yCoord-8;	
	leftButton = new createjs.Container();
	leftButton.name = "button";
	leftButton.x = 10;
	leftButton.y = 22;
	leftButton.addChild(FSLbackground, FSLlabel);
	
	leftButton.onClick = leftButtonFunc;
	
		//RightButton
	var FSRbackground = new createjs.Shape();//(FallSpeedLeftRight)Background
	FSRbackground.name = "FSRbackground";
	FSRbackground.graphics.beginFill("white").drawRoundRect(xCoord+200, yCoord-21, 25, 25, 10); 
	var FSRlabel = new createjs.Text(">", "bold 24px Arial", "#080");
	FSRlabel.name = "FSRlabel";
	FSRlabel.textAlign = "center";
	FSRlabel.textBaseline = "middle";
	FSRlabel.x = xCoord+213;
	FSRlabel.y = yCoord-8;	
	rightButton = new createjs.Container();
	rightButton.name = "button";
	rightButton.x = 20;
	rightButton.y = 23;
	rightButton.addChild(FSRbackground, FSRlabel);
	rightButton.onClick = rightButtonFunc;
	
	invisibleTimeText = textObject;
	invisibleTimeNumber = numberObject;
	invisibleTimeButtonOne = leftButton;
	invisibleTimeButtonTwo = rightButton;
}