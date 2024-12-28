import React from "react"
import "../styles/pages/projects.scss"
import Layout from "../components/layout"

const ProjectsPage = () => {
    return (
        <Layout>
            <div className="projectsLayout section-wrapper">
                <div className="section-title">
                    <h1>Selected Projects</h1>
                </div>
                <div className="section-items">
                    <ul>
                        <li className="projects-wrapper">
                            <h3>Tourist 2 Townie</h3>
                            <span className="tools-text">Flutter | Laravel | MySql | Firebase | Google Dialogflow </span><br/>
                            <span
                                className="content-text">Tourist 2 Townie is a platform which make interaction of guides and tourists more transparent.</span><br/>
                            <span className="date-text">MAR. 2019 - Mar. 2020</span>
                        </li>
                        <li className="projects-wrapper">
                            <h3>Tutetory</h3>
                            <span className="tools-text">Angular | Nodejs | Firebase </span><br/>
                            <span className="content-text">An online platform where a academic student can find a tutor online from anywhere from the world to help his academics.</span><br/>
                            <span className="date-text">APR. 2021 - JAN. 2022</span>
                        </li>
                        <li className="projects-wrapper">
                            <h3>Quito</h3>
                            <span className="tools-text">Image processing | OpenCV | Java </span><br/>
                            <span className="content-text">Quito is a dengue prevention mobile app using image labeling ML</span><br/>
                            <span className="date-text">Mar. 2019 - Jun. 2020</span>
                        </li>

                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage
