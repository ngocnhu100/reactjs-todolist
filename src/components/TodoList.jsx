import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos , toggles} = props;
    return (
        <div>
            {todos && todos.length > 0 &&
                <ul className='main'>
                    {todos.map((item, index) => {
                        return (
                            <TodoCard {...props} toggle={toggles[index]} key={index} index={index}>
                            {item}
                            </TodoCard>
                        )
                    })}
                </ul>
            }
        </div>
    )
}
