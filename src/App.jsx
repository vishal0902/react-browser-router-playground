import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const Dashboard = lazy(()=>import("./components/Dashboard"))
  const Landing = lazy(()=>import("./components/Landing"))


  return (
    <div>
      <BrowserRouter>
        <TopBar></TopBar>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback="" ><Dashboard/></Suspense>}/>
          <Route path='/' element={<Suspense fallback="" ><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function TopBar () {
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={()=>navigate('/')}>Landing</button>
      <button onClick={()=>navigate('/dashboard')}>Dashboard</button>
    </div>
  )
}


export default App
