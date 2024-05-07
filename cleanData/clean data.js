function Airplane(manufacturer, model, passengerCapacity, engineType, maximumTakeoffWeight) {
    this.manufacturer = manufacturer,
        this.model = model,
        this.passengerCapacity = passengerCapacity,
        this.engineType = engineType,
        this.maximumTakeoffWeight = maximumTakeoffWeight
}

let airplanes = JSON.parse(localStorage.getItem('airplanes')) || [];
let currentAirplanes = document.querySelector("#airplanes tbody");

function saveAirplanes() {
    localStorage.setItem('airplanes', JSON.stringify(airplanes));
}

function renderAirplanes() {
    currentAirplanes.innerHTML = "";
    airplanes.forEach(function (airplane, index) {
        let row = `
    <tr>
        <td>${index + 1}</td>
        <td>${airplane.manufacturer}</td>
        <td>${airplane.model}</td>
        <td>${airplane.passengerCapacity}</td>
        <td>${airplane.engineType}</td>
        <td>${airplane.maximumTakeoffWeight}</td>
        <td>
            <button onclick="editAirplane(${index})">Edit</button>
            <button onclick="deleteAirplane(${index})">Delete</button>
        </td>
    </tr>
    `;
        currentAirplanes.innerHTML += row;
    });
}

function clearForm() {
    document.getElementById("manufacturer").value = "";
    document.getElementById("model").value = "";
    document.getElementById("passengercapacity").value = "";
    document.getElementById("enginetype").value = "";
    document.getElementById("maximumtakeoffweight").value = "";
}

function deleteAirplane(index) {
    var confirmation = confirm("Are you sure you want to delete this item?");


    if (confirmation) {
        airplanes.splice(index, 1);
        saveAirplanes();
        renderAirplanes();
    } else{

    };

}

function editAirplane(index) {
    const airplane = airplanes[index];
    document.getElementById("manufacturer").value = airplane.manufacturer;
    document.getElementById("model").value = airplane.model;
    document.getElementById("passengercapacity").value = airplane.passengerCapacity;
    document.getElementById("enginetype").value = airplane.engineType;
    document.getElementById("maximumtakeoffweight").value = airplane.maximumTakeoffWeight;

    airplanes.splice(index, 1);

    renderAirplanes();
}

document.getElementById("submitbutton").addEventListener("click", function (e) {
    e.preventDefault();

    const manufacturer = document.getElementById("manufacturer").value;
    const model = document.getElementById("model").value;
    const passengerCapacity = document.getElementById("passengercapacity").value;
    const engineType = document.getElementById("enginetype").value;
    const maximumTakeoffWeight = document.getElementById("maximumtakeoffweight").value

    if (!manufacturer || !model || !passengerCapacity || !engineType || !maximumTakeoffWeight) {
        alert("Please fill all input fields");
        return false;
    }

    let newAirplane = new Airplane(manufacturer, model, passengerCapacity, engineType, maximumTakeoffWeight);

    airplanes.push(newAirplane);

    saveAirplanes();

    clearForm();

    renderAirplanes();
});

renderAirplanes();