import React, {useState} from 'react';
import {Link} from "react-router-dom";
import InbrainLayout from "./InbrainLayout";

const Header = (props) => {
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
                            Каждый может научится новому ! Даже если страшно.
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
                            <button type="button" className="btn active">RU</button>
                            <button type="button" className="btn">UZ</button>
                            <button type="button" className="btn">EN</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        // </InbrainLayout>
    );
};

export default Header;
