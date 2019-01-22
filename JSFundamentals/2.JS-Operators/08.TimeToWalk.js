function solve (numberSteps, footprintMeters, speedKmh) {

    let meters = numberSteps * footprintMeters;
    let speedMtrs = (speedKmh * 1000) / 3600;

    let timeSeconds = Math.round(meters / speedMtrs);

    let rest =Math.floor(meters / 500);

    timeSeconds += rest * 60

    let hour = 0;
    let seconds = timeSeconds % 60;
    let minutes = (timeSeconds - seconds) / 60;

    printHour(hour, minutes, seconds);

    function printHour(hour, minutes, seconds) {
        if (hour < 10){
            hour = "0" + hour;
        } 
        if (minutes < 10){
            minutes = "0" + minutes;
        } 
        if (seconds < 10){
            seconds = "0" + seconds;
        }

        console.log(`${hour}:${minutes}:${seconds}`);
    }

}

solve(8000, 0.70, 5.5);