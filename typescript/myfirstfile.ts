var num1: number = 10;


function addTwoNum(num1: number, num2: number) : number {
    return num1 + num2;
}



class Student {
    // constructor
    name: string;
    age: number;

    constructor(sName: string, sAge: number) {
        this.name = sName;
        this.age = sAge;
    }

}

var stud : Student;

stud= { name: 'as', age: 12 };

var stud2 = new Student("Akash", 22);

var multiple : number | string;

multiple = 10;
multiple = "strt";

var mydata : number; // js

mydata = 10;



console.log(addTwoNum(10,12));
// console.log(addTwoNum("test1","test2"));

