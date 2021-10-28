//----------
//Components
//----------
import React from 'react';
import './card.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
















// const Card = (props) => {
//   const { firstName, lastName, title, company } = props.data.experts[0];
//   console.log("name : ", props.data.name)



//   return (
//     <div className="card">
//       <div className="image-box">
//         <img src={props.img} />
//       </div>
//       <div className="card-body">
//         {/* <h3>{props.c}</h3> */}
//         {/* <h2>{props.data.name}</h2> */}
//         <h2>{`${firstName} ${lastName}`}</h2>
//         <h2>{title}</h2>
//         <p>{company}</p>
//       </div>
//     </div>
//   )

// }

export const BlogPostWithImage = (props) => {
   const {firstName, lastName,title,company} = props.data.experts[0];
     console.log("categor :  " , props.data.categories[0].name)

  return (

    <>
  
  <Card style={{ width: '23rem' }}>
  <div >
  <Card.Img variant="top" style={{ width: '100%'  , height: '200px' , objectFit:"fill"}} src={props.data.image.uri} />
  </div>
  <Card.Body style={{ padding:"10"}}>
    <p  className="category">{props.data.categories[0].name}</p>
    <p className="name">{props.data.name}</p>
    <p className="userName">
      {
        `${firstName} ${lastName}`
      }
    </p>
    <p className="title">
      {
        `${title}`
      }
    </p>
    <p className="category">
      {
        `${company}`
      }
    </p>
  </Card.Body>
</Card>


      {/* <div className='cards'>
        <Card
          img={props.data.image.uri}
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler'
          data={props.data} />
      </div> */}

    </>
  )

}

  //----------
  //Final render
  //----------
