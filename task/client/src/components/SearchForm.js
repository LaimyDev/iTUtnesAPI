//import components
import React from "react";
import Items from "./Items";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Favorite from "./Favorite";
import Footer from "./Footer";

//the code for setting initial state
export default class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorites:[],
            items:[],
            newQuery: "",
            newGenre: "",
            isLoaded: true,
            error: null
        };
    }

//here is the add to favorite function. doesnt add already aded items
    addFavorite = item => {
        const {favorites} = this.state;

        if(
            !favorites.some(
                alreadyFavorite => alreadyFavorite.trackId === item.trackId
            )
        ){
            this.setState(
                {
                    favorites: [...this.state.favorites, item]
                },
                () => console.log(favorites)
            );
        }
    };

//remove one of the items on fav list
    removeFavorites = (item, index) => {
        const { favorites} = this.state;
        console.log(favorites);
        console.log(item);
        this.setState({
            favorites: favorites.filter(favorites => favorites !== item)
        });
    };

//this function lets user input into info field be changed and allows for setting the newQUery fields state 
    handleQueryChange = e => {
        e.preventDefault();
        this.setState(
            {
                newQuery: e.target.value
            },
            () => console.log(this.state.newQuery)
        );
    };

//this is the search function it gets data from itunes api to show on site
    handleSearch = e => {

//stops continous resubmission of form
        e.preventDefault();

        const term = this.state.newQuery;
        const media = this.state.newGenre;

        if(media){
            console.log(media);

            fetch(`/search/${term}/${media}`)
            .then(res => res.json())
            .then(
                items => {
                    console.log(items);
                    this.setState(
                        {
                            items: items.items.results
                        },
                        () => console.log(items.items.results)
                    );
                },
//this returns any errors
                error => {
                    this.setState({
                        error
                    });
                }
            );
        }else { 
            console.log(media);

            fetch(`/search/${term}`)
            .then(res => res.json())
            .then(
                items => {
                    console.log(items);
                    this.setState(
                        {
                            items: items.items.results
                        },
                        () => console.log(items.items.results)
                    );
                },

                error => {
                    this.setState({
                        error
                    });
                }
            );
        }
    };

render(){
    if (this.state.error){
        return(
            <div>
            <span>Error: Invalid entry. PLease refresh and try again.</span>
            </div>
        );
    } else { //below is the container for the search, add and rmeove favorites buttons
        return (
            <div>
            <Container>
            <Header></Header>
            <Row>
            <Col lg={true} md={10}>
            <InputGroup size="lg" className="mb-3" onSubmit={this.handleSubmit}>
            <Form.Control
            type="text"
            name="search"
            placeholder="Search Song, Artist, Movie, eBook, Podcast, Short film or TV show "
            value={this.state.newQuery}
            onChange={this.handleQueryChange}
            ></Form.Control>
            </InputGroup>
            </Col>
            <Button
            variant="outline-info"
            size="sm"
            type="submit"
            onClick={this.handleSearch}
            >
            Search
            </Button>
            </Row>
            <Row>
            <Col>
            <Items
            items={this.state.items}
            addFavorite={this.addFavorite}>
            </Items>
            </Col>
            <Col lg={3}>
            <Favorite 
            favorites={this.state.favorites}
            removeFavorite={this.removeFavorites}
            ></Favorite>
            </Col>
            </Row>
            <Row>
            <Footer></Footer>
            </Row>
            </Container>
            </div>
            );
        }
    }
}