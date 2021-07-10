//import components
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";



//this is the code for displaying the returned data from itunes api
//has buttton to favorite item and add it to list on side
export default function Items(props){
return(//below is container for returned items
    <div>
    <Container> 
    <Row>
    <h2 style={{textAlign: "center"}}>Items</h2>
    </Row>
    <Row className = "itemFav">
    <Col>
    <ul>
    {props.items.map((item, index) => (
        <Card 
        className="itemCard"
        style={{backgroundColor: "#fcbf49"}}
        >
        <li key={index}>
        <Row>
        <Col md={9}>
        <a 
        href={item.collectionViewUrl}
        target="_blank"
        rel="noopener noreferrer"
        >
        <Image
        className="itemImage img-responsive"
        src={item.artworkUrl100}
        alt={item.trackName}
        fluid
        roundedCircle
        />
        </a>
        <h5>{item.trackName}</h5>
        <h6>Artist:{item.artistName}</h6>
        <h6>Album:{item.collectionName}</h6>   
        <h6>Type:{item.wrapperType}</h6>
        </Col>
        <Row>
        <Col md={2} style={{margin:"10px"}}>
        <Button
        className="favButton"
        variant="light"
        size="sm"
        onClick={() => props.addFavorite(item)}
        >
        My Favorite!
        </Button>
        </Col>
        </Row>
        </Row>
        </li>
        </Card>
    ))}
    </ul>
    </Col>
    </Row>
    </Container>
    </div>
);
}