import Navbar from "./Components/navbar";
import HomePage from "./Pages/homePage";
import { BrowserRouter , Route , Routes } from "react-router";

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

    </>
  )
}

export default App;