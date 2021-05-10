import React from 'react';
import Cards from './Cards';
import friends from '../images/friends.jpg'
import series from '../images/series.jpg'
import travel from '../images/travel.jpg'
import music from '../images/music.jpg'

const AboutMe = () => {
    const data = [
        {title:'music',des:'When I hear music, I feel relaxed. I am invulnerable. I see no foe. I am related to the earliest times, and to the latest.'},
        {title:'travel', des:'It is a medium to connect me with nature and makes my mind calm and helps to regain concentration power.'},
        {title:'series', des:'Source to learn and entertain and keep myself busy when tired.'},
        {title:'friends', des:'The source of strength and second family that teaches and corrects me in every situation.'}

    ]
    return (
        <>
            <div className="about_main_div">
                <div className="about_content_div">
                    <div className="component_title">
                        <h5>leisure activities</h5>
                        <p>Things that relaxes and help me to regain my concentration, consciousness and boost towards my work... </p>
                    </div>
                    <div className="about_cards">
                        <Cards pic={music} title={data[0].title} des={data[0].des} />
                        <Cards pic={travel} title={data[1].title} des={data[1].des} />
                        <Cards pic={series} title={data[2].title} des={data[2].des} />
                        <Cards pic={friends} title={data[3].title} des={data[3].des} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;