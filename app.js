const inputText = document.querySelector(".text");
const addBtn = document.querySelector(".btn");
const itemText = document.querySelector(".item-text");
const todoItem = document.querySelector(".item");
const ulTodo = document.querySelector(".todo");
const doneTasks = document.querySelector(".done");
const clearDoneList = document.querySelector('.clearDone')

const crud = (a) => {
  // Todo item blueprint
  const addTodo = `
    <div class="item">
            <p class="item-text">${a}</p>
            <div class="btns">
            <button class="del">X</button>
            <button class="doneBtn">V</button>
            </div>
     </div>
`;

  // Adds the Todo
  ulTodo.insertAdjacentHTML("beforeend", addTodo);

  // Select the last added item
  const lastAddedItem = ulTodo.lastElementChild;

  //Deletes a task
  const deleteHandler = (event) => {
    const clickedItem = event.target;
    if (clickedItem.className.includes("del")) lastAddedItem.remove();
  };

  // Marks a task as done
  const doneTask = (event) => {
    const clickedItem = event.target;
    if (clickedItem.className.includes("done")) {
      const markDone = `
        <div class="item">
                <p class="item-text">${a}</p>
         </div>
    `;

      // Adds it to do done list
      doneTasks.insertAdjacentHTML("beforeend", markDone);
    }

    // Removes it from todo list when it is marked done
    lastAddedItem.remove();
  };

  lastAddedItem.querySelector(".del").addEventListener("click", deleteHandler);
  lastAddedItem.querySelector(".doneBtn").addEventListener("click", doneTask);
};

const clickHandler = () => {
  // Get the input from user
  const userInput = inputText.value;

  // Check if user have typed out the TODO task
  userInput === "" ? alert("no") : crud(userInput);

  // Clears textBox
  inputText.value = ""; 
  
 
};

const clearDoneHandler = () => {
    doneTasks.innerHTML = 'Done Tasks'
}

addBtn.addEventListener("click", clickHandler);
clearDoneList.addEventListener('click', clearDoneHandler)