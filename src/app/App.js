import React from 'react'
import { Route, Link } from 'react-router-dom'
import Post from './containers/Post'
import Slug from './containers/Slug'
import { Container, Row, Col } from 'reactstrap';
import StoreHeader from './components/StoreHeader';


const Routes = () => (
 
  <div>
  <StoreHeader />

     <Route exact path="/" component={Post} />
      <Route exact path="/:slug" component={Slug} />
      </div>    

      
)

export default Routes
