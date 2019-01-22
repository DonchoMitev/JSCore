function solve(fruit, kg, lv) {
    let weight = +kg/1000;
    let money = +((lv*weight).toFixed(2));
    console.log(`I need ${money.toFixed(2)} leva to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);