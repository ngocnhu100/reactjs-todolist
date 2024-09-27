import React from 'react'
// https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
export default function TodoCard(props) {
    const {children,   
        index, handleDeleteTodos, handleEditTodos} = props;
         
  return (
    <div>                        
        <li className='todoItem'  >
        <div className='actionsContainer'>
        {children}
        <button onClick={()=>handleEditTodos(index)}>
        <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={()=>handleDeleteTodos(index)}> 
        <i className="fa-regular fa-trash-can" ></i>
        </button>
        </div>
        </li>
    </div>
  )
}
