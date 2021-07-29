//Tallest Mountain-----------------------------

interface Mountain{
    name: string;
    height: number;
}

const mountain:Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
]

const findNameOfTallestMountain = (mountainPeak: Mountain[]): string => {
    let result:Mountain = {name:"", height:1};
    mountainPeak.forEach(i => {
        if(i.height > result.height)
        result= i;
    })
    return result.name;
}
console.log(findNameOfTallestMountain(mountain));

//Products ----------------------------------------

interface Product{
    name:string;
    price: number;
}

const products:Product[] = [
    {name: "Coke", price: 1.99},
    {name: "Pepsi", price: 1.59},
    {name: "Dr. Pepper", price: 2.09}
];

const calcAverageProductPrice = (items:Product[]):number =>{
    let result: number =0;
    let average: number =0;
    items.forEach(i => {result = i.price + result})
    average = result/items.length;
        return average;
}

console.log(calcAverageProductPrice(products));

//Inventory----------------------------------------------

interface InventoryItem{
    name: string;
    price: number;
    quantity:number;
}

const inventory:InventoryItem[] = [
    {name: "Motor", price: 10.00, quantity:10},
    {name: "Sensor", price: 12.50, quantity:4},
    {name: "LED", price: 1.00, quantity: 20}
]

const calcInventoryValue = (totalInventory: InventoryItem[]): number =>{
    let total: number =0;
    totalInventory.forEach(i => {
         total = (i.price *i.quantity) + total;
    })
    return total;
}
console.log(calcInventoryValue(inventory));