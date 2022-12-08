import  {FaHome,FaDatabase,FaCubes,FaMapMarkerAlt,FaUsers,FaCog,FaSignInAlt}  from "react-icons/fa";

export const Nav=[
    {
        yoz:"Dashboard",
        icons: <FaHome/>,
        path:"/dashboard",
        ok:false ,
        ok1:false,
    },
    {
        yoz:" Nested Menu ",
        icons: <FaDatabase/>,
        ok:true
    },
    {
        yoz:"Data Visualization",
        path: "/data",
        icons: <FaCubes/>,
        ok:false,
        harf:"9",
        ok1:true
    },
    {
        yoz:"Maps",
        icons: <FaMapMarkerAlt/>,
        ok:false,
        harf:"42",
        ok1:true,
        path:"/maps"
    },
    {
        yoz:"Manage Users",
        icons: <FaUsers/>,
        ok:false,
        harf:"NEW",
        ok1:true,
        path:"/users"
    },
    {
        yoz:"Preferences",
        path: "/preferences",
        icons: <FaCog/>,
        ok:false,
        ok1:false,
    }
]
export const Nav2=[

    {
        ichi:"Aenean"
    },
    {
        ichi:"Pellentesque"
    },
    {
        ichi:"Congue"
    },
    {
        ichi:"Interdum"
    },
    {
        ichi:"Facilisi"
    }
]
export const Nav3=[
    {
        yoz:"Sign Out",
        icons: <FaSignInAlt/>,
        path:"/singout",
        ok:false,
        ok1:false,
    }
]