import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Register from "./components/Register"
import isAuthenticated from "./utils/isAuthenticated"
import Home from "./components/Home"
import MisServicios from "./components/MisServicios"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Private Routes */}

        {/* Public Routes */}
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route index element={<Home/>} />
          <Route path="services" element={<MisServicios/>} />

      </Route>
    </Routes>
  )
}

export default App
