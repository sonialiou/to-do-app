function onReady() {
  const toDos = [];

  let id = '0';

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });
    newToDoText.value = '';
    function increment() {
      id++;
      return id;
    };

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

       newLi.textContent = toDo.title;

       const delButton = document.createElement('button');

       toDoList.appendChild(newLi);
       newLi.appendChild(checkbox);
       newLi.appendChild(delButton);

       delButton.textContent = "delete";

       newLi.addEventListener("click", event => {
        delButton.addEventListener("click", event => {

         toDoList.removeChild(newLi);
       })});
       renderTheUI();
    });

 }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

    renderTheUI();
  }


window.onload = function() {
  onReady();
};
