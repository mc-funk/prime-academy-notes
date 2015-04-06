var michelle = {
	name: Michelle,
	surname: Funk,
	mbti: {ei: "I", sn: "N", tf: "T", jp: "J"},
	placesLived: ["Minneapolis, MN", "Corvallis, OR", "Honolulu, HI", "Paris, France", "LaCrosse, WI", "Richmond, IN"],
	languages: [["English", "fluent"], ["French", "rusty"], ["Python", "n00b"]], ["JavaScript", "beginner"],
	cat1: {name: "Bandersnatch", type: "domestic shorthair", color: "black", adopted: 2008},
	bike1: {name: "Babe the Blue", model: "Surly Cross Check", color: "Robin's Egg Blue", ownedSince: 2013, active: true},
	bike2: {name: "Jules Verne", model: "Gitane Mixte", color: "White", ownedSince: 2011, active: false},
	numCats: 1,
	numBikes: 2,
	nPlus1: function (bikeName, bikeModel, bikeColor, purchaseYear, inUse) {
		this["bike" + (numBikes + 1)] = {name: bikeName, model: bikeModel, color: bikeColor, ownedSince: purchaseYear, active: inUse};
		numBikes++;
	}
	kittyPlus1: function (catName, catType, catColor, yearAdopted) {
		this["cat" + (numCats + 1)] = {name: catName, type: catType, color: catColor, adopted: yearAdopted};
		numCats++;
	}
}