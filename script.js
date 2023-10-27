const input = document.getElementById('input');
const list = document.getElementById('todos');


function add() {
    let text = document.createElement("li");
    let deletebutton = document.createElement("button");
    let editbutton = document.createElement("button"); 

    deletebutton.setAttribute("id","button");
    editbutton.setAttribute("id","button");

    text.innerHTML = input.value;
    deletebutton.innerText = "Remove";
    editbutton.innerText = "Edit";

    text.appendChild(deletebutton);
    text.appendChild(editbutton);

    list.setAttribute("class","li");
    list.appendChild(text);
    deletebutton.addEventListener('click', () => remove(text));
    editbutton.addEventListener('click', () => edit(text));
}

function edit(text){
}

function remove(text) {
    list.removeChild(text);
}












