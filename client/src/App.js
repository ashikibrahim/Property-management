import {BrowserRouter as Router,Routes,Route,BrowserRouter,Navigate} from "react-router-dom"
import Home from "./Pages/Home";

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>} />

   </Routes>

   </BrowserRouter>

   </>
  );
}

export default App;