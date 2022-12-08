import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";

export const Pinput = [
    {
        id: "1",
        name: "Input with success",
        bag: "#FFFFFF",
        color: "#3C763D",
        border: "1px solid #3C763D",
        icons: <FaCheck />,
    },
    {
        id: "2",
        name: "Input with warning",
        bag: "#FFFFFF",
        color: "#8A6D3B",
        border: "1px solid #8A6D3B",
        icons: <FaCheck />,
    },
    {
        id: "3",
        name: "Input with error",
        bag: "#FFFFFF",
        color: "#A94491",
        border: "1px solid #A94491",
        icons: <FaTimes />,
    },

]


export const CHeck = [
    {
       id:"1",
       name:"HTML format"
    },
    {
        id:"2",
        name:"Plain text"
     },
     {
        id:"2",
        name: "Rich text",
        
     }
]

export const Scheck = [
    {
       id:"1",
       name:" Server status"
    },
    {
        id:"2",
        name:" Memember status"
     },
     {
        id:"2",
        name: "Expired members",
        
     }
]

export const Rcheck = [
    {
       id:"1",
       name:" Bootstrap"
    },
    {
        id:"2",
        name:"Foundation"
     },
     {
        id:"2",
        name: "Skeleton",
        
     }
]
export const Pbutton = [
    {
       id:"1",
       name:"Update",
       color:"#fff",
       bg:"#428bca",
       br:"#357ebd"
    },
    {
        id:"2",
        name:"Reset",
        color:"#333",
        bg:"#fff",
        border:"red"
     }
]