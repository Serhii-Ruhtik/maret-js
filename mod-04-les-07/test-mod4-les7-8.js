// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }
// =============================================================

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// ============================================================

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// ==============================================================
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// =============================================================

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

//=============================================================

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// ============================================================

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція як колбек
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// =====================================================================
// Зразок Callback

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback();
// }

// const fnB = function () {
//   console.log('Передзвоніть мені будь ласка');
// }

// fnA("qwerty", fnB);
// =======================================================================

// // Створимо функцію яка може рахувати числа

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// }
// // const add = function (x, y) {
// //   return x + y;
// // }

// const sub = function (x, y) {
//   return x - y;
// }

// doMath(2, 4, function (x, y) {
//   return x + y;
// });
// doMath(13, 7, sub);

// ============================================================================
// ============================TEST============================================
// https://www.facebook.com
// https://www.google.com
// https://www.unian.net
// https://www.dou.ua


// function generatorUri(domain) {
//   return function (url) {
//     return `https://www.${url}.${domain}`;
//   };
// };
// // ====Звичайна визов
// const dou = generatorUri('ua');
// let res = dou('dou');
// console.log(res);

// // ==== Карірування====
// const facebook = generatorUri("com")("facebook");
// console.log(facebook);

// // === Щу спосіб виклику======
// const google = generatorUri("com");
// console.log(google('google'));

// const unian = generatorUri("net")("unian");
// console.log(unian);

// function famelyMy() {
//   const famely = ["Nataly", "Grom"];
//   return {
//     show() {
//       console.log(famely);
//     },
//     add(newUser) {
//       famely.push(newUser);
//     },
//   }
// }
// const house = famelyMy();
// house.add("junior");
// house.show();
// const callback = function () {
//   console.log("Через 2 секунди");

// }

// console.log('QWERTY');

// setTimeout(callback, 2000);

// console.log('qwerty');


// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// const obj = {
//   name: 'Jhon',
//   car:  'Audi',
//   carColor: 'White'
// }





// ========================================================================
// ================== ЗАДАЧКА № 2
// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// // console.log(menu);
// multiplyNumeric(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     console.log(obj[key]);
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// console.log(menu);
// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// =============================================================================

// ============================================================================
// ========================ЗАДАЧКА № 3===

// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.

// const parameterObj = {};
// const parameterArray= {};
// const parameterNull = {};

// console.log(typeof parameterObj);
// console.log(typeof parameterArray);
// console.log(typeof parameterNull);

// console.log(typeof false);
// console.log(typeof 1);
// console.log(typeof "false");


// function checObj(params) {
//   if (typeof params === 'object') {
//     if (Array.isArray(params)) {
//       console.log("Array")
//     } else if (params === null) {
//       console.log('Null');
    
//     } else {
//       console.log("Obl");
//     }else {
//       console.log()
//     }
//   }
// }
// ===========================================================================
// =========================Задачка №4=========
//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };

// function calcSalaris(salaris) {

//   for (let valeu of valeus) {
    
//   }
// }

// =============================================================================

// ==============================================================
//=============================ЗАДАЧКА №5====
//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 6 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 150, quantity: 100 },
// ];

// ==========================================================
// =========ЗАДАЧКА №6====


// Напишіть функцію для об’єднання необмежених масивів
// Функція addArrays() повертає об’єднаний масив шляхом поєднання всіх масивів, переданих як аргумент функції.

// console.log(addArrays([2,3,4],[6,4,9],[34,6,4]))
// [2, 3, 4, 6, 4, 9, 34, 6, 4]

// ==========================================================
// =========ЗАДАЧКА №7====

// // Напишіть код, щоб видалити всі елементи в заданому масиві
// // Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.
// let arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)
// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]


// ==========================================================
// =========ЗАДАЧКА №7====

// Напишіть метод, який розбиває масив на частини визначеного розміру



// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunkArray(data, 1)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// function chunkArray(data, number) {
//   const restArray = [];
//   let index = 0;
//   while (index < data.length) {
//     restArray.push(data.slice(index , number + index));
//     index += number;
  
//   }
//   return restArray;
// }

// ==========================================================
// =========ЗАДАЧКА №7====                     

// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».
