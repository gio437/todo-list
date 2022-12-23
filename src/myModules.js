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
    const priority = document.querySelector('.priority').checked;

    let id = 0;
    for (let i = 0; i < projectArr.length; i++) {
        id += 1;
    }

    const newProject = new Input(title, description, dueDate, priority, id);
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
    const remove = document.createElement('button');
    const display = document.createElement('button');
    display.classList.add('display');
    display.textContent = 'display';
    remove.classList.add('remove');
    remove.textContent = 'remove';
    for (let i = 0; i < projectArr.length; i++) {
        list.id = i;
        list.textContent = projectArr[i].title;
        list.style.fontSize = '30px';
    }
    header.appendChild(list);
    header.appendChild(display);
    header.appendChild(remove);

    display.addEventListener('click', info);
    remove.addEventListener('click', eraseList);
}

const eraseList = function() {
let num;

    if (e.target.classList.contains("take")) {
        num = parseInt(e.target.parentElement.id);
        console.log(num);
   }
}

const info = () => {
let num;

    if (e.target.classList.contains("take")) {
        num = parseInt(e.target.parentElement.id);
        console.log(num);
   }

     const information = document.querySelector(".info");
     const description = document.createElement("th");
     const dueDate = document.createElement("th");
     const priority = document.createElement('th');
     for (let i = 0; i < projectArr.length; i++) {
        description.id = i;
        dueDate.id = i;
        priority.id = i;
        description.textContent = projectArr[i].description;
        dueDate.textContent = projectArr[i].dueDate;
        if (projectArr[i].priority) {
            console.log(projectArr[i].priority);
            priority.textContent = 'Important!' + ' \u2713';
            description.style.borderBottom = "none";
            dueDate.style.borderTop = "none";
            dueDate.style.borderBottom = "none";
            priority.style.borderTop = "none";
            projectArr[i].priority = false;
        }
        else {
            description.style.borderBottom = "none";
            dueDate.style.borderTop = "none";
        }
     }
     information.appendChild(description);
     information.appendChild(dueDate);
     information.appendChild(priority);
}

class Input  {
    constructor(title, description, dueDate, priority, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
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