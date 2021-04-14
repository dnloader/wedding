
function main_button_handler() {
    let button = document.getElementById("main_button");
    button.onclick = action;
}

function action() {

    let form = document.createElement("form");
    let input = document.createElement("input");
    let radio_t = document.createElement("input");
    let radio_f = document.createElement("input");
    let submit = document.createElement("input");
    let br = document.createElement("br");
    let br1 = document.createElement("br");
    let yes = document.createTextNode("Да, прийду!");
    let no = document.createTextNode("Нет, не прийду.");
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

    radio_t.className = 'radio';
    radio_t.name = 'radio';
    radio_t.type = 'radio';
    radio_t.value = 'true';
    radio_t.id = 'true';
    radio_t.required = true;

    radio_f.className = 'radio';
    radio_f.name = 'radio';
    radio_f.type = 'radio';
    radio_f.value = 'false';
    radio_f.id = 'false';
    radio_f.required = true;

    submit.type = 'submit';
    submit.id = 'submit';
    submit.value = 'Отправить';
    submit.onsubmit = send_form;


    document.body.appendChild(form);
    form.appendChild(input);
    form.appendChild(br);
    form.appendChild(div);
    div.appendChild(radio_t);
    div.appendChild(yes);
    form.appendChild(div1);
    div1.appendChild(radio_f);
    div1.appendChild(no);
    form.appendChild(br1);
    form.appendChild(submit);
}

main_button_handler();