
const AddToDo = () => {
    function handleToDo(event) {
        event.preventDefault();
    };

    return(
        <form onSubmit={handleToDo}>
            <input placeholder="Add To-Do Item" />
            <button type="submit">Submit</button>
        </form>
    )
};

export default AddToDo;