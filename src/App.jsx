// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    
        {/* <Header /> */}
        <div className="h-32 md:h-28"></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
         
        </Routes>
        <div className="mt-4"></div>
        {/* <Footer /> */}
      
    </BrowserRouter>
  );
}

export default App;

