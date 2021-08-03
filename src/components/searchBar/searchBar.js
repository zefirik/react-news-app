import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { searchTopic: "" };
}

handleChange = event => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

    render() {
        return(
            <Container className="d-flex justify-content-center">
               
                   
                <Form onSubmit={this.handleSubmit} >
                <Row className="d-flex justify-content-center">    
                <Col>
                    <Form.Group className="mb-4">
                        <Form.Control 
                            type="text" 
                            placeholder="Search topic"
                            name="topic"
                            value={this.state.searchTopic}
                            onChange={this.handleChange} 
                        />
                     </Form.Group>    
                </Col>
                <Col>          
                    <Button  type="submit" className="mb-2">
                          Search
                    </Button>
                </Col>
                </Row> 
                </Form>
               
            </Container> 
        );
    }
}

export default SearchBar;