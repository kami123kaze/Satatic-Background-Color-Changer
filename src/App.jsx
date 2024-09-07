import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#234')

  return (
  <div className="w-full h-screen duration-200 "
   style = {{backgroundColor: color}}>
  
  <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2 " style={{backgroundColor : ""}}>

    <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">

       <button className="outline-none px-4 py-1 rounded-full"
       style={{backgroundColor:"beige"}}
       onClick={()=>setColor("Beige")}>Beige</button>

       <button className="outline-none px-4 py-1 rounded-full"
       style={{backgroundColor:"silver"}}
       onClick={()=>setColor("Silver")}>Silver</button>

       <button className="outline-none px-4 py-1 rounded-full"
       style={{backgroundColor:"orange"}}
       onClick={()=>setColor("orange")}>Orange</button>

    </div>
  </div>
</div>
  )
}

export default App
