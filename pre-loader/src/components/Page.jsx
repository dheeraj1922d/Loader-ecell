import Card from './Card.jsx'

const Page=({useData})=>{

    return(
        useData.map((data)=>{
            
            <Card {...data}></Card>
        })
    )


    }


export default Page