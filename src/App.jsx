import Items from "./components/Items";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route path="/"  element={<><Navbar /><Items /><Footer/></>} />
          <Route path="/signin"  element={<><Navbar /><Signin /></>} />
          <Route path="/signup"  element={<><Navbar /><Signup /></>} />
          <Route path="/cart"  element={<><Navbar /><CartContainer/></>} />
          <Route path="/*" element={<h1> 404 </h1>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
