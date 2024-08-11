import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Listing from './Components/Listing/Listing'
import Basket from './Components/Basket'
import Message from './Components/old/Message'
import UpdatingObject from './Components/old/UpdatingObject'
import UpdatingArray from './Components/UpdateArray'
import UpdateObject from './Components/UpdateObject'

function App() {
  const [item, setItem] = useState("")
  const courses = ["react", "dotnet", "laravel"];
  const doctors = ["aya","ahmed","tasnem","islam"];
  return (
  <div>
      {/* <Listing arr={courses} title='courses name' onSelectItem={(item)=>setItem(item)}/> */}

     {/* <Basket item={item}>
    {item==""?"":
    <h1>it is passing value</h1>}
   
  </Basket>
  <Listing arr={courses} title='courses name' onSelectItem={(item)=>setItem(item)}/>
  <Listing arr={doctors} title='doctors name' onSelectItem={(item)=>console.log(item)}/> */}
   {/* <Message></Message>
   <Message></Message>
   <Message></Message>
   <Message></Message> */}
  {/*<Message></Message>
  <Message></Message>
  <UpdatingObject></UpdatingObject>
  <UpdatingArray></UpdatingArray> */}
  {/* <UpdatingArray></UpdatingArray> */}
  <UpdateObject/>
  {/* <UpdatingArray></UpdatingArray> */}
  </div>
  )
}

export default App
