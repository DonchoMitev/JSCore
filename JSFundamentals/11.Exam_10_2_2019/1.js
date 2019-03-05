function solve (a, b, c) {
    
    let examPoints = +a;
    let homeWorksCompleted = +b;
    let totalHomework = +c;

    let totalPoints = (examPoints / 400 * 100 ) * 0.9;

    let pointsHomework = (homeWorksCompleted / totalHomework * 100) * 10 / 100;

    let maxPoints = pointsHomework + totalPoints;

    let grade = 3 + 2 * (maxPoints - 100 / 5) / (100 / 2);

    if (examPoints >= 400) {
        grade = 6;
    }
    if(examPoints < 100) {
        grade = 2;
    } 

    
    if (grade < 3)  {
        grade = 2;
    } 

    if (grade >= 6) {
        grade = 6;
    } 
    
    
    return grade.toFixed(2);
    
}
    
console.log(solve(90, 4, 5));