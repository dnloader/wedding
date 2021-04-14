let test = document.createElement('p');

function send_form() {
    let xhr = new XMLHttpRequest();

    let user = document.getElementById("input").nodeValue;
    let answer = document.getElementsByName("radio");

    console.log(user);
}