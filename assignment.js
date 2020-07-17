
//FeetToMile

function FeetToMile(FeetInput) {
	if (FeetInput <= 0) {
		console.log("So clever,huh! distance cannot be negative or zero");
	}
	else {
		var mile = FeetInput / 5280;
		return mile.toFixed(2);
	}
}

//Wood Calculator

function woodCalculator(chair, table, bed) {
	var chairInput = 1 * chair;
	var tableInput = 3 * table;
	var bedInput = 5 * bed;
	var woodTotal = chairInput + tableInput + bedInput;
	return woodTotal;
}

//Brick Calculator

function brickCalculator(floorInput) {
	if (floorInput <= 10) {
		var totalFeet1 = floorInput * 15;
		var totalBrick1 = totalFeet1 * 1000;
		return totalBrick1;
	}
	else if (floorInput >= 11 && floorInput <= 20) {
		floorInput = floorInput - 10;
		var after10thFloor = floorInput * 12;
		var totalFeet2 = after10thFloor + 150;
		var totalBrick2 = totalFeet2 * 1000;
		return totalBrick2;
	}
	else if (floorInput >= 21) {
		floorInput = floorInput - 20;
		var after20thFloor = floorInput * 10;
		var totalFeet3 = after20thFloor + 270;
		var totalBrick3 = totalFeet3 * 1000;
		return totalBrick3;
	}
	var totalBrick = totalBrick1 + totalBrick2 + totalBrick3;
	return totalBrick;
}

// Tiny Friend


function tinyFriend(nameList) {
	var tinyName = nameList[0];
	for (var i = 0; i < nameList.length; i++) {
		var name = nameList[i];
		if (tinyName.length > name.length) {
			tinyName = name;
		}
	}
	return tinyName;
}
