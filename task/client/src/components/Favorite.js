//import all the components needed 
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row  from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";


//expport the favorites form

export default function Favorite(props){
    return(
        <div>
        <Container> {/*creating a container for the favorited items*/}
        <h2>Favorites</h2>
        <Card style={{backgroundColor:"#d62828"}}> 

        <Row> 
        <ul>
        {props.favorites.map(item => {
            return(
                <li key={item.index} className="favList">
                <Col>
                <a 
                    href={item.collectionViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    >

                    <Image 
                    className="favImg itemImg img-responsive"
                    src={item.artworkUrl100}
                    alt={item.trackName}
                    fluid
                    roundedCircle
                    >
                    </Image>
                    </a>
                </Col>
                <Col>
                <h6>{item.trackName}</h6>
                <h6>{item.kind}</h6>
                <Button
                variant="danger"
                size="sm"
                onClick={() => props.removeFavorite(item)}
                >Delete Favorite Item
                </Button>
                </Col>
                </li>
            );
        })}
        </ul>
        </Row>
        </Card>
        </Container>
        </div>
    );
}