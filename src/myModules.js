//import {format} from 'data-bns'

const toggleForms = () => {
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

const submitForms = () => {
    let complete = document.querySelector(".btn"); //will access the submit button on form
    complete.addEventListener("click", createProject);
}

const createProject = function()  {
    const title = document.querySelector('.title').value;
    const description = document.querySelector('.description').value;
    const dueDate = document.querySelector('.dueDate').value;
    const priority = document.querySelector('.priority').value;

    const newProject = new Input(title, description, dueDate, priority);
    projectArr.push(newProject);
    console.log(projectArr);
    displayProject();

    event.preventDefault();
}

let projectArr = [];

const displayProject = function() {
    // create dom elements for project
    const header = document.querySelector(".project");
    const list = document.createElement("th");
    for (let i = 0; i < projectArr.length; i++) {
        list.id = i;
        list.textContent = projectArr[i].title;
    }
    header.appendChild(list);
}

const info = () => {
     const header = document.querySelector(".info");
     const list = document.createElement("tr");
     list.textContent = "hello";
     header.appendChild(list);
}

class Input  {
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
    createProject,
    info,
    Input,
    toggleForms,
    submitForms,
    projectArr,
}