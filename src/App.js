import React from "react";
import { Container, Row } from "react-bootstrap";
import { getNewsArticles } from "./components/config/axios"
import ArticleList from "./components/articleList/articleList";

class App extends React.Component {
  state = {
    articles: [],
    apiError: "",
  };

  async componentDidMount() {
    try {
      const response = await getNewsArticles();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }
  
  render() {
    const { articles, 
            apiError } = this.state;

    return (
   <Container>
     <Row>
       <h2 className="d-flex justify-content-center"> Ukrainian news</h2>
     </Row>
     <Row>
      {articles.length > 0 && <ArticleList articles={articles} />}
      {apiError && <p>Could not fetch any articles. Please try again.</p>}
     </Row>
   </Container>
    )}
}

export default App;
