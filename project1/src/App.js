import { useState } from "react";

// import Form from './Form'
function App() {
// const [isLogIn, setIsLogIn] = useState(true);
const[user, setUser] = useState({
  name :'',
  lastName:''
})
const setValue=(e)=>{
     setUser({name:(e.target.value)})
    
}

  return (
   <div>
    {/* {message} */}
    {/* <Form/> */}
    <label htmlFor="name">Name</label>
    <input type="text"  onChange={setValue}/>
    <label htmlFor="name">lastName</label>
    <input type="text"  onChange={setValue}/>
    <h1>My name is {user.name} {user.lastName}</h1>

   </div>
  );
}

export default App;
