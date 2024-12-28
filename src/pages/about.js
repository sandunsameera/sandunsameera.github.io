import React from "react"
import "../styles/pages/about.scss"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <div className="aboutLayout section-wrapper">
                <div className="section-title">
                    <h1>About</h1>
                </div>
                <div className="section-items">
                    <div>
                        <div className="education-wrapper">
                            <h2>Education</h2>
                            <div className="education-card">
                                <div className="img-container ucsc-mal">
                                    <StaticImage
                                        src="../images/ucsc.jpg"
                                        alt="UCSC"
                                        placeholder="blurred"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>University of Colombo School of Computing</h3>
                                    <h3>B.Sc in Information Systems</h3>
                                    <span className="tags-text">Second Upper Class with a GPA of 3.34/4.0 </span><br/>
                                    <span className="date-text">Feb. 2018 - Feb. 2021</span><br/>
                                </div>
                            </div>
                            <div className="education-card">
                                <div className="img-container ucsc-mal">
                                    <StaticImage
                                        src="../images/TCC.jpg"
                                        alt="Telijjawila Central College"
                                        placeholder="blurred"
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>Telijjawila Central College</h3>
                                    <span className="tags-text">G.C.E. Advance Level Examination - Physical Science Stream</span><br/>
                                    <span className="date-text">Jan. 2007 - Dec. 2015</span><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Hobbies and Interests</h2>
                        <ul>
                            <li>Cricketer</li>
                            <li>Gamer</li>
                            <li>Dreams about traveling</li>
                            <li>Likes food(can't cook)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage
