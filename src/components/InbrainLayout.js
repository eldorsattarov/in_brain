import React, {useState} from 'react';
import {Link} from "react-router-dom";
// import {Accordion, AccordionHeader, AccordionItem} from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

const InbrainLayout = (props) => {
    console.log(props);

    const [openClose, setOpenclose] = useState(true);
    const openClosee = () => {
        setOpenclose(!openClose);
        console.log(openClose)
    }
    return (
        <div className="admin-layout">
            {/*left*/}
            {openClose == true ? <div className="admin-layout-left">
                <div className="container">
                    <div className="row">
                        <Accordion className="accordionMenu">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <div className="avatar">
                                                        <img src="./images/avatar.png"/>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="m-0 p-0">User name</p>
                                                        <span className="">balance: 99 000 сум</span>
                                                    </div>
                                                </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="avatarMenu">
                                        <Link to="/" type="button" className="btn">
                                            <img src="./imagess/icon.png"/>
                                        </Link>
                                        <Link to="/" type="button" className="btn">
                                            Начать обучение
                                            <img src="./imagess/Vector3.png"/>
                                        </Link>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordionMenu2">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Веб разработчик</p>
                                                </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                        <Accordion className="accordionMenu">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="actitle p-0 m-0">
                                                    <div className="d-flex align-items-center avatarDiv">
                                                        <p className="m-0">Приветствие</p>
                                                    </div>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>

                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    <Accordion className="accordionMenu">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">HTML</p>

                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                    <Link to="/start" className="text-decoration-none">Html</Link><br/>
                                    <Link to="/course_html1" className="text-decoration-none">Базовые элементы HTML</Link>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">CSS</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Java Script</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordionMenu2">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Справочник</p>
                                                </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                        <Accordion className="accordionMenu">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="actitle p-0 m-0">
                                                    <div className="d-flex align-items-center avatarDiv">
                                                        <p className="m-0">Приветствие</p>
                                                    </div>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>

                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    <Accordion className="accordionMenu">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">HTML</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">CSS</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Java Script</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordionMenu2">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Экспрес тесты</p>
                                                </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                        <Accordion className="accordionMenu">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="actitle p-0 m-0">
                                                    <div className="d-flex align-items-center avatarDiv">
                                                        <p className="m-0">Приветствие</p>
                                                    </div>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>

                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    <Accordion className="accordionMenu">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">HTML</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">CSS</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Java Script</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordionMenu2">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Новости</p>
                                                </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                        <Accordion className="accordionMenu">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="actitle p-0 m-0">
                                                    <div className="d-flex align-items-center avatarDiv">
                                                        <p className="m-0">Приветствие</p>
                                                    </div>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>

                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    <Accordion className="accordionMenu">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">HTML</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">CSS</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Java Script</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordionMenu2">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Блог</p>
                                                </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                        <Accordion className="accordionMenu">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon className="iconss"/>}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="actitle p-0 m-0">
                                                    <div className="d-flex align-items-center avatarDiv">
                                                        <p className="m-0">Приветствие</p>
                                                    </div>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <Link to="/brain" className="text-danger"><span>brain</span></Link>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    <Accordion className="accordionMenu">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">HTML</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">CSS</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="accordionMenu" disabled>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon className="iconss"/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle p-0 m-0">
                                                <div className="d-flex align-items-center avatarDiv">
                                                    <p className="m-0">Java Script</p>
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>



                        {/*<Link to="/" className="text-danger"><span>home</span></Link><br/>*/}
                        {/*<Link to="/brain" className="text-danger"><span>brain</span></Link>*/}
                    </div>
                </div>
            </div>
                :
                <div className="admin-layout-left2">
                <div className="burger" onClick={() => openClosee()}>
                    <img src="./images/burger.png"/>
                </div>
            </div>}


          {/*right*/}
            {openClose == true ? <div className="admin-layout-right">
                <div className="openClose" onClick={() => openClosee()}>
                    <img src="./images/Group 33004.png"/>
                </div>
                <div className="col-12">{props.children}</div>

            </div> : <div className="admin-layout-right2">
                <div className="openClose" onClick={() => openClosee()}>
                    <img src="./images/right.png"/>
                </div>
                <div className="col-12">{props.children}</div>

            </div>}
        </div>
    );
};
export default InbrainLayout;
