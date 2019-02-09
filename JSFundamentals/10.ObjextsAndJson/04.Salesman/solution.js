// [{"name": "potatoes", "price": 0.40, "quantity": 20}, {"name": "tomatoes", "price": 0.85, "quantity": 10}]// {"name": "potatoes", "quantity": 20}
function solve() {
  document.getElementsByTagName('button')[0].addEventListener('click', add);
  document.getElementsByTagName('button')[1].addEventListener('click', buy);
  document.getElementsByTagName('button')[2].addEventListener('click', end);

  let storage = {};
  let profit = 0;

  function add() {
    let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    for (const item of input) {
      if (!storage.hasOwnProperty(item.name)) {
        storage[item.name] = {
          price: item.price,
          quantity: item.quantity
        }
      } else {
        storage[item.name] = {
          price: item.price,
          quantity: storage[item.name].quantity + input.quantity
        }
      }
      document.getElementsByTagName('textarea')[2].value += `Successfully added ${item.quantity} ${item.name}. Price: ${item.price}\n`;
    }

    console.log(storage);

  }

  function buy() {
    let input = JSON.parse(document.getElementsByTagName('textarea')[1].value);
    console.log(input);
    if (storage.hasOwnProperty(input.name) && storage[input.name].quantity >= input.quantity) {
      storage[input.name].quantity -= input.quantity;
      document.getElementsByTagName('textarea')[2].value += `${input.quantity} ${input.name} sold for ${input.quantity * storage[input.name].price}.\n`;
      profit += input.quantity * storage[input.name].price;
    }else {
      document.getElementsByTagName('textarea')[2].value += `Cannot complete order.\n`;
    }

  }

  function end() {
    document.getElementsByTagName('textarea')[2].value += `Profit: ${profit.toFixed(2)}.`;

    document.getElementsByTagName('button')[0].removeEventListener('click', add);
    document.getElementsByTagName('button')[1].removeEventListener('click', buy);
    document.getElementsByTagName('button')[2].removeEventListener('click', end);
  }

}