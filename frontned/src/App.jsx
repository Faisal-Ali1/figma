import Navbar from "./Components/navbar";
import HomePage from "./Pages/homePage";
import { BrowserRouter , Route , Routes } from "react-router";
import Footer from "./Components/footer";

function App(){
  return(
    <>
    <nav>
      <Navbar/>
    </nav>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>

    <Footer/>

    </>
  )
}

export default App;