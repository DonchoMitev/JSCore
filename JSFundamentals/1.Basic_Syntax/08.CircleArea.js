function circleArea(a) {
    
    if (typeof(a)  === 'number') {
        let circleArea = Math.PI * Math.pow(a, 2);
        console.log(circleArea.toFixed(2));
        return;
    }

    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}

circleArea('name');