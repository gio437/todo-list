//import {format} from 'data-bns'

const addProject = () => {
    const btn = document.querySelector(".new");
    btn.addEventListener("click", openForm);

    const closeBtn = document.querySelector('.btn-cancel');
    closeBtn.addEventListener('click', closeForm);
}

const openForm = () => {
    document.getElementById("myForm").style.display = "block";
}

const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
}

const project = function()  {
    const title = document.querySelector('.title').value;
    const description = document.querySelector('.description').value;
    const dueDate = document.querySelector('.dueDate').value;
    const priority = document.querySelector('.checkList').value;

    let header= document.querySelector(".project");
    let list = document.createElement("th");
    list.textContent = "hello";
    header.appendChild(list);
}
const info = () => {
     const header = document.querySelector(".info");
     const list = document.createElement("tr");
     list.textContent = "hello";
     header.appendChild(list);
}

class input  {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export {
    openForm,
    closeForm,
    project,
    info,
    input,
    addProject,
}