import React, { useState } from "react";

export function Card({title,text})
{
    return (
        <div className="flex flex-col justify-center bg-slate-50"  style={{"width": "300px"}}>
            <img src="https://placehold.co/500x325" className="w-full"/>
            <div className="middiv flex flex-col gap-y-5 bg-white">
            <div className="title mx-auto">{title}</div>
            <div className="text mx-auto">{text}</div>
            </div>
            <div className="footdiv w-full flex flex-row justify-center"><button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">button</button></div>
        </div>
        );
}