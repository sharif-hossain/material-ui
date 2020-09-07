import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';
import axios from 'axios';

function App() {
  const [articles,setArticles] = useState([])
    // useEffect(()=>{
    //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6571931580844b0a86c0f012347a191a')
    //   .then(res=> res.json())
    //   .then(data => setArticles(data.articles))
    // },[])
    useEffect(()=>{
      const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=6571931580844b0a86c0f012347a191a'
      axios(url)
      .then(data => console.log(data.data.articles))
    },[])
  return (
    <div className="App">
       <h1>Top Heading :{articles.length}</h1>
      {
             
          articles.map(article =><News article={article}></News>)
      }
    </div>
  );
}

export default App;
