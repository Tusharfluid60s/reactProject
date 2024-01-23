// import { Button } from "@chakra-ui/react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Signup from "./components/Signup";



function App (){
return(
  
<>
<Router>
<Header/>

{/* <Button py={"100px"} m={"10px"} colorScheme={"messenger"}>Button</Button> */}
{/* here m is margin and py is padding but when you white padding its also work */}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/upload" element={<Upload/>}/>
    <Route path="/videos" element={<Videos/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    
    
  </Routes>
  <Footer/>
</Router>
</>






);
}
export default App;