scottsArray = [0,1,2,3];
var i = 0;
for (i=0; i<scottsArray.length; i++) {
	console.log("The old length is" + scottsArray.length);
	scottsArray.push(2);
	console.log("The old length is" + scottsArray.length);
}