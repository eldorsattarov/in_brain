import React,{useState,useEffect} from 'react';
import InbrainLayout from "./InbrainLayout";
import useCollapse from "react-collapsed";
import {Accordion, Collapse, Button, Card,Row,Col} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
const Home = (props) => {

    return (
        <InbrainLayout history={props.history}>
            <div>
                <Header/>
                <Footer/>
            </div>
        </InbrainLayout>
    );
};

export default Home;
