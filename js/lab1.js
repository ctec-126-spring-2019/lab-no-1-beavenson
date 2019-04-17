// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    let skills = ['Web Development','Gardening','Drumming','Volunteering']; //Added a square bracket (err 1)
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    let firstName = 'Bruce'; //Added semicolon and equals (err 2 and err 3)
    let lastName = 'Elgort';
    let collegeName = 'Clark College'; //Added semicolon (err 4)
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;
    //Added three dollar signs to the above line (errs 5, 6, and 7)
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';  //Changed a double quote to a single quote (err 8)
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}