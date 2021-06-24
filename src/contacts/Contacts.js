import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Fade from 'react-reveal/Fade';


function Contacts() {
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <div className={styleTitle.title}>
                        <h2>Contacts</h2>
                    </div>
                    <div className={style.formContainer}>
                        <form className={style.contactsForm}>
                            <input type="text" className={style.input} placeholder={"Name"}/>
                            <input type="text" className={style.input} placeholder={"E-Mail"}/>
                            <textarea name="textarea" className={style.textarea}
                                      placeholder={"Your message"}/>
                            <button type="submit" className={style.submitBtn}>Send message</button>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;