'use client'
import ClearSession from "../Profile/ClearStirage";
import Delete from "../Profile/Cookies";
const LogOut = () => {
const cookiesdelete=()=>{
    Delete()
    ClearSession()
}
    return (
     
             <p className="navBtn cursor-pointer" onClick={cookiesdelete}>Log Out</p>
        
    );
};

export default LogOut;