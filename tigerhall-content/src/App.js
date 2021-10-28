
import {useState} from 'react';
import './App.css';
import {useQuery } from "@apollo/client";
import { getAllMessages  } from "./gqlSchema/index.js"

import {SearchBox} from './Component/searchBox.jsx';
import {BlogPostWithImage} from './Component/cardInfo'

function App() {
  const [Incomingdata, setIncomingdata] = useState([])
  let { data,  loading} = useQuery(getAllMessages)

  // console.log('data is : ',finalData.contentCards.edges)
    if(loading) {
      return <p>Loading</p>
    }
    if(data){
      return (
        
        <>
        <div className="Main-Search">
        <div className="App">
        <p className="searchHeading" style={{color:"white"}}>Search : </p>
         <SearchBox/>
         </div>
        </div>
        <div className="mainCard-Container">

         { 
            
           <p>{JSON.stringify(data.contentCards.edges)}</p>,
            data.contentCards.edges.map((obj, index) => {
                return(
                  <div key={index}><BlogPostWithImage data={obj}/></div>
                  
                )
          })
          }
         </div>

         
        
        </>
      );
     
    }


}

export default App;
