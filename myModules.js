const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
}

const toggleForms = () => {
    const btn = document.querySelector(".new");
    btn.addEventListener("click", openForm);
    const closeBtn = document.querySelector('.btn-cancel');
    closeBtn.addEventListener('click', closeForm);
}

const openForm = () => {
    document.getElementById("myForm").style.display = "block";
}

toggleForms();

const submitForms = () => {
    let complete = document.querySelector(".btn"); // will access the submit button on form
    complete.addEventListener("click", createProject);
}

let id = 0;

const createProject = function()  {
    const title = document.querySelector('.title').value;
    const description = document.querySelector('.description').value;
    const dueDate = document.querySelector('.dueDate').value;
    const priority = document.querySelector('.priority').checked;
    for (let i = 0; i < projectArr.length; i++) {
        id += 1;
    }
    const newProject = new Input(title, description, dueDate, priority, id);
    projectArr.push(newProject);
    console.log(projectArr);
    displayProject();

    event.preventDefault();
}

submitForms();

let projectArr = [];

const displayProject = function() {
    // create dom elements for project
    const header = document.querySelector(".project");
    const list = document.createElement("th");
    const remove = document.createElement('button');
    const display = document.createElement('button');
    display.classList.add('display');
    remove.classList.add('remove');
    display.textContent = 'display';
    remove.textContent = 'remove';
    console.log(id);
    for (let i = 0; i < projectArr.length; i++) {
        list.id = id;
        display.id = id;
        remove.id = id;
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
        eraseArray(parseInt(list.id));
    });
}

let shown = 0;

const info = function(e) {
console.log(shown);
console.log(e);

    let index = projectArr.map(function(item) {
        return item.id;
    }).indexOf(e);

     console.log(projectArr);
     const information = document.querySelector(".info");
     const description = document.createElement("th");
     const dueDate = document.createElement("th");
     const priority = document.createElement('th');
        description.id = index;
        priority.id = index;
        dueDate.id = index;
        description.classList.add('descriptionEl');
        dueDate.classList.add('dueDateEl');
        priority.classList.add('priorityEl');
        description.textContent = projectArr[index].description;
        dueDate.textContent = projectArr[index].dueDate;
        if (projectArr[index].priority) {
            console.log(projectArr[index].priority);
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
     removeInfo();
     shown = 1;
}

const removeInfo = function() {
    if (shown === 1) {
        console.log('hello');
        const currentDescription = document.querySelector('.descriptionEl');
        const currentDueDate = document.querySelector('.dueDateEl');
        const currentPriority = document.querySelector('.priorityEl');
        currentDescription.remove();
        currentDueDate.remove();
        currentPriority.remove();
        shown = 0;
    }
}

const eraseArray = function(e) {
console.log(e);
let index = projectArr.map(function(item) {
        return item.id;
    }).indexOf(e);
    projectArr.splice(index, 1);
    console.log(projectArr);
    eraseList(e);
}

const eraseList = function(e) {
    if (shown === 1) {
        const currentDescription = document.querySelector('.descriptionEl');
        const currentDueDate = document.querySelector('.dueDateEl');
        const currentPriority = document.querySelector('.priorityEl');
        currentDescription.remove();
        currentDueDate.remove();
        currentPriority.remove();
        shown = 0;
    }
     const remove = document.querySelector('.remove');
     remove.removeEventListener('click', eraseArray)
    const removeTitle = document.querySelectorAll(`[id='${e}']`);
    for (let i = 0; i < removeTitle.length; i++) {
        console.log(removeTitle);
        removeTitle[i].remove();
    }
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
