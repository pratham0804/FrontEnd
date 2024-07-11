

const taskList = [];

const addTask = function() {
  let taskname = document.querySelector('.Todo-entries');

  let taskDueDate = document.querySelector('.date-selector');

  taskList.push({
    name: taskname.value,
    dueDate: taskDueDate.value
  });
  
  taskname.value = "";
  // console.log(taskList);

  printTasks();
}




//  displays task on document 
function printTasks(){

    // **** this if condition code by me....
  if(taskList.length === 0) {
    document.querySelector('.container').innerHTML = '';
    }

  let elementHTML = '';
  taskList.forEach(function(todoObject , index){
    
    const { name , dueDate}= todoObject;
    
    elementHTML += `
    <p>
    ${todoObject.name} </p> <p>${todoObject.dueDate} </p>
    <button onclick="
      taskList.splice(${index},1);
      printTasks();
    "
    >
      Delete
    </button>
  
    
    `;

    document.querySelector('.container').innerHTML = elementHTML ; 
  });
  
}



