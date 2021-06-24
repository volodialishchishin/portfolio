import React from 'react';
import style from './Link.module.scss';
import Work from "../../myWorks/work/Work";


function Link(props) {
    return (
        <div className={style.link}>
            <a href={props.link} target={"_blank"}>{props.linkIcon}</a>
        </div>
    );
}

export default Link;