//Создание формы главной страницы
function main_button_handler() {    //кнопка для создания формы
    let button = document.getElementById("main_button");
    button.onclick = action;
}

function action() {

    let form = document.createElement("form");
    let input = document.createElement("input");
    let submit = document.createElement("input");
    let br = document.createElement("br");
    let br1 = document.createElement("br");
    let div = document.createElement("div");
    let div1 = document.createElement("div");

    let rem_button = document.getElementsByClassName("button").item(0);

    rem_button.remove();

    div.className = 'div';
    div1.className = 'div';

    input.type = 'text';
    input.id = 'input';
    input.placeholder = 'Ф.И.О';
    input.required = true;


    submit.type = 'submit';
    submit.id = 'submit';
    submit.value = 'Отправить';
    submit.onclick = send_form;


    document.body.appendChild(form);
    form.appendChild(input);
    form.appendChild(br);
    form.appendChild(div);
    form.appendChild(div1);
    form.appendChild(br1);
    form.appendChild(submit);
}

main_button_handler();