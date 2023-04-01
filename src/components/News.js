import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articals, setarticals] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0)
  // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  const updateNews = async ()=> {
    console.log("check it!")
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fba20a51403b4a2180293e1dbfb2c6b0&page=1&pageSize=${props.pageSize}`
    setloading(true)
    let data = await fetch(url)
    let parsData = await data.json()
    setarticals(parsData.articals);
    settotalResults(parsData.totalResults);
    setloading(false)
  }
  useEffect(() => {
  updateNews()
  
  }, [])
  
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews()

  //   this.updateNews();
  // }
  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews()
  // }
  const fetchMoreData =async () => {
    setpage(page + 1)
    console.log("check it!")
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fba20a51403b4a2180293e1dbfb2c6b0&page=1&pageSize=${props.pageSize}`

    let data = await fetch(url)
    let parsData = await data.json()
    setarticals(articals.concat(parsData.articals))
    settotalResults(parsData.totalResults)
  }
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={ articals.length}
          next={fetchMoreData}
          hasMore={articals.length !==totalResults}
          loader={<h4><Spinner/></h4>}
        >
        <div className="row">
          {articals.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title} discription={element.discription} imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Preview</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSizes)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div> */}
      </div>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
