import React,{useState} from 'react'

//MARK This is form and we are taking input here....
function TodoForm(props) {

   const [input,setInput] = useState("")
   
   const handleChange = e =>{
    setInput(e.target.value)
   }
    const handleSubmit = e =>{
        e.preventDefault();
        console.log("Handling Submit")
        console.log("We are out from handle submit")

        props.onSubmit({  
            id: Math.floor(Math.random() * 10000),
            text: input
        })  
        setInput("")
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type='text' 
            placeholder='Add your task' 
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            />
            <button className="todo-button" >Add Todo</button>
        </form>
    )
}

//
//Why we use this statement?
export default TodoForm
