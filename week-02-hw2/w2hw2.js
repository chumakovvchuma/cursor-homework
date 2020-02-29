const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

const studentsOne = new Array(students[0], students[2]);
const studentsTwo = new Array(students[1], students[3]);
const studentsThree = new Array(students[4], students[5]);

const concatStudents = new Array().concat([studentsOne.join(" и ")], [studentsTwo.join(" и ")], [studentsThree.join(" и ")]);
document.write(`team with "and" - ${concatStudents} <br>`)

const withProject = new Array(concatStudents.length)
const studentWithProject = concatStudents.map(function callback(current, index, array) {            
    const studentProject = new Array(concatStudents[index], themes[index]);
    return withProject.splice(index, index, studentProject);
});
document.write(`team quality - ${withProject} <br>`)

const withQuality = new Array(students.length);
const arrMarks = new Array(students.length);
const withQualityStudent = students.map(function callback(current, index, array) {
    const marksString = marks[index].toLocaleString();
    arrMarks.splice(index, index, marksString);
    const studentQuality = new Array(students[index], arrMarks[index]);
    return withQuality.splice(index, index, studentQuality);
});
document.write(`student quality - ${withQuality} <br>`)
const randomTeamQuality = new Array(concatStudents.length)
const teamQuality = concatStudents.map(function callback(current, index, array) {
    const number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;           
    const quality = new Array(concatStudents[index], number);
    return randomTeamQuality.splice(index, index, quality);
});
document.write(`team quality - ${randomTeamQuality} <br>`)




