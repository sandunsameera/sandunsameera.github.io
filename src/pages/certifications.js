import React from "react"
import "../styles/pages/certifications.scss"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import certifications from "../data/certifications"

const CertificationsPage = () => {
    return (
        <Layout>
            <div className="certificationsLayout section-wrapper">
                <div className="section-title">
                    <h1>Certifications</h1>
                </div>
                <div className="section-items">
                    <div>
                        <ul>
                            {certifications.map(certificationItem => (
                                <li key={certificationItem.name} className="certification-wrapper">
                                    <h3>{certificationItem.year} | {certificationItem.name}</h3>
                                    <span className="institute-text">
                                    {certificationItem.institution} | <OutboundLink className="link"
                                                             href={certificationItem.certificateurl}
                                                             target="_blank" rel="noopener noreferrer">[Certificate]</OutboundLink>
                                </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CertificationsPage
