import {React ,useEffect} from 'react';
import { Pagination, A11y } from 'swiper';
import './Project.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../img/1.png'
import slider2 from '../img/2.png'
import slider3 from '../img/3.png'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <div className='about_container_adp'>
            <div className="about_container">
            <hr className='hr_line_y' />
            <div className="project_main_container">
           
                <div className="about_content">
                    <h1 data-aos="fade-down" className='about_name'>My project</h1>
                   
                </div>
                <div  data-aos="fade-right"  className="slider_container">
                <Swiper 
      // install Swiper modules
      modules={[ Pagination,  A11y]}
      spaceBetween={50}
      slidesPerView={1}
  
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
   
    <SwiperSlide className='slider_item'>
    <a className='slider_block' href="https://main--delicate-bublanina-0040ea.netlify.app/"> 
        <img src={slider1} alt="" />
        <p className="slider_icon_text">This project was developed using the ReactJS library. This is a multi-page project on which I used routing. Here, a catalog was developed with products that can be sorted and found in the search. There is a basket to which the product is added and a button to remove from the basket, as well as a calculation of the total amount. And of course adaptation is done</p>
        </a> 
      </SwiperSlide>
      <SwiperSlide className='slider_item'>
    <a className='slider_block' href="https://andrey-rt.github.io/NFT/"> 
        <img src={slider2} alt="" />
        <p className="slider_icon_text">This project was developed to train CSS skills. The site is written in JavaScrips using the library for the slider. It is adapted for different devices. </p>
        </a> 
      </SwiperSlide>
      <SwiperSlide className='slider_item'>
    <a className='slider_block' href="https://andrey-rt.github.io/Amur/#!"> 
        <img src={slider3} alt="" />
        <p className="slider_icon_text">This is my first combat project. It is written in JavaScript. I used different libraries for sliders. I also used CSS to improve the appearance. And, of course, I made adaptations for different devices </p>
        </a> 
      </SwiperSlide>
      
      
     
      ...
    </Swiper>
                </div>
                </div>

            </div>

        </div>
    );
};

export default Project;