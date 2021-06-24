import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Link from "./link/Link";
import * as Unicons from "@iconscout/react-unicons";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={styleTitle.title}>
                    <h3>Volodia Lishchyshyn</h3>
                </div>
                <div className={style.links}>
                    <Link link={`https://instagram.com/hach_vl?utm_medium=copy_link`}
                          linkIcon={<Unicons.UilInstagram className={style.icon}/>}/>
                    {/*<Link link={`https://www.google.com/`}*/}
                    {/*      linkIcon={<Unicons.UilGithubAlt className={style.icon}/>}/>*/}
                    <Link link={`https://www.linkedin.com/in/volodia-lishchyshyn-ba580a214/`}
                          linkIcon={<Unicons.UilLinkedinAlt className={style.icon}/>}/>
                </div>
                <span className={style.rights}>@ 2021 All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;