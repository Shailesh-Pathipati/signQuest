import React from "react";


export default function Footer()
{
    const currentYear = new Date().getFullYear();
    return <div>
        <p>Copyright {currentYear}</p>
        </div>
};