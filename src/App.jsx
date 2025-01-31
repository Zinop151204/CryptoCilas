import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/Home"
import Coin from "./pages/coin/Coin"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
