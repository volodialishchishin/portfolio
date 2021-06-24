import React from 'react';
import style from './More.module.scss';

function More(props) {
    return (
        <div className={style.more}>
            <a href={props.link} target="_blank" className={style.moreBtn}>More</a>
        </div>
    );
}

export default More;