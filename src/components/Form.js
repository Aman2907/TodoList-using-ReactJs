import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';

// Form.js is resposible for the adding the list item into our application

export const Form = ({ input, setInput, todos, settodos ,editTodo, setEditTodo }) => {
    
    const updateTodo = (title,id,completed) =>{
      const newTodo = todos.map((todo) => 
        todo.id === id ? { title , id, completed } : todo
      )
      settodos(newTodo);
      setEditTodo("")
    }
    useEffect(() =>{
      if(editTodo){
        setInput(editTodo.title)
      }else{
        setInput("")
      }
    },[setInput,editTodo])

    const onInputChange = (event) =>{
        setInput(event.target.value)
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        
        if(!editTodo){
          settodos([...todos, {id: uuidv4(), title:input, completed: false}]);
          setInput("")
        }else{
          updateTodo(input,editTodo.id, editTodo.completed)
        }
        // settodos([...todos, {id: uuidv4(), title:input, completed: false}]);
        // setInput("")
    }
  return (
    <form onSubmit={onFormSubmit}>
       <input type='text' 
       placeholder='Enter Your thought...' 
       className='task-input' 
       value={input} required 
       onChange={onInputChange} />
       <button className='button-add' type='submit'>Add</button>
    </form>
  )
}

