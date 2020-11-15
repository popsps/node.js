let num: number = 2

const add2 = (a: number, b: number): number => {
    return a + b
}

function greeter(person: string): string {
    return "Hello " + person
}

console.log(greeter("Goo Rivo"))

function buildName(fname: string, lname?: string): string {
    if (lname)
        return fname.trim() + " " + lname
    else
        return fname
}

interface Person {
    fName: string
    lName: string
}

class Student {
    fName: string
    lName: string

    constructor(fName, lName) {
        this.fName = fName
        this.lName = lName
    }
}

function buildPerson(person: Person): string {
    return person.fName + " " + person.lName
}

const p: Person = {fName: "GOOo", lName: "Ravioli"}
console.log(buildPerson(p))
console.log(buildPerson(new Student("John", "Doe")))

const arr2: number[] = []
arr2.push(10)
arr2.push(1)
arr2.push(4)
console.log(arr2)

const myHash = new Map()
const stu = new Student("Mark", "Brown")