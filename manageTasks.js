var tasklist = [];

function task(taskName, taskPriority, taskStatus) {
    this.task_title = taskName;
    this.task_priority = taskPriority;
    this.task_status = taskStatus;
}




document.addEventListener('DOMContentLoaded', function () {


    document.querySelector("#taskform").onsubmit = function () {

        const li = document.createElement('li');
        

        let task_title = document.querySelector("#title-input").value;
        let task_priority = document.querySelector("#priority-input").value;
        let task_status = document.querySelector("#status-input").value;

        let newTask = new task(task_title, task_priority, task_status);
        tasklist.push(newTask);

        
        let new_task_html = `
                                <span class="priority-tag ${task_priority}">${task_priority}</span>
                                <span id="task-title">${task_title}</span>
                                <button class="Remove"> Remove </button>
            
                            `;
        li.innerHTML = new_task_html

        document.querySelector("#active").append(li);
        document.querySelector("#title-input").value = '';
    
        console.log(tasklist);

        return false;
        

    }

    

    document.addEventListener('click', function(event){
        element = event.target;

        if (element.className === 'remove'){
            element.parentElement.remove();
            var index = taskList.indexOf(element.parentElement);
            if(index > -1){
                taskList.splice(index, 1);
            }
            console.log(taskList);

        } else if (element.className === 'complete'){
            // How to change button to remove button???
            
            
            


        }


    });
    

    

    

   

   
});





