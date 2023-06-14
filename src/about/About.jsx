import {React ,useEffect} from 'react';
import './About.css'
import icon from '../img/sticker.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='about_container_adp'>
            <div className="about_container">
                <div className="about_main_container">
                <div className="about_content">
                    <h1 data-aos="fade-down" className='about_name'>About  me</h1>
                    <p data-aos="flip-left" className="about_text">
                    I am a junior front-end developer specializing in web development using React JS, HTML and CSS. My goal is to learn how to create effective, interactive and user-friendly interfaces.

My skills include an understanding of basic React JS concepts such as components, properties, and state.Knowledge of HTML and CSS helps me structure and style web pages following modern standards and best practices.
                    </p>   
                          
                </div>
                <div  data-aos="fade-left" className="icon_container">
                    <img src={icon} alt="" />
                </div>
                </div>
                <hr className='hr_line_y'/>

            </div>

        </div>
    );
};

export default About;