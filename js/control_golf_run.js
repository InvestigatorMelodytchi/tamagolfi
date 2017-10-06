// Run function.
function ControlGolfRun(fO) {
	// Turn handling.
	if (fO.shotEnd) {
		if (fO.shotWait > 0) fO.shotWait--;
		else fO.NextTurn();
	}
	
	// Moving camera.
	if (fO.shotHit) fO.cameraX = median(0, (fO.objHole.holeSpr.width / 2) - 320, fO.objBall[fO.shotPlayer].x - 160);
	else if (fO.cameraAuto) {
		if (fO.cameraX > 0) {
			if (fO.cameraSpeed < 16) fO.cameraSpeed += .05;
			fO.cameraX -= Math.max(fO.cameraSpeed, 0);
			if (fO.cameraX < 0) fO.cameraX = 0;
		}
		else fO.cameraAuto = false;
	}
	else if (fO.objActor.animOn == 5) {
		if (keyState[37]) {
			if (fO.cameraX > 8) fO.cameraX -= 8;
			else fO.cameraX = 0;
		}
		if (keyState[39]) {
			if (fO.cameraX < (fO.objHole.holeSpr.width / 2) - 328) fO.cameraX += 8;
			else fO.cameraX = (fO.objHole.holeSpr.width / 2) - 320;
		}
	}
	
	// Shot tracking.
	if (fO.shotHit) {
		if (fO.objBall[fO.shotPlayer].Stopped()) fO.shotEnd = true;
	}
	else if (fO.objActor.animOn == 10) {
		playSound(snd_voice_swing[playerChar[fO.shotPlayer]]);
		fO.objBall[fO.shotPlayer].Stroke(fO.shotDis,
			fO.shotDir,
			GetLoft(playerChar[fO.shotPlayer], fO.shotSpin, fO.objBall[fO.shotPlayer].ballLie, fO.shotDis / fO.shotMax),
			GetSpin(playerChar[fO.shotPlayer], fO.shotSpin));
		fO.shotHit = true;
		fO.shotWait = getSec(1);
		fO.playerScore[fO.shotPlayer]++;
	}
	
	// End.
}