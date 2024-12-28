import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const orgs = {
    Scicom: {
        fullname: "Scicom Lanka Private Limited",
        shortname: "Scicom Lanka Private Limited",
        url: "#",
        anchor: <OutboundLink className="link" href="#" target="_blank" rel="noopener noreferrer">Scicom Lanka PVT</OutboundLink>,
    },
    ucsc: {
        fullname: "Univesity of Colombo School of Computing",
        shortname: "UCSC",
        url: "https://ucsc.cmb.ac.lk/",
        anchor: <OutboundLink className="link" href="https://ucsc.cmb.ac.lk/" target="_blank" rel="noopener noreferrer">UCSC</OutboundLink>,
        anchorfullname: <OutboundLink className="link" href="https://ucsc.cmb.ac.lk/" target="_blank" rel="noopener noreferrer">Univesity of Colombo School of Computing</OutboundLink>,
    },
    yaala: {
        fullname: "Yaala Labs Private Limited",
        shortname: "Yaala Labs",
        url: "https://yaalalabs.com/",
        anchor: <OutboundLink className="link" href="https://yaalalabs.com/" target="_blank" rel="noopener noreferrer">Yaala Labs</OutboundLink>,
    }
}

export default orgs
