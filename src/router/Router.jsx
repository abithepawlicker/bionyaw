import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register.jsx';
import Profile from '../pages/Profile';
import Notfound from '../pages/Notfound';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/*" element={<Notfound />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
