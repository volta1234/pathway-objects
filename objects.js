function Airplane(manufacturer, model, passengerCapacity, engineType, maximumTakeoffWeight) {
    this.manufacturer = manufacturer,
        this.model = model,
        this.passengerCapacity = passengerCapacity,
        this.engineType = engineType,
        this.maximumTakeoffWeight = maximumTakeoffWeight
}

let airplanes = [
    airplane1 = new Airplane("Boeing", 747 - 400, 524, "Pratt & Whitney PW4056", "875,000 pounds"),
    airplane2 = new Airplane("Airbus",  "A380", 580, "Rolls Royce Trent 900", "575 tonnes"),
    airplane3 = new Airplane("Antonov", "AN224 Mriya", "N/A", "Ivchenko Progress Lotarev D-18T", "640 Tonnes"),
    airPlane4 = new Airplane("embrarer", "E195", 132, "GE CF34-10E", "61 Tonnes")
]
console.log(airplanes)