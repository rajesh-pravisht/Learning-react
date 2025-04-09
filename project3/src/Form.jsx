import { useState } from "react";

const Form = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        Object.entries(data).map(([key, value]) => {
            console.log(key,":",value);
        });
        alert("Form submitted!");
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value  
        }));
    }
      
    

    return (
        <>
            <form action="" method="get" className="form" onSubmit={handleSubmit} >
                <h1>Fill the Form</h1>

                <div>
                    <label>First Name</label><br />
                    <input type="text" name="firstname" value={data.firstname} onChange={inputHandler}
                    /><br /><br />
                </div>

                <div>
                    <label>Last Name</label><br />
                    <input type="text" name="lastname" value={data.lastname} onChange={inputHandler} /><br /><br />
                </div>

                <div>
                    <label>Email</label><br />
                    <input type="text" name="email" value={data.email} onChange={inputHandler} /><br /><br />
                </div>

                <div>
                    <label>Password</label><br />
                    <input type="password" name="password" value={data.password} onChange={inputHandler} /><br /><br />
                </div>

                <div>
                    <label>Phone</label><br />
                    <input type="text" name="phone" value={data.phone} onChange={inputHandler} /><br /><br />
                </div>
                <button className="btn">Submit</button>
            </form>
        </>
    )
}

export default Form;