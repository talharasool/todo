import React ,{useState}from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'



export default function TodoList() {

    const [todos, setTodos] = useState([])


    const addTodo = todo =>{ 
        // console.log("We are In on TodoList")
        // console.log("In the list component add todo")
        // console.log(todo.text)
        if (!todo.text || /^\s*$/.test(todo.text)){return}
        const newTodos = [todo,...todos]
        setTodos(newTodos)
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id != id)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) =>{
        if (!newValue.text || /^\s*$/.test(newValue.text)){return}
        const updatedVal = prev => prev.map(item => (item.id === todoId ? newValue : item));
        setTodos(updatedVal)
    }

    const completeTodo = id =>{
        console.log("Calling Completed Tdod")
        let updatedTodo = todos.map(todo => {
            if (todo.id === id){todo.isComplete = !todo.isComplete}
            return todo
        });
        let newtodos = [...todos]
        setTodos(updatedTodo)
    }

    const clearTodo = id=>{
        console.log("the id" , todos.id)
        setTodos([])
    }

    return (
        <div>
            <h1> What's the plan for today</h1> 
            <TodoForm  name = 'hell' onSubmit = {addTodo}/>
            <h1> Here is the list</h1> 
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}


