import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import vovaImage from '../assets/images/IMG_4802.JPG';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            },
        }
    }
};


function Main() {
    return (
        <div id={"main"} className={style.mainBlock}>

            <Particles className={style.particles} params={particlesOptions}/>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <h1>I am
                            <br/>
                            Volodia
                            <br/>
                            Lishchyshyn</h1>
                        <p><ReactTypingEffect text={"Frontend Developer."}/></p>
                    </div>

                    <div className={style.photo}>
                        <Tilt className="Tilt" options={{max: 20, scale: 1.05,}}>
                            <img src={vovaImage} alt=""/>
                        </Tilt>
                        <div className={style.border}></div>
                    </div>

                </div>
            </Fade>

        </div>
    );
}

export default Main;