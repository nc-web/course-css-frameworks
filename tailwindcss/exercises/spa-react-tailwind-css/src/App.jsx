
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='inline-block bg-slate-600'>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h4 className='text-center text-white font-bold'>SPA REACT TAILWIND CSS</h4>
        <p className='text-center'>Lorem, ipsum dolor.</p>
      </div>
      <div className=''>
        <button className='bg-blue-400'>Ver</button>
      </div>
    </main>
  )
}

export default App
