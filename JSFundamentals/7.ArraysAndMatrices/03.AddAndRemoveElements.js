function solve(arr) {

    let newArr = [];
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
       switch(arr[i]){
           case 'add' :
                newArr.push(count);
                count++;
                break;
            case 'remove' :
                if (newArr.length >= 1) {
                    newArr.pop();
                }
                count++;
                break;
       }    
    }

    if (newArr.length >= 1) {
        console.log(newArr.join('\n'));
    }else {
        console.log('Empty')
    }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);