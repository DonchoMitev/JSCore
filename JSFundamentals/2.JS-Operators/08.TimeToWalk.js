function solve (numberSteps, footprintMeters, speedKmh) {

    let meters = numberSteps * footprintMeters;
    let speedMtrs = (speedKmh * 1000) / 3600;

    let time = meters / speedMtrs;

    let minute = time % 60;
    let minute = 
}