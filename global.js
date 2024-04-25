var Name = `rahul`;
console.log(Name);

let car1 = {
    name: `Audi`,
    price: 1304.3045,
}

// let car2 = car1;
// car2.name = `BMW`;
// console.log(car1);
// console.log(car2);
let car2 = {...car1 };
car2.name = `BMW`;
console.log(car1);
console.log(car2);