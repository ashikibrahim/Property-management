import {BrowserRouter as Router,Routes,Route,BrowserRouter,Navigate} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Dashboard from './Pages/Dashboard'
import AddProperty from './Pages/AddForm'
import ViewProperty from "./Pages/ViewProperty";

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/add-property" element={<AddProperty/>} />
    <Route path="/view-property" element={<ViewProperty/>} />
   </Routes>

   </BrowserRouter>

   </>
  );
}

export default App;
