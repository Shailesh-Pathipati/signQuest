import React from "react";
import { Link } from "react-router-dom";

import LearnData from "./learnasldata";
import VideoOrGif from "./learn";

export default function LearnMap({LearnData}){
        return (
        <div className="services-container2">
            {LearnData.map((service, index) => (
            <div className="service-column2" key={index}>
                <VideoOrGif
                imgSrc={service.imgSrc}
                altText={service.altText}
                heading={service.heading}
                linkTo={service.linkTo}
                gifDimensions={service.gifDimensions}
                />
            </div>
            ))}
        </div>
    );
}