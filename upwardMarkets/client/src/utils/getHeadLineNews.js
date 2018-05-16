import React from 'react'

const newsAPIKey = '32fafd1455b44c1dbfb0924c66fc1206'

const buildNewsAPI = () => {
  return 'https://newsapi.org/v2/top-headlines?' +
    'country=us' +
    '&apiKey=' + this.newsAPIKey
}

const getHeadLineNews  = () => {
  fetch(this.buildNewsAPI())
    .then(res => res.json())
    .then((data) => {
        this.setState({
          isLoaded: true,
          headLines: data.articles
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