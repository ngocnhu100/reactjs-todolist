import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props;
    return (
        <div>
            {todos && todos.length > 0 &&
                <ul className='main'>
                    {todos.map((item, index) => {
                        return (
                            <TodoCard {...props} key={index} index={index}>
                                <p>{item}</p>
                            </TodoCard>
                        )
                    })}
                </ul>
            }
        </div>
    )
}
