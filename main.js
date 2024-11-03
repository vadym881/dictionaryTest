grades = {
  Alice: [100, 90, 80],
  Bob: [60, 70, 80],
  Charlie: [80, 80, 80],
  Dave: [70, 70, 70],
  Eve: [60, 60, 60],
  Frank: [50, 50, 50],
  Gina: [40, 40, 40],
  Hannah: [30, 30, 30],
  Igor: [20, 20, 20],
  Jenny: [10, 10, 10],
};

console.log(calculateAverageGrade(grades));

function calculateAverageGrade(grades) {
    const resultObj = {}
    const keys = Object.keys(grades)
    for (const key of keys) {
        const personsGrades = grades[key];
        let sum = 0
        for (const grade of personsGrades) {
            sum += grade         
        }
        const averageGrade = sum / personsGrades.length
        resultObj[key] = averageGrade
    }
    
    return resultObj
}
