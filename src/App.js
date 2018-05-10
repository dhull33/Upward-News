import React, { Component } from 'react';
//import { connect } from "react-redux";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: [],
            stockNews: []
        };
    }

    getHeadLineNews() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=32fafd1455b44c1dbfb0924c66fc1206")
            .then(res => res.json())
                .then((data) => {
                        this.setState({
                            isLoaded: true,
                            articles: data.articles
                        }, function(){
                            console.log(this.state);
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    });
    };

    getFinancialNews(){
        fetch("https://api.iextrading.com/1.0/stock/market/news/10")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    stockNews: data
                }, function(){
                    console.log(data);
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })
    };

    componentWillMount(){
        this.getHeadLineNews();

    }

    componentDidMount(){
        this.getFinancialNews();
    }


    render() {
        const { error, isLoaded, articles } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {articles.map(articles => (
                        <li key={articles.title}>
                            {articles.title}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default App;
