import React from "react";
import './styles.css'
import { HomeComponent } from "./HomeComponent";


function MyTracker(){
    return (
        <div className="container">
            <h1>Track Expenditures</h1>
            <HomeComponent />
        </div>
    );
};

export default MyTracker;