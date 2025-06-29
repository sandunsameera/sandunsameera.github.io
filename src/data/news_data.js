import {OutboundLink} from "gatsby-plugin-google-gtag";
import React from "react";

const news_data = {
    certifications: {
        aws: {
            name: "AWS Certified Solution Architect - Associate",
            institution: "AWS",
            year: "2024",
            certificateurl: "https://credly.com/badges/32f40085-0541-4489-b91c-3d7542607308/linked_in_profile",
        },
        kcna: {
            name: "KCNA: Kubernetes and Cloud Native Associate",
            institution: "The Linux Foundation / CNCF",
            year: "2025",
            certificateurl: "https://www.credly.com/earner/earned/badge/36f23266-7d5c-459c-901d-354c2e8a060d",
        },
        ckad: {
            name: "CKAD: Certified Kubernetes Application Developer",
            institution: "The Linux Foundation / CNCF",
            year: "2025",
            certificateurl: "https://www.credly.com/earner/earned/badge/1f9c6f45-72d5-4ca9-8ee7-cb7298631c19",
        },
    },
    achievements: {
        hacktoberfest: {
            name: "Pre-Hacktoberfest",
            year: "2019",
            organizedBy: "IEEE Student Branch of University of Colombo School of Computing",
        },
        eduhack: {
            name: "Digi-Edu-Hack19",
            year: "2019",
            organizedBy: "OUSL",
            anchorfullname: <OutboundLink className="link" href="https://uplist.lk/event/digi-edu-hack19/" target="_blank" rel="noopener noreferrer">Open University Srilanka</OutboundLink>,
            team: "Team Conio"
        }
    },
    teams: {
        conio: {
            name: "Team Conio",
            anchorfullname: <OutboundLink className="link" href="https://github.com/team-conio" target="_blank" rel="noopener noreferrer">Team Conio</OutboundLink>,

        }
    }
}

export default news_data
