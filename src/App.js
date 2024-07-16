import logo from './logo.svg';
import './App.css';
import Cercle from './cercle.js'
import { useState } from 'react';
function App() {
const couleurs=["#61dafb", "#7FFF00","#8B008B","#B22222","#00FF00"]
const [show,setshow]=useState(false)
  

return (
    <div className='box-content'>
      <button onClick={()=>setshow(!show)} >show more</button>  
    {show?(
    <div className="App">
      {couleurs.map((el) => <Cercle  data={el} /> )}
<Cercle/>
    </div>):null}


    </div>
  );
}

export default App;
