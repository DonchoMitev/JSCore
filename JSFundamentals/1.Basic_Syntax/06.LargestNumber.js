function largestNumber(num1, num2, num3) {
    largestNum = num1;
    if (num1 < num2) {
        largestNum = num2;
    }
    if (num2 < num3){
        largestNum = num3;
    }

    console.log("The largest number is " + largestNum + "."); 
}

largestNumber(-3, -5, -22.5);