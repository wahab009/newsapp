import React, { Component } from 'react'
import NewsItem from './NewsItem';



export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalPages:0

    };
  }
  
 
     
 
  

 
  async componentDidMount() {
    console.log("cdm running");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df14f9c4c05048af91aa2c76bab188a6&pageSize=6";
    let data = await fetch(url);
    let pressedData = await data.json();
    console.log("here is the data from API----->", pressedData);
    this.setState({ articles: pressedData.articles, loading: false });
    let totalPages = Math.ceil(pressedData.totalResults / 6);
    this.setState
    ({
      totalPages:totalPages
    });

  }
   onNext = async ()=>{
    console.log("Next was clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df14f9c4c05048af91aa2c76bab188a6&pageSize=6&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let pressedData = await data.json();
    console.log("here is the data from API----->", pressedData);
    this.setState({ 
      
      articles: pressedData.articles,
      loading: false,
      page: this.state.page+1 });
  
  }
  onPrevious = async ()=>{
console.log("previous was clicked");
 let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df14f9c4c05048af91aa2c76bab188a6&pageSize=6&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let pressedData = await data.json();
    console.log("here is the data from API----->", pressedData);
    this.setState({ 
     
      articles: pressedData.articles,
      loading: false,
      page: this.state.page-1, });
       
  }

  render() {
    console.log("render running");

    return (
      <div className="container mt-3">
        <h2>Top Headlines of New New News</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" style={{ marginTop: 10 }} key={element.url}>
                <NewsItem
                  title={element.title ? element.title: "Title not available"}
                  ImgUrl={element.urlToImage}
                  description={element.description ? element.description : "Click below for details"}
                   newsurl={element.url}                  
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button disabled={this.state.page <= 1 } type="button" onClick={this.onPrevious} class="btn btn-dark">&larr; Previous</button>
          <button disabled ={this.state.page >= this.state.totalPages} type="button" onClick={this.onNext} class="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
