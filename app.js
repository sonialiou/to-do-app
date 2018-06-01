function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
       event.preventDefault();

       // get the text
       let title = newToDoText.value;

       // create a new li
       let newLi = document.createElement('li');

       // create a new input
       let checkbox = document.createElement('input');

       // create a button
       let delButton = document.createElement('button');

       // set the input's type to checkbox
       checkbox.type = "checkbox";

       // set the title
       newLi.textContent = title;

       // attach the checkbox to the li
       newLi.appendChild(checkbox);

       //attach the delete button to the li
       newLi.appendChild(delButton);

       // set the button's type to reset
       delButton.textContent = "delete";

       //todoList.removeChild(delButton);

       // attach the li to the ul
       toDoList.appendChild(newLi);

       //empty the input
       newToDoText.value = '';

       //delete button
       //newLi.addEventListener('delete', event => {

          //toDoList.removeChild(newLi);

      // });
     });



   }

window.onload = function() {
  onReady();
};
