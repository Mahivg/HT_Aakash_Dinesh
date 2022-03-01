
console.log("I am From HTML ");
console.log(1 + 1);

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

    console.log(myDetails.name);
    console.log(myDetails.printMyAge());

    myDetails.name = 'AK';

    console.log(myDetails);

    console.log(name);
}; // Declaration




executeMyLines(); // Function calling 

// var num1; // memory created

function addTwoNumbers(num1, num2) {    
    const result = num1 + num2;
    console.log(result);
}

addTwoNumbers(10, 13);
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

var students = [
    {
        rollNo : 1,
        name: 'Test',
        year: 'tenth',
        grade: 'A'
    },
    {
        rollNo : 2,
        name: 'Test1',
        year: 'tenth',
        grade: 'B'
    },
    {
        rollNo : 3,
        name: 'Test1',
        year: 'tenth',
        grade: 'A'
    }
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





