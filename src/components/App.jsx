import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Heading from "./Header";
import Footer from "./Footer";


export default function App()
{
    return <div>
        <Heading/>

        {/* all other components wil be here. */}


        <footer><Footer/></footer>
    </div>
}

