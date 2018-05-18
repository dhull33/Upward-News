import React, { Component } from "react"
// import { connect } from "react-redux";
import "./App.css"
import SearchNewsBar from "./components/searchBar"
import Header from "./components/header";
import HeadLine from "./components/headLine"
import { Button } from "reactstrap"
import getMainHeadLine from './utils/getHeadLineNews'

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
      "country=us" + '&pageSize=1' +
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
              topHeadLine: data.articles[0]
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
        {headLines.map(headLines => (
          <div>
            <h3 key={headLines.title}>{headLines.title}</h3>
            <img
              className="headLineImg"
              src={headLines.urlToImage}
              alt={this.props}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
