import React from 'react';
import './About.css'
import icon from '../img/sticker.webp'

const About = () => {
    return (
        <div className='about_container_adp'>
            <div className="about_container">
                <div className="about_main_container">
                <div className="about_content">
                    <h1 className='about_name'>About  me</h1>
                    <p className="about_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quos inventore atque, accusantium natus praesentium? Ducimus dolor officia aut assumenda vel necessitatibus. Sint, a? Pariatur voluptates nulla odio recusandae sapiente dicta labore consequatur et blanditiis, praesentium, repudiandae, reiciendis quos a quo aut numquam maxime corrupti enim possimus eaque eum accusantium.</p>
                </div>
                <div className="icon_container">
                    <img src={icon} alt="" />
                </div>
                </div>
                <hr className='hr_line_y'/>

            </div>

        </div>
    );
};

export default About;