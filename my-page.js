
console.log("I am From HTML ");
console.log(1 + 1);


var myVar1 = "Text";
myVar1 = "another text";
console.log(myVar1);
myVar1 = 10;
console.log(myVar1);
myVar1 = true;
console.log(myVar1);
myVar1 = {
    age: 23
};

console.log(myVar1);

function executeMyLines() {
    var name = "Akash";

    name = 'AK';

    name = 'AK V';
    
    var num1 = 10;

    console.log(num1);


    var myDetails = {
        name: 'Akash',
        education: 'B.com',
        age: 22,
        printMyAge: function(){
            console.log(this.age);
        }
    };

    var myDetails1 = {
        name: 'Dinesh',
        education: 'B.com',
        age: 24,
        printMyAge: function(){
            console.log(this.age);
        }
    }

    console.log(myDetails.name);
    console.log(myDetails.printMyAge());

    myDetails.name = 'AK';

    console.log(myDetails);

    console.log(name);
}; // Declaration




executeMyLines(); // Function calling 

// var num1; // memory created

// function addTwoNumbers(num1, num2) {    
//     const result = num1 + num2;
//     console.log(result);
//}
// Commented


var addTwoNumbers = (num1, num2) => {
    console.log(num1 + num2);
}
// Lambda Expression for function

addTwoNumbers(10, 13);
addTwoNumbers("test1", "test2"); // test1test2
addTwoNumbers(11, 11111);
addTwoNumbers(1099001019, 14);


//same type of data 

// Array
// Position      0  1   2   3   4
var numArray = [10, 11, 12, 13, 11111];

 // length  => 5
 // position => 5 -1 = 4;
// Position last number will be number of element in ur array - 1

// Array position starts with zer0

console.log(numArray[0]); // 10
console.log(numArray[4]); // 11111
console.log(numArray[5]); // undefined


var myStringArray = ["test", "ressdfsd", 'asdsaaasdasdas'];

for(let str of myStringArray) {
    console.log(str);
}

console.log(myStringArray.length);

console.log(myStringArray[0]); // 10
console.log(myStringArray[2]); // 13

var student = {
    rollNo : 1,
    name: 'Test',
    year: 'tenth'
};


class Student {
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

var students = [
    new Student('Akash', 22, 'BTECH', 'A'),
    new Student('Dinesh', 24, 'BTECH', 'S'),
    new Student('Nalini', 23, 'BTECH', 'B'),
];

// Looping an array

//  For Loop

    for(let stud of students) {
        console.log(stud.grade);
        // If else
        if(stud.grade == 'B') {
            console.log("Printing student details");
            console.log(stud);
            console.log("Printed student details");
        } else {
            console.log(" Condition Failed....");
        }
    }

console.log(students[1].name);
console.log(students.length);



function printValueFromTextBox() {
    var element = document.getElementById('myTextBox');
    // console.log(document.getElementById('myTextBox').value);
    console.log(element.value);
    element.value = "This is assinged from Javascript";
    // window.open('https://www.cricbuzz.com', '_blank');

    var myPTag = document.getElementById('myPtag');
    console.log(myPTag.innerText);
    myPTag.innerText = "P tag value changed from JS";
    myPTag.classList.add('bg-blue');
    myPTag.classList.remove('bg-blue');

    // var boxElements = document.getElementsByClassName('team-box');
    // console.dir(boxElements);

    // // document.getElementsByTagName('div')

    // var element1 = document.querySelector('#myTextBox');
    // console.log(element1);

    // var boxClassELemenet = document.querySelector('.team-box');
    // console.dir(boxClassELemenet);

    // var boxClassELemenets = document.querySelectorAll('.team-box');
    // console.dir(boxClassELemenets);


}




var stud1 = new Student('Dinesh', 23, 'B.com', 'A');

console.log(stud1);

console.log(stud1.name);

console.log(stud1.printMyAge());

var stud2 = new Student('Akash', 24, 'B.S.C', 'A');

console.log(stud2);

console.log(stud2.name);

console.log(stud2.printMyAge());




