export const carService = {
    query,
    getVendors,
    addCar,
    deleteCar,
    getCarById,
    updateCar
}

const KEY = 'cars';
var gCars;
var gVendors = ['audi', 'fiat', 'suzuki', 'honda', 'mazda']

_createCars();

function query() {
    return Promise.resolve(gCars)
}

function getVendors() {
    return gVendors;
}

function deleteCar(carId) {
    var carIdx = gCars.findIndex(function (car) {
        return carId === car.id
    })
    gCars.splice(carIdx, 1)
    _saveCarsToStorage();

}

function addCar(vendor, speed) {
    var car = _createCar(vendor, speed)
    gCars.unshift(car)
    _saveCarsToStorage();
}

function getCarById(carId) {
    var car = gCars.find(function (car) {
        return carId === car.id
    })
    return car
}

function updateCar(carId, newSpeed) {
    var car = gCars.find(function(car){
        return car.id === carId;
    })
    car.maxSpeed = newSpeed;
    _saveCarsToStorage();
}

function _createCar(vendor, speed) {
    if (!speed) speed = getRandomIntInclusive(1, 200)
    return {
        id: makeId(),
        vendor: vendor,
        maxSpeed: speed,
        desc: makeLorem()
    }
}

function _createCars() {
    var cars = loadFromStorage(KEY)
    if (!cars || !cars.length) {
        cars = []
        for (let i = 0; i < 20; i++) {
            var vendor = gVendors[getRandomIntInclusive(0, gVendors.length-1)]
            cars.push(_createCar(vendor))
        }
    }
    gCars = cars;
    _saveCarsToStorage();
}

function _saveCarsToStorage() {
    saveToStorage(KEY, gCars)
}
