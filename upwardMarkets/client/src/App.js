import React, { Component } from 'react'
// import { connect } from "react-redux";
import './App.css'
import SearchNewsBar from './components/searchBar'

const fetch = window.fetch

const App = () => {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      headLines: [],
      marketNews: []
    }
  }

  buildNewsAPI () {
    return 'https://newsapi.org/v2/top-headlines?' +
      'country=us' +
      '&apiKey=' + this.newsAPIKey
  }



  getFinancialNews () {
    fetch('https://api.iextrading.com/1.0/stock/market/news/last/20')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          marketNews: data
        }, function () {
          console.log(this.state)
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      })
  };

  componentWillMount () {
    this.getHeadLineNews()
  }

  componentDidMount () {
    this.getFinancialNews()
  }

  render () {
    const { error, isLoaded, headLines } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (!isLoaded) {
      return <div>Loading …</div>
    }

    return (
      <div>
        <SearchNewsBar />
        {headLines.map(headLines => (
          <div>
            <h3 key={headLines.title}>{headLines.title}</h3>
            <img className='headLineImg' src={headLines.urlToImage} />
          </div>
        ))}
      </div>
    )
  }
}

export default App
