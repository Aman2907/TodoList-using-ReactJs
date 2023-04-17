import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export const Todolist = ({ todos, settodos, setEditTodo }) => {

  // const root = ReactDOM.createRoot(document.getElementById('root'));

  const handleDelete = ({ id }) => {
    settodos(todos.filter((todo) => todo.id !== id)
    )
  }

  const handleComplete = (todo) => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    )
  }

  const handleedit = ({ id }) => {
    const findtodo = todos.find((todo) => todo.id === id)
    setEditTodo(findtodo)
  }


  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input type='text' value={todo.title} className='list' onChange={(event) => event.preventDefault()} />
          <div>
            <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
              <TaskAltIcon />
            </button>

            <button className='button-edit task-button' onClick={() => handleedit(todo)} >
              <BorderColorIcon color="warning" />
            </button>

            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
              <DeleteIcon color='primary' />
            </button>


          </div>
        </li>
      ))}
    </div>
  )
}

