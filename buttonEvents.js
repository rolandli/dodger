
//============================================================
//============================================================
		function riseSpeedButtonOneEvent(evt) {
			if(riseSpeed > 3){
				riseSpeed--;
			}
			riseSpeedNumber.text = riseSpeed;
		}
		function riseSpeedButtonTwoEvent(evt) {
			if(riseSpeed < 8){
				riseSpeed++;
			}
			riseSpeedNumber.text = riseSpeed;
		}
//============================================================
//============================================================
		
		function playerSizeButtonOneEvent(evt) {
			if(playerWidth > 20){
				playerWidth--;
			}
			playerSizeNumber.text = playerWidth;
		}
		function playerSizeButtonTwoEvent(evt) {
			if(playerWidth < 50){
				playerWidth++;
			}
			playerSizeNumber.text = playerWidth;
		}
		
//============================================================
//============================================================
		
		
		function squareSizeButtonOneEvent(evt) {
			if(squareSize > 20){
				squareSize-= 5;
			}
			squareSizeNumber.text = squareSize;
		}
		function squareSizeButtonTwoEvent(evt) {
			if(squareSize < 60){
				squareSize+=5;
			}
			squareSizeNumber.text = squareSize;
		}
		
//============================================================
//============================================================
		
		function fallSpeedButtonOneEvent(evt) {
			if(fallSpeed > 3){
				fallSpeed--;
			}
			fallSpeedNumber.text = fallSpeed;
		}
		function fallSpeedButtonTwoEvent(evt) {
			if(fallSpeed < 8){
				fallSpeed++;
			}
			fallSpeedNumber.text = fallSpeed;
		}		
//============================================================
//============================================================
		
		function invisibleTimeButtonOneEvent(evt) {
			if(maxAlphaDuration > 10){
				maxAlphaDuration-= 5;
			}
			invisibleTimeNumber.text = maxAlphaDuration;
		}
		function invisibleTimeButtonTwoEvent(evt) {
			if(maxAlphaDuration < 50){
				maxAlphaDuration+= 5;
			}
			invisibleTimeNumber.text = maxAlphaDuration;
		}
		
//============================================================
//============================================================
		function gameStartEvent(evt) {
			switchMode();
		}