import React from 'react';
import {LinkProps,Link} from "react-router-dom";
const Dom = () => {
    return (
        <div className="container p-3 bg-danger">
           <div className="row ">
               <Link to="/home" className="">Home</Link>
               <Link to="/main" className="ml-2">Main</Link>
           </div>
        </div>
    );
};

export default Dom;
