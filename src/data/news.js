import news_data from "./news_data"
import orgs from "./orgs"
import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const news = [
    {
        date: "APR 11, 2024",
        content: <> I got my first certification on <OutboundLink className="link" href={news_data.certifications.aws.certificateurl} target="_blank" rel="noopener noreferrer">{news_data.certifications.aws.name}</OutboundLink>.</>
    },
    {
        date: "Feb 01, 2024",
        content: <> I got promoted to Senior Software Engineer <OutboundLink className="link" href={orgs.yaala.url} target="_blank" rel="noopener noreferrer"> @{orgs.yaala.shortname}</OutboundLink>.</>

    },
    {
        date: "Jan 01, 2024",
        content: <> I switched from Software Engineering Team to Devops Team to explore more about devops world @{orgs.yaala.anchor}.</>

    },
    {
        date: "Dec 20, 2023",
        content: <> I switched from Software Engineering Team to Devops Team to explore more about devops world @{orgs.yaala.anchor}.</>

    },
    {
        date: "Jul 15, 2020",
        content: <> Completed my Bachelors degree in Information Systems at {orgs.ucsc.anchor} with Second Upper Class.</>

    },
    {
        date: "Feb 03, 2022",
        content: <> I Joined with @{orgs.yaala.anchor} as a Software Engineer.</>

    },
    {
        date: "APR 12, 2021",
        content: <> Joined {orgs.Scicom.anchor} as full-time Software Engineer.</>

    },
    {
        date: "APR 12, 2021",
        content: <> Completed my internship at {orgs.Scicom.anchor} and got opportunity to join them as a full-time Software Engineer.</>

    },
    {
        date: "OCT 15, 2020",
        content: <> Started my internship at {orgs.Scicom.anchor} mostly as a Backend-End developers.</>

    },
    {
        date: "OCT 23, 2019",
        content: <> Became runners up in ideation {news_data.achievements.hacktoberfest.name} organized by {news_data.achievements.hacktoberfest.organizedBy}. </>

    },
    {
        date: "OCT 03, 2019",
        content: <> Winners of {news_data.achievements.eduhack.name} which is  organized by {news_data.achievements.eduhack.anchorfullname}. </>

    }
]

export default news
