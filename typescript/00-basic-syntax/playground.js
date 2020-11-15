let num = 2;
const add2 = (a, b) => {
    return a + b;
};
function greeter(person) {
    return "Hello " + person;
}
console.log(greeter("Goo Rivo"));
function buildName(fname, lname) {
    if (lname)
        return fname.trim() + " " + lname;
    else
        return fname;
}
class Student {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
}
function buildPerson(person) {
    return person.fName + " " + person.lName;
}
const p = { fName: "GOOo", lName: "Ravioli" };
console.log(buildPerson(p));
console.log(buildPerson(new Student("John", "Doe")));
const arr2 = [];
arr2.push(10);
arr2.push(1);
arr2.push(4);
console.log(arr2);
const myHash = new Map();
const stu = new Student("Mark", "Brown");
//# sourceMappingURL=playground.js.map