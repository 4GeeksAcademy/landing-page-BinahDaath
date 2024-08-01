import React, { useState } from "react";
import {Card} from "./card.jsx";

let t="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sapiente tempore facere quam consectetur repudiandae accusamus velit nulla nam, maxime quidem quia odio blanditiis, consequatur dolor molestiae pariatur beatae sequi.";


export function Body()
{
    return (
        <div className="flex flex-row flex-wrap justify-between gap-x-0.5">
        <Card title="Card1 title" text={t}/>
        <Card title="Card2 title" text={t}/>
        <Card title="Card3 title" text={t}/>
        <Card title="Card4 title" text={t}/>
        <Card title="Card5 title" text={t}/>
        <Card title="Card6 title" text={t}/>
        <Card title="Card7 title" text={t}/>
        <Card title="Card8 title" text={t}/>
        <Card title="Card9 title" text={t}/>
        </div>
        );
}