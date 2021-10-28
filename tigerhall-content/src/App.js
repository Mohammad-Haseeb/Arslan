
import {useState,useRef} from 'react';
import { Input ,} from "@chakra-ui/react"
import logo from './animation/load.gif'
import './App.css';
import {useQuery } from "@apollo/client";
import { getAllMessages  } from "./gqlSchema/index.js"

import {BlogPostWithImage} from './Component/cardInfo'

import {Context} from './GloabalState/index';

function App() {
  let { data,  loading} =  useQuery(getAllMessages)
    
       let loadingState= useState(false);
   let searchState= useState("")
   const inputEl = useRef("");


 
  console.log("Checker",data)
  console.log("Check")

  const handleChange = (event) => {
     searchState[1](inputEl.current.value)
     loadingState[1](false);

  }
    if(loading) {
      return (
        <>
         <Loader/>
        </>
      )
    }
    if(data){
      return (
        
        <>
        <Context.Provider  value={searchState}>
        
        <div className="Main-Search">
        <div className="App">
          <div>
        <p className="searchHeading" style={{color:"white"}}>Search : </p>
        <Input
          bg="#003238"
          ref={inputEl}
  border="white"
          value={inputEl.current.value}
          onChange={handleChange}
          placeholder="Type Any Keyword"
          size="sm"
        />
        </div>
         </div>
        </div>
        
          <div className="mainCard-Container">

         { 
            
            data.contentCards.edges.map((obj, index) => {

                    if(searchState[0]==="" ){
                      return(
                  
                        <div key={index}>{<BlogPostWithImage data={obj}/>}</div>
                        
                      )
                    }
                    else if (obj.name.toLowerCase().includes(searchState[0].toLocaleLowerCase())){
                      setTimeout(()=>{ 
                             loadingState[1](true);
                      }, 3000)
                       if ( loadingState[0]){
                      return (

                        <div key={index}>{<BlogPostWithImage data={obj}/>}</div>

                      )

                       }else{
                             return(
                               <>
                               <Loader />
                               </>
                             )
                       }  
                    }
                    
               
          })
          }
         </div> 
         
         </Context.Provider>
        </>
      );
     
    }


}


const Loader=()=>{
  return (
    <div >
    <div  className="loader">
      <div><p style={{color:'white',}}>loading</p></div>
      <img src={logo} alt="loader"/>
    </div>
  </div>
  );
}


export default App;
