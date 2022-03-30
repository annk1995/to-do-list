var addToDoButton =document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
    var paragragh = document.createElement('p')
    paragragh.innerText =inputField.value;
    toDoContainer.appendChild(paragragh);
})