import * as React from "react"
import "../styles/pages/home.scss"
import {StaticImage} from "gatsby-plugin-image"
import {OutboundLink} from "gatsby-plugin-google-gtag"

import Layout from "../components/layout"
import news from "../data/news"
import orgs from "../data/orgs"

class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="homeLayout section-wrapper">
                    <div className="section-items">
                        <div className="about-me">
                            <div className="profile-card">
                                <div className="img-container">
                                    <StaticImage src="../images/sandun2.jpg" alt="CORS" placeholder="blurred"
                                                 className="article-img" objectFit="contain"/>
                                </div>
                                <div className="profile-description">
                                    <h2>Hi there!</h2>
                                    <span className="content-text">
                                    Im a graduate of {orgs.ucsc.anchor}. Currently working as a Seniour software engineer at {orgs.yaala.anchor}.<br/>
                                        I'm a Software Engineer with expertise in both devops and software engineering aspects.
                                        Adept in backend development and proficient in Agile methodologies. Proven ability to
                                        design and implement efficient software solutions, ensuring quality through rigorous
                                        testing practices. Passionate about continuous learning and staying current with
                                        emerging technologies. Collaborative team player with a history of success working in
                                        cross-functional environments to deliver cutting-edge software products. Committed to
                                        innovation and driving positive impact in dynamic software engineering settings. </span>
                                </div>
                            </div>
                            <div className="contact-details-section">
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <StaticImage src="../images/phone.png" alt="Phone" placeholder="blurred"
                                                     height={14} layout="fixed"/>
                                        <span>(+94) 785482303</span>
                                    </div>
                                    <div className="contact-item">
                                        <StaticImage src="../images/email.png" alt="email" placeholder="blurred"
                                                     height={11} layout="fixed"/>
                                        <span>sandunsameera25@gmail.com</span>
                                    </div>
                                    <div className="contact-item">
                                        <StaticImage src="../images/linkedin-in.png" alt="linkedin-in"
                                                     placeholder="blurred" height={15} layout="fixed"/>
                                        <span><OutboundLink className="link"
                                                            href="https://www.linkedin.com/in/sandun-sameera-91ab97161/"
                                                            target="_blank"
                                                            rel="noopener noreferrer">Linkedin</OutboundLink></span>
                                    </div>
                                    <div className="contact-item">
                                        <StaticImage src="../images/github.png" alt="github" placeholder="blurred"
                                                     height={15} layout="fixed"/>
                                        <span><OutboundLink className="link" href="https://github.com/sandunsameera"
                                                            target="_blank"
                                                            rel="noopener noreferrer">Github</OutboundLink></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="research-interests">
                            <h2>Interests</h2>
                            <span>Devops Engineering</span><br/>
                            <span>Latency-Critical Software Engineering</span><br/>
                            <span>AWS Infrastructure and Application Optimization</span><br/>
                            <span>Scalable Systems Design with AWS</span>
                        </div>
                        <div className="news-section">
                            <h2>Carrier Timeline</h2>
                            {news.slice(0, 5).map(newsItem => (
                                <div key={newsItem.date} className="news-content">
                                    <span className="date-text">{newsItem.date}</span><br/>
                                    <span className="content-text">{newsItem.content}</span>
                                </div>
                            ))}
                            <div className="news-content">
                                <span><a className="link" href="/news">[See more]</a></span>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}

export default IndexPage
