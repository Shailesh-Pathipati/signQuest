import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Heading from "./Header";
import Footer from "./Footer";


export default function App()
{
    return <div>
        <Heading/>
        <section id="title">

            <div class="container-fluid">
                <div class="row">
                <div class="col-lg-10">
                    <h1 style={{ fontSize: '80px' }}>Expand Your Communication Skills Today.</h1>
                </div>
                    <h2>Learn sign language and improve communication with SignQuest's innovative education for the deaf and dumb.</h2>

                </div>
             </div>
        </section>
        {/* all other components wil be here. */}
        
        <footer><Footer/></footer>
    </div>
}




