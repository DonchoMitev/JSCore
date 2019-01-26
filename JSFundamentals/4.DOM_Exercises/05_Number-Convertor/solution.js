function solve() {
    
    let number = document.getElementById('input').value;

    let menuOptions = document.getElementById('selectMenuTo');
   

    let optionOne = document.createElement('option');
    let optionTwo = document.createElement('option');
    
    menuOptions.appendChild(optionOne).textContent = "Binary";
    menuOptions.appendChild(optionTwo).textContent = "Hexadeicmala";

    let options = document.getElementsByTagName('option')[2];
    console.log(options);


    if (options.value = "selected") {
        console.log("hexa");
    }
        
    // }else if (options[3].selected) {
    //     console.log("binary");
    // }
   
    

}