import { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [type, setType] = useState('');
  const [toggles, setToggles] = useState([]);
  const expandBtnClick = (e, index) => {
    e.preventDefault();
    const newToggles = new Array(todos.length).fill(false);
    newToggles[index] = toggles[index] ? false : true;
    setToggles(newToggles);
  };
  useEffect(() =>{
    if (!localStorage)
      return;
    let localTodos = localStorage.getItem('todos');
    if (!localTodos)
      return;
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos);
    console.log(localTodos);
  }, []);


  const persistData = (newList) =>{
    localStorage.setItem('todos', JSON.stringify({todos : newList}));
  }
  const handleAddTodos = (newTodo) => {
    const newTodoList = (todos && todos.length) ? [...todos,{name:newTodo}] : [{name:newTodo}];
    persistData(newTodoList);
    setTodos(newTodoList);
    setType('');
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
    setType(todos[index].name);
    handleDeleteTodos(index);
  }
  const handleAddDetail = (index, newDetail) =>{
    const newTodo = {name: todos[index].name, detail: newDetail};
    const newTodoList = todos.map((item, iter) => index === iter ? newTodo : item);;
    persistData(newTodoList);
    setTodos(newTodoList);
    setToggles(new Array(todos.length).fill(false));
    console.log(newTodoList);
  }
  return (
    <>
      <TodoInput type={type} setType={setType} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} toggles={toggles} handleAddDetail={handleAddDetail} expandBtnClick={expandBtnClick} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} />
    </>
  )
}

export default App
