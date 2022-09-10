// // Напишите следующие функции:

// // createProduct(obj, callback) - принимает объект товара без id, а также колбек.
// // Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// // logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// // logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль


// ===============================================================================
const apple = { name: "apples", price: 35, qty: 250, category: "fruits" };

function logProduct(product) {
    console.log("product callback", product);
}

logProduct(apple);



// createProduct(obj, callback);
