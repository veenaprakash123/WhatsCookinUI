import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'

const Matchlist = ({recipeMatches, setRecipeMatches}) => {

    let displayMatches = recipeMatches? recipeMatches.map((recipe)=>{

        return(
            <Card key={recipe._id} className='custom-class'>
                {/* <Card.Img variant="top" src={`${recipe.image}`} style={{ width: '10rem' , height:'10rem', marginLeft:'10'}} ></Card.Img> */}
                <Card.Title key={recipe._id}>{recipe.meal}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <Card.Link href={`/showrecipe/${recipe._id}`} key={recipe._id}>View</Card.Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        )


    }) : null 



  return (
    <div>
        {displayMatches}
    </div>
  )
}

export default Matchlist