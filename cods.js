
var = todos = ['item 1', 'item 2', 'item 3'];

function displayTodos(){
console.log('My Todos:', todos);
}

//it should have a value to add todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

//it should have a value to delete todos
function deleteTodo(position){
  todos.splice(position,1);
    displayTodos();
}

//it should have a value to change todos
function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();  
}

//Object
{
var myComputer = {
	operatingSystem: 'mac',
	screenSize: '15 inches',
	purchaseYear: 2011
};
//this keyword

var gordon ={
   name: 'Gordon',
   sayName: function(){
    console.log(this.name);
   
   }
}

