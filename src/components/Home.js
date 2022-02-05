import React, {useState, useEffect} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {updateState, getHome} from "../redux/action/homeAction";

const Home = (props) => {

    useEffect(() => {

        props.getHome();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {props.dataa.map((item, index) => {
                    return (
                        <div className="mt-3" key={item.id}>
                            <h6>{item.id}</h6>
                            <img src={item.image} className="w-100" style={{height:"150px"}}/>
                            <h6>{item.text}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dataa: state.home.dataa
    }
}
export default connect(mapStateToProps, {updateState, getHome})(Home);
