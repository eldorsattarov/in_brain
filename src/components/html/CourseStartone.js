import React from 'react';
import InbrainLayout from "../InbrainLayout";
import HeaderKurs from "../HeaderKurs";
import Footer from "../Footer";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
const CourseStartone = (props) => {
    return (
        <InbrainLayout history={props.history}>
            <div className="courseStartone">
                <HeaderKurs/>

                <div className="container">
                    <div className="row">
                        <div>
                            <h2>Привет мы команда Inbrain : )</h2>
                            <p>
                                Давай знакомится мы команда inbrain которая создала курсы по веб разработке. Актуальные
                                знания от признанныхэкспертов рынка для новичков. Просмотри пожалуйста видео чтобы
                                продолжить дальше.
                            </p>
                        </div>
                        <div className="col-8 offset-2 mt-5 mb-5">
                            <div className="videoRegistrOne">
                                <ReactPlayer
                                    onDisablePIP={false}
                                    width="100%"
                                    height="440px"
                                    controls
                                    url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>
                            </div>
                        </div>
                        <div>
                            <p>
                                Всё обучение в Практикуме разбито на спринты. Спринт — это двухнедельный отрезок,
                                который построен
                                определённым образом: сначала вы изучаете теорию, потом практикуетесь в тренажёре,
                                затем делаете и сдаёте проект.
                            </p>
                            <p>
                                Проект проверяет, как вы усвоили навыки текущего спринта, поэтому в конце спринта проект
                                нужно отправить на проверку. Эта проверка называется код-ревью — реальный разработчик
                                (код-ревьюер) смотрит вашу работу и даёт комментарии: что нужно исправить, а что можно
                                сделать лучше.
                            </p>
                        </div>
                        <div className="col-12 mt-4">
                            <h2>Выберите один из вариантов ответа: </h2>
                        </div>
                        <div className="col-6 radioCheck">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Вариант №1
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault2"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Вариант номер 2
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault3"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Вариант номер номер 3
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault4"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                    Вариант любой но не первый
                                </label>
                            </div>
                        </div>
                        <div className="col-6 position-relative radioCheck">
                            <img src="./imagess/Group 33107.png" className="position-absolute"
                            style={{top:"-20px",right:"20px",width:"70%"}}/>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center mb-4 mt-3">
                            <Link to="/start" className="courseStartoneLink"><img src="./imagess/lestbutton.png"/>Вернутся к списску уроков</Link>
                            <Link to="/course_two" className="courseStartoneLink">Вперед<img src="./imagess/Vector.png"/></Link>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </InbrainLayout>
    );
};

export default CourseStartone;
