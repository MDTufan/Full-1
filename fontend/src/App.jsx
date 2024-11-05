import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingUp from './pages/SingUp';
import SingIn from './pages/SingIn';
import Poject from './pages/Poject';
import Dashboard from './pages/Dashboard';
export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About /> } />
        <Route path='/poject' element={<Poject />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/singin' element={<SingIn />} />
        
      </Routes>
      
    </BrowserRouter>
  )
}
// export default function About() {
//   return (
//    <h1>dd</h1>
//   )
// }
