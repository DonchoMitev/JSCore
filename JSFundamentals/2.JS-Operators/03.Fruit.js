function solve(fruit, kg, lv) {
    let weight = +((kg/1000).toFixed(2));
    let money = +((lv*weight).toFixed(2));
    console.log(`I need ${money} leva to buy ${weight} kilograms ${fruit}.`);
}

solve('apple', 1, 2.35);