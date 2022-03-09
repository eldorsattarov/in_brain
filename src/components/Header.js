import React, {useState} from 'react';
import {Link} from "react-router-dom";
import InbrainLayout from "./InbrainLayout";
import {getText, getLanguage} from "../locales";
import {LANGUAGE} from "../tools/constants";

const Header = (props) => {

    const changeLanguage = (e) => {
        console.log(e);
        // localStorage.setItem(LANGUAGE, e.target.value);
        localStorage.setItem(LANGUAGE, e);
        document.location.reload(true);
    }


    const [openSearch, setopensearch] = useState(false);
    const opensearch = () => {
        setopensearch(!openSearch);
    }
    return (
        // <InbrainLayout history={props.history}>
        <div className="navbar">
            <div className="container">
                <div className="row w-100">
                    <div className="d-flex align-items-center justify-content-between w-100">

                        {/*<Link to="/" className="logoOne">*/}
                        <img src="./images/logo 1.png" className="logo"/>
                        {/*</Link>*/}

                        <span className={`${openSearch == true ? "textt mr-5 d-none" : "textt mr-5"}`}>
                            {getText("headerText")}
                            {/*{window.location.href.includes("/start") ? "Текущий урок: Привет посмотри видео" : "Каждый может научится новому ! Даже если страшно."}*/}
                        </span>

                        <div className="searchGlav">
                            <a href="#" className={`${openSearch == true ? "atext accc" : "atext"}`}><img
                                src="./images/sear.png" onClick={() => opensearch()}/></a>

                            <div className={`${openSearch == true ? "searchInput w-100" : "searchInput"}`}>
                                <input className="form-control" placeholder="Поиск.... "/>
                            </div>

                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="button" className={`${getLanguage()==="ru" ? "btn active" : "btn"}`} onClick={()=>changeLanguage('ru')}>RU</button>
                            <button type="button" className={`${getLanguage()==="uz" ? "btn active" : "btn"}`} onClick={()=>changeLanguage('uz')}>UZ</button>
                            <button type="button" className={`${getLanguage()==="en" ? "btn active" : "btn"}`} onClick={()=>changeLanguage('en')}>EN</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        // </InbrainLayout>
    );
};

export default Header;
