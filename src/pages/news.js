import React from "react"
import "../styles/pages/news.scss"

import Layout from "../components/layout"
import news from "../data/news"


const NewsPage = () => {
    return (
        <Layout>
            <div className="newsLayout section-wrapper">
                <div className="section-title">
                    <h1>Carrier Timeline</h1>
                </div>
                <div className="section-items">
                    <ul>
                        {news.map(newsItem => (
                            <li key={newsItem.date} className="news-wrapper">
                                <span className="date-text">{newsItem.date}</span><br/>
                                <span className="content-text">{newsItem.content}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default NewsPage
