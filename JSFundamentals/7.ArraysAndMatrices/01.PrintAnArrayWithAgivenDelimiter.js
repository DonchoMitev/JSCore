function solve(arr) {
    let delimite = arr.pop();

    console.log(arr.join(delimite));
    console.log(arr);
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);