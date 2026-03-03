 
const loadTodo = () =>{
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayTodo(data)
    })
}

const displayTodo = (todos)=>{
    // 1. get parent;
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML="";

    todos.forEach(todo =>{
        console.log(todo)
        // 2. create HTML Element;
        const todoCard = document.createElement('div');
        todoCard.className='todo-card'
        todoCard.innerHTML=`
        <p> ${
            todo.completed == true
             ? `<i class="fa-solid fa-square-check"></i> completed` : `<i class="fa-regular fa-square-check"></i> not complete`
        }</p>
        <p><span>id:</span> ${todo.id}</p>
        <p><span>title:</span> ${todo.title}</p>
        <p><span>userId:</span> ${todo.userId}</p>
         
        `;

        // 3. append todo card to parent;
        todoContainer.appendChild(todoCard)
    })

}

loadTodo()