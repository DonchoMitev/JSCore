function solve() {
  let inputElement = document.getElementById('str');
  let outputElement = document.getElementById('output');

  let oneSum = findsOnesSum(inputElement.value);
  let end = inputElement.value.length - oneSum;

  let result = inputElement.value.slice(oneSum, end)

  function findsOnesSum() {
    let result = value;

    while(result.length > 1) {
      let temp = result
          .split('')
          .reduce((a,b) => +a + +b)
          .toString();

      result = temp;
    }

    return result;
  }
   
}