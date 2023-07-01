import React, { Component } from 'react';
import PropTypes from 'prop-types';


import NewsCard from './NewsCard';
import Loading from './Loading';
import Notfound from './Notfound';

import '../App.css'

// import InfiniteScroll from "react-infinite-scroll-component";


export class NewsGrid extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            Loading: true,
            page: 1,
            totalResults: 0 
        }
    }
    async getNews() {
        let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=9&page=${this.state.page}&apiKey=782b51aa2b354b019dcd2c70ddf416f0`;
        this.setState({ Loading: true })
        let data = await fetch(api);

        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            Loading: false,
        })
    }
    async componentDidMount() {
        this.getNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=9&page=${this.state.page}&apiKey=782b51aa2b354b019dcd2c70ddf416f0`;
        let data = await fetch(api);

        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })

    }
    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }
    LoadMoreNews = async () => {
        let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=9&page=${this.state.page + 1}&apiKey=782b51aa2b354b019dcd2c70ddf416f0`;
        let data = await fetch(api);
        this.setState({ loading: true });

        let parsedData = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(parsedData.articles),
            loading: false
        })


    }



    render() {
        return (
            <>
                <div className="container">
                    <div className="row " >
                        <h1 className="text-center" style={{ margin:'35px 0px',color:"#0d6efd" }}>Tazza - Top {this.capitalize(this.props.category)} Headlines</h1>
                        {this.state.Loading && <Loading />}
                        {/* <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}//----> need to define this function
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Loading/>}
                        > */}
                        <div className='row'>
                            {!this.state.articles? <Notfound/>:  this.state.articles.map((element) => {
                                return <div className="col-md-4 mt-4" key={element.url}>

                                    <NewsCard title={element.title ? element.title : ""}
                                        desc={element.description ? element.description : ""}
                                        image_url={element.urlToImage}
                                        link={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>
                            })}
                            <div className='container'>
                            {this.state.articles &&
                                <button type="button" className="btn btn-primary w-100 mx-auto mt-3 mb-3" onClick={this.LoadMoreNews}>Load More</button>
                            }
                            </div>
                        </div>


                        {/* </InfiniteScroll> */}

                    </div>
                </div>
            </>
        )
    }
}

export default NewsGrid
