import React from "react"
import "../styles/pages/experience.scss"
import Layout from "../components/layout"

const ExperiencePage = () => {
    return (
        <Layout>
            <div className="experienceLayout section-wrapper">
                <div className="section-title">
                    <h1>Experience</h1>
                </div>
                <div className="section-items">
                    <h2 className="experience-subtitle">Professional Experience</h2>
                    <ul>
                        <li className="research-wrapper">
                            <h3>Senior Software Engineer - DEVOPS Team (Full-time)</h3>
                            <span className="institute-text">Yaala Labs</span><br/>
                            <ul className="research-content-text">
                                <li>Introduce a auto-scaling mechanism for components with KEDA </li>
                                <li>Responsible for developing / Maintaintaining / Monitoring AWS infrastructure resources </li>
                                <li>Actively worked with MIT ESP for Deploying / Maintaining a production system for Cabonplace</li>
                                <li>Responsible for introducing / maintaining Bitbucket pipelines for automating repetitive tasks</li>
                                <li>Contributed to the development and implementation of best practices devops engineering.</li>
                            </ul>
                            <span className="date-country-text">Bash Python Terraform Ansible AWS Docker Helm Microk8s CICD Kubernetes KEDA AWS </span><br/>
                            <span className="date-country-text">APR. 2024 - Present</span><br/>
                            <span className="date-country-text">Sri Lanka</span>
                        </li>
                        <li className="research-wrapper">
                            <h3>Software Engineer - Platform Team P8 (Full-time)</h3>
                            <span className="institute-text">Yaala Labs</span><br/>
                            <ul className="research-content-text">
                                <li>Designed and Implemented storing orders on persistence storage component called
                                    Data-cache on mongodb.
                                </li>
                                <li>Refactoring Order-manager component to follow simpler coding style and reduce
                                    redundant code and support multiple variants.
                                </li>
                                <li>Refactoring p8-api code to use feature based api endpoint deployments using
                                    CloudFormation
                                </li>
                                <li>Collaborated with cross-functional teams to identify and define business problems,
                                    and developed solutions to meet business objectives.
                                </li>
                            </ul>
                            <span className="date-country-text">Java Typescript Js Bash Nodejs Mongodb Vertx Dynamodb  </span><br/>
                            <span className="date-country-text">FEB. 2022 - MAR. 2024</span><br/>
                            <span className="date-country-text">Sri Lanka</span>
                        </li>
                        <li className="research-wrapper">
                            <h3>Software Engineer - Backend Team (Full-time)</h3>
                            <span className="institute-text">Scicom Lanka Private Limited</span>
                            <ul className="research-content-text">
                                <li>Design and Implemented risk management module for their border-management system
                                    (SIBMS) considering number of risk factors and maintaining reasonable performance
                                    metrics.
                                </li>
                                <li>Improved performance on their backend by a considerable amount with introducing
                                    improved pagination mechanism with mariaDB
                                </li>
                                <li>Designed and develop a new customer on-boarding module to their system with
                                    localization
                                </li>
                                <li>Investigated on containerizing their application and move the application to
                                    kubernetes
                                </li>
                                <li>Successfully managed and prioritized multiple projects simultaneously, ensuring
                                    on-time delivery
                                </li>
                                <li>Contributed to improve code quality using industry accepted best practices on their
                                    main module on SIBMS
                                </li>
                            </ul>
                            <span className="date-country-text"> Java Spring Spring-boot Typescript Javascript SQL MQ </span><br/>
                            <span className="date-country-text">APR. 2021 - FEB. 2022</span><br/>
                            <span className="date-country-text">Remote</span>
                        </li>
                        <li className="research-wrapper">
                            <h3>Student Developer</h3>
                            <span
                                className="institute-text">Scicom Lanka Private limited - Software Engineer Intern</span>
                            <ul className="research-content-text">
                                <li>Worked as a Software engineer intern in the Scicom Lanka Private limited.</li>
                                <li>Gained experience on angular as frontend and Spring-MVC / Springboot as backend.
                                </li>
                                <li>Worked on hardware integrations like iris detection & fingerprint detection</li>
                            </ul>
                            <span className="date-country-text"> Java Spring Spring-boot Typescript Javascript Angular SQL MQ </span><br/>
                            <span className="date-country-text">OCT. 2020 - APR. 2021</span><br/>
                            <span className="date-country-text">Remote</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default ExperiencePage
