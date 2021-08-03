import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const ArticleItem = (props) => {
    const { article } = props;
    return (
            <ListGroup.Item>
            <Container>
                <Row className="my-3">
                    <Col md>
                        <h5 className="mb-4">{article.title}</h5>
                        <p>{article.description}</p>
                        <ListGroup horizontal className="my-2">
                            <ListGroup.Item >
                            <a href={article.url}>{article.source.name}</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {article.publishedAt.split("T")[0]}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md = "auto">
                        <img src={article.urlToImage} alt="img_news" style={{ width: '18em' }}/>
                    </Col>
                </Row>
            </Container>    
            </ListGroup.Item>
    );
};


const ArticleList = (props) => {
    return(
        <ListGroup variant="flush">
            {props.articles.map((article, index) => (
                <ArticleItem article={article} key={article.title + index} />
            ))}
        </ListGroup>
    );
};

export default ArticleList;