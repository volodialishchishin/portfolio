import React from 'react';
import style from './MyWorks.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Work from "./work/Work";
import toDoImage from './../assets/images/IMG_0353.PNG';
import socialImage from './../assets/images/IMG_0352.PNG';
import Fade from 'react-reveal/Fade';


function MyWorks() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const toDoList = {
        backgroundImage: `url(${toDoImage})`,
    }

    return (
        <div id={"projects"} className={style.myWorksBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                    <div className={styleTitle.title}>
                        <h2>My Projects</h2>
                    </div>
                    <div className={style.myWorks}>
                        <Work style={social}
                              title={"Todo list"}
                              description={"This is my main project. I used all technologies, which i know"} link={"https://volodialishchishin.github.io/todolistfsd/"}/>
                        <Work style={toDoList}
                              title={"Social Network"}
                              description={"It is my test web application.It was very useful to me to hone my knowledge "} link={"https://volodialishchishin.github.io/social_network/"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default MyWorks;