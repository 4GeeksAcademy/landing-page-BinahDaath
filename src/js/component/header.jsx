import React, { useState } from "react";

export function Header()
{
    return (
        <div className="flex flex-col bg-slate-50" >
            <div className="title text-xl">A Warm Welcome!</div>
            <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam, ratione ducimus, velit alias accusantium corrupti vel animi accusamus distinctio architecto assumenda inventore aliquam, rem corporis sunt. Vel, sapiente dolorum?</div>
            <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">button</button></div>
        </div>
        );
}