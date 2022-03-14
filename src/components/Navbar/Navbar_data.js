import { FaHome,FaServicestack } from 'react-icons/fa';
// import { FcAbout } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
export const SidebarData = [
    {
        title:'Home',
        path:'#',
        icons:<FaHome/>,
        // cName :'Nav_text'
    },
    {
        title:'About',
        path:'#',
        icons:<SiAboutdotme/>,
        // cName :'Nav_text'
    },
    {
        title:'Service',
        path:'#',
        icons:<FaServicestack/>,
        // cName :'Nav_text'
    },
    {
        title:'Contact',
        path:'#',
        icons:<MdContactPage/>,
        // cName :'Nav_text'
    }
]