function solve() {

    let input = document.getElementById('str').value;
    let result = document.getElementById('result').value;

    let sum = 0;

    input.split('').forEach(el => {
        sum += +el;
    });

    sum = sum.split('').forEach(el => sum += +el)

    console.log(sum)
}