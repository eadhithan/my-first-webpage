const students=[
    {name:"John", age:20, grade:99},
    {name:"Jane", age:22, grade:85},
    {name:"Jim", age:21, grade:75},
    {name:"Jill", age:23, grade:90},
];
const names = students.filter(i=> i.grade >80).map(i=> i.name);
console.log(names);
const greatestGrade = students.reduce((max,student)=>
     {if(student.grade > max) return student.grade;
        else return max;
     },students[0].grade);
console.log(students.find(i=> i.grade === greatestGrade).name);
const age=students.map(i=> i.age);
console.log(age);
const failed = students.filter(i=> i.grade <80).map(i=> {return {name:i.name, grade:i.grade};});
if(failed.length === 0) console.log("No students failed");
console.log(failed);
const averageGrade = (list) => list.reduce((sum,student)=> sum + student.grade,0)/list.length;
console.log(averageGrade(students));