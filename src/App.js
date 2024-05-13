import React  from "react";
import { BrowserRouter, Route, Routes , NavLink} from "react-router-dom";
import Home from "./Home";
import About from './About'
import JoinUs from './JoinUs'
import Contact from './Contact'
import Singup from './Singup'
import DetailsCard from "./DetailsCard";
import './App.css'

function App(){
    return(
        <>
        <BrowserRouter>
        <div id="navbar"> 
        <NavLink className="tag"   to='/' activeClassName="active" >Home</NavLink>
         <NavLink className="tag" to='/About' activeClassName="active" >About</NavLink>
         <NavLink className="tag" to='/JoinUS' activeClassName="active" >JoinUs</NavLink>
         <NavLink  className="tag" to='/Contact' activeClassName="active" >Contact</NavLink>
           <NavLink className="tag" to='/Singup'activeClassName="active" >Sing-up</NavLink>
        </div>
        <Routes>
            <Route path = '/'  element={<Home/>}/>
            <Route path='/About' element= {<About/>}  />
            <Route path='/Joinus' element={<JoinUs/>}  />
            <Route path='/Contact' element={<Contact/>}  />
            <Route  path='/Singup' element={<Singup/>}/>
            <Route path="/courses/:id" element={<DetailsCard/>}/>
           
        </Routes>
        </BrowserRouter>
       
        </>
    )
}
export default App;

