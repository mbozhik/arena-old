'use client'
import ClearSession from "../Profile/ClearStirage";
import Delete from "../Profile/Cookies";
const LogOut = () => {
const cookiesdelete=()=>{
    Delete()
    ClearSession()
}
    return (
     
             <span className="navBtn cursor-pointer" onClick={cookiesdelete}>Log Out</span>
        
    );
};

export default LogOut;