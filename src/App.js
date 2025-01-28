import React from 'react'
import ReactDOM from 'react-dom/client';
import FoodContainer from './FoodContainer';
import Header from './Components/Header';
import Footer from './Components/Footer';


const root= ReactDOM.createRoot(document.getElementById("root"));


const App =()=>{
return(
 <div className='app'>
   <Header/>
   <FoodContainer/>
   <Footer/>
 </div>
 )};

root.render(<App/>);