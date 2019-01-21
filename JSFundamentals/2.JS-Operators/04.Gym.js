function solve(day, type, hour) {
    let price = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (type === "Fitness") {
                if (hour < 15) {
                    price = 5;
                } else {
                    price = 7.50;
                }
            } else if (type === "Sauna") {
                if (hour < 15) {
                    price = 4;
                } else {
                    price = 6.50;
                }
            } else if (type === "Instructor") {
                if (hour < 15) {
                    price = 10;
                } else {
                    price = 12.50;
                }
            }
            break;
        case "Saturday":
        case "Sunday":
            if (type === "Fitness") {
                price = 8;
            } else if (type === "Sauna") {
                price = 7;
            } else if (type === "Instructor") {
                price = 15;
            }
            break;

    }
    return price;
}

console.log(solve('Sunday', 'Fitness', 22.00));