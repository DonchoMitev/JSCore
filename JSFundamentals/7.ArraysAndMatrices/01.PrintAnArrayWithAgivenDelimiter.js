function solve(arr) {
    let delimite = arr.pop();

    console.log(arr.join(delimite));

}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);