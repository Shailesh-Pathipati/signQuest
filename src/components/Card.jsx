import React from "react";


export default function Card(props)
{
    return (
        <div className="card">
          <div className="top">
            <img className="circle-img" src={props.img} alt="avatar_img" />
          </div>
          <div className="bottom">
            <p className="info">{props.des}</p>
          </div>
        </div>
      );
}