let matrix = [
    ["20", "30"],
    ["40", "60"]
];

let sum = matrix
    .map((item, index) =>{
        return item
            .map((k) => {
                return +k;
            })
            .filter((innerItem, innerIndex) => {
                return innerIndex === index;
            })[0]
    })
    .reduce((acc, cur) => {
        return acc + cur;
    }, 0);

console.log(sum);