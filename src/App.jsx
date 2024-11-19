import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Age from './components/Age.jsx';
import Name from './components/Name.jsx';
function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/age" element={<Age />} />
          <Route path="/name" element={<Name />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
