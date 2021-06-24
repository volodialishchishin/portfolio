import React from 'react';
import style from './Work.module.scss';
import More from "./more/More";

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <More link={props.link}/>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;