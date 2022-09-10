// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];


// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // console.log(colors);

// for (const color of colors) {
//     // console.log(color);
//     // console.log(color.hex);
//     // console.log(color.rgb);

//     hexColors.push(color.hex)
//     console.log(hexColors);
// }
// // console.log(colors);
// // console.table(colors);

// // ======================================================
// // ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.log(products);

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null;
        
    
//   // Change code above this line
// }
// console.log("Radar", getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));
// // console.log(products);
// // ======================================================

// // ======================================================
// // ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     let propValues = [];
//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             propValues.push(product[propName]);
//         }
//     }
//     return propValues;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));
// //======================================================

// // ======================================================
// // ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let totalPrise = 0;
//     for (const product of products) {
//         if (productName === product.name) {
//             totalPrise = product.price * product.quantity
//         }
//     }



//     return totalPrise;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// // ======================================================
