import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Skill from './skill/Skill';
import Fade from 'react-reveal/Fade';
import * as Unicons from '@iconscout/react-unicons';
import Colors from '../common/styles/sass/variables.sass';

function Skills() {
    const JS = <Unicons.UilJavaScript size="140" color="#61DAFB"/>;

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <div className={styleTitle.title}>
                        <h2>Skills</h2>
                    </div>
                    <div className={style.skills}>
                        <Skill icon={<Unicons.UilHtml5Alt className={style.icon}/>}
                               title={"HTML5"}
                               description={''}/>
                        <Skill icon={<Unicons.UilCss3Simple className={style.icon}/>}
                               title={"CSS3"}
                               description={''}/>
                        <Skill icon={<Unicons.UilBracketsCurly className={style.icon}/>}
                               title={"TypeScript"}
                               description={""}/>
                        <Skill icon={<Unicons.UilReact className={style.icon}/>}
                               title={"React"}
                               description={""}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;