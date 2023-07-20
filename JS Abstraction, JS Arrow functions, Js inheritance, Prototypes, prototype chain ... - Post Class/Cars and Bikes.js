function makeCar(name, wheelCount) {
    let car =  Object.create(vehicle) 
    car.name = name;
    car.type = "Car"
    car.wheelCount = wheelCount
    return car;
}

function makeBike(name, wheelCount) {
    let bike = Object.create(vehicle);
    bike.name = name;
    bike.type = "Bike";
    bike.wheelCount = wheelCount;
    return bike;
}
