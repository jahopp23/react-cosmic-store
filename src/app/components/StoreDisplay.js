import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'

export default class StoreDisplay extends React.Component {
    render(){
        return(
        <div> 
          <Card body inverse color="primary" className="intro-card">
            <CardBody>
                <CardText>Sell products in the cloud with CosmicJS + ReactJS.</CardText>
                 </CardBody>
                    </Card>
            </div>
        );
    }
}                  
