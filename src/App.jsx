import Items from "./components/Items";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Cart from "./components/cart";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route path="/"  element={<><Navbar /><Items /></>} />
          <Route path="/signin"  element={<><Navbar /><Signin /></>} />
          <Route path="/signup"  element={<><Navbar /><Signup /></>} />
          <Route path="/cart"  element={<><Navbar /><CartContainer/> </>} />
      </Routes>
      </Router>
    </>
  )
}

export default App