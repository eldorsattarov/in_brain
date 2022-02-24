import React from 'react';
import {Link} from "react-router-dom";
import InbrainLayout from "./InbrainLayout";

const Header = (props) => {
    return (
        <InbrainLayout history={props.history}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        header page
                    </div>
                </div>
            </div>
        </InbrainLayout>
    );
};

export default Header;
