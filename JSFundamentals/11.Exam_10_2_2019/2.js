function solve(matrix, command) {
    let matrixArray = matrix;
    let arrayCommand = command.split(' ');

    if (arrayCommand.length === 2) {
        let commandName = arrayCommand[0];
        let header = arrayCommand[1];

        switch (commandName) {
            case 'hide':
                let index = matrixArray[0].indexOf(header);
                for (let i = 0; i < matrixArray.length; i++) {
                    matrixArray[i].splice(index, 1);
                }
                for (let k = 0; k < matrixArray.length; k++) {
                    let el = matrixArray[k].join(' | ');
                    console.log(el);
                }
                break;
            case 'sort':
                let idx = +matrixArray[0].indexOf(header);
                let row = matrixArray[0];
                matrixArray.shift();
                matrixArray.sort(sortFunction);
                matrixArray.unshift(row);
                
                
                function sortFunction(a, b) {
                    
                    if (a[idx] == b[idx]) {
                        
                        return 0;
                    }
                    else {
                        return (a[idx] < b[idx]) ? -1 : 1;
                    }
                    
                }
                for (let k = 0; k < matrixArray.length; k++) {
                    let el = matrixArray[k].join(' | ');
                    console.log(el);
                }

                break;
        }

        
    }else if(arrayCommand.length === 3){
        let value = arrayCommand[2];

        function getIndexOfK(arr, k) {
            for (var i = 0; i < arr.length; i++) {
              var index = arr[i].indexOf(k);
              if (index > -1) {
                return arr[i];
              }
            }
        }
        console.log(matrixArray[0].join(' | '));
        console.log(getIndexOfK(matrixArray, value).join(' | '));
    }

    


}

solve([['firstName', 'age', 'grade', 'course'],
['Peter', '25', '5.00', 'JS-Core'],
['George', '34', '6.00', 'Tech'],
['Marry', '28', '5.49', 'Ruby']],
'filter firstName Marry'
);
