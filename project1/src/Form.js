import { useState } from 'react';
import './App.css';

function Form() {
  const formValue = { username: "", password: "" };
  const [userdata, setUserdata] = useState(formValue);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("User id:", userdata.username, "Password:", userdata.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata({
      ...userdata,
      [name]: value
    });
  };

  return (
    <div className="Container">
      <form className='form' onSubmit={submitHandle}>
        <h2>Login Form</h2>
        <label htmlFor="username">User Name</label><br />
        <input
          type="text"
          name="username"
          value={userdata.username}
          onChange={handleChange}
        /><br />
        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          name="password"
          value={userdata.password}
          onChange={handleChange}
        /><br />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
