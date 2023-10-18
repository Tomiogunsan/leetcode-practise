class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
    // adding methods
    fullName(){
        return `Your name is ${this.firstName} ${this.lastName}`
    }
}

let student = new Student('eilly', 'grd', 6)
console.log(student.fullName())