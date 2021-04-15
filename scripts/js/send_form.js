//Отправка данных гостя на сервер
function send_form() {
    let xhttp = new XMLHttpRequest();
    let user = `user=${document.getElementById("input").value}`;
    xhttp.open("POST", "scripts/php/response.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else {
            console.log("waiting for response");
        }
    };
    xhttp.send(user);
}
