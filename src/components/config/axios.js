import axios from 'axios';

const NEWS_API_KEY = "4bc1c20e813844ef8303df33baa034d5";

export const getNewsArticles = async () => {
    try{
        const response = await axios(
            `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.data;
    console.log(`GET: Here's the list of todos`, json);
    return json;
    }
    catch (error) {
        console.log(error);
    }
  };

  export const getArticles = async (topic) => {
    const response = await axios(
      `https://newsapi.org/v2/everything?q=${topic}&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.data;
    console.log(`GET: Here's the list of search`, json);
    return json;
  };