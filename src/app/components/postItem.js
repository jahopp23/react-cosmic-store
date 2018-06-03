import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import { Table } from 'reactstrap';

const Post = ({ props, completed, image, description, title, slug, author, date, authorImage}) => {
  return (
 
      
       
         <Card className="card">
           <CardImg className="card-image" src={image} top-width="100%">
          </CardImg>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>posted by: {author}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Buy Now</Button>
        </CardBody>
      </Card>
      
   
  )
}

Post.propTypes ={
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Post
