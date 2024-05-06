// document.addEventListener("DOMContentLoaded", function() {


// discountColor = document.getElementById("discountColor");

// discountColor.addEventListener("click", function(e) {
//     e.preventDefault();
//     discount = document.getElementById("discount1");
//     discount.style.color = "red";
// })

// classes = document.getElementById("classes");

// classes.addEventListener("click", function(e) {
//     e.preventDefault();
//     labels = document.querySelectorAll("label");


//     for(i=0; i<labels.length; i++) {
//         labels[i].style.color = "red";
//     };

//     labels[0].style.color = "brown";
//     labels[1].style.color = "blue";
//     labels[2].style.color = "green";

// });

//javascript objects

const airPlane1 = {
    manufacturer: "Boeing",
    model: 747 - 400,
    passengerCapacity: 524,
    engineType: "Pratt & Whitney PW4056",
    maximumTakeoffWeight: "875,000 pounds",
};

const airPlane2 = {
    manufacturer: "Airbus",
    model: "A380",
    passengerCapacity: 580,
    engineType: "Rolls Royce Trent 900",
    maximumTakeoffWeight: "575 tonnes",
};

const airPlane3 = {
    manufacturer: "Antonov",
    model: "AN224 Mriya",
    passengerCapacity: "N/A",
    engineType: "Ivchenko Progress Lotarev D-18T",
    maximumTakeoffWeight: "640 Tonnes",
};

let pilot1 = {
    name: "Andrei Gobachev",
    airplane: airPlane3.manufacturer.concat(" ", airPlane3.model),
    experience: "25,000 hours",
    sayHello: function() {
        console.log ("I am ", pilot1.name, " and I have ", pilot1.experience, " of experience.");
    }
};

let pilot2 = {
    name: "Calvince Ogwel",
    airplane: airPlane1.manufacturer.concat(" ", airPlane1.model),
    experience: "10,000 hours",
    sayHello: function() {
        console.log ("I am ", pilot2.name, " and I have ", pilot2.experience, " of experience.");
    }
};

let pilot3 = {
    name: "John Deere",
    airplane: airPlane2.manufacturer.concat(" ", airPlane2.model),
    experience: "35,000 hours",
    sayHello: function() {
        console.log ("I am ", pilot3.name, " and I fly ", pilot3.airplane,".");
    }
};

let pilot4 = {
    name: "Changpeng Zhao",
    airplane: airPlane3.manufacturer.concat(" ", airPlane3.model),
    experience: "15,000 hours",
    sayHello: function() {
        console.log ("I am ", pilot4.name, " and I have ", pilot4.experience, " of experience.");
    }
};

//object constructors

function Airplane(manufacturer,model,passengerCapacity,engineType,maximumTakeoffWeight) {
    this.manufacturer = manufacturer,
    this.model = model,
    this.passengerCapacity = passengerCapacity,
    this.engineType = engineType,
    this.maximumTakeoffWeight = maximumTakeoffWeight
}

const airPlane4 = new Airplane("embrarer", "E195", 132, "GE CF34-10E", "61 Tonnes")

console.log(airPlane1.manufacturer);
console.log(airPlane1.manufacturer.concat(" ", airPlane1.model));
console.log(airPlane2.passengerCapacity);
console.log(airPlane3.engineType);
console.log(airPlane2.maximumTakeoffWeight);
console.log(airPlane1.manufacturer, " ", airPlane1.model, " runs on a ", airPlane1.engineType);
console.log(pilot1.airplane);
console.log(pilot1.sayHello());
console.log(pilot3.sayHello());
console.log(airPlane4.engineType)

// });