
export class Student {
    // constructor will be invoked by new keyword
    constructor(sName, sAge, sEdu, sGrade) { 
        this.name = sName;
        this.age = sAge;
        this.education = sEdu;
        this.grade = sGrade;
    }

    printMyAge() {
        console.log(this.age);
    }

}