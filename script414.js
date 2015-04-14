scottsArray = ["Joe", "Bob","Ookie","Jake"];
var i = 0;
var arrayLength = scottsArray.length;

for (i=0; i<arrayLength; i++) {
	console.log("The old length is " + scottsArray.length);
	scottsArray.push("Hello " + scottsArray[i]);
	console.log("The old length is " + scottsArray.length);
}

for (i=0; i<scottsArray.length; i++) {
	console.log(scottsArray[i]);
}