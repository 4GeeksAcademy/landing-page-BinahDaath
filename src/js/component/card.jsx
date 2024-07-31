import React, { useState } from "react";

export function Card()
{
    return (
        <div className="flex flex-col"  style={{"width": "300px"}}>
            <img src="https://placehold.co/500x325" className="w-full object-fill h-4"/>
            <div className="middiv flex flex-col justify-items-center">
            <div className="title m-0">title</div>
            <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sapiente tempore facere quam consectetur repudiandae accusamus velit nulla nam, maxime quidem quia odio blanditiis, consequatur dolor molestiae pariatur beatae sequi.</div>
            </div>
            <div className="footdiv"><button>button</button></div>
        </div>
        );
}