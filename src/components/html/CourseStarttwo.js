import React from 'react';
import InbrainLayout from "../InbrainLayout";
import HeaderKurs from "../HeaderKurs";
import Footer from "../Footer";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
const CourseStarttwo = (props) => {
    return (
        <InbrainLayout history={props.history}>
            <div className="courseStarttwo">
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
                            <h2>Спасибо за ответ !!! </h2>
                        </div>
                        <div className="col-12 radioCheck">
                         <img src="./imagess/good deal 1.png"/>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center mb-4 mt-3">
                            <Link to="/course_one" className="courseStartoneLink"><img src="./imagess/lestbutton.png"/>Вернутся к списску уроков</Link>
                            <Link to="/course_you" className="courseStartoneLink">Вперед<img src="./imagess/Vector.png"/></Link>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </InbrainLayout>
    );
};

export default CourseStarttwo;
