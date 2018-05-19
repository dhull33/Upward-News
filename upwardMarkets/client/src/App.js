import React, { Component } from "react"
// import { connect } from "react-redux";
import "./App.css"
import SearchNewsBar from "./components/searchBar"
import Header from "./components/header";
import HeadLine from "./components/headLine"
import { Button } from "reactstrap"
// import getMainHeadLine from './utils/getHeadLineNews'
import MarketNews from './components/MarketNews'

const fetch = window.fetch;

class App extends Component {
  constructor() {
    super();
    this.newsAPIKey = process.env.REACT_APP_NEWS_API_KEY
    this.state = {
      error: null,
      isLoaded: false,
      headLines: [],
      marketNews: [],
      topHeadLine: []
    };
  }

  buildNewsAPI() {
    return (
      "https://newsapi.org/v2/top-headlines?" +
      "country=us" + '&category=business' +
      "&apiKey=" +
      this.newsAPIKey
    );
  }

  getHeadLineNews() {
    fetch(this.buildNewsAPI())
      .then(res => res.json())
      .then(
        data => {
          this.setState(
            {
              isLoaded: true,
              headLines: data.articles,
              topHeadLine: data.articles[3]
            },
            function() {
              console.log(this.state);
            }
          );
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  getFinancialNews() {
    fetch("https://api.iextrading.com/1.0/stock/market/news/last/20")
      .then(res => res.json())
      .then(
        data => {
          this.setState(
            {
              isLoaded: true,
              marketNews: data
            },
            function() {
              console.log(this.state);
            }
          );
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentWillMount() {
    this.getHeadLineNews();
  }

  componentDidMount() {
    this.getFinancialNews();
  }

  render() {
    const { error, isLoaded, headLines } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading …</div>;
    }

    return (
      <div>
        {/*<Header />*/}
        <SearchNewsBar />
        <HeadLine headLine = {this.state.topHeadLine}/>
        <MarketNews markNews = {this.state.headLines} />
      </div>
    );
  }
}

export default App;
