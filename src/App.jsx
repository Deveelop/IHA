
import Home from "./Pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
       <BrowserRouter>
     <Header/>
       <Home/>
       <Routes>
        <Route exact path="/about" element={ <About/> }/>
       </Routes>
       </BrowserRouter>
       <Footer/>
    </>
  );
}

export default App;

