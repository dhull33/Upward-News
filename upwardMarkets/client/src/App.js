import React, { Component } from "react"
import "./App.css"
import SearchNewsBar from "./components/searchBar"
import Header from "./components/header";
import HeadLine from "./components/headLine"
import { Button } from "reactstrap"
// import getMainHeadLine from './utils/getHeadLineNews'
import MarketNews from './components/MarketNews'
import AutoComplete from './components/autoComplete'
import TickerPage from './components/tickerPage/stockPage'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch
} from 'react-router-dom'


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
      topHeadLine: [],
      nasdaqTicker: [],
      nyseTicker: [],
      amexTicker: [],
      allTickers: []
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

  getNasdaqTicker(){
    fetch('/nasdaq')
      .then(res => res.json())
      .then(data => {
        this.setState({
          nasdaqTicker: data.data,
        })
      })
      .catch(err => console.log(err))
  }

  getNyseTicker(){
    fetch('/nyse')
      .then(res => res.json())
      .then(data => {
        this.setState({
          nyseTicker: data.data,
        })
      })
      .catch(err => console.log(err))
  }

  getAmexTicker(){
    fetch('/amex')
      .then(res => res.json())
      .then(data => {
        this.setState({
          amexTicker: data.data,
        })
      })
      .catch(err => console.log(err))
  }

  getAllTickers(){
    fetch('/all')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allTickers: data.data,
        })
      }, ()=> {console.log(this.state)})
      .catch(err => console.log(err))
  }

  handleClick = () =>{
    this.props.history.push('/ticker')
  }



  componentDidMount() {
    this.getHeadLineNews()
    this.getFinancialNews()
    this.getNasdaqTicker()
    this.getNyseTicker()
    this.getAmexTicker()
    this.getAllTickers()
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
        <SearchNewsBar tickers={this.state.allTickers} />
        <Header/>
        {/*<HeadLine headLine = {this.state.topHeadLine}/>*/}
        <MarketNews markNews = {this.state.headLines} />
        {/*<Switch>*/}
          {/*<Route exact path='/' component={MarketNews}/>*/}
          {/*<Route path='/ticker' component={TickerPage}/>*/}
        {/*</Switch>*/}
      </div>
    );
  }
}



export default withRouter(App);
