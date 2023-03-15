// string, number, boolean, array, undefined, null, any

let firstName: string | null | undefined;
firstName = 'Ola';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}
let pt = ProductType.Sports;
let pt2 = ProductType.HomeGoods;
if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
}
else if (pt2 == ProductType.HomeGoods) {
  console.log('Created my own Enum')
}
