
const AddToDo = () => {
    function handleToDo(event) {
        event.preventDefault();
        const text = event.target.elements.addToDo.value;
        const todo = {
            id: 4,
            text,
            done: false
        };
    };

    return(
        <form onSubmit={handleToDo}>
            <input placeholder="Add To-Do Item" name="addToDo" />
            <button type="submit">Submit</button>
        </form>
    )
};

export default AddToDo;