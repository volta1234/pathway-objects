function Airplane(manufacturer, model, passengerCapacity, engineType, maximumTakeoffWeight) {
    this.manufacturer = manufacturer,
        this.model = model,
        this.passengerCapacity = passengerCapacity,
        this.engineType = engineType,
        this.maximumTakeoffWeight = maximumTakeoffWeight
}

let airplanes = [
    airplane1 = new Airplane("Boeing", 747 - 400, 524, "Pratt & Whitney PW4056", "875,000 pounds"),
    airplane2 = new Airplane("Airbus", "A380", 580, "Rolls Royce Trent 900", "575 tonnes"),
    airplane3 = new Airplane("Antonov", "AN224 Mriya", "Cargo Plane", "Ivchenko Progress Lotarev D-18T", "640 Tonnes"),
    airPlane4 = new Airplane("embrarer", "E195", 132, "GE CF34-10E", "61 Tonnes")
];

let currentAirplanes = document.getElementById("airplanes");

let newAirplanes = " ";

for (nA = 0; nA < airplanes.length; nA++) {
    newAirplanes = newAirplanes + `
    <tr>
        <td scope="col">${nA+1}</td>
        <td scope="col">${airplanes[nA].manufacturer}</td>
        <td scope="col">${airplanes[nA].model}</td>
        <td scope="col">${airplanes[nA].passengerCapacity}</td>
        <td scope="col">${airplanes[nA].engineType}</td>
        <td scope="col">${airplanes[nA].maximumTakeoffWeight}</td>
    </tr>
    `
};

currentAirplanes.innerHTML = newAirplanes;