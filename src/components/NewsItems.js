import React, { Component } from 'react'

 const NewsItems = (props)=> {
        let { title, discription, imgUrl, url, author, date, source } = props
        return (
        <div className='my-3'>
            <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>{source}</span>
                <img src={!imgUrl?"https://scitechdaily.com/images/Hubble-Jupiter-November-2022.jpg":imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
        )
}

export default NewsItems