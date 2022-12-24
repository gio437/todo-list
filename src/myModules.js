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

    display.addEventListener('click', () => {
        info(parseInt(list.id));
    });
    remove.addEventListener('click', () => {
        eraseList(parseInt(list.id));
    });
}

let shown = 0;

const info = function(e) {
console.log(shown);
console.log(e);

     const information = document.querySelector(".info");
     const description = document.createElement("th");
     const dueDate = document.createElement("th");
     const priority = document.createElement('th');
        description.id = e;
        description.classList.add('description');
        dueDate.id = e;
        dueDate.classList.add('dueDate');
        priority.id = e;
        priority.classList.add('priority');
        description.textContent = projectArr[e].description;
        dueDate.textContent = projectArr[e].dueDate;
        if (projectArr[e].priority) {
            console.log(projectArr[e].priority);
            priority.textContent = 'Important!' + ' \u2713';
            description.style.borderBottom = "none";
            dueDate.style.borderTop = "none";
            dueDate.style.borderBottom = "none";
            priority.style.borderTop = "none";
            //projectArr[e].priority = false;
        }
        else {
            description.style.borderBottom = "none";
            dueDate.style.borderTop = "none";
        }
     information.appendChild(description);
     information.appendChild(dueDate);
     information.appendChild(priority);

     if (shown === 1) {
        console.log('hello');
        const removeDescription = document.querySelector('.description');
        removeDescription.remove();
        const removeDueDate = document.querySelector('.dueDate');
        removeDueDate.remove();
        const removePriority = document.querySelector('.priority');
        removePriority.remove();
        shown = 0;
    }
    shown = 1;
}

const eraseList = function(e) {
console.log(e);

let index = projectArr.map(function(item) {
        return item.id;
    }).indexOf(e);
    projectArr.splice(index, 1);
    console.log(projectArr);
    shown = 0;
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