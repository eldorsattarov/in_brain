import React from 'react';
import InbrainLayout from "../InbrainLayout";
import HeaderKurs from "../HeaderKurs";
import Footer from "../Footer";

const StudentCard = (props) => {
    return (
        <InbrainLayout history={props.history}>

            <div className="studentcard">
                <HeaderKurs/>

                <div className="container">
                    <div className="row">

                        <div className="col-12 p-0">
                            <div className="container">
                                <div className="row studentcardrow">
   <div className="col-7">
       <div className="card">
           <div className="card-body">
               <img src="./imagess/"/>
           </div>
       </div>
   </div>
   <div className="col-1"></div>
   <div className="col-4"></div>
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
