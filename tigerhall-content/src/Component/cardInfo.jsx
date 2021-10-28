//----------
//Components
//----------
import React from 'react';
import './card.css'

 const  Card = (props)=>{
            const {firstName, lastName,title,company} = props.data.experts[0];
            console.log("name : ",props.data.name)

            

      return(
          <div className="card">
            <img src={props.img} />
            <div className="card-body">
                {/* <h3>{props.c}</h3> */}
                <h2>{props.data.name}</h2>
                <h2>{`${firstName} ${lastName}`}</h2>
              <h2>{title}</h2>
              <p>{company}</p>
            </div>
          </div>
      )
    
  }
  
  export const BlogPostWithImage =(props)=>  {
    //    const {firstName, lastName,title,company} = props.data.experts[0];
    console.log("image", )

      return (

        <>
         
         <div className='cards'>
           <Card
            img={props.data.image.uri}
            title='What I learned from my visit to The Upside Down'
            author='Nancy Wheeler'
            data={props.data} />
        </div>
        
        </>
      )
    
  }
  
  //----------
  //Final render
  //----------
