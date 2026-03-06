// Create variables to access the DOM
const newTodo = document.querySelector('#new-todo')  // textbox for user input
const button = document.querySelector('#add-button')
const todoList = document.querySelector('.todo-list')  // ul for list items
const clearButton = document.querySelector('#clear-button')

// Set focus to textbox when page loads
newTodo.focus()

// When the page loads, get the list from local storage, store it in todos variable
let todos = JSON.parse(localStorage.getItem('todoList')) || []

// Create arrow function called renderTodos that adds list item to DOM .todo-list unordered list
// Use an array method to loop through list of items (not a for loop)
const renderTodos = () => {

    // Clear the li's before we recreate the list below in loop
    todoList.innerHTML = ''

    // Loop through todos array
    todos.forEach(todo => {
        // Create new list items
        const li = document.createElement('li')
        li.textContent = todo.text  // assign user input to li item
        // Add list item to the DOM ul
        todoList.append(li)
    })
}

// Call the renderTodos function when the page loads to display existing list items
renderTodos()

// When user clicks the button, get the input from the #new-todo textbox
button.addEventListener('click', () => {
    const input = newTodo.value

    // add new list item to the list
    todos.push({ text: input, completed: false })

    // When the user adds a new item to the list, add it to local storage
    localStorage.setItem('todoList', JSON.stringify(todos))

    // Clear textbox for new input & reset focus
    newTodo.value = ''
    newTodo.focus()

    // Call the renderTodos function again to add the new item to the list in HTML
    renderTodos()
})

// Option to clear the list
clearButton.addEventListener('click', () => {
    // Clear the array/list
    todos = []

    // Remove items from localStorage
    localStorage.removeItem('todoList')

    // Clear the list in the DOM ul
    todoList.innerHTML = ''

    // Reset focus to textbox
    newTodo.focus()
})











