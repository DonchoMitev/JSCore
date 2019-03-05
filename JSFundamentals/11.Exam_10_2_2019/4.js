function solve(arr) {
    let array = arr;
    let storage = {};
    let models = [];

    for (const arr of array) {

        if (!storage.hasOwnProperty(arr.town)) {
            storage[arr.town] = {
                model: [arr.model],
                town: arr.town,
                regNumber: arr.regNumber,
                price: arr.price
            }
            models.push(arr.model);
        } else {
            storage[arr.town] = {
                model: storage[arr.town].model.push(arr.model),
                town: arr.town,
                regNumber: arr.regNumber,
                price: storage[arr.town].price + arr.price
            }
            models.push(arr.model);
        }

    }

    const salmonList = Object.keys(storage)
        .map(key => storage[key])
        .sort((a, b) => {
            if (a.price < b.price)
                return -1;
            if (a.price > b.price)
                return 1;

            return 0;
        });

    const filterPrice = Object.keys(storage)
        .map(key => storage[key])
        .sort((a, b) => {
            if (a.model === b.model)
                return -1;
            return 0;
        });


    // for (var key in storage) {
    //     console.log(key, storage[key]);
    // }

    // str = JSON.stringify(filterPrice);
    // console.log(str);
    // console.log(storage.town.model.split(' '));
    str1 = JSON.stringify(storage);
    models.sort()
    
    console.log(`${salmonList[salmonList.length - 1].town} is most profitable - ${salmonList[salmonList.length - 1].price} BGN`);
    console.log(`Most driven model: ${models[0]}`);


}

solve([{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }]
);