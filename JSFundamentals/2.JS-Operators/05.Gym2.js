function solve(day, service, time) {

    let price = 0;

    let daysOfWeek = function (day) {
       return [ "Monday", 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(day);
    };

    let serviceDayWeek = {
        "Fitness" : 5,
        "Sauna" : 4,
        "Instructor" : 10
    };

    let serviceWeekend = {
        "Fitness" : 8,
        "Sauna" : 8,
        "Instructor" : 15
    }
    if (daysOfWeek(day) <= 4) {
        if (time <= 15) {
            return serviceDayWeek[service];
        }else{
            return serviceDayWeek[service] + 2.5;
        }
        
    }else{
        return serviceWeekend[service];
    }

    

}

console.log(solve('Sunday', 'Fitness', 22.00));