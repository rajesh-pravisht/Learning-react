import { useState, useEffect } from "react";

function Todo() {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!inputValue) return

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue])

        setInputValue("")
        console.log(task)
    }

    const handleEvent = (e) => {
        setInputValue(e.target.value)
    }


    return (
        <>
            <h2>Todo App</h2>

            <form action="" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter the item.." value={inputValue} onChange={handleEvent} />
                <button type="submit">Add item</button>
            </form>

            <ul className="List">
                {task.map((curTask, index) => {
                    return (
                        <p key={index}>
                            {curTask}
                        </p>
                    )
                })}
            </ul>
        </>
    )
}

export default Todo;