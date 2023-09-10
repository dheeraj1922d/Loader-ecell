import { useEffect, useState } from 'react'

import './App.css'
import Loader from './components/Loader.jsx'
import './assets/data.json'
import Page from './components/Page.jsx'


function App() {
  
  const [loader, setloader] = useState(true);
  const [useData, setData]=useState({});
  
  const getUserData=async ()=>{
      try{
        //fetching sample api 
        const response =await fetch("https://thapatechnical.github.io/userapi/users.json");
        
        const myData=await response.json();
        //  console.log(myData);
        setData(myData);

        setloader(false);
      }

      catch(error){
          console.log(error);
      }
  }

  useEffect(() => {
    getUserData(); 
  

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
          
          <Page useData={useData}></Page>
        
        </div>
        
      )
      
     }
    </>
  )
}

export default App
