
import { useState } from 'react'

// Images
import ImageProfile from '/img/capitan-america.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='inline-block p-5 bg-violet-500 rounded-2xl' >
      <div className='container margin-auto'>
        <img src={ImageProfile} alt="" className='w-32' />
      </div>
      <div>
        <h4 className='text-center text-white font-bold'>SPA REACT TAILWIND CSS</h4>
        <p className='text-center'>Lorem, ipsum dolor.</p>
      </div>
      <div className=''>
        <button className='px-3 rounded-sm bg-blue-400 '>Ver</button>
      </div>
    </main>
  )
}

export default App
