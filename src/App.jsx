import { useState } from 'react'
// import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return ( 

  //  <h1 className='bg-green-400 text-white rounded-lg p-4 my-3'>Suhan Lakshakar</h1> 
  <div className='w-full h-screen duration-200' style={{backgroundColor: color}} >
    <div className='rounded-lg fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'> 

      <div className='flex flex-wrap justify-center px-3 py-1 gap-3 shadow-lg bg-white rounded-3xl'> 

        <button onClick={() => setcolor("red")} className='bg-red-600 hover:bg-red-700 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Red</button> 

        <button onClick={() => setcolor("green")} className='bg-green-400 hover:bg-green-600 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Green</button>  

        <button onClick={() => setcolor("orange")} className='bg-orange-400 hover:bg-orange-600 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Orange</button>  

        <button onClick={() => setcolor("blue")} className='bg-blue-500 hover:bg-blue-700 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Blue</button> 

        <button onClick={() => setcolor("gray")} className='bg-gray-400 hover:bg-gray-700 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Gray</button>

        <button onClick={() => setcolor("yellow")} className='bg-yellow-300 hover:bg-yellow-500 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>yellow</button>

        <button onClick={() => setcolor("purple")} className='bg-purple-400 hover:bg-purple-700 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Purple</button> 

        <button onClick={() => setcolor("pink")} className='bg-pink-400 hover:bg-pink-700 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Pink</button>

        <button onClick={() => setcolor("cyan")} className='bg-cyan-400 hover:bg-cyan-700 rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Cyan</button> 

        <button onClick={() => setcolor("black")} className='bg-black hover:bg-black rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-white'>Black</button>

        <button onClick={() => setcolor("white")} className='bg-white hover:bg-white rounded-full px-3 py2 mx-3 my-2 shadow-lg outline-none text-black'>White</button>

      </div> 

    </div>




  </div>


  )
}

export default App
