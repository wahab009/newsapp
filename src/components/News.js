import React, { Component } from 'react';
import NewsItem from './NewsItem';
import TheF from './TheF';







export class News extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      category: "",
      totalPages: 0,
      source:""
    };
  }

  // static defaultProps = {
  //   country: 'us',
  //   category : 'general'
  // };









  async componentDidMount() {
    console.log("cdm running");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df14f9c4c05048af91aa2c76bab188a6&pageSize=${this.props.p_size}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let pressedData = await data.json();
    console.log("here is the data from API----->", pressedData);
    this.setState({ articles: pressedData.articles, loading: false });
    let totalPages = Math.ceil(pressedData.totalResults / this.props.p_size);
    this.setState
      ({
        loading: false,
        totalPages: totalPages
      });

  }
  
async componentDidUpdate(prevProps) {
  if (prevProps.category !== this.props.category) {
    console.log("Category changed, refetching data...");
    this.setState({ loading: true, page: 1 }); // Reset page to 1
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df14f9c4c05048af91aa2c76bab188a6&pageSize=${this.props.p_size}`;
    let data = await fetch(url);
    let pressedData = await data.json();
    this.setState({
      articles: pressedData.articles,
      loading: false,
      totalPages: Math.ceil(pressedData.totalResults / this.props.p_size),
      page: 1
    });
  }
}
  onNext = async () => {
    console.log("Next was clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df14f9c4c05048af91aa2c76bab188a6&pageSize=${(this.props.p_size)}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let pressedData = await data.json();
    console.log("here is the data from API----->", pressedData);
    this.setState({
      articles: pressedData.articles,
      loading: false,
      page: this.state.page + 1
    });

  }
  onPrevious = async () => {
    console.log("previous was clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df14f9c4c05048af91aa2c76bab188a6&pageSize=${(this.props.p_size)}&page=${this.state.page - 1}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let pressedData = await data.json();
    console.log("here is the data from API----->", pressedData);
    this.setState({
      articles: pressedData.articles,
      loading: false,
      page: this.state.page - 1,
    });

  }

  render() {
    console.log("render running");

    return (
      <div className="container mt-3">
        {this.state.loading && <TheF />}
        <h2 style={{marginTop: 20,marginBottom: 20}} className=" text-center mt-3">Top Headlines of New New News</h2>

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" style={{ marginTop: 10 }} key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0,40) : "Title not available"}
                  ImgUrl={element.urlToImage}
                  description={element.description ? element.description.slice(0,200) : "Click below for details"}
                  newsurl={element.url}
                  pubdate={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div  className="d-flex justify-content-between mt-3">
          <button disabled={this.state.page <= 1} type="button" onClick={this.onPrevious} className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page >= this.state.totalPages} type="button" onClick={this.onNext} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
