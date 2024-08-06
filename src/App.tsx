import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Listing from './Components/Listing'
import Basket from './Components/basket'

function App() {
  const [item, setItem] = useState("")
  const courses = ["react", "dotnet", "laravel"];
  const doctors = ["aya","ahmed","tasnem","islam"];
  return (
  <div>
     <Basket item={item}>
    {item==""?"":
    <h1>it is passing value</h1>}
   
  </Basket>
  <Listing arr={courses} title='courses name' onSelectItem={(item)=>setItem(item)}/>
  <Listing arr={doctors} title='doctors name' onSelectItem={(item)=>console.log(item)}/>
  </div>
  )
}

export default App
