import React from "react"
import "../styles/components/layout.scss"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Layout = ({ children }) => {

    return (
        <>
            <Helmet htmlAttributes={{ lang: "en" }}>
                <meta charSet="utf-8" name="Sandun Sameera"/>
                <title>Sandun</title>
                <link rel="canonical" href="https://sandun.xyz/"/>
            </Helmet>
            <div className="content">
                <div className="header">
                    <h2>Sandun Sameera</h2>
                </div>
                <div className="container">
                    <div className="navbar">
                        {/*<Link to="/">Home<some_code/Link>*/}
                        <OutboundLink href="/">Home</OutboundLink>
                        {/*<Link to="/experience">Experience</Link>*/}
                        <OutboundLink href="/experience">Experience</OutboundLink>
                        {/*<Link to="/projects">Projects</Link>*/}
                        <OutboundLink href="/projects">Projects</OutboundLink>
                        {/*<Link to="/certifications">Certifications</Link>*/}
                        <OutboundLink href="/certifications">Certifications</OutboundLink>
                        {/*<Link to="/achievements">Achievements</Link>*/}
                        <OutboundLink href="/achievements">Achievements</OutboundLink>
                        <OutboundLink href="/sandun_sameera_cv.pdf" target="_blank" rel="noopener noreferrer">CV</OutboundLink>
                        {/*<Link to="/about">About</Link>*/}
                        <OutboundLink href="/about">About</OutboundLink>
                        {/*<Link className="officeHours" to="/officehours">Office Hours</Link>*/}
                    </div>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
