import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
  import { Table } from 'reactstrap';

const Post = ({ props, completed, image, content, category, amount, title, slug, author, date, authorImage}) => {
  return (
 
      
       
         <Card className="card">
           <CardBody>
           <div className="author-subtitle"><CardSubtitle><img className="author-image" src={authorImage}></img><p>{author}</p><p className="date">{date}</p></CardSubtitle></div>
           <CardImg className="card-image" src={image} top-width="100%">
          </CardImg>
      
          <CardTitle>{title}</CardTitle>
       
          <CardText>{content}</CardText>
  
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
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
}

export default Post
