function solve() {
    
    let buttons = document.getElementsByTagName('button');
    let sections = document.querySelectorAll('div.product');
    let textArea = document.querySelector('textarea');
    console.log(sections);

    buttons[0].addEventListener('click', milk);
    buttons[1].addEventListener('click', bread);
    buttons[2].addEventListener('click', tomatoes);
    buttons[3].addEventListener('click', buy);
    
    let product = [];

    function milk() {

        let obj = {
            product : 'Milk',
            price : parseFloat(sections[0].children[2].textContent.split(': ')[1])
        }
        
        textArea.value += `Added ${obj.product} for ${obj.price.toFixed(2)} to the cart.\n`
        product.push(obj);

    }

    function bread() {

        let obj = {
            product : 'Bread',
            price : parseFloat(sections[1].children[2].textContent.split(': ')[1])
        }
        
        textArea.value += `Added ${obj.product} for ${obj.price.toFixed(2)} to the cart.\n`
        product.push(obj);

    }

    function tomatoes() {

        let obj = {
            product : 'Tomatoes',
            price : parseFloat(sections[2].children[2].textContent.split(': ')[1])
        }
        
        textArea.value += `Added ${obj.product} for ${obj.price.toFixed(2)} to the cart.\n`
        product.push(obj);

    }

    function buy() {

        let resultString = '';
        resultString += 'You bought '; 
        resultString += product.map(p => `${p.product}`).filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        }).join(', ') + ' for ';
        resultString += (product.map(s => s.price).reduce((a,b) => a + b)).toFixed(2) + '.\n';
        
        textArea.value += resultString;

    }

}