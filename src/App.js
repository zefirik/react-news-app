import React from "react";
import { Container, Row } from "react-bootstrap";
import { getArticles } from "./components/config/axios"
import ArticleList from "./components/articleList/articleList";
import SearchBar from "./components/searchBar/searchBar";

class App extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "",
  };

  searchForTopic = async (topic) => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } 
    catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };
  
  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults,
    } = this.state;

    return (
   <Container>
     <Row>
       <h2 className="d-flex justify-content-center my-3">  Search for a topic</h2>
       <SearchBar searchForTopic={this.searchForTopic} />
     </Row>
        <p className="d-flex justify-content-center"> Powered by <a href="https://newsapi.org/" > NewsAPI.org</a></p>
        {loading && (
          <p className="d-flex justify-content-center">Searching for articles...</p>
        )}
         {(articles.length > 0) && (
          <p className="d-flex justify-content-center">
            Found {totalResults} articles on {searchTopic}
          </p>
        )}
        <hr/> 
     <Row>
      {(articles.length > 0) && <ArticleList articles={articles} />}
      {apiError && <p>Could not fetch any articles. Please try again.</p>}
     </Row>
   </Container>
    )}
}

export default App;
