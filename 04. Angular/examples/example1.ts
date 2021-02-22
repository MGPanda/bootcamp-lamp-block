function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

let a: number = 5;
let b: number = 10;

let addedNumber: number = addTwoNumbers(a, b);

console.log(addedNumber);

interface Car {
    brand: string;
    years: number;
    numberOfWheels: number;
}

let car2: Car = {brand: "Toyota", years: 2, numberOfWheels: 4};