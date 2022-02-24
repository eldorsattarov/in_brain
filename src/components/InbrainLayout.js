import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Accordion, AccordionHeader, AccordionItem} from "reactstrap";

const InbrainLayout = (props) => {
    console.log(props);

    const [openClose, setOpenclose] = useState(true);
    const openClosee = () => {
        setOpenclose(!openClose);
        console.log(openClose)
    }
    return (
        <div className="admin-layout">
            {openClose==true ? <div className="admin-layout-left">
                {/*<div className="openClose">*/}
                {/*    <img src="./images/Group 33004.png" onClick={()=>openClosee()}/>*/}
                {/*</div>*/}
                <div className="container">
                    <div className="row">
                        <Link to="/" className="text-danger"><span>home</span></Link><br/>
                        <Link to="/header" className="text-danger"><span>header</span></Link>
                    </div>
                </div>
            </div> : <div className="admin-layout-left2">
                {/*<div className="openClose">*/}
                {/*    <img src="./images/Group 33004.png" onClick={()=>openClosee()}/>*/}
                {/*</div>*/}
                <div className="container d-none">
                    <div className="row">
                        <Link to="/" className="text-danger"><span>home</span></Link><br/>
                        <Link to="/header" className="text-danger"><span>header</span></Link>
                    </div>
                </div>
            </div>}

            {openClose==true ? <div className="admin-layout-right">
                <div className="openClose"  onClick={() => openClosee()}>
                    <img src="./images/Group 33004.png"/>
                </div>
                <div className="col-12">{props.children}</div>

            </div> : <div className="admin-layout-right2">
                <div className="openClose" onClick={() => openClosee()}>
                    <img src="./images/right.png" />
                </div>
                <div className="col-12">{props.children}</div>

            </div>}
        </div>
    );
};
export default InbrainLayout;
