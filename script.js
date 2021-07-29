//Tallest Mountain-----------------------------
var mountain = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
var findNameOfTallestMountain = function (mountainPeak) {
    var result = { name: "", height: 1 };
    mountainPeak.forEach(function (i) {
        if (i.height > result.height)
            result = i;
    });
    return result.name;
};
console.log(findNameOfTallestMountain(mountain));
var products = [
    { name: "Coke", price: 1.99 },
    { name: "Pepsi", price: 1.59 },
    { name: "Dr. Pepper", price: 2.09 }
];
var calcAverageProductPrice = function (items) {
    var result = 0;
    var average = 0;
    items.forEach(function (i) { result = i.price + result; });
    average = result / items.length;
    return average;
};
console.log(calcAverageProductPrice(products));
var inventory = [
    { name: "Motor", price: 10.00, quantity: 10 },
    { name: "Sensor", price: 12.50, quantity: 4 },
    { name: "LED", price: 1.00, quantity: 20 }
];
var calcInventoryValue = function (totalInventory) {
    var total = 0;
    totalInventory.forEach(function (i) {
        total = (i.price * i.quantity) + total;
    });
    return total;
};
console.log(calcInventoryValue(inventory));
