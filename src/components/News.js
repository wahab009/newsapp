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
      totalPages: 0,
      error: null,
    };
  }

  async updatePage() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.myapikey}&pageSize=${this.props.p_size}&page=${this.state.page}`;
    try {
      this.setState({ loading: true });
      this.props.setProgress(40);
      const data = await fetch(url);
      const pressedData = await data.json();
      this.props.setProgress(70);

      if (pressedData.status === "ok") {
        this.setState({
          articles: pressedData.articles || [],
          loading: false,
          totalPages: Math.ceil(pressedData.totalResults / this.props.p_size),
          error: null
        });
      } else {
        this.setState({ articles: [], loading: false, error: "Failed to fetch articles" });
      }

      this.props.setProgress(100);
    } catch (err) {
      console.error("Fetch error:", err);
      this.setState({ articles: [], loading: false, error: "Network error or API key issue" });
      this.props.setProgress(100);
    }
  }

  componentDidMount() {
    this.updatePage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ page: 1 }, () => this.updatePage());
    }
  }

  onNext = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updatePage();
  };

  onPrevious = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updatePage();
  };

  render() {
    return (
      <div className="container mt-3">
        {this.state.loading && <TheF />}
        <h2 style={{ marginTop: 20, marginBottom: 20 }} className="text-center">
          Top Headlines - {this.props.category.toUpperCase()}
        </h2>

        {this.state.error && (
          <div className="alert alert-danger text-center">{this.state.error}</div>
        )}

        <div className="row">
          {!this.state.loading &&
            this.state.articles &&
            this.state.articles.map((element) => (
              <div className="col-md-4" style={{ marginTop: 10 }} key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : "Title not available"}
                  ImgUrl={element.urlToImage}
                  description={
                    element.description ? element.description.slice(0, 200) : "Click below for details"
                  }
                  newsurl={element.url}
                  pubdate={element.publishedAt}
                  source={element.source?.name || "Unknown"}
                />
              </div>
            ))}
        </div>

        {!this.state.loading && (
          <div className="d-flex justify-content-between mt-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.onPrevious}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button
              disabled={this.state.page >= this.state.totalPages}
              type="button"
              onClick={this.onNext}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
