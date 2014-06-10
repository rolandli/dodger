

function displayMenuScreen(){
	stage.addChild(backgroundObj1);
	stage.addChild(menuScreenTitle);
	
	stage.addChild(riseSpeedText);
	stage.addChild(riseSpeedNumber);
	stage.addChild(riseSpeedButtonOne);
	stage.addChild(riseSpeedButtonTwo);
	
	stage.addChild(fallSpeedText);
	stage.addChild(fallSpeedNumber);
	stage.addChild(fallSpeedButtonOne);
	stage.addChild(fallSpeedButtonTwo);
	
	stage.addChild(playerSizeText);
	stage.addChild(playerSizeNumber);
	stage.addChild(playerSizeButtonOne);
	stage.addChild(playerSizeButtonTwo);
	
	stage.addChild(squareSizeText);
	stage.addChild(squareSizeNumber);
	stage.addChild(squareSizeButtonOne);
	stage.addChild(squareSizeButtonTwo);
	
	stage.addChild(invisibleTimeText);
	stage.addChild(invisibleTimeNumber);
	stage.addChild(invisibleTimeButtonOne);
	stage.addChild(invisibleTimeButtonTwo);
	stage.addChild(debugText);
	
	stage.addChild(gameStartButton);
	
}
function removeMenuScreen(){
	stage.removeChild(menuScreenTitle);
	
	stage.removeChild(riseSpeedText);
	stage.removeChild(riseSpeedNumber);
	stage.removeChild(riseSpeedButtonOne);
	stage.removeChild(riseSpeedButtonTwo);
	
	stage.removeChild(fallSpeedText);
	stage.removeChild(fallSpeedNumber);
	stage.removeChild(fallSpeedButtonOne);
	stage.removeChild(fallSpeedButtonTwo);
	
	stage.removeChild(playerSizeText);
	stage.removeChild(playerSizeNumber);
	stage.removeChild(playerSizeButtonOne);
	stage.removeChild(playerSizeButtonTwo);
	
	stage.removeChild(squareSizeText);
	stage.removeChild(squareSizeNumber);
	stage.removeChild(squareSizeButtonOne);
	stage.removeChild(squareSizeButtonTwo);
	
	stage.removeChild(invisibleTimeText);
	stage.removeChild(invisibleTimeNumber);
	stage.removeChild(invisibleTimeButtonOne);
	stage.removeChild(invisibleTimeButtonTwo);
	
	stage.removeChild(gameStartButton);
	
}

