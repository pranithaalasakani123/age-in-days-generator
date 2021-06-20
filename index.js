function ageInDays(){
    var userYear =  prompt('what is your birth year ?');

let today = new Date();
let year = today.getFullYear() ;

let MainYear = year - userYear;

let totalDays = MainYear * 365;

var h1 = document.createElement('h1');

var textAnswer = document.createTextNode('You are ' + totalDays + ' days old' );

h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer)
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}