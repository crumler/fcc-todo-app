import { useRef } from 'react';

const AddToDo = ({ setTodos }) => {
    const inputRef = useRef();

    function handleToDo(event) {
        event.preventDefault();
        let text = event.target.elements.addToDo.value;
        const todo = {
            id: Math.floor(Math.random() * 1000),
            text,
            done: false
        };
        setTodos(prevTodos => {
            return prevTodos.concat(todo);
        });
        inputRef.current.value = '';
    };

    return(
        <form onSubmit={handleToDo}>
            <input placeholder="Add To-Do Item" name="addToDo" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    )
};

export default AddToDo;