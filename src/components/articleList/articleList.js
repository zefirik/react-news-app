import React from "react";
import { Container, Card, Row} from "react-bootstrap";

const ArticleItem = (props) => {
    const { article } = props;
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={article.urlToImage} className = "mt-5"/>
                <Card.Body>
                    <Card.Title className = "my-3">{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> 
                        {article.publishedAt.split("T")[0]}
                    </Card.Subtitle>
                    <Card.Text className = "my-3">
                        {article.description}
                    </Card.Text>
                    <Card.Link href={article.url}>{article.source.name}</Card.Link>
                </Card.Body>
            </Card>
    );
};


const ArticleList = (props) => {
    return(
            <Container>
                <Row className="d-flex justify-content-center">
                {props.articles.map((article, index) => (
                    <ArticleItem article={article} key={index} />
                ))}
                </Row>
            </Container>
    );
};

export default ArticleList;