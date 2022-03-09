import React, {useState} from 'react';
import InbrainLayout from "../InbrainLayout";
import HeaderKurs from "../HeaderKurs";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const StudentCard = (props) => {

    const [openModal, setopenmodal] = useState(false);

    const modalOpen = () => {
        setopenmodal(!openModal);
    }

    return (
        <InbrainLayout history={props.history}>

            <div className="studentcard">
                <HeaderKurs/>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="kartochka text-center">Карточка ученика</h2>
                        </div>
                        <div className="col-12 p-0">
                            <div className="container">
                                <div className="row studentcardrow">

                                    <div className="col-7">
                                        <div className="card studentCard">
                                            <div className="card-body">
                                                <div className="cardLeft">
                                                    <img src="./imagess/student1.png" className="imgone"/>
                                                    <div className="cardLeftdiv">
                                                        <span>10</span>
                                                        <img src="./imagess/student2.png"/>
                                                    </div>
                                                </div>
                                                <div className="cardRight">
                                                    <h4>Арифжанов Ойбек</h4>
                                                    <p>Возраст : <span>18 лет</span></p>
                                                    <p>Прошел обучение : <span className="span">Знакомство<img
                                                        src="./imagess/student9.png"/></span></p>
                                                    <p>Следующий курс : <span>HTML 5 -</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <img src="./imagess/student7.png" style={{width: "17px", height: "26px"}}/>
                                    </div>
                                    <div className="col-2 text-center">
                                        <div className="card studentCard2">
                                            <div className="card-body text-center">
                                                <div className="studentCard2inner">
                                                    <div><img src="./imagess/student3.png"/></div>
                                                    <span>19 из 19</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="mt-3 col2text">Знакомство</h4>
                                    </div>

                                    <div className="col-12">
                                        <h4 className="coursetext">Мои курсы: <span>Веб-разработчик с нуля до PRO</span>
                                        </h4>
                                    </div>

                                    <div className="col-12 mt-3 mb-4 courses">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="card studentCard3">
                                                    <div className="card-body text-center">
                                                        <div className="studentCard2inner">
                                                            <div><img src="./imagess/student4.png"/></div>
                                                            <span>19 из 19</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-7 d-flex align-items-center">
                                                <div className="studentCardtext">
                                                    <h4 className="coursetext">HTML 5</h4>
                                                    <p>
                                                        Вы научитесь верстать сайты на HTML и CSS, изучите JavaScript. И
                                                        сделаете первые проекты для портфолио.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-3 d-flex align-items-center">
                                                <div className="studentCardbuttons">
                                                    <div className="">
                                                        <button className="border-0 btn rounded-0 w-100">
                                                            <Link to="/course_html1" className="buttonlink1">Начать
                                                                обучение<img
                                                                    src="./imagess/student8.png"/></Link>
                                                        </button>
                                                    </div>
                                                    <div className="">
                                                        <button className="border-0 btn rounded-0 w-100"
                                                                onClick={() => modalOpen()}>
                                                            <Link to="/student_card" className="buttonlink2">Справочник HTML<img
                                                                src="./imagess/student8.png"/></Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-12 mt-3 mb-4 courses">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="card studentCard3">
                                                    <div className="card-body text-center">
                                                        <div className="studentCard2inner">
                                                            <div><img src="./imagess/student5.png"/></div>
                                                            <span>0 из 24</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-7 d-flex align-items-center">
                                                <div className="studentCardtext">
                                                    <h4 className="coursetext">CSS</h4>
                                                    <p>
                                                        Вы научитесь верстать сайты на HTML и CSS, изучите JavaScript. И
                                                        сделаете первые проекты для портфолио.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-3 d-flex align-items-center">
                                                <div className="studentCardbuttons">
                                                    <div className="">
                                                        <button className="border-0 btn rounded-0 w-100"
                                                                onClick={() => modalOpen()} disabled>
                                                            <Link to="/student_card" className="buttonlink1">Начать
                                                                обучение<img
                                                                    src="./imagess/student8.png"/></Link>
                                                        </button>
                                                    </div>
                                                    <div className="">
                                                        <button className="border-0 btn rounded-0 w-100" disabled>
                                                            <Link to="/" className="buttonlink2">Справочник CSS<img
                                                                src="./imagess/student8.png"/></Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-12 mt-3 mb-4 courses">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="card studentCard3">
                                                    <div className="card-body text-center">
                                                        <div className="studentCard2inner">
                                                            <div><img src="./imagess/student6.png"/></div>
                                                            <span>1 из 19</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-7 d-flex align-items-center">
                                                <div className="studentCardtext">
                                                    <h4 className="coursetext">JavaScript</h4>
                                                    <p>
                                                        Вы научитесь верстать сайты на HTML и CSS, изучите JavaScript. И
                                                        сделаете первые проекты для портфолио.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-3 d-flex align-items-center">
                                                <div className="studentCardbuttons">
                                                    <div className="">
                                                        <button className="border-0 btn rounded-0 w-100"
                                                                onClick={() => modalOpen()} disabled>
                                                            <Link to="/student_card" className="buttonlink1">Начать
                                                                обучение<img
                                                                    src="./imagess/student8.png"/></Link>
                                                        </button>
                                                    </div>
                                                    <div className="">
                                                        <button className="border-0 btn rounded-0 w-100" disabled>
                                                            <Link to="/" className="buttonlink2">Справочник JS<img
                                                                src="./imagess/student8.png"/></Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                    <Modal isOpen={openModal} className="modall"
                                           style={{position: "relative", top: "15%"}}>
                                        <div className="modalPage position-absolute"
                                             style={{width: "800px", left: "-25%"}}>
                                            <div className="card" style={{borderRadius: "20px"}}>
                                                <div className="card-body position-relative"
                                                     style={{padding: "30px 40px", paddingBottom: "60px"}}>

                                                    <img src="./imagess/student10.png" className="position-absolute"
                                                         style={{
                                                             width: "22px",
                                                             height: "22px",
                                                             top: "15px",
                                                             right: "15px",
                                                             cursor: "pointer"
                                                         }}
                                                         onClick={() => setopenmodal(!openModal)}/>

                                                    <h2 style={{
                                                        fontFamily: "Inter",
                                                        fontStyle: "normal",
                                                        fontWeight: "bold",
                                                        fontSize: "18px",
                                                        color: "#000000",
                                                        marginTop: "10px"
                                                    }}>
                                                        Чтобы разблокировать справочник начните обучение по
                                                        курсу:
                                                        <span style={{color: "#1C84FF",}}> HTML</span>
                                                    </h2>
                                                    <p style={{
                                                        fontFamily: "Inter",
                                                        fontStyle: "normal",
                                                        fontWeight: "normal",
                                                        fontSize: "14px",
                                                        color: "#000000",
                                                        marginTop: "30px"
                                                    }}>
                                                        Страницы сайтов собирают из элементов, как конструктор LEGO.
                                                        Текстовые блоки,
                                                        картинки, ссылки, кнопки — всё это элементы сайта. Элементы
                                                        описывают на языке HTML.
                                                        Любая веб-страница содержит код на этом языке и сохраняется в
                                                        HTML-файле. Когда вы
                                                        открываете сайт, именно файл с HTML-кодом первым делом
                                                        загружается в браузер.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>


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

export default StudentCard;
