$(document).ready(function (){ 
	console.log("The original price of apples is " + Market.apples);
	setInterval(function() {
		for (var fruit in Market) {
			Market[fruit] = randomChange(Market[fruit]);
			console.log("The new value of " + fruit + " is " +
				Market[fruit]);
		}
	}, 5000);
});

var Market = {
	//Random number will always yield an integer, 
	//but we don't care, we do what we want when setting initial apple prices. 
	apples: randomNumber(0.50, 9.99),
	oranges: randomNumber(0.50, 9.99),
	bananas: randomNumber(0.50, 9.99),
	pears: randomNumber(0.50, 9.99),
};

function randomChange(price) {
	console.log("First Price ",price);
	var num = randomNumber (-50, 50);
	console.log("num is ", num);
	num /= 100;
	console.log("num is " + num);
	price += num;
	console.log("price is " + price);
	if (price < 0.50) {
		price = 0.50;
	} else if (price > 9.99) {
		price = 9.99;
	}
	console.log("The new price is " + price);
	return price;
}

var Person = {
	totalCash: 100.00,
	apple: 0,
	orange: 0, 
	banana: 0, 
	pear: 0,
	applesCost: 0,
	orangesCost: 0,
	bananasCost: 0, 
	pearsCost: 0,
	applesAverage: 0,
	orangesAverage: 0,
	bananasAverage: 0,
	pearsAverage: 0 
};

function buyFruit(fruit, price) {
	if (Person.totalCash > price) {
		Person.totalCash-= price;
		Person[fruit]++;
		Person[fruit + "sCost"] += price;
		console.log("Total cost of " + fruit + ": " + Person[fruit + "sCost"]);
		Person[fruit + "sAverage"] = (Person[fruit + "sCost"])/(Person[fruit]); 
		console.log("Average cost of " + fruit + ": " + Person[fruit + "sAverage"]);	
	}else {
		alert("You don't have enough money for that fruit!")
	}
}

buyFruit("apple", 1.23);
buyFruit("apple", 1.11);

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

