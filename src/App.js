import React,{useState} from 'react';
import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form'
import { Todolist } from './components/Todolist';


const App = () => {
  // 1.For tracking the user input we use the first hook. 2. For tracking todo list item we use second hook
  const [input,setInput] = useState('')
  const [todos,settodos] = useState([])
  const [editTodo,setEditTodo] = useState(null)
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form 
             input={input}
             setInput={setInput}
             todos={todos}
             settodos={settodos}
             editTodo={editTodo}
             setEditTodo={setEditTodo}
          />
        </div>   
        <div>
          <Todolist todos={todos} settodos={settodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
