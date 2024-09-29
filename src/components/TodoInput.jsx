
export default function TodoInput(props) {
    const {handleAddTodos, type, setType} = props;
    /*     const handleClick = ()=>{
        if (type && type.length)
        {
            setInput(type);
        }
        else{
            console.log('empty input');
        }
    } */
    return (
        <header>
        <input type='text' name='to-do-input' value={type} placeholder='Enter to-do...' onChange={(event)=>setType(event.target.value)}
        onKeyDown={(e) => {
        if (e.key === "Enter")
            handleAddTodos(type);
        }} />
        <button onClick={()=>{type.length ? handleAddTodos(type) :null; setType('');}}>Add</button>
        
        </header>
    )
}