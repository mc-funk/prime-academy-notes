//create Multi-dimensional array
//Create 6 arrays, each containing 8 values (integers no greater than 9)
var subArray0 = [1, 2, 3, 4, 5, 6, 7, 8];
var subArray1 = [2, 3, 4, 5, 6, 7, 8, 9];
var subArray2 = [3, 4, 5, 6, 7, 8, 9, 1];
var subArray3 = [4, 5, 6, 7, 8, 9, 1, 2];
var subArray4 = [5, 6, 7, 8, 9, 1, 2, 3];
var subArray5 = [6, 7, 8, 9, 1, 2, 3, 4]; 

var masterArray = [];
for (var i = 0; i < 6; i++) {
	masterArray[i] = eval("subArray" + i);
}

//console.log(masterArray);

function arrayFunction (array) {
	var newArray = array;
	for (i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			newArray[i][j] = times2(add1(array[i][j]));
			console.log ("Array " + i + ", subArray " + j + " was originally " + array[i][j] + " and is now " + newArray[i][j]);
		}
	}
	return newArray;
}

function add1 (number) {
	return number + 1;
}

function times2 (number) {
	return number * 2
}

console.log(arrayFunction(masterArray));
