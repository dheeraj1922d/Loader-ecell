import { useEffect, useState } from 'react'

import './App.css'
import Loader from './components/Loader.jsx'

function App() {
  
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 8000);
  

  }, []);
  

  return (
    <>
     

     {
      loader? 
      (
         <Loader></Loader>
      )
      :
      (
        <div className="wrapper">
          <h1>Hello everyone</h1>
        </div>
        
      )
      
     }
    </>
  )
}

export default App
