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
