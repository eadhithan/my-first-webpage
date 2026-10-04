const students=[
    {name:"John", age:20, grade:99},
    {name:"Jane", age:22, grade:85},
    {name:"Jim", age:21, grade:75},
    {name:"Jill", age:23, grade:90},
];
const names = students.filter(i=> i.grade >80).map(i=> i.name);
console.log(names);