function Airplane(manufacturer, model, passengerCapacity, engineType, maximumTakeoffWeight) {
    this.manufacturer = manufacturer,
    this.model = model,
    this.passengerCapacity = passengerCapacity,
    this.engineType = engineType,
    this.maximumTakeoffWeight = maximumTakeoffWeight
}

let airplanes = JSON.parse(localStorage.getItem('airplanes')) || [
    airplane1 = new Airplane("Boeing", 747 - 400, 524, "Pratt & Whitney PW4056", "875,000 pounds"),
    airplane2 = new Airplane("Airbus", "A380", 580, "Rolls Royce Trent 900", "575 tonnes"),
    airplane3 = new Airplane("Antonov", "AN224 Mriya", "Cargo Plane", "Ivchenko Progress Lotarev D-18T", "640 Tonnes"),
    airPlane4 = new Airplane("embrarer", "E195", 132, "GE CF34-10E", "61 Tonnes")
];

function saveAirplanes() {
    localStorage.setItem('airplanes', JSON.stringify(airplanes));
}

let currentAirplanes = document.getElementById("airplanes");

let newAirplanes = " ";

for (nA = 0; nA < airplanes.length; nA++) {
    newAirplanes = newAirplanes + `
        <tr>
            <td scope="col">${nA + 1}</td>
            <td scope="col">${airplanes[nA].manufacturer}</td>
            <td scope="col">${airplanes[nA].model}</td>
            <td scope="col">${airplanes[nA].passengerCapacity}</td>
            <td scope="col">${airplanes[nA].engineType}</td>
            <td scope="col">${airplanes[nA].maximumTakeoffWeight}</td>
        </tr>
        `
};

currentAirplanes.innerHTML = newAirplanes;

function showNewTable(newAirplane) {
    let newRow = `
        <tr>
            <td scope="col">${airplanes.length + 1}</td>
            <td scope="col">${newAirplane.manufacturer}</td>
            <td scope="col">${newAirplane.model}</td>
            <td scope="col">${newAirplane.passengerCapacity}</td>
            <td scope="col">${newAirplane.engineType}</td>
            <td scope="col">${newAirplane.maximumTakeoffWeight}</td>
        </tr>
        `

    currentAirplanes.innerHTML += newRow;
}

function clearForm() {
    document.getElementById("manufacturer").value = "";
    document.getElementById("model").value = "";
    document.getElementById("passengercapacity").value = "";
    document.getElementById("enginetype").value = "";
    document.getElementById("maximumtakeoffweight").value = "";
}

let submitButton = document.getElementById("submitbutton");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const manufacturer = document.getElementById("manufacturer").value;
    const model = document.getElementById("model").value;
    const passengerCapacity = document.getElementById("passengercapacity").value;
    const engineType = document.getElementById("enginetype").value;
    const maximumTakeoffWeight = document.getElementById("maximumtakeoffweight").value

    if (!manufacturer || !model || !passengerCapacity || !engineType || !maximumTakeoffWeight) {
        confirm("Please fill all input fields");
        return;
    };

    let newAirplane = new Airplane(
        document.getElementById("manufacturer").value,
        document.getElementById("model").value,
        document.getElementById("passengercapacity").value,
        document.getElementById("enginetype").value,
        document.getElementById("maximumtakeoffweight").value
    );

    airplanes.push(newAirplane);

    saveAirplanes();

    clearForm();

    showNewTable(newAirplane);
});

console.log(airplanes);