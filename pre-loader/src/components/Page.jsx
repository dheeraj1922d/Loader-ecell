import Card from './Card.jsx'

const Page=({useData})=>{
    // console.log({useData})
    {
       useData.map((data)=>{
        // console.log({data});
        return(
             
            <Card {...data}></Card>
        ) 
        
        
    })  
    }
   

}

export default Page