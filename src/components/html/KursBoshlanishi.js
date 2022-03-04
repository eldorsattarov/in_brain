import React from 'react';
import InbrainLayout from "../InbrainLayout";
import Header from "../Header";
import HeaderKurs from "../HeaderKurs";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import Footer from "../Footer";

const KursBoshlanishi = (props) => {
    return (
        <InbrainLayout history={props.history}>
            <div className="kursBoshlanishi">
                <HeaderKurs/>
                <div className="container">
                    <div className="row">
                        {/*<HeaderKurs/>*/}
                        {/*<Header/>*/}
                        {/*{window.location.href.includes("/start") ? <Header/> : ""}*/}

                        <div className="">
                            <h2>Привет мы команда Inbrain - посмотри пожалуйста видео чтобы продолжить дальше обучение :
                                )</h2>
                            <p>
                                Давай знакомится мы команда inbrain которая создала курсы по веб разработке <span> HTML CSS JS. </span>
                                Актуальные знания от признанных экспертов для новичков.
                            </p>
                            <p>
                                На платформе можно получить знания по актуальным темам и востребованные навыки. Все
                                курсы нацелены на практику: мы следим за актуальностью материала и помогаем с
                                трудоустройством и стажировкой.
                            </p>
                            <h2 className="mt-4">Посмотрите видео: Что такое веб разработка ?</h2>
                        </div>
                        <div className="col-7 mt-5 ">
                            {/*<iframe src=""></iframe>*/}
                            <div className="videoRegistrOne">
                                <ReactPlayer
                                    onDisablePIP={false}
                                    width="100%"
                                    height="440px"
                                    controls
                                    url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>
                            </div>

                        </div>

                        <div className="col-5 mt-5">
                            <div className="d-flex w-100 justify-content-between align-items-center videoRight">
                                <div className="videoRegistr w-50">
                                    <ReactPlayer
                                        onDisablePIP={false}
                                        width="100%"
                                        height="140px"
                                        controls
                                        url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>
                                </div>
                                 <div className="w-50 p-4 d-flex justify-content-center align-items-center"><p>Кто придумал
                                    HTML ?</p></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center videoRight">
                                <div className="videoRegistr w-50">
                                    <ReactPlayer
                                        onDisablePIP={false}
                                        width="100%"
                                        height="140px"
                                        controls
                                        url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>
                                </div>
                                <div className="w-50 p-4 d-flex justify-content-center align-items-center">
                                    <p>Где используют
                                        HTML ?</p></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center videoRight">
                                <div className="videoRegistr w-50">
                                    <ReactPlayer
                                        onDisablePIP={false}
                                        width="100%"
                                        height="140px"
                                        controls
                                        url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>
                                </div>
                                <div className="w-50 p-4 d-flex justify-content-center align-items-center">
                                    <p>Для чего нужен HTML ?</p></div>
                            </div>
                        </div>


                        <div className="col-12 p-0">
                            <div className="container">
                                <div className="row kursRow">
                                    <div className="col-4">

                                            <div className="cardd">
                                                <img src="./imagess/Gro1.png" className="w-100"/>
                                            </div>

                                    </div>
                                    <div className="col-8">
                                        <p>Курс</p>
                                        <h2>
                                            Веб-разработчик с нуля до PRO
                                        </h2>
                                        <h3>
                                            Вы научитесь верстать сайты на HTML и CSS, изучите
                                            JavaScript. И сделаете первые
                                            проекты для портфолио.
                                        </h3>
                                        <div className="d-flex align-items-center mt-4">
                                            <Link to="/course_one" className="kursLink">Начать вводный курс</Link>
                                            <span>10 месяцев</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <Footer/>
            </div>
        </InbrainLayout>
    );
};

export default KursBoshlanishi;
