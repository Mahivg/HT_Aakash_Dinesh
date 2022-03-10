
function getAndPrintDetails() {

    // Getting it from Interaction tags
    var user = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('date').value
    };

    //assigning to Presentaion tag
    // document.getElementById('pName').innerText = "User Name : " + user.name;
    // document.getElementById('pAge').innerText = "User Age : " + user.age;
    // document.getElementById('pEmail').innerText = "User Email : " + user.email;
    // document.getElementById('pPassword').innerText = "Entered Password : " + user.password;
    // document.getElementById('pDOB').innerText = "User DOB : " + user.dob;

    var detailElem = document.getElementById('detailsDiv');
    var newPtag = document.createElement('p');
    newPtag.innerText = "User Name : " + user.name;
    detailElem.appendChild(newPtag);

};

var getAndPrintDetailLambda = () => {
    var userName = document.getElementById('name').value;
    var userAge = document.getElementById('age').value;
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;
    var userDOB = document.getElementById('date').value;

    
    var detailElem = document.getElementById('detailsDiv');
    var newPtag = document.createElement('p');
    newPtag.innerText = "User Name : " + userName;
    detailElem.appendChild(newPtag);
}



// var subBtn = document.getElementById('submitButton');
// subBtn.addEventListener('click', getAndPrintDetailLambda);

