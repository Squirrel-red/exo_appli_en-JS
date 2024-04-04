    // on ajoute un écouteur d'événement sur le bouton pour appeler une fonction ajout
    const addBtn = document.querySelector('#btn');
    addBtn.addEventListener('click', addTask);            // add à task on click

    // on créé la fonction d'ajout
    // const addBtn = document.querySelector('#btn');
    const taskCard = document.querySelector(".todoCard");
    const tasksContainer = document.querySelector("#todoCards");


    function addTask(){
        const newTask = taskCard.cloneNode(true)          // clone the  task card
        const newDelBtn = newTask.querySelector('delBtn')
        const newTextArea = newTask.querySelector('.task')

        newTextArea.value = "New Task"                    // set new task text to "New Task"
        newDelBtn.addEventListener('click', function() {  // add delete event listener to new task
            deleteTask(newTask);                          // target the new task
        });
        tasksContainer.appendChild(newTask)               // append new task to the tasks container
        updateCount();
    }

    // on ajout un écouteur d'évenement sur le bouton pour appeler une fonction suppression
    const delBtn = document.querySelector('.delBtn');
    delBtn.addEventListener('click', function() {         // delete default task on click  
        deleteTask(taskCard);                             // target the right task
    });

    // on créé la fonction de suppression
    function deleteTask(task){
        task.remove();                                    // remove the task
    }
