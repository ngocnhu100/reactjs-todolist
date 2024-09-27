import { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [type, setType] = useState('');
  useEffect(() =>{
    if (!localStorage)
      return;
    let localTodos = localStorage.getItem('todos');
    if (!localTodos)
      return;
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos);
  }, []);


  const persistData = (newList) =>{
    localStorage.setItem('todos', JSON.stringify({todos : newList}));
  }
  const handleAddTodos = (newTodo) => {
    const newTodoList = (todos && todos.length) ? [...todos,newTodo] : [newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  const handleDeleteTodos = (index) =>{
    const newTodoList = todos.filter((todos, iter)=>{
      return iter != index;
    });
    // dùng todos.splice thay đổi array trước khi gán cho newTodoList, lúc này item đứng sau
    // có index của item vừa bị xóa, todos list trên web cập nhật lại, sau đó lại setTodos
    // => vấn đề đồng bộ hóa, chỉ được dùng setTodos để thay đổi array todos
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  const handleEditTodos = (index) =>{
    setType(todos[index]);
    handleDeleteTodos(index);
  }
  return (
    <>
      <TodoInput type={type} setType={setType} handleAddTodos={handleAddTodos}/>
      <TodoList  handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>
    </>
  )
}

export default App
