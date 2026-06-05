const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];
for(let i = 0; i < students.length; i++){
    const average =
        students[i].math * 0.4 +
        students[i].physics * 0.3 +
        students[i].cs * 0.3;
    students[i].average = average;
    if (average >= 8.0){
    console.log( students[i].name  +  ":Hoc sinh gioi");
    students[i].rank = "Gioi";
}
else if(average >= 6.5){
    console.log( students[i].name  +  ":Hoc sinh kha");
    students[i].rank = "Kha"
}
else if(average >= 5.0){
    console.log( students[i].name  +  ":Hoc sinh trung binh");
    students[i].rank = "Trung binh"
}
else{
    console.log( students[i].name  +  ":Hoc sinh yeu");
    students[i].rank = "Yeu"
}
}

console.log("| STT | Tên    | TB   | Xếp loại |");
console.log("|-----|--------|------|-----------|");

for(let i = 0; i < students.length; i++){
    const STT = i + 1;
    const Ten = students[i].name;
    const TB = students[i].average;
    const Rank = students[i].rank;
    const colSTT = STT.toString().padEnd(3, " ");
    const colName = Ten.padEnd(6, " ");
    const colAvg = TB.toString().padEnd(4, " ");
    const colRank = Rank.padEnd(10, " ");

    console.log(`| ${colSTT} | ${colName} | ${colAvg} | ${colRank} |`);
}

let Male = 0;
let Female = 0;
for(let i = 0; i < students.length; i++){
if(students[i].gender === "M"){
        Male++;
}
else{
        Female++;
    }
}
console.log('So hoc sinh nam: ', Male);
console.log('So hoc sinh nu: ', Female);

let topStudent = students[0];
for(let i = 0; i < students.length; i++){
    if(parseFloat(students[i].average) > parseFloat(topStudent.average)){
        topStudent = students[i];
    }
}
console.log('Hoc sinh co diem trung binh cao nhat la: ', topStudent, "Diem trung binh:", topStudent.average);

let botStudent = students[0];
for(let i = 0; i < students.length; i++){
    if(parseFloat(students[i].average) < parseFloat(botStudent.average)){
        botStudent = students[i];
    }
}
console.log('Hoc sinh co diem trung binh thap nhat la: ', botStudent, "Diem trung binh:", botStudent.average);

let tongDiemToan = 0;

for (let i = 0; i < students.length; i++) {
    tongDiemToan += students[i].math;
}
const MathAvg = tongDiemToan / students.length;
console.log('Diem trung binh toan la:', MathAvg);

let tongDiemLy = 0;

for (let i = 0; i < students.length; i++) {
    tongDiemLy += students[i].physics;
}
const physicsAvg = tongDiemLy / students.length;
console.log('Diem trung binh ly la:', physicsAvg);

let tongDiemcs = 0;

for (let i = 0; i < students.length; i++) {
    tongDiemcs += students[i].cs;
}
const csAvg = tongDiemcs / students.length;
console.log('Diem trung binh cs la:', csAvg);