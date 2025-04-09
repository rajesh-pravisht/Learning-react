import { useState } from "react";

function Dashboard() {
    const[flag, setFlag]=useState(false)
    const [data, setData] = useState({})

    const createToDo = () => {
        setFlag(true)
        console.log(flag && data)
    }
        const change = (e) => {
            setFlag(false)
            setData(e.target.value)
            
        }
        const clear = (e) =>{
           setData('')
        }
    

    return (
        <>
            <div className="container">
                <h1 className="heading">ToDo list</h1>

                <div className="create">
                    <input type="text" className="input" onChange={change} placeholder="Add item..." />
                    <button className="btn" onClick={createToDo} >Create</button>
                </div>

                <div className="todo">
                <h3>{flag && data}</h3>
                </div>
            </div>


        </>
    )
}

export default Dashboard;