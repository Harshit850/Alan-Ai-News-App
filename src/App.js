import React, { useState,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

// Api key : c32cbeaba7fe483283bbaed44cb6d943
const alanKey = '69c5f2e8ea3d3f82554b0db570f25b4f2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          // alert('This code was executed');
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if(command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
        }
      }
    })
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg" alt="logo" className={classes.alanLogo}/>
      </div>
      <NewsCards 
        articles={newsArticles}
        activeArticle={activeArticle}
      />
    </div>
  )
}

export default App;
