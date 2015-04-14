var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Never"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

// build a relieveDuty function
function relieveDuty(vehicle, day) { 
  var offDuty = [];
  var onDuty = [];
  for (var i = 1; i < vehicle.numRangers; i++) {
    if (day == vehicle["ranger" + i]["dayOff"]) {
      //push offDuty ranger to offDuty array
      offDuty.push(vehicle["ranger" + i]);
    } else {
      onDuty.push(vehicle["ranger" + i]);  
    }
    delete vehicle["ranger" + i];
  }

  for (var n = 0; onDuty.length > 0; n++) {
    vehicle["ranger" + (n + 1)] = onDuty.shift();
  }
  vehicle.numRangers -= offDuty.length;
  return offDuty;
}

var offToday = relieveDuty(vehicle3, "Friday");


--------
Object.prototype.noCalvesyet = function() {
  if (this["type"] == "cow" && this["hadCalf"] == null) {
    return true;
  } else {
    return false;
  }
};
Array.prototype.countForBreeding = function() {
  var numToBreed = 0; 
  for (var cow in this) {
    if (this[cow]["noCalvesYet"]() == true) {
      numToBreed++;
    }
    return numToBreed;
  }
};