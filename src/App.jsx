
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show'
import Header from './pages/Header'
import Update from './pages/update'

function App() {

  return (
    <div class="bg-zinc-800  text-center text-white font-bold h-dvh
">
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/show' element={<Show />} />
         <Route path='/updateData/:index' element={<Update />} />
         

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
