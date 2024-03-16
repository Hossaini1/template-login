import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Login from "./pages/Login"
import { Routes, Route, Navigate } from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage"
import NavBar from "./components/NavBar"

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Route>

      </Routes>
    </div>

  )
}
export default App
