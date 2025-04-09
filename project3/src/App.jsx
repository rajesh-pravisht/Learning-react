import { useState } from 'react'
// import Button from '@mui/material/Button'
// import Checkbox from '@mui/material/Checkbox';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import MyForm from './MyForm'
// import MyList from './MyList'
// import Gallery from './ValueData'
import Form from './Form'
import ExcelReader from './Excel.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyForm/> */}
      {/* <MyList/> */}
      {/* <Gallery /> */}

     <Form/>

     {/* <ExcelReader/> */}
    </>
  )
}

export default App
