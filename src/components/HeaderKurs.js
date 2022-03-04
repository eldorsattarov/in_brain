import React, {useState} from 'react';
import {Link} from "react-router-dom";
import InbrainLayout from "./InbrainLayout";

const HeaderKurs = (props) => {
    const [openSearch, setopensearch] = useState(false);
    const opensearch = () => {
        setopensearch(!openSearch);
    }
    return (
        // <InbrainLayout history={props.history}>
        <div className="navbarKurs">
            <div className="container">
                <div className="row w-100">
                    <div className="d-flex align-items-center justify-content-between w-100">

                        {/*<Link to="/" className="logoOne">*/}
                        <img src="./images/logo 1.png" className="logo"/>
                        {/*</Link>*/}

                        {window.location.href.includes("/course_one") ?
                            <span className={`${openSearch == true ? "textt mr-5 d-none" : "textt mr-5"}`}>
                                Текущий урок: <span className="text-warning">Приветствие</span> / Привет / <span
                                className="text-primary">1</span> из 14
                            </span>
                            : (
                                window.location.href.includes("/course_two") ?
                                    <span className={`${openSearch == true ? "textt mr-5 d-none" : "textt mr-5"}`}>
                                Текущий урок: <span className="text-warning">Приветствие</span> / Привет / <span
                                        className="text-primary">1</span> из 14
                            </span> :
                                    (window.location.href.includes("/course_you") ?
                                        <span className={`${openSearch == true ? "textt mr-5 d-none" : "textt mr-5"}`}>
                                Текущий урок: Приветствие
                            </span> :
                                        (window.location.href.includes("/student_card") ?
                                            <span className={`${openSearch == true ? "textt mr-5 d-none" : "textt mr-5"}`}>
                            Каждый может научится новому ! Даже если страшно.
                            </span> :
                                            <span className={`${openSearch == true ? "textt mr-5 d-none" : "textt mr-5"}`}>
                            Текущий урок: <span className="textt2">Привет посмотри видео</span>
                            </span>)

                            )
                            )
                            // <span className={`${openSearch == true ? "textt mr-5 d-none" : "textt mr-5"}`}>
                            // Текущий урок: <span className="textt2">Привет посмотри видео</span>
                            // </span>
                        }


                        <div className="searchGlav">
                            <a href="#" className={`${openSearch == true ? "atext accc" : "atext"}`}><img
                                src="./images/sear.png" onClick={() => opensearch()}/></a>

                            <div className={`${openSearch == true ? "searchInput w-100" : "searchInput"}`}>
                                <input className="form-control" placeholder="Поиск.... "/>
                            </div>

                        </div>

                        <div className="users">
                            <img src="./images/avatar.png"/>
                            <span>+214</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        // </InbrainLayout>
    );
};

export default HeaderKurs;
