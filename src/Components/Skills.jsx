import React from 'react';
import SkillCard from './SkillCard';
import webdev from '../images/web-dev.jpg';
import webdesign from '../images/web-design.jpg';
import digital from '../images/digital.jpg';

const Skills = () => {
    const datas = [
        {title:'web design', des:'Crafting the attractive UI/UX designs for better user experience. The visual design blooms from the templates you choose.'},
        {title:'web develop', des:'Bringing the design to real life. Content and programming transform your template into a finished, manageable website.'},
        {title:'SEO', des:'Perfecting your web pages for your inbound marketing is a must for optimal client conversion and for getting that into top 5 page ranks.'}
    
    ]
    return (
        <>
           <div className="skills_main_div">
               <div className="component_title">
                   <h5>Services</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur inventore officiis provident impedit, assumenda officia porro eaque autem quam!</p>
               </div>
                <div className="all_cards">
                  <SkillCard service={webdesign} title={datas[0].title} des={datas[0].des} />
                  <SkillCard service={webdev} title={datas[1].title} des={datas[1].des}/>
                  <SkillCard service={digital} title={datas[2].title} des={datas[2].des}/>
                </div>
           </div>
        </>
    )
}

export default Skills;