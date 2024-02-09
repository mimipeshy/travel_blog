import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src="" alt="romania" className="card--image" />
            <h3>{props.title}</h3>
            <p>{props.location}</p>
            <p>{props.mapUrl}</p>
            <p>{props.startDate}</p>
            <p>{props.endDate}</p>
            <p>{props.description}</p>
            <p>{props.img}</p>
        </div>
    )
}