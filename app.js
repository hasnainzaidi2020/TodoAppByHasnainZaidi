const form = document.getElementById("form")
const input = document.getElementById("input")
const todoUI = document.querySelector(".todo")
const addButton = document.getElementById("addbtn")
const deletebtn = document.getElementById("dele");
const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
todos.forEach(todo => {
  AddTodo(todo);
});
}


form.addEventListener('submit',(e)=>{
 e.preventDefault();
 AddTodo();
})

function AddTodo(todo){
 let todotext = input.value;
 
 if(todo)
 {
   todotext = todo.text;
 }

 if(todotext)
 {
   const li = document.createElement('li')
   if(todo && todo.completed)
   {
       li.classList.add('completed')
   }
   li.innerText = todotext;
   todoUI.appendChild(li);
   input.value = '';

   li.addEventListener('click', ()=> {
     li.classList.toggle('completed');
   // alert('abc')
   updateLs();
   })

   li.addEventListener('contextmenu', (e)=> {
     e.preventDefault();
     li.remove();
     updateLs();
   // alert('abc')
   })

   deletebtn.addEventListener('click',()=>{
   li.remove();
   updateLs();
 })
  updateLs() 
}
}

addButton.addEventListener('click',(e)=>{
e.preventDefault();
AddTodo();
})

function updateLs(){
 todoel = document.querySelectorAll('li');

 const todos = [];
  
 todoel.forEach(li => {
   todos.push({
     text: li.innerText,
     completed : li.classList.contains('completed')
   })
 });
 
 localStorage.setItem('todos',JSON.stringify(todos))
}
