
class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);

        return this.grades.length > 0
            ? total / this.grades.length
            : 0;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) return "A";
        else if (average >= 80) return "B";
        else if (average >= 70) return "C";
        else if (average >= 60) return "D";
        else if (average >= 50) return "E";
        else return "F";
    }

    getResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}


// Students List
let studentsList = [

    new Student(101, "Ahmed", [80, 90, 70], 85),

    new Student(102, "Sara", [45, 40, 50], 80),

    new Student(103, "Mona", [90, 85, 95], 95),

    new Student(104, "Omar", [40, 45, 50], 70)

];


// Students Reports
let studentsReports = studentsList.map(student => ({
    ID: student.id,
    Name: student.name,
    Average: student.calculateAverage(),
    Grade: student.getGrade(),
    Result: student.getResult()
}));

console.log("===== Students Reports =====");
console.table(studentsReports);


// Committee of Mercy
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();

    return average >= 40 && average <= 49;
});


// Add 5 Mercy Marks
let mercyStudents = strugglingStudents.map(student => ({
    id: student.id,
    name: student.name,
    oldAverage: student.calculateAverage(),
    newAverage: student.calculateAverage() + 5
}));


// Calculate Total
let totalNewAverages = mercyStudents.reduce(
    (sum, student) => sum + student.newAverage,
    0
);


// Calculate Mercy Average
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;


// Display Mercy Results
console.log("===== Committee of Mercy =====");

console.table(mercyStudents);

console.log("Average After Mercy:", mercyAverage);
