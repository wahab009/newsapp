import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title,description,ImgUrl,newsurl,pubdate} = this.props;
    return (
      <div className="card d-flex flex-column h-100" style={{ width: "18rem" }}>
        <img src={!ImgUrl?"https://fortune.com/img-assets/wp-content/uploads/2025/06/GettyImages-2193103505-e1750334232815.jpg?resize=1200,600":ImgUrl} style={{height:160}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p><small>Published At: {pubdate} </small></p>
          <p className="card-text">{description}...</p>
          
          
          <a href={newsurl} target ="_blank"  rel="noopener noreferrer" className="btn btn-dark mt-auto">Read More</a>
          
        </div>
      </div>
    )
  }
}
export default NewsItem