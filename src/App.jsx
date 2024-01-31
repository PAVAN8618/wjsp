import { Route, Routes } from "react-router-dom";
import DataFetching from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Product from "./components/Product";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<DataFetching/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
    </Routes>
    </>
  )
}
export default App;