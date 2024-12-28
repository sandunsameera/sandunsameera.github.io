import React from "react"
import "../styles/pages/achievements.scss"
import Layout from "../components/layout"
import achievements from "../data/achievements"

const AchievementsPage = () => {
    return (
        <Layout>
            <div className="achievementsLayout section-wrapper">
                <div className="section-title">
                    <h1>Achievements</h1>
                </div>
                <div className="section-items">
                    <ul>
                        {achievements.map(achievement => (
                            <li key={achievement.url} className="achievements-wrapper">
                                <span className="institute-text">{achievement.year} | {achievement.place}</span>
                                <h3>{achievement.event}</h3>
                                <span className="institute-text country">{achievement.country}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default AchievementsPage
