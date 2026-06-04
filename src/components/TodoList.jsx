import { useState } from "react";
export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");   
    
    const addTodo = () => {
      if(input == "") return;
      const todo_item = {
          id: new Date(),
          text: input,
          checked: false,
      }
      setTodos([...todos, todo_item]);
      setInput("");
    };

    const deleteTodo = (id) => {      
      setTodos(todos.filter(todo => todo.id !== id));      
    };

    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
    
    return (
      <div style={{ margin: 10 }}>
        <h2>할 일 목록</h2>
        <div>        
          <input type="text" value={input} onChange={handleInputChange} />
          <button onClick={addTodo}>추가</button>
        </div>

        {        
          todos.map((todo, index) => (            
            <div key={todo.id.toString()} className="todo-item">
              <span>{todo.text}</span>   
              <button 
                onClick={(e) => deleteTodo(todo.id)} style={{ margin:5 }}
              >삭제</button>         
            </div>
          ))        
        }                 
      </div>
    );
}