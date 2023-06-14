import {React ,useEffect} from 'react';
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="header_container_adp">
        <div className='header_container'>
            <div data-aos="zoom-in"  className="header_name_container">
                <h1 className='header_name'>Hi, i`m <br /> Andrey</h1>
                <p className='header_name_down'>Front-end Developer</p>
            </div>
        </div>
        </div>
    );
};

export default Header;