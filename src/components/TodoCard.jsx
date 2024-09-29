import { useState, useEffect } from 'react'
import TodoDetails from './TodoDetails';

// https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
export default function TodoCard(props) {
  const { children,
    index, toggle, handleDeleteTodos, handleEditTodos, expandBtnClick, handleAddDetail } = props;
  const [hover, setHover] = useState(false);
  const [detailType, setDetailType] = useState('')
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div>
      <li className='todoItem'>
        <div className='actionsContainer'>
        {children.name}
        <TodoDetails/>
          <button onClick={() => handleEditTodos(index)}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  tabIndex="-3">
            {hover ? "Edit to-do will remove its description!" : null}
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDeleteTodos(index)}>
            <i className="fa-regular fa-trash-can" ></i>
          </button>                                
          <button onClick={(e) => expandBtnClick(e, index)}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          {toggle ? <div className='detail-box'>
            <textarea className='todoItem' type='text' value={detailType} placeholder={children.detail? children.detail : 'Add detail...'} onChange={(event) => setDetailType(event.target.value)}
            onMouseDown={() => setDetailType(children.detail)}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                handleAddDetail(index, detailType);
              }} />
            <button onClick={() => handleAddDetail(index, detailType)}>
            <i className="fa-solid fa-check"></i>
            </button>
          </div> : null}
          </div>
      </li>
    </div>
  )
}
