import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title,description,ImgUrl,newsurl,pubdate,source} = this.props;
    return (
      <div className="card d-flex flex-column h-100" style={{ width: "18rem" }}>
        <img src={!ImgUrl?"https://fortune.com/img-assets/wp-content/uploads/2025/06/GettyImages-2193103505-e1750334232815.jpg?resize=1200,600":ImgUrl} style={{height:160}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <b><small>Published At:  {pubdate.slice(0,10)}</small></b>
          <p className="card-text">{description}...</p>
          <p className='text-danger'><b><small>Source:{source}</small></b></p>
          
          
          <a href={newsurl} target ="_blank"  rel="noopener noreferrer" className="btn btn-dark mt-auto">Read More</a>
          
        </div>
      </div>
    )
  }
}
export default NewsItem